---
nav:
  title: 方法
  path: /components
group:
  path: /components
  title: 树
  order: 3
---

## flattenSubTreeBy

根据键值对将树形数据的子树拍平成一级数组

> 格式：convertTreeBy(data, keyMap)

### 参数说明

| 参数 | 说明 | 类型 | 默认值 | 是否必传 | 版本 |
| --- | --- | --- | --- | --- | --- |
| data | 对象数组或对象(类似 treeNodes，含 children 字段 ) | object[]\| object |  | 是 |  |
| keyMap | 键值映射 | object |  | 是 |  |

### 示例

```tsx
import React from 'react';
import ShowComp from '../../components/ShowComp';
import { arrayToNestObjByTree } from '@svl-ad/ad-utils';

export default () => {
  const example = `
/**
 * 示例: 将 data 里面的子树数据按照指定字段拍平成一级数组
 **/ 
const data =  [
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

const keyMap = { value: 'name', label: 'display_name' }

flattenSubTreeBy(data, keyMap);
/*** 
  * 输出
  * 
  * [
  *   { value: 'feishu', label: '飞书' },
  *   { value: 'dingding', label: '钉钉' },
  *   { value: 'baidu', label: '百度' },
  * ];
 */
  `;
  return <ShowComp example={example} />;
};
```
