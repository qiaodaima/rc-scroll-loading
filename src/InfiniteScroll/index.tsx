import React, { type FC, useRef, useEffect } from 'react';
import type { InfiniteScrollProps } from './typing';
import './styles.less';

const InfiniteScroll: FC<InfiniteScrollProps> = (props) => {
  const { onVisible, stopWatching = false } = props;

  const observer = useRef<IntersectionObserver>();
  const observeTarget = useRef<HTMLDivElement>(null);

  // 防止重复执行回调，加锁
  const isAllow = useRef(true);

  const creatObserver = () => {
    const options: IntersectionObserverInit = {
      threshold: [1],
    };

    const callback = (entries: any) => {
      const {
        intersectionRatio, // 目标元素的可见比例
        isIntersecting, // ture由不可见到可见   false可见到不可见 大致这么理解
      } = entries[0];

      if (isAllow.current && intersectionRatio === 1 && isIntersecting) {
        isAllow.current = false;

        onVisible().finally(() => {
          isAllow.current = true;
        });
      }
    };

    observer.current = new IntersectionObserver(callback, options);
    observer.current.observe(observeTarget.current!);

    return () => {
      observer.current?.disconnect();
    };
  };

  useEffect(() => {
    return creatObserver();
  }, []);

  // 停止观察
  useEffect(() => {
    if (stopWatching) {
      observer.current?.unobserve(observeTarget.current!);
    }
  }, [stopWatching]);

  return <div ref={observeTarget} className="rc-infinite-scroll-component" />;
};

export default InfiniteScroll;
