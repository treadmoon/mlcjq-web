import React, { useState } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

import "./dnd.less";

const getListStyle = isDraggingOver => ({
  background: isDraggingOver ? "lightblue" : "lightgrey",
  padding: grid,
  width: 250,
});

const grid = 8;

const getItemStyle = (isDragging, draggableStyle) => ({
  // some basic styles to make the items look a bit nicer
  userSelect: "none",
  padding: grid * 2,
  margin: `0 0 ${grid}px 0`,

  // change background colour if dragging
  background: isDragging ? "lightgreen" : "grey",

  // styles we need to apply on draggables
  ...draggableStyle,
  // height: 30,
  height: isDragging ? 50 : 180,
});

const getItems = (count, prefix = "") =>
  Array.from({ length: count }, (v, k) => k).map(k => ({
    id: `${prefix}-item-${k}`,
    content: `item ${k}`,
  }));

// a little function to help us with reordering the result
const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

function DnD(props) {
  const [items, setItems] = useState(getItems(0));
  const [items2, setItems2] = useState(getItems(3, "B"));
  const [items3, setItems3] = useState(getItems(3, "C"));

  const onDragEnd = (arg1, arg2) => {
    console.log("onDragEnd", arg1, arg2);
  };

  return (
    <div>
      <DragDropContext onDragEnd={onDragEnd}>
        <div className="dnd-box">
          <div className="left">
            {items2.map(item => (
              <Droppable droppableId={`id${item.id}`}>
                {(provided, snapshot) => {
                  return (
                    <div
                      {...provided.droppableProps}
                      ref={provided.innerRef}
                      style={getListStyle(snapshot.isDraggingOver)}
                    >
                      <div
                        className="pitem"
                        style={{
                          border: snapshot.isDraggingOver
                            ? "1px solid #f00"
                            : "1px solid #fff",
                        }}
                      >
                        {item.content}
                      </div>
                    </div>
                  );
                }}
              </Droppable>
            ))}
          </div>
          <div className="right">
            <Droppable droppableId="droppable2">
              {(provided, snapshot) => {
                return (
                  <div
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                    style={getListStyle(snapshot.isDraggingOver)}
                  >
                    {items2.map((item, index) => (
                      <Draggable
                        key={item.id}
                        draggableId={item.id}
                        index={index}
                      >
                        {(provided, snapshot) => (
                          <div
                            className="drag-item"
                            // ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            style={getItemStyle(
                              snapshot.isDragging,
                              provided.draggableProps.style
                            )}
                          >
                            <div className="drag-area" ref={provided.innerRef}>
                              {item.content}
                            </div>
                            <div className="info-area">
                              <div className="tag">HIGHT</div>
                              其他信息
                              <br />
                              其他信息
                              <br />
                              其他信息
                              <br />
                            </div>
                          </div>
                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                  </div>
                );
              }}
            </Droppable>
          </div>
        </div>
      </DragDropContext>
    </div>
  );
}

export default DnD;
