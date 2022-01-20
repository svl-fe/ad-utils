---
nav:
  title: 方法
  path: /components
group:
  title: 字符串
  order: 2
---

## getLengthByUnicode

示例: 将含有中英文的字符串，根据 Unicode 码进行中英文判定，获取 size 大小的字符串

```tsx
import React, { useState, useEffect } from 'react';
import { Input, InputNumber } from 'antd';
import { getLengthByUnicode } from '@svl-ad/ad-utils';

export default () => {
  const [text, setText] = useState('');
  const [size, setSize] = useState(10);
  const [unit, setUnit] = useState(2);
  const [result, setResult] = useState({});

  useEffect(() => {
    const output = getLengthByUnicode({ text, size, unit });
    setResult(output);
  }, [text, size, unit]);

  return (
    <div>
      <h6>请输入要处理的字符</h6>
      <Input
        placeholder="请输入要处理的字符"
        style={{ width: '50%' }}
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <h6>请输入要获取的字符长度</h6>
      <InputNumber
        placeholder="请输入要获取的字符长度"
        style={{ width: '50%' }}
        value={size}
        onChange={(e) => setSize(e)}
      />
      <h6>请输入中英文换算比例</h6>
      <InputNumber
        placeholder="请输入中英文换算比例"
        style={{ width: '50%' }}
        value={unit}
        onChange={(e) => setUnit(e)}
      />
      <h6>返回结果</h6>
      Result.data: {result.data}
      <br />
      Result.dot: {result.dot + ''}
    </div>
  );
};
```

#### 参数说明

| 属性 | 说明 | 类型 | 默认值 | 是否必传 | 版本 |
| --- | --- | --- | --- | --- | --- |
| text | 需要处理的文字 | string |  | 是 |  |
| size | 要获取的长度，按照英文计算 | number |  | 是 |  |
| unit | 中英文换算比例 | number | 2 | 否 |  |
| singleCodeCheck | 单字节判断方法 | function | (code: number) => (code >= 0x0001 && code <= 0x007e) \|\| (0xff60 <= code && code <= 0xff9f) | 否 |  |

#### 返回结果

```
{ data: string, dot: boolean }
```

| 属性 | 说明         | 类型    | 版本 |
| ---- | ------------ | ------- | ---- |
| data | 处理后的文字 | string  |      |
| dot  | 是否有...    | boolean |      |
