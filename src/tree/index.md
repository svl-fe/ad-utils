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

示例: 借助原始树结构数据，将数组转换成嵌套对象

```tsx
import React from 'react';
import { arrayToNestObjByTree } from '@svl-ad/ad-utils';

let dataList = ['feishu', 'dingding', 'baidu'];
let treeData = [
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

let output = arrayToNestObjByTree(dataList, treeData);

console.log('output', output);

export default () => {
  return <p>arrayToNestObjByTree(array, treeList)</p>;
};
```
