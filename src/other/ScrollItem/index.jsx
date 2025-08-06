import React, { useState, useRef, useEffect, useCallback } from 'react';

const OptimizedVirtualScroll = ({
  itemHeight,
  renderItem,
  windowHeight,
  initialItems = 50,
  loadMoreThreshold = 50,
}) => {
  const [items, setItems] = useState(
    Array.from({ length: initialItems }, (_, i) => `Item ${i}`)
  );
  const [loading, setLoading] = useState(false);
  const [scrollTop, setScrollTop] = useState(0);
  const containerRef = useRef(null);
  const loaderRef = useRef(null);

  // 计算可见项
  const calculateVisibleItems = useCallback(() => {
    if (!containerRef.current) return { startIndex: 0, endIndex: 0 };
    
    const startIndex = Math.max(
      0,
      Math.floor(scrollTop / itemHeight)
    );
    const endIndex = Math.min(
      items.length - 1,
      Math.floor((scrollTop + windowHeight) / itemHeight)
    );
    
    return { startIndex, endIndex };
  }, [scrollTop, itemHeight, windowHeight, items.length]);

  const { startIndex, endIndex } = calculateVisibleItems();

  // 处理滚动事件
  const handleScroll = useCallback((e) => {
    setScrollTop(e.target.scrollTop);
  }, []);

  // 加载更多数据
  const loadMoreItems = useCallback(() => {
    if (loading) return;
    
    setLoading(true);
    setTimeout(() => {
      const newItems = Array.from({ length: 20 }, (_, i) => 
        `Item ${items.length + i}`
      );
      setItems(prev => [...prev, ...newItems]);
      setLoading(false);
    }, 1000);
  }, [items.length, loading]);

  // 使用IntersectionObserver检测是否滚动到底部
  useEffect(() => {
    // 创建一个 IntersectionObserver 实例来监听元素的可见性
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          loadMoreItems();
        }
      },
      { threshold: 0.1 } //0.1 表示当目标元素 10% 进入视口时就触发回调
    );

    if (loaderRef.current) {
      observer.observe(loaderRef.current);
    }

    return () => {
      if (loaderRef.current) {
        observer.unobserve(loaderRef.current);
      }
    };
  }, [loadMoreItems]);

  // 渲染可见项
  const visibleItems = items.slice(startIndex, endIndex + 1).map((item, index) => {
    const actualIndex = startIndex + index;
    return (
      <div
        key={actualIndex}
        style={{
          position: 'absolute',
          top: `${actualIndex * itemHeight}px`,
          height: `${itemHeight}px`,
          width: '100%',
        }}
      >
        {renderItem(item, actualIndex)}
      </div>
    );
  });

  return (
    <div
      ref={containerRef}
      style={{
        height: `${windowHeight}px`,
        overflow: 'auto',
        position: 'relative',
      }}
      onScroll={handleScroll}
    >
      <div style={{
        height: `${items.length * itemHeight}px`,
        position: 'relative',
      }}>
        {visibleItems}
        <div ref={loaderRef} className='botton-loaderRef' style={{
          position: 'absolute',
          top: `${items.length * itemHeight - loadMoreThreshold}px`,
          height: `${loadMoreThreshold}px`,
          width: '100%',
        }} />
      </div>
      {loading && (
        <div style={{
          position: 'fixed',
          bottom: '20px',
          left: '50%',
          transform: 'translateX(-50%)',
          padding: '10px 20px',
          backgroundColor: 'rgba(0,0,0,0.7)',
          color: 'white',
          borderRadius: '20px',
        }}>
          加载更多数据...
        </div>
      )}
    </div>
  );
};

// 使用示例
const App = () => {
  const renderItem = (item, index) => (
    <div style={{
      borderBottom: '1px solid #ccc',
      padding: '20px',
      backgroundColor: index % 2 === 0 ? '#f9f9f9' : 'white',
    }}>
      {item}
    </div>
  );

  return (
    <OptimizedVirtualScroll
      itemHeight={60}
      windowHeight={500}
      renderItem={renderItem}
    />
  );
};

export default App;