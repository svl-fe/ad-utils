import convertTreeBy from './index';

describe('convertTreeBy', () => {
  it('convert array tree', () => {
    const data = [
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

    expect(convertTreeBy(data, { name: 'key', display_name: 'title' })).toEqual(results);
  });

  it('convert object tree', () => {
    const data = {
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

    const results = {
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
    };

    expect(convertTreeBy(data, { name: 'key', display_name: 'title' })).toEqual(results);
  });
});
