import React from 'react';
import { ScrollLoadingDefaultProps } from './typing';

const DEFAULT_PROPS: ScrollLoadingDefaultProps = {
  // 当前页码默认从1开始
  CURRENT: 1,

  // 默认分页大小
  PAGE_SIZE: 10,

  // 加载时底部UI提示
  RENDER_SCROL_LOAD_TIPS: (
    <div className="rc-scroll-load-tips">
      <p className="rc-scroll-text-tips">加载中...</p>
    </div>
  ),

  // 加载结束时底部UI提示;
  RENDER_END_TIPS: (
    <div className="rc-scroll-end-tips">
      <p className="rc-scroll-text-tips">到底啦~</p>
    </div>
  ),

  // 缺省状态时底部UI提示;
  RENDER_EMPTY: (
    <div className="rc-scroll-empty">
      <p className="rc-scroll-text-tips">暂无数据~</p>
    </div>
  ),
};

export default DEFAULT_PROPS;
