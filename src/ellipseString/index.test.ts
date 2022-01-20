import { getLengthByUnicode } from './index';

describe('通过Unicode码获取固定长度的字符串内容', () => {
  it('getLengthByUnicode test size', () => {
    const data1 = {
      text: '测试中文ceshizhongwen',
      size: 10,
      unit: 2,
    };
    const result1 = {
      data: '测试中文ce...',
      dot: true,
    };

    expect(getLengthByUnicode(data1)).toEqual(result1);
  });
  it('getLengthByUnicode test unit', () => {
    const dataT = {
      text: '测试中文ceshizhongwen',
      size: 10,
      unit: 1.5,
    };
    const resultT = {
      data: '测试中文cesh...',
      dot: true,
    };

    expect(getLengthByUnicode(dataT)).toEqual(resultT);
  });
  it('getLengthByUnicode test singleCodeCheck', () => {
    const dataT = {
      text: '测试中文ceshizhongwen',
      size: 10,
      unit: 1.5,
      // 中文也当作单字符
      singleCodeCheck: () => true,
    };
    const resultT = {
      data: '测试中文ceshiz...',
      dot: true,
    };

    expect(getLengthByUnicode(dataT)).toEqual(resultT);
  });
});
