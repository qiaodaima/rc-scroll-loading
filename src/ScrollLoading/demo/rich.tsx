import React from 'react';
import cx from 'classnames';
import { ScrollLoading, type ResponseType } from 'rc-scroll-loading';
import { getDataSource } from './api';
import './styles.less';

export default () => {
  const interceptorsResponse = (response: ResponseType) => {
    const { records } = response;

    const nextRecords = records.map((item) => ({
      ...item,
      addSomeAttributes: '可以在这个阶段对数据进行调整',
    }));

    // 一定要 return 出去
    return {
      ...response,
      records: nextRecords,
    };
  };

  const renderItem = (item: any, index: number) => {
    return (
      <div key={item.id} className={'scroll-item'}>
        <p>{index}</p>
      </div>
    );
  };

  return (
    <ScrollLoading
      className={cx('demo-scroll', 'col-2')}
      contentClassName={'scroll-content-wrap'}
      emptyClassName={'status-empty'}
      params={{
        // 一般来说这个参数不使用
        // 如果传递了，这个参数值会拿来初始化内部的 current，作为默认的起始请求页码，之后不会再读取该参数值
        current: 6,
        pageSize: 25, // 分页大小
        labelGroup: 10, // 携带一些其他自定义参数
      }}
      interceptorsResponse={interceptorsResponse}
      request={getDataSource}
      renderItem={renderItem}
      renderScrolLoadTips={<p className={'load-tips'}>加载中，请稍后...</p>}
      renderEndTips={<p className={'end-tips'}>自定义到底了~</p>}
      renderEmpty={<div className={'empty-wrap'}>自定义暂无数据</div>}
      onScrollEnd={() => {
        console.log('滚动加载结束');
      }}
    />
  );
};
