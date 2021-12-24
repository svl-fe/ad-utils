import _ from 'lodash';

export interface ITreeDataItem {
  key: string;
  title: string;
}

export interface ITreeData extends ITreeDataItem {
  children?: ITreeDataItem[];
}

/**
 * 借助原始树结构数据，将数组转换成嵌套对象
 *
 * @param dataList
 * @param orgData
 * @returns
 *
 * 示例：
 *
 *                                      {
 *                                        "communication": ["feishu", "dingding"],
 *  ['feishu', "dingding", 'baidu'] =>    "cloud": ["baidu"],
 *                                      }
 */

function arrayToNestObjByTree(dataList: string[], treeData: ITreeData[]) {
  const obj: Record<string, string[]> = {};

  treeData.map((treeItem) => {
    const key = treeItem.key;

    obj[key] = [];
    if (treeItem?.children) {
      _.map(treeItem.children, (item) => {
        if (dataList.includes(item.key)) {
          obj[key].push(item.key);
        }
      });
    }
  });

  return obj;
}

export { arrayToNestObjByTree };
