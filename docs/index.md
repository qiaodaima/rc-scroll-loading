---
title: react 滚动加载组件
hero:
  title: ScrollLoading
  description: 一款简单易用的 react 滚动加载组件
  actions:
    - text: 立即上手
      link: /components/scroll-loading

    - text: Github
      link: https://github.com/qiaodaima/rc-scroll-loading
---

:::warning{title='提示'}
我并不打算发包，主要是觉得自己能力不够，也怕自己做不好。沉淀的东西主要是服务我自己，我一般是通过 copy 的方式在项目中使用。
:::

<Tree>
  <ul>
    <li>
      src
      <ul>
        <li>
          InfiniteScroll
          <small>检测元素是否在可视区域组件(也可应用于曝光数据埋点需求)</small>
          <ul>
            <li>
              index.tsx
              <small>组件源码入口</small>
            </li>
            <li>
              typing.ts
              <small>组件参数类型声明</small>
            </li>
            <li>
              styles.less
              <small>组件样式文件</small>
            </li>
          </ul>
        </li>
        <li>
          ScrollLoading
          <small>滚动分页加载组件</small>
          <ul>
            <li>
              index.tsx
              <small>组件源码入口</small>
            </li>
            <li>
              typing.ts
              <small>组件参数类型声明</small>
            </li>
            <li>
              defaultProps.tsx
              <small>组件预设默认参数值</small>
            </li>
            <li>
              defaultTheme.less
              <small>组件默认主题样式</small>
            </li>
          </ul>
        </li>
      </ul>
    </li>
  </ul>
</Tree>

```jsx | pure
import React from 'react';
import cx from 'classnames';
import { ScrollLoading } from 'rc-scroll-loading';
import './styles.less';

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
      <div className={'scroll-item'}>
        <p>{index}</p>
      </div>
    );
  };

  return (
    <ScrollLoading
      className={cx('demo-scroll', 'col-1')}
      params={{
        // 一般来说这个参数不使用
        // 如果传递了，这个参数值会拿来初始化内部的 current，作为默认的起始请求页码，之后不会再读取该参数值
        current: 6,
        pageSize: 25, // 分页大小
        labelGroup: 10, // 携带一些其他自定义参数
      }}
      request={getDataSource}
      renderItem={renderItem}
    />
  );
};
```
