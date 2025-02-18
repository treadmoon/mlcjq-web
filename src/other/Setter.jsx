import React, { useState, useMemo } from "react";
import GridLayout, { Layout, WidthProvider } from "react-grid-layout";

import { Icon, Space, Button } from "@kdcloudjs/kdesign";

import "./setter.less";

const ResponsiveGridLayout = WidthProvider(GridLayout);
function data2layout(data) {
  return data.map((item, index) => ({
    i: item.id.toString(),
    x: 0,
    y: index,
    w: 12,
    h: 1,
    desc: item.desc,
  }));
}

const list2map = list => {
  const map = {};
  list.forEach(item => {
    map[item.id] = item;
  });
  return map;
};

const initData = [
  { id: "1001", desc: "任务描述1", type: 1 },
  { id: "1002", desc: "任务描述2", type: 1 },
  { id: "1003", desc: "任务描述3", type: 2 },
  { id: "1004", desc: "任务描述4", type: 3 },
];

function EditListSetter() {
  const [layout, setLayout] = useState(data2layout(initData));

  const [dataMap, setDataMap] = useState(list2map(initData));

  const handleDelete = id => {
    setLayout(pre => {
      console.log(pre, i);

      return pre.filter(item => item.i !== id.toString());
    });
  };

  const handleAdd = () => {
    const newId =
      data.length > 0 ? Math.max(...data.map(item => item.id)) + 1 : 1;
    setData([...data, { id: newId, desc: "新任务", type: 1 }]);
  };

  const onLayoutChange = newLayout => {
    console.log("newLayout", newLayout);

    setLayout(newLayout);
  };

  return (
    <div className="editListSetter-container">
      <ResponsiveGridLayout
        className="layout"
        layout={layout}
        onLayoutChange={onLayoutChange}
        rowHeight={30}
        cols={12}
      >
        {layout.map(item => (
          <div className="item" key={item.i} data-grid={item}>
            <span>{item.i}</span>
            <Icon
              className="remove delete-icon"
              type="delete"
              onClick={() => handleDelete(item.i)}
            />
          </div>
        ))}
      </ResponsiveGridLayout>
      <Button type="text" onClick={handleAdd}>
        <span>添加任务</span>
        <Icon type="add" />
      </Button>
    </div>
  );
}

function EditSortListSetter() {
  const [data, setData] = useState([
    { id: 1, desc: "任务描述1", type: 1 },
    { id: 2, desc: "任务描述2", type: 1 },
    { id: 3, desc: "任务描述3", type: 2 },
    { id: 4, desc: "任务描述4", type: 3 },
    { id: 5, desc: "任务描述5", type: 3 },
    { id: 6, desc: "任务描述6", type: 3 },
  ]);

  const [filterType, setFilterType] = useState(null);

  const [showSort, setShowsort] = useState(false);

  const typeList = [
    { type: 1, name: "分类1" },
    { type: 2, name: "分类2" },
    { type: 3, name: "分类3" },
  ];

  const handleDelete = id => {
    setData(data.filter(item => item.id !== id));
  };

  const handleAdd = () => {
    const newId =
      data.length > 0 ? Math.max(...data.map(item => item.id)) + 1 : 1;
    setData([
      ...data,
      { id: newId, desc: "新任务" + filterType, type: filterType },
    ]);
  };

  const filteredData = useMemo(() => {
    if (!showSort) return data;
    if (filterType === null) return data;
    return data.filter(item => item.type === filterType);
  }, [data, filterType]);

  return (
    <div className="editSortListSetter-container">
      {showSort && (
        <div className="nav">
          <div
            className={`f ${filterType === null ? "active" : ""}`}
            onClick={() => setFilterType(null)}
          >
            所有
          </div>
          {typeList.map(type => (
            <div
              className={`nav-item ${filterType === type.type ? "active" : ""}`}
              key={type.type}
              onClick={() => setFilterType(type.type)}
            >
              {type.name}
            </div>
          ))}
        </div>
      )}
      <div className="main">
        {filteredData.map(item => (
          <div className="item" key={item.id}>
            <span>{item.desc}</span>
            <Icon type="delete" onClick={() => handleDelete(item.id)} />
          </div>
        ))}
        <Button type="text" onClick={handleAdd}>
          <span>添加任务</span>
          <Icon type="add" />
        </Button>
      </div>
    </div>
  );
}

function Setter() {
  return (
    <Space>
      {/* <EditListSetter /> */}
      {/* <EditSortListSetter /> */}
      {/* <AddRemoveLayout /> */}
    </Space>
  );
}

export default Setter;
