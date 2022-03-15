import { arrayToNestObjByTree } from './index';

describe('arrayToNestObjByTree', () => {
  it('should be equal', () => {
    const dataList = ['feishu', 'dingding', 'baidu'];
    const treeList = [
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

    const results = {
      communication: ['feishu', 'dingding'],
      cloud: ['baidu'],
    };

    expect(arrayToNestObjByTree(dataList, treeList)).toEqual(results);
  });
});
