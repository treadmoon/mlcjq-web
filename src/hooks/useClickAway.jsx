import { useEffect, useRef } from "react";

// 定义获取目标元素的辅助函数
const getTargetElement = target => {
  if (!target) {
    return null;
  }
  if (target.current) {
    return target.current;
  }
  return target;
};

// 定义获取 document 或 shadow root 的辅助函数
const getDocumentOrShadow = target => {
  const targetElement = getTargetElement(target);
  if (targetElement && targetElement.getRootNode) {
    const rootNode = targetElement.getRootNode();
    if (rootNode instanceof ShadowRoot) {
      return rootNode;
    }
  }
  return document;
};

// 自定义 useClickAway hook
const useClickAway = (onClickAway, target, eventName = "click") => {
  // 使用 useRef 来保存最新的 onClickAway 函数，避免闭包问题
  const onClickAwayRef = useRef(onClickAway);
  useEffect(() => {
    onClickAwayRef.current = onClickAway;
  }, [onClickAway]);

  useEffect(() => {
    // 处理事件的函数
    const handler = event => {
      const targets = Array.isArray(target) ? target : [target];
      if (
        targets.some(item => {
          const targetElement = getTargetElement(item);
          return targetElement && targetElement.contains(event.target);
        })
      ) {
        // 如果点击事件的目标在目标元素内部，不执行 onClickAway 函数
        return;
      }
      // 调用最新的 onClickAway 函数
      onClickAwayRef.current(event);
    };

    // 获取 document 或 shadow root
    const documentOrShadow = getDocumentOrShadow(target);

    // 将 eventName 转换为数组，方便处理多个事件
    const eventNames = Array.isArray(eventName) ? eventName : [eventName];

    // 为每个事件添加监听器
    eventNames.forEach(event =>
      documentOrShadow.addEventListener(event, handler)
    );

    // 组件卸载时移除事件监听器
    return () => {
      eventNames.forEach(event =>
        documentOrShadow.removeEventListener(event, handler)
      );
    };
  }, [target, eventName]);
};

export default useClickAway;
