import React from "react";
import { Tabs, Button, Avatar } from "@kdcloudjs/kdesign";

import "./personnelTab.less";
import "@kdcloudjs/kdesign/dist/kdesign.css";

const url =
  "https://feature.kingdee.com:1026/feature_sit_hr/private/subscribe_pic2.png?v=1.0";

const data = [
  {
    id: 1,
    name: "生日祝福",
    content: [
      {
        id: "1",
        name: "许百多",
        headImg: url,
        entryTime: "2020/07/02",
        birthDay: "1998/12/07",
      },
      {
        id: "2",
        name: "李四",
        headImg: url,
        entryTime: "2019/05/12",
        birthDay: "1990/11/23",
      },
      {
        id: "3",
        name: "王五",
        headImg: url,
        entryTime: "2018/03/15",
        birthDay: "1985/07/19",
      },
      {
        id: "4",
        name: "赵六",
        headImg: url,
        entryTime: "2021/01/20",
        birthDay: "1992/09/30",
      },
      {
        id: "5",
        name: "孙七",
        headImg: url,
        entryTime: "2017/08/25",
        birthDay: "1988/05/14",
      },
      {
        id: "6",
        name: "周八",
        headImg: url,
        entryTime: "2016/11/30",
        birthDay: "1995/02/28",
      },
      {
        id: "7",
        name: "吴九",
        headImg: url,
        entryTime: "2020/06/10",
        birthDay: "1993/04/22",
      },
      {
        id: "8",
        name: "郑十",
        headImg: url,
        entryTime: "2019/09/05",
        birthDay: "1991/10/10",
      },
      {
        id: "9",
        name: "冯十一",
        headImg: url,
        entryTime: "2018/12/12",
        birthDay: "1987/03/18",
      },
    ],
  },
  {
    id: 2,
    name: "入职周年",
    content: [
      {
        id: "1",
        name: "蛮300刀",
        headImg: url,
        entryTime: "2020/07/02",
        birthDay: "1998/12/07",
      },
      {
        id: "2",
        name: "李四",
        headImg: url,
        entryTime: "2019/05/12",
        birthDay: "1990/11/23",
      },
      {
        id: "3",
        name: "王五",
        headImg: url,
        entryTime: "2018/03/15",
        birthDay: "1985/07/19",
      },
      {
        id: "4",
        name: "赵六",
        headImg: url,
        entryTime: "2021/01/20",
        birthDay: "1992/09/30",
      },
      {
        id: "5",
        name: "孙七",
        headImg: url,
        entryTime: "2017/08/25",
        birthDay: "1988/05/14",
      },
      {
        id: "6",
        name: "周八",
        headImg: url,
        entryTime: "2016/11/30",
        birthDay: "1995/02/28",
      },
      {
        id: "7",
        name: "吴九",
        headImg: url,
        entryTime: "2020/06/10",
        birthDay: "1993/04/22",
      },
      {
        id: "8",
        name: "郑十",
        headImg: url,
        entryTime: "2019/09/05",
        birthDay: "1991/10/10",
      },
      {
        id: "9",
        name: "冯十一",
        headImg: url,
        entryTime: "2018/12/12",
        birthDay: "1987/03/18",
      },
    ],
  },
];

function PersonnelTab() {
  const [curKey, setCurKey] = React.useState(1);

  const tabStyle = {
    marginBottom: "15px",
  };

  const showChange = (id) => {
    setCurKey(id);
  };

  return (
    <div className="personnel-tab-container">
      <div className="header">
        <div className="title">员工关怀</div>
        <div className="link-more">更多</div>
      </div>
      <Tabs
        type="grid"
        activeKey={curKey}
        onChange={showChange}
        style={tabStyle}
      >
        {data.slice(0, 20).map((item) => (
          <Tabs.TabPane key={item.id} tab={item.name}>
            <div className="personal-card-box">
              {(item.content ?? []).map((item) => {
                return (
                  <div className="personal-card">
                    <div className="personal-card-header">
                      <div
                        className="avatar-border"
                        style={{
                          position: "absolute",
                          width: "88px",
                          height: "88px",
                          borderRadius: "50%",
                          background:
                            "linear-gradient(45deg, #1890ff, #52c41a)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      ></div>
                      <Avatar src={item.headImg} alt={item.name} size={80} />
                      <div className="personal-card-hover">
                        <Button type="primary" size="small">
                          去祝福
                        </Button>
                      </div>
                    </div>
                    <div className="personal-card-body">
                      <div className="personal-card-entryTime">
                        {item.entryTime}
                      </div>
                      <div className="personal-card-name">{item.name}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </Tabs.TabPane>
        ))}
      </Tabs>
    </div>
  );
}

export default PersonnelTab;
