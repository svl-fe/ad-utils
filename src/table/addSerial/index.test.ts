import addSerial from './index';

describe('addSerial', () => {
  it('should be equal', () => {
    const tableData = [
      {
        value: 'feishu',
        title: '飞书',
      },
      {
        value: 'dingding',
        title: '钉钉',
      },
      {
        value: 'weChat',
        title: '微信',
      },
    ];
    const pagination = { page: 1, limit: 10 };

    const results = [
      {
        __serial: 1,
        value: 'feishu',
        title: '飞书',
      },
      {
        __serial: 2,
        value: 'dingding',
        title: '钉钉',
      },
      {
        __serial: 3,
        value: 'weChat',
        title: '微信',
      },
    ];

    expect(addSerial(tableData, pagination)).toEqual(results);
  });
});
