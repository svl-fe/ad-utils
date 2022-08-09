import React from 'react';

export interface BaseOptionType {
  disabled?: boolean;
  [name: string]: any;
}
type Options = {
  /** treeNodes 数据 */
  data: BaseOptionType[];
  /** 搜索时的字段名，默认值为 label */
  searchKey?: string;
  /** 展示字段名，默认值为 label */
  labelKey?: string;
  /** children 字段名，默认值为 children */
  childrenKey?: string;
  /** 是否可以冒泡，即子节点满足条件，父节点也满足，默认值为true */
  bubbling?: boolean;
  /** 校验当前数据是否满足可选中条件，入参为当前节点数据值，满足返回true，不满足返回false */
  check: (params: BaseOptionType) => boolean;
  /** 是否需要重新渲染 label，入参为当前当前节点数据值 */
  renderWarn?: (params: BaseOptionType) => React.ReactNode;
};
/**
 * 将 treeData 按照传入的check规则，增加是否可以选中属性（disabled）
 * @param options Options
 * @returns {data: BaseOptionType[], flag: boolean} flag:true 为可以选中，false为不可选中
 */
function disableTreeData(options: Options): { data: BaseOptionType[]; flag: boolean } {
  const {
    data,
    labelKey = 'label',
    childrenKey = 'children',
    searchKey = 'label',
    bubbling = true,
    renderWarn,
    check,
  } = options;
  let returnFlag = false;
  for (let index = 0, len = data.length; index < len; index++) {
    let flag = false;
    const element = data[index];
    const { [childrenKey]: children, [labelKey]: display_name } = element;
    element[searchKey] = display_name;
    if (check && check(element)) {
      flag = true;
      returnFlag = true;
    }
    if (children?.length) {
      const { data: newData, flag: newFlag } = disableTreeData({ data: children, check, bubbling });
      element.children = newData;
      if (newFlag && bubbling) {
        flag = true;
        returnFlag = true;
      }
    }
    element.disabled = !flag;
    if (!flag && renderWarn) {
      element[labelKey] = renderWarn(element);
    }
  }
  return {
    data,
    flag: returnFlag,
  };
}

export default disableTreeData;
