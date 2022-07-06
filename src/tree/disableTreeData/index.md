---
nav:
  title: 方法
  path: /components
group:
  path: /tree
  title: 树
  order: 2
---

## disableTreeData

将 treeData 按照传入的 check 规则，增加是否可以选中属性（disabled）

> 格式：disableTreeData({data, check})

### 参数说明

| 参数 | 说明 | 类型 | 默认值 | 是否必传 | 版本 |
| --- | --- | --- | --- | --- | --- |
| data | treeNodes 数据 | BaseOptionType[] |  | 是 |  |
| searchKey | 搜索时的字段名 | string | label | 否 |  |
| labelKey | 展示字段名 | string | label | 否 |  |
| childrenKey | children 字段名 | string | children | 否 |  |
| check | 校验当前数据是否满足可选中条件，入参为当前节点数据值，满足返回 true，不满足返回 false | (params: BaseOptionType) => boolean |  | 是 |  |
| renderWarn | 是否需要重新渲染 label，入参为当前当前节点数据值 | (params: BaseOptionType) => React.ReactNode |  | 否 |  |

```ts
interface BaseOptionType {
  disabled?: boolean;
  [name: string]: any;
}
```

#### 返回结果

```
{ data: BaseOptionType[], flag: boolean}
```

| 属性 | 说明                                  | 类型             | 版本 |
| ---- | ------------------------------------- | ---------------- | ---- |
| data | treeNodes 数据                        | BaseOptionType[] |      |
| flag | 是否可以选中，true 可以，false 不可以 | boolean          |      |

### 示例

```tsx
import React, { useState, useEffect } from 'react';
import { Input, InputNumber } from 'antd';
import { disableTreeData } from '@svl-ad/ad-utils';
import ShowComp from '../../components/ShowComp';

export default () => {
  const [result, setResult] = useState({});

  useEffect(() => {
    const treeData = [
      {
        value: 'communication',
        title: '通信',
        children: [
          { type: 'checkok', value: 'feishu', title: '飞书' },
          { type: 'checkDisable', value: 'dingding', title: '钉钉' },
          { type: 'checkok', value: 'weChat', title: '微信' },
        ],
      },
      {
        value: 'email',
        title: '邮箱',
        children: [
          { type: 'checkok', value: 'qq.com', title: 'QQ邮箱' },
          { type: 'checkDisable', value: '163.com', title: '网易邮箱' },
          { type: 'checkok', value: 'gmail.com', title: '谷歌邮箱' },
        ],
      },
    ];
    const check = (item) => item.type === 'checkok';
    const output = disableTreeData({
      data: treeData,
      check,
      labelKey: 'title',
      searchKey: 'title',
    });
    setResult(output);
  }, []);

  const example = `
  const treeData = [
      {
        value: 'communication',
        title: '通信',
        children: [
          { type: 'checkok', value: 'feishu', title: '飞书' },
          { type: 'checkDisable', value: 'dingding', title: '钉钉' },
          { type: 'checkok', value: 'weChat', title: '微信' },
        ],
      },
      {
        value: 'email',
        title: '邮箱',
        children: [
          { type: 'checkok', value: 'qq.com', title: 'QQ邮箱' },
          { type: 'checkDisable', value: '163.com', title: '网易邮箱' },
          { type: 'checkok', value: 'gmail.com', title: '谷歌邮箱' },
        ],
      },
    ];
    const check = (item) => item.type === 'checkok';
    const output = disableTreeData({
      data: treeData,
      check,
      labelKey: 'title',
      searchKey: 'title',
    });`;

  const resultCode = `
      {
        data: [
          {
            value: 'communication',
            title: '通信',
            disabled: false,
            children: [
              { type: 'checkok', disabled: false, value: 'feishu', title: '飞书' },
              { type: 'checkDisable', disabled: true, value: 'dingding', title: '钉钉' },
              { type: 'checkok', disabled: false, value: 'weChat', title: '微信' },
            ],
          },
          {
            value: 'email',
            title: '邮箱',
            disabled: false,
            children: [
              { type: 'checkok', disabled: false, value: 'qq.com', title: 'QQ邮箱' },
              { type: 'checkDisable', disabled: true, value: '163.com', title: '网易邮箱' },
              { type: 'checkok', disabled: false, value: 'gmail.com', title: '谷歌邮箱' },
            ],
          },
        ],
        flag: true,
      }
  `;

  return (
    <div>
      <ShowComp example={example} />
      <h6>返回结果</h6>
      <ShowComp example={resultCode} />

      <h6>真实执行结果</h6>
      {JSON.stringify(result, null, 2)}
    </div>
  );
};
```
