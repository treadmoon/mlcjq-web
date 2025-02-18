import React, { useState } from "react";
import GridLayout from "react-grid-layout";

import "./setter.less";

// 定义初始布局
const initialLayout = [
  { i: "a", x: 0, y: 0, w: 2, h: 2 },
  { i: "b", x: 2, y: 0, w: 2, h: 2 },
];

function MyGridLayout() {
  const [layout, setLayout] = useState(initialLayout);

  // 添加新项目到布局中
  const addItem = () => {
    const newItem = {
      i: layout.length.toString(),
      x: (layout.length * 2) % Math.floor(12 / 2), // 简单计算x位置
      y: layout.length + 1, // 放置在最底部
      w: 2,
      h: 2,
    };
    setLayout([...layout, newItem]);
  };

  // 移除指定项目的回调函数
  const removeItem = i => {
    console.log("removeItem", i);

    setLayout(layout.filter(item => item.i !== i));
  };

  // 更新布局状态的回调函数
  const onLayoutChange = newLayout => {
    setLayout(newLayout);
  };

  return (
    <div className="mygridlayout-container">
      <button onClick={addItem}>Add Item</button>
      <GridLayout
        className="layout"
        layout={layout}
        cols={12} // 列数
        rowHeight={30}
        width={1200}
        // onLayoutChange={onLayoutChange}
      >
        {layout.map(item => (
          <div className="item" key={item.i} data-grid={item}>
            Item {item.i}
            <button onClick={() => removeItem(item.i)}>Remove</button>
          </div>
        ))}
      </GridLayout>
    </div>
  );
}

export default MyGridLayout;
