import React from "react";
import TalentCardList from "./index";

const talents = [
  {
    avatar: "https://kui.kingdee.com/assets/image/avatar_m.png",
    name: "张三",
    employeeId: "001",
    company: "示例公司",
    department: "技术部",
    position: "前端开发工程师",
    rank: "初级",
    introduction: "这是一个简单的介绍",
    gender: "male",
    tags: ["技术达人", "团队协作", "学习能力强"],
  },
  {
    avatar: "https://kui.kingdee.com/assets/image/avatar_m.png",
    name: "张吧",
    employeeId: "002",
    company: "示例公司",
    department: "技术部",
    position: "前端开发工程师",
    rank: "初级",
    introduction: "这是一个简单的介绍",
    gender: "female",
    tags: ["技术达人", "团队协作", "学习能力强"],
  },
  // 可以添加更多的人才信息
];

const App = () => {
  return (
    <div>
      <TalentCardList cards={talents} />
    </div>
  );
};

export default App;
