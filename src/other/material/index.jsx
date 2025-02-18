import React from "react";

import { Icon, Space, Button } from "@kdcloudjs/kdesign";

import SearchHome from "./SearchHome";

import MessagePending from "./MessagePending";

import MultiLangSetting from "./MultiLangInput";

import MatrixChart from "./MatrixChart";

import "./index.less";

function Material() {
  return (
    <>
      <h4>物料</h4>
      <div>
        {/* <SearchHome />
        <MessagePending /> */}
        <MultiLangSetting />
        <MatrixChart />
      </div>
    </>
  );
}

export default Material;
