import React, { useState, memo } from "react";
import { Icon, Tabs } from "@kdcloudjs/kdesign";

const ListData = [
  {
    id: "1",
    name: "待办事项",
    content: [
      {
        id: "t1001",
        info: "张明明的工作交接待您处理",
        name: "张明明",
        date: "今天",
      },
      {
        id: "t1002",
        info: "李四的请假申请待您审批",
        name: "李四",
        date: "昨天",
      },
      {
        id: "t1003",
        info: "王五的报销单待您确认",
        name: "王五",
        date: "昨天",
      },
      {
        id: "t1004",
        info: "赵六的项目进度报告待您查看",
        name: "赵六",
        date: "前天",
      },
      {
        id: "t1005",
        info: "周七的培训申请待您处理",
        name: "周七",
        date: "前天",
      },
      {
        id: "t1006",
        info: "吴八的加班申请待您审批",
        name: "吴八",
        date: "前天",
      },
    ],
  },
  {
    id: "2",
    name: "通知公告",
    content: [
      {
        id: "t2001",
        info: "关于端午节放假安排的通知",
        name: "人事部",
        date: "今天",
      },
      {
        id: "t2002",
        info: "新版OA系统上线通知",
        name: "IT部",
        date: "昨天",
      },
      {
        id: "t2003",
        info: "年中工作总结会议通知",
        name: "办公室",
        date: "昨天",
      },
      {
        id: "t2004",
        info: "新员工入职培训安排",
        name: "培训部",
        date: "前天",
      },
      {
        id: "t2005",
        info: "办公大楼维修施工通知",
        name: "行政部",
        date: "前天",
      },
    ],
  },
  {
    id: "3",
    name: "工作提醒",
    content: [
      {
        id: "t3001",
        info: "项目周报提交提醒",
        name: "系统",
        date: "今天",
      },
      {
        id: "t3002",
        info: "考勤异常处理提醒",
        name: "系统",
        date: "昨天",
      },
      {
        id: "t3003",
        info: "费用报销截止提醒",
        name: "系统",
        date: "昨天",
      },
      {
        id: "t3004",
        info: "绩效考核填写提醒",
        name: "系统",
        date: "前天",
      },
      {
        id: "t3005",
        info: "培训课程报名截止提醒",
        name: "系统",
        date: "前天",
      },
    ],
  },
];

const cardData = [
  { id: "c001", title: "待我处理", number: "9", icon: "search" },
  { id: "c002", title: "我已处理", number: "15", icon: "check" },
  { id: "c003", title: "我发起的", number: "6", icon: "edit" },
  { id: "c004", title: "抄送我的", number: "12", icon: "mail" },
];

function MessagePending(props) {
  // 1:list  2:card
  const [modeType, setModeType] = useState("1");
  return (
    <div className="messagePending-container">
      {/* 列表 */}
      <ModeList messageList={ListData} />
      {/* 卡片 */}
      <ModeCard messageList={cardData} />
    </div>
  );
}

const ModeListRender = ({ messageList = [] }) => {
  const [curKey, setCurKey] = useState(1);

  const showChange = id => {
    console.log("change id>>", id);
    setCurKey(id);
  };

  return (
    <div className="mode-list">
      <div className="nav">
        <h4 className="title">我的待办</h4>
        <span className="more">更多</span>
      </div>
      <div className="main">
        <Tabs
          className="main-list"
          type="grid"
          activeKey={curKey}
          onChange={showChange}
        >
          {messageList.map(({ id: pid, name: title, content }) => (
            <Tabs.TabPane key={pid} tab={title}>
              <ul className="list-box">
                {content.map(({ id, info = "", name = "", date = "" }) => (
                  <li className="list-item" key={id}>
                    <div className="info">{info}</div>
                    <div className="name">{name}</div>
                    <div className="date">{date}</div>
                  </li>
                ))}
              </ul>
            </Tabs.TabPane>
          ))}
        </Tabs>
      </div>
    </div>
  );
};
const ModeList = memo(ModeListRender);

const ModeCardRender = ({ messageList = [] }) => {
  return (
    <div className="mode-card">
      <div className="nav">
        <h4 className="title">我的待办</h4>
        <Icon className="nav-icon" type="tips" />
      </div>
      <div className="main">
        {messageList.map(
          ({
            id = "",
            title = "",
            number = 0,
            icon = "medical-report",
            background = "#ccc",
          }) => (
            <div key={id} className="messageCard" style={{ background }}>
              <div className="left">
                <div className="title">{title}</div>
                <div className="number">{number}</div>
              </div>
              <div className="right">
                <Icon type="medical-report" />
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};
const ModeCard = memo(ModeCardRender);

export default MessagePending;
