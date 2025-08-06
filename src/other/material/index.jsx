import React from "react";

import { Icon, Space, Button } from "@kdcloudjs/kdesign";

import SearchHome from "./SearchHome";

import MessagePending from "./MessagePending";

import MatrixChart from "./MatrixChart";

import UseArraySetter from "./UseArraySetter";

import "./index.less";

function Material() {
  return (
    <>
      <h4>物料</h4>
      <div>
        {/* <SearchHome /> */}
        {/* <MessagePending />
        <MultiLangSetting />
        <MatrixChart /> */}
        <UseArraySetter />
      </div>
    </>
  );
}

export default Material;
