import _ from 'lodash';
import { DkTpgTreeNode } from '../tree';

/**
 * 根据键值对将树形数据拍平成一级数组
 *
 * @param treeData 树形数据(类似TreeNode)
 * @param keyMap 键值映射
 */
const _flattenTreeArrayBy = (treeData: DkTpgTreeNode[], keyMap: Record<string, string>) => {
  let new_array: Record<string, string>[] = [];

  treeData.map((treeItem) => {
    let array_item: Record<string, string> = {};

    Object.keys(keyMap).map((key) => {
      const value = keyMap[key];

      if (value && treeItem.hasOwnProperty(value)) {
        array_item[key] = treeItem[value];
      }
    });

    if (JSON.stringify(array_item) !== '{}') {
      new_array.push(array_item);
    }

    if (treeItem.children) {
      new_array = [...new_array, ..._flattenTreeArrayBy(treeItem.children, keyMap)];
    }
  });

  return new_array;
};

/**
 * 根据键值对将树形数据的子树拍平成一级数组
 *
 * @param treeData 树形数据(类似TreeNode)
 * @param keyMap 键值映射
 */
const flattenSubTreeBy = (
  treeData: DkTpgTreeNode | DkTpgTreeNode[],
  keyMap: Record<string, string>,
) => {
  let new_array: Record<string, string>[] = [];

  if (Object.prototype.toString.call(treeData) === '[object Array]') {
    (treeData as DkTpgTreeNode[]).map((parentItem) => {
      if (parentItem.children) {
        new_array = [...new_array, ..._flattenTreeArrayBy(parentItem.children, keyMap)];
      }
    });
  }

  if (Object.prototype.toString.call(treeData) === '[object Object]') {
    if ((treeData as DkTpgTreeNode).children) {
      // @ts-ignore
      new_array = _flattenTreeArrayBy(treeData.children, keyMap);
    }
  }

  return new_array;
};

export default flattenSubTreeBy;
