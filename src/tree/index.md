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
      key: 'communication',
      title: '通信',
      children: [
        { key: 'feishu', title: '飞书' },
        { key: 'dingding', title: '钉钉' },
      ],
    },
  ],
);
/*** 
 *                                      {
 *  ['feishu', "dingding"]    =>            "communication": ["feishu", "dingding"],
 *                                      }
 */
  `;

  return <ShowComp argList={argList} example={example} />;
};
```
