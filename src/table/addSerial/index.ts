import type { Pagination } from '../table';

/**
 * 给表格数据增加序号字段 __serial
 */
function addSerial<T>(data: T[], pagination: Pagination = { page: 1, limit: 10 }) {
  const { page, limit } = pagination;
  const _data: (T & { __serial: number })[] = [];

  if (page < 1) {
    throw new Error('当前页数不能小于1');
  }

  if (!limit) {
    throw new Error('参数limit不能为空');
  }

  data.map((item, index) => {
    _data.push({
      ...item,
      __serial: (page - 1) * limit + index + 1,
    });

    return item;
  });

  return _data;
}

export default addSerial;
