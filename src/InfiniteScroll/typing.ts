export type InfiniteScrollProps = {
  /** InfiniteScroll 会自动对 loadMore 函数加锁，避免重复的请求，但是前提是 loadMore 函数需要返回一个正确的 Promise */
  onVisible: () => Promise<void>;

  /** 是否停止观察 */
  stopWatching?: boolean;
};
