import _ from 'lodash';

export interface ITreeDataItem {
  value: string;
  title: string;
}

export interface ITreeData extends ITreeDataItem {
  children?: ITreeDataItem[];
}

/**
 * 借助原始树结构数据，将数组转换成嵌套对象
 */
function arrayToNestObjByTree(dataList: string[], treeData: ITreeData[]) {
  const obj: Record<string, string[]> = {};

  treeData.map((treeItem) => {
    const key = treeItem.value;

    obj[key] = [];
    if (treeItem?.children) {
      _.map(treeItem.children, (item) => {
        if (dataList.includes(item.value)) {
          obj[key].push(item.value);
        }
      });
    }
  });

  return obj;
}

export { arrayToNestObjByTree };
