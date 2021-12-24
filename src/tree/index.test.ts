import { arrayToNestObjByTree } from './index';

describe('树型处理方法', () => {
  it('arrayToNestObjByTree', () => {
    let dataList = ['feishu', 'dingding', 'baidu'];
    let treeList = [
      {
        key: 'communication',
        title: '通信',
        children: [
          {
            key: 'feishu',
            title: '飞书',
          },
          {
            key: 'dingding',
            title: '钉钉',
          },
        ],
      },
      {
        key: 'cloud',
        title: '云盘',
        children: [
          {
            key: 'baidu',
            title: '百度',
          },
        ],
      },
    ];

    let results = {
      communication: ['feishu', 'dingding'],
      cloud: ['baidu'],
    };

    expect(arrayToNestObjByTree(dataList, treeList)).toEqual(results);
  });
});
