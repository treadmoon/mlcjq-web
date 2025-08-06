import React from "react";
import { Space } from "@kdcloudjs/kdesign";

import PerformanceChart from "./DP";
import PerformanceAnalysis from "./KM";
import WX from "./WX"
import YB from "./YB"
import DB from "./DB"

const JuZhen = () => {
  return (
    <div className="other-index" style={{display:"flex",flexDirection:"wrap"}}>
      <h4>矩阵图</h4>
      <Space>
        <h4>DeepSeek</h4>
        <PerformanceChart />
      </Space>
      <Space>
        <h4>kimi</h4>
        <PerformanceAnalysis />
      </Space>
      <Space>
        <h4>豆包</h4>
        <DB />
      </Space>
      <Space>
        <h4>文心</h4>
        <WX />
      </Space>
      <Space>
        <h4>元宝</h4>
        <YB />
      </Space>
    </div>
  );
};

export default JuZhen;
