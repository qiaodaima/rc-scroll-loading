import { ReactNode } from 'react';
export declare type ResponseType = {
    /** 当前页码 */
    current: number;
    /** 分页大小 */
    pageSize: number;
    /** 数据总条数 */
    total: number;
    /** 当前分页数据列表 */
    records: any[];
};
export declare type ScrollLoadingProps = {
    /** 容器css类名 */
    className?: string;
    /** renderItem父级容器css类名 */
    contentClassName?: string;
    /** 无数据时，容器css类名 */
    emptyClassName?: string;
    /** 请求参数 */
    params?: {
        current?: number;
        pageSize?: number;
        [key: string]: any;
    };
    /** 响应拦截 */
    interceptorsResponse?: (response: ResponseType) => ResponseType;
    /** 数据请求接口 */
    request: (params: any) => Promise<ResponseType>;
    /** 需要渲染的单个UI */
    renderItem: (item: any, index: number, array: any[]) => ReactNode;
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
export declare type ScrollLoadingDefaultProps = {
    CURRENT_PAGE_NUMBER: number;
    PAGE_SIZE: number;
    RENDER_SCROL_LOAD_TIPS: ReactNode;
    RENDER_END_TIPS: ReactNode;
    RENDER_EMPTY: ReactNode;
};
export declare type ScrollLoadingAPI = {
    /** 一些预设默认参数 */
    DEFAULT_PROPS: ScrollLoadingDefaultProps;
};
