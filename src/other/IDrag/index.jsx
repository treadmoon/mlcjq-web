import { useState, useRef, useCallback } from "react";
import "./index.less";

const IDrag = () => {
  const [items, setItems] = useState([
    { id: 1, text: "任务1" },
    { id: 2, text: "任务2" },
    { id: 3, text: "任务3" },
    { id: 4, text: "任务4" },
  ]);

  const [loading, setLoading] = useState(false);

  const useLoading = useCallback(() => {
    setLoading(true);
    const st = setTimeout(() => {
      
      console.log("超时");
      setLoading(false);
    }, 3000);
    return () => {
      console.log("执行");
      clearTimeout(st);
      setLoading(false);
    };
  }, []);
  // 保存拖拽源的索引
  const dragSource = useRef(null);

  // 处理拖拽开始事件
  const handleDragStart = (index) => (e) => {
    dragSource.current = index;
    e.dataTransfer.effectAllowed = "move";
    e.dataTransfer.setData("text/plain", "dragging");
  };

  // 处理拖拽进入时的视觉反馈
  const handleDragOver = (e) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = "move";
  };

  // 处理拖拽结束时的排序
  const handleDrop = (currentIndex) => (e) => {
    e.preventDefault();
    if (dragSource.current === null) return;

    // 创建新数组避免直接修改状态
    const newItems = [...items];
    const draggedItem = newItems[dragSource.current];

    // 删除原位置的元素
    newItems.splice(dragSource.current, 1);
    // 插入到目标位置
    newItems.splice(currentIndex, 0, draggedItem);

    setItems(newItems);
    dragSource.current = null;
  };

  return (
    <div className="draggable-list">
      <button
        onClick={() => {
          const cancel = useLoading();

          setTimeout(() => {
            cancel();
          }, 4000);
        }}
      >
        {loading ? "……" : "点击"}
      </button>
      <ul>
        {items.map((item, index) => (
          <li
            key={item.id}
            draggable
            onDragStart={handleDragStart(index)}
            onDragOver={handleDragOver}
            onDrop={handleDrop(index)}
            className="draggable-item"
          >
            {item.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default IDrag;
