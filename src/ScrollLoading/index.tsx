import React, { type FC, useState, useRef, useEffect } from 'react';
import cx from 'classnames';
import { InfiniteScroll } from 'rc-scroll-loading';
import type { ScrollLoadingProps, ScrollLoadingAPI } from './typing';
import DEFAULT_PROPS from './defaultProps';
import './defaultTheme.less';

const ScrollLoading: FC<ScrollLoadingProps> & ScrollLoadingAPI = (props) => {
  const { CURRENT } = ScrollLoading.DEFAULT_PROPS;
  const { params, emptyClassName } = props;
  const defaultCurrent = params?.current ?? CURRENT; // 当前页码默认值

  /**
   * isInitialize 变量主要是辅助判断是不是 缺省状态 和 加载结束
   * 因为 total 和 dataSource.length 预设都是0，要和接口返回的0做区分
   * 因此要标记是否进行过 request 请求
   */
  const isInitialize = useRef(false);

  const [current, setCurrent] = useState(defaultCurrent); // 当前页码
  const [total, setTotal] = useState(0); // 总的数据条数
  const [dataSource, setDataSource] = useState<any[]>([]); // 当前已经获取的数据列表

  const isEmpty = isInitialize.current && total === 0; // 是不是空状态
  const isEnd = isInitialize.current && total === dataSource.length; // 是不是加载结束

  // 数据请求
  const getDataSource = async () => {
    const { PAGE_SIZE } = ScrollLoading.DEFAULT_PROPS;
    const { params, request, interceptorsResponse, onLoad } = props;
    const { pageSize = PAGE_SIZE } = params || {};

    // current 属性一定要放在最下面，防止被覆盖
    const _params = {
      ...params,
      pageSize,
      current: isInitialize.current ? current + 1 : current,
    };

    const result = await request(_params).finally(() => {
      // 执行过 request 就算初始化过
      isInitialize.current = true;
    });

    const nextResult = interceptorsResponse?.(result);
    const { current: nextCurrent, total, records } = nextResult || result;

    setCurrent(nextCurrent);
    setTotal(total);
    setDataSource((prevDataSource) => [...prevDataSource, ...records]);
    onLoad?.(result);
  };

  // 渲染列表主体
  const _renderContent = () => {
    // 缺省页面 不显示
    if (isEmpty) {
      return null;
    }

    const { renderItem, contentClassName } = props;

    return (
      <div className={cx(contentClassName, 'rc-scroll-content')}>
        {dataSource?.map((item, index, dataSource) => {
          return renderItem(item, index, dataSource);
        })}
      </div>
    );
  };

  // 渲染缺省状态
  const _renderEmpty = () => {
    if (isEmpty === false) {
      return null;
    }

    const { RENDER_EMPTY } = ScrollLoading.DEFAULT_PROPS;
    const { renderEmpty = RENDER_EMPTY } = props;

    return renderEmpty;
  };

  // 渲染列表底部加载提示语
  const _renderLoadTips = () => {
    // 缺省页面 和 全部加载结束时 不显示
    if (isEmpty || isEnd) {
      return null;
    }

    const { RENDER_SCROL_LOAD_TIPS } = ScrollLoading.DEFAULT_PROPS;
    const { renderScrolLoadTips = RENDER_SCROL_LOAD_TIPS } = props;

    return renderScrolLoadTips;
  };

  // 渲染列表底部全部加载完成时提示语
  const _renderEndTips = () => {
    // 缺省页面 和 未加载结束时 不显示
    if (isEmpty || isEnd === false) {
      return null;
    }

    const { RENDER_END_TIPS } = ScrollLoading.DEFAULT_PROPS;
    const { renderEndTips = RENDER_END_TIPS } = props;

    return renderEndTips;
  };

  // 处理监听是否滚动接触
  useEffect(() => {
    if (isEnd) {
      const { onScrollEnd } = props;

      onScrollEnd?.(dataSource);
    }
  }, [isEnd]);

  return (
    <div
      className={cx(
        props?.className,
        isEmpty && emptyClassName,
        'rc-scroll-loading-component',
      )}
    >
      {_renderContent()}
      {_renderEmpty()}
      {_renderLoadTips()}
      {_renderEndTips()}

      <InfiniteScroll onVisible={getDataSource} stopWatching={isEnd} />
    </div>
  );
};

ScrollLoading.DEFAULT_PROPS = DEFAULT_PROPS;

export default ScrollLoading;
