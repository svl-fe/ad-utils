import arrayToNestObjByTree from './index';

describe('arrayToNestObjByTree', () => {
  it('should be equal', () => {
    const dataList = ['feishu', 'dingding', 'baidu'];
    const treeList = [
      {
        value: 'communication',
        title: '通信',
        children: [
          {
            value: 'feishu',
            title: '飞书',
          },
          {
            value: 'dingding',
            title: '钉钉',
          },
        ],
      },
      {
        value: 'cloud',
        title: '云盘',
        children: [
          {
            value: 'baidu',
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
