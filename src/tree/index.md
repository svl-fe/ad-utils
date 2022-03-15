---
nav:
  title: 方法
  path: /components
group:
  path: /components
  title: 树
  order: 1
---

## arrayToNestObjByTree

借助树结构数据，将数组转换成嵌套对象

> 格式：arrayToNestObjByTree(array, treeData)

### 参数说明

| 参数     | 说明           | 类型                            | 默认值 | 是否必传 | 版本 |
| -------- | -------------- | ------------------------------- | ------ | -------- | ---- |
| array    | 数组           | string[]                        |        | 是       |      |
| treeData | treeNodes 数据 | array<{value, title, children}> |        | 是       |      |

### 示例

```tsx
import React from 'react';
import ShowComp from '../components/ShowComp';
import { arrayToNestObjByTree } from '@svl-ad/ad-utils';

export default () => {
  const argList = {
    array: '待处理数组',
    treeNodes: 'treeNodes 数据',
  };

  const example = `
arrayToNestObjByTree(
  ['feishu', 'dingding'],
  [
    {
      value: 'communication',
      title: '通信',
      children: [
        { value: 'feishu', title: '飞书' },
        { value: 'dingding', title: '钉钉' },
      ],
    },
  ],
);
/*** 
 * 输出
 * 
 * {
 *     "communication": ["feishu", "dingding"],
 *  }
 */
  `;

  return <ShowComp argList={argList} example={example} />;
};
```
