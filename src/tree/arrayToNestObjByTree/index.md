---
nav:
  title: 方法
  path: /components
group:
  path: /tree
  title: 树
  order: 2
---

## arrayToNestObjByTree

借助树结构数据，将数组转换成嵌套对象

> 格式：arrayToNestObjByTree(selectedList, treeData)

### 参数说明

| 参数         | 说明           | 类型                            | 默认值 | 是否必传 | 版本 |
| ------------ | -------------- | ------------------------------- | ------ | -------- | ---- |
| selectedList | 选中的数组     | string[]                        |        | 是       |      |
| treeData     | treeNodes 数据 | array<{value, title, children}> |        | 是       |      |

### 示例

```tsx
import React from 'react';
import ShowComp from '../../components/ShowComp';

export default () => {
  const example = `
/**
 * 示例： 将treeData数据(嵌套两层) 按照 selectedList 转换成对象
 **/
const selectedList =  ['feishu', 'dingding']
const treeData = [
  {
    value: 'communication',
    title: '通信',
    children: [
      { value: 'feishu', title: '飞书' },
      { value: 'dingding', title: '钉钉' },
      { value: 'weChat', title: '微信' },
    ],
  },
]

arrayToNestObjByTree(selectedList, treeData)
/*** 
 * 输出
 * 
 * {
 *     "communication": ["feishu", "dingding"],
 *  }
 */
  `;

  return <ShowComp example={example} />;
};
```
