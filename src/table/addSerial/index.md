---
nav:
  title: 方法
  path: /components
group:
  path: /table
  title: 表格
  order: 1
---

## addSerial

给表格数据增加序号字段 \_\_serial

> 格式：addSerial(tableData, pagination)

### 参数说明

| 参数       | 说明     | 类型                  | 默认值              | 是否必传 | 版本 |
| ---------- | -------- | --------------------- | ------------------- | -------- | ---- |
| tableData  | 表格数据 | array[]               |                     | 是       |      |
| pagination | 表格页码 | object<{page, limit}> | {page: 1,limit: 10} | 是       |      |

### 示例

```tsx
import React from 'react';
import ShowComp from '../../components/ShowComp';

export default () => {
  const example = `
/**
 * 示例： 给表格数据添加序列号字段
 **/
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


addSerial(tableData, pagination])
/*** 
 * 输出
 * 
 * [
 *    {
 *       __serial: 1,
 *       value: 'feishu',
 *       title: '飞书',
 *     },
 *      {
 *       __serial: 2,
 *       value: 'dingding',
 *       title: '钉钉',
 *     },
 *     {
 *       __serial: 3,
 *       value: 'weChat',
 *       title: '微信',
 *     },
 *   ];
 */
  `;

  return <ShowComp example={example} />;
};
```
