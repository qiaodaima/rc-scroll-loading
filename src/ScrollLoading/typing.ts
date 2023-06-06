import { ReactNode } from 'react';

export type ResponseType = {
  /** 当前页码 */
  current: number;

  /** 分页大小 */
  pageSize: number;

  /** 数据总条数 */
  total: number;

  /** 当前分页数据列表 */
  records: any[];
};

export type ScrollLoadingProps = {
  /** 容器css类名 */
  className?: string;

  /** renderItem父级容器css类名 */
  contentClassName?: string;

  /** 无数据时，容器css类名 */
  emptyClassName?: string;

  /** 请求参数 */
  params?: {
    // 一般来说这个参数不使用
    // 如果传递了，这个参数值会拿来初始化内部的 current，作为默认的起始请求页码，之后不会再读取该参数值
    current?: number;

    pageSize?: number;
    [key: string]: any;
  };

  /** 响应拦截 */
  interceptorsResponse?: (response: ResponseType) => ResponseType;

  /** 数据请求接口 */
  request: (params: any) => Promise<ResponseType>;

  /** 需要渲染的单个UI */
  renderItem: (item: any, index: number, dataSource: any[]) => ReactNode;

  /** 自定义加载时底部UI提示 */
  renderScrolLoadTips?: ReactNode;

  /** 自定义加载结束时底部UI提示 */
  renderEndTips?: ReactNode;

  /** 自定义缺省数据时要展示的UI */
  renderEmpty?: ReactNode;

  /** 每次分页请求成功之后的回调 */
  onLoad?: (response: ResponseType) => void;

  /** 分页请求全部结束时回调 */
  onScrollEnd?: (array: any[]) => void;
};

export type ScrollLoadingDefaultProps = {
  /** 当前页码 */
  CURRENT: number;

  /** 分页大小 */
  PAGE_SIZE: number;

  /** 加载时底部UI提示 */
  RENDER_SCROL_LOAD_TIPS: ReactNode;

  /** 加载结束时底部UI提示 */
  RENDER_END_TIPS: ReactNode;

  /** 缺省数据时要展示的UI */
  RENDER_EMPTY: ReactNode;
};

export type ScrollLoadingAPI = {
  /** 一些预设默认参数 */
  DEFAULT_PROPS: ScrollLoadingDefaultProps;
};
