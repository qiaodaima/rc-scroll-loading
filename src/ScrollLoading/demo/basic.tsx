import React from 'react';
import cx from 'classnames';
import { ScrollLoading } from 'rc-scroll-loading';
import { getDataSource } from './api';
import './styles.less';

export default () => {
  const renderItem = (item: any, index: number) => {
    return (
      <div key={item.id} className={'scroll-item'}>
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
