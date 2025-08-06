import React, { useState } from "react";
import DinamicForm from "./dinamicForm";

import Uoload from "../uoload";

import MultiLangSetting from "./MultiLangInput"
import MultiLangSetting2 from "./MultiLangInput2"
import MultiLangInput2plus from "./MultiLangInput2plus"

import "./index.less";

function SetterGroup() {
  const list1=[{value:1},{value:2},{value:3}]
  return (
    <>
      <h4>设置器</h4>
      {/* <DinamicForm /> */}
      {/* <Uoload /> */}
      <MultiLangSetting />
      {/* <MultiLangSetting2 /> */}
      {/* <MultiLangInput2plus /> */}
    </>
  );
}

export default SetterGroup;
