import _ from 'lodash';
import type { TreeNode } from '../tree';

/**
 * 借助原始树结构数据，将数组转换成嵌套对象
 */
function arrayToNestObjByTree(dataList: string[], treeData: TreeNode[]) {
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

export default arrayToNestObjByTree;
