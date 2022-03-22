---
nav:
  title: 方法
  path: /components
group:
  path: /net
  title: 网络
  order: 1
---

## downLoadFile

下载文件

> downLoadFile(url, fileName)

### 参数说明

| 参数     | 说明     | 类型   | 默认值 | 是否必传 | 版本 |
| -------- | -------- | ------ | ------ | -------- | ---- |
| url      | 下载 url | string |        | 是       |      |
| fileName | 文件名   | string | ''     | 是       |      |

### 示例

```tsx
import React, { useState } from 'react';
import { downloadFile } from '@svl-ad/ad-utils';
const url =
  'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fqqpublic.qpic.cn%2Fqq_public%2F0%2F0-2607181002-DDB959F2DE382FBC6D4AAA5B32AEC00D%2F0%3Ffmt%3Djpg%26size%3D75%26h%3D606%26w%3D606%26ppv%3D1.jpg&refer=http%3A%2F%2Fqqpublic.qpic.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1650520939&t=cd8b038540c6ee8a741b7d72fe50052b';
export default () => {
  const handleClickDownload = () => {
    downloadFile(url, '龙猫');
  };
  return <a onClick={handleClickDownload}>点我下载</a>;
};
```
