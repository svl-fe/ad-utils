import flattenSubTreeBy from './index';

describe('flattenSubTreeBy', () => {
  it('flatten array tree', () => {
    const treeData = [
      {
        name: 'communication',
        display_name: '通信',
        children: [
          {
            name: 'feishu',
            display_name: '飞书',
          },
          {
            name: 'dingding',
            display_name: '钉钉',
          },
        ],
      },
      {
        name: 'cloud',
        display_name: '云盘',
        children: [
          {
            name: 'baidu',
            display_name: '百度',
          },
        ],
      },
    ];

    const results = [
      { value: 'feishu', label: '飞书' },
      { value: 'dingding', label: '钉钉' },
      { value: 'baidu', label: '百度' },
    ];

    expect(flattenSubTreeBy(treeData, { value: 'name', label: 'display_name' })).toEqual(results);
  });

  it('flatten object tree', () => {
    const treeData = {
      name: 'communication',
      display_name: '通信',
      children: [
        {
          name: 'feishu',
          display_name: '飞书',
        },
        {
          name: 'dingding',
          display_name: '钉钉',
        },
      ],
    };

    const results = [
      { value: 'feishu', label: '飞书' },
      { value: 'dingding', label: '钉钉' },
    ];

    expect(flattenSubTreeBy(treeData, { value: 'name', label: 'display_name' })).toEqual(results);
  });
});
