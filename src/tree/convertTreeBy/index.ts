import _ from 'lodash';
import { DkTpgTreeNode, DkTpgTreeNodeItem } from '../tree';

/**
 * 根据指定字段对类似树结构数据进行转换
 *
 * @param data 树结构数据(对象或对象数组)
 * @param keyMap 键值映射
 */
function convertTreeBy(data: DkTpgTreeNode | DkTpgTreeNode[], keyMap: Record<string, string>) {
  const _data = _.clone(data);

  // 递归遍历
  const recursiveFn = (item: DkTpgTreeNodeItem) => {
    const values = Object.keys(keyMap).reduce<DkTpgTreeNodeItem>((prev, current) => {
      prev[keyMap[current]] = item[current];

      delete item[current];
      return prev;
    }, {});

    if (item.children) {
      item.children = convertTreeBy(item.children, keyMap);
    }

    return { ...values, ...item };
  };

  if (_data instanceof Array) {
    return _data.map(recursiveFn);
  }

  if (Object.prototype.toString.call(_data) === '[object Object]') {
    return recursiveFn(_data);
  }

  return _data;
}

export default convertTreeBy;
