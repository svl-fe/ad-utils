---
nav:
  title: 方法
  path: /components
group:
  path: /tree
  title: 树
  order: 1
---

## convertTreeBy

根据指定字段对类似树结构数据进行转换

> 格式：convertTreeBy(data, keyMap)

### 参数说明

| 参数 | 说明 | 类型 | 默认值 | 是否必传 | 版本 |
| --- | --- | --- | --- | --- | --- |
| data | 对象数组或对象(类似 treeNodes，含 children 字段 ) | object[] \| object |  | 是 |  |
| keyMap | 键值映射 | object |  | 是 |  |

### 示例

```tsx
import React from 'react';
import ShowComp from '../../components/ShowComp';

export default () => {
  const example = `
/**
 * 示例： 将数据 data 里面的字段 name 、display_name 替换成 key 、title 字段
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

const keyMap = { name: 'key', display_name: 'title' }

convertTreeBy(data, keyMap);
/*** 
  * 输出
  * 
  * [
  *       {
  *         key: 'communication',
  *         title: '通信',
  *         children: [
  *           {
  *             key: 'feishu',
  *             title: '飞书',
  *           },
  *           {
  *             key: 'dingding',
  *             title: '钉钉',
  *           },
  *         ],
  *       },
  *       {
  *         key: 'cloud',
  *         title: '云盘',
  *         children: [
  *           {
  *             key: 'baidu',
  *             title: '百度',
  *           },
  *         ],
  *       },
  *  ];
 */
  `;
  return <ShowComp example={example} />;
};
```
