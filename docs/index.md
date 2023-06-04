---
hero:
  title: ScrollLoading
  description: 一款简单易用的滚动加载组件
  actions:
    - text: 立即上手
      link: /components/scrollloading

    - text: Github
      link: https://github.com/qiaodaima/rc-scroll-loading/tree/develop/src/ScrollLoading
---

```jsx | pure
import React from 'react';
import { ScrollLoading, type ResponseType } from 'rc-scroll-loading';
import S from './styles.less';

export default () => {
  const getDataSource = async (params: any) => {
    const requestInit = {
      method: 'POST',
      body: JSON.stringify(params),
    };

    return fetch('/api/users', requestInit).then((response) => response.json());
  };

  const renderItem = (item: any, index: number) => {
    return (
      <div className={S.demoItem}>
        <p>{index}</p>
      </div>
    );
  };

  return (
    <ScrollLoading
      params={{
        current: 6, // 从哪一页开始请求，这个参数只会初始化一次，后续会自己递增
        pageSize: 25, // 分页大小
        labelGroup: 10, // 携带一些其他自定义参数
      }}
      request={getDataSource}
      renderItem={renderItem}
    />
  );
};
```
