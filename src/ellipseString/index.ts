/**
 * 通过Unicode码获取固定长度的字符串内容
 * 若字符串过长则返回包含...的数据
 * unicode 码查看地址 https://unicode-table.com/cn/
 * @param param0
 *  - @param str string 要处理的字符串数据
 *  - @param size 若字符串都为英文时的长度
 *  - @param unit 中文与英文的比例，默认为2
 *  - @param singleCodeCheck 单字节判断方法，默认值 (code: number) => (code >= 0x0001 && code <= 0x007e) || (0xff60 <= code && code <= 0xff9f);
 * @returns {data: string, dot: boolean}
 */
export const getLengthByUnicode = ({
  text,
  size,
  unit = 2,
  singleCodeCheck = singleCodeCheckF,
}: {
  text: string;
  size: number;
  unit?: number;
  singleCodeCheck?: (code: number) => boolean;
}) => {
  let totalCount = 0;
  let newStr = '';
  for (let i = 0, len = text.length; i < len; i++) {
    const c = text.charCodeAt(i);
    if (singleCodeCheck(c)) {
      totalCount++;
    } else {
      totalCount += unit;
    }
    if (totalCount <= size) {
      newStr = text.substring(0, i + 1);
    } else {
      return { data: newStr + '...', dot: true };
    }
  }
  return { data: newStr, dot: false };
};

export const singleCodeCheckF = (code: number) =>
  (code >= 0x0001 && code <= 0x007e) || (0xff60 <= code && code <= 0xff9f);
