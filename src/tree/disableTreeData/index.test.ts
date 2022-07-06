import disableTreeData from './index';

describe('disableTreeData', () => {
  it('should be equal', () => {
    const treeData = [
      {
        value: 'communication',
        title: '通信',
        children: [
          { type: 'checkok', value: 'feishu', title: '飞书' },
          { type: 'checkDisable', value: 'dingding', title: '钉钉' },
          { type: 'checkok', value: 'weChat', title: '微信' },
        ],
      },
      {
        value: 'email',
        title: '邮箱',
        children: [
          { type: 'checkok', value: 'qq.com', title: 'QQ邮箱' },
          { type: 'checkDisable', value: '163.com', title: '网易邮箱' },
          { type: 'checkok', value: 'gmail.com', title: '谷歌邮箱' },
        ],
      },
    ];
    const check = (item: any) => item.type === 'checkok';

    const results = {
      data: [
        {
          value: 'communication',
          title: '通信',
          disabled: false,
          children: [
            { type: 'checkok', disabled: false, value: 'feishu', title: '飞书' },
            { type: 'checkDisable', disabled: true, value: 'dingding', title: '钉钉' },
            { type: 'checkok', disabled: false, value: 'weChat', title: '微信' },
          ],
        },
        {
          value: 'email',
          title: '邮箱',
          disabled: false,
          children: [
            { type: 'checkok', disabled: false, value: 'qq.com', title: 'QQ邮箱' },
            { type: 'checkDisable', disabled: true, value: '163.com', title: '网易邮箱' },
            { type: 'checkok', disabled: false, value: 'gmail.com', title: '谷歌邮箱' },
          ],
        },
      ],
      flag: true,
    };

    expect(
      disableTreeData({
        data: treeData,
        check,
        labelKey: 'title',
        searchKey: 'title',
      }),
    ).toEqual(results);
  });
});
