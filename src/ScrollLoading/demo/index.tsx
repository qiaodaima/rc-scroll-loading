import React from 'react';
import cx from 'classnames';
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
    console.log('--item--', item);

    return (
      <div className={S.demoItem}>
        <p>{index}</p>
      </div>
    );
  };

  return (
    <ScrollLoading
      className={cx(S.scroll, S.col2)}
      contentClassName={S.content}
      emptyClassName={S.empty}
      params={{
        current: 6, // 从哪一页开始请求，这个参数只会初始化一次，后续会自己递增
        pageSize: 25, // 分页大小
        labelGroup: 10, // 携带一些其他自定义参数
      }}
      interceptorsResponse={interceptorsResponse}
      request={getDataSource}
      renderItem={renderItem}
      renderScrolLoadTips={<p className={S.tips}>加载中，请稍后...</p>}
      renderEndTips={<p className={S.tips}>自定义到底了~</p>}
      renderEmpty={<div className={S.emptyTips}>自定义暂无数据</div>}
      onScrollEnd={() => {
        console.log('滚动加载结束');
      }}
    />
  );
};
