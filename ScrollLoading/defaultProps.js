import React from 'react';
var DEFAULT_PROPS = {
  // 当前页码默认从1开始
  CURRENT_PAGE_NUMBER: 1,
  // 默认分页大小
  PAGE_SIZE: 10,
  // 加载时底部UI提示
  RENDER_SCROL_LOAD_TIPS: /*#__PURE__*/React.createElement("div", {
    className: "rc-scroll-load-tips"
  }, /*#__PURE__*/React.createElement("p", {
    className: "rc-scroll-text-tips"
  }, "\u52A0\u8F7D\u4E2D...")),
  // 加载结束时底部UI提示;
  RENDER_END_TIPS: /*#__PURE__*/React.createElement("div", {
    className: "rc-scroll-end-tips"
  }, /*#__PURE__*/React.createElement("p", {
    className: "rc-scroll-text-tips"
  }, "\u5230\u5E95\u5566~")),
  // 缺省状态时底部UI提示;
  RENDER_EMPTY: /*#__PURE__*/React.createElement("div", {
    className: "rc-scroll-empty"
  }, /*#__PURE__*/React.createElement("p", {
    className: "rc-scroll-text-tips"
  }, "\u6682\u65E0\u6570\u636E~"))
};
export default DEFAULT_PROPS;