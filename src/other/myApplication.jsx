import React, { useMemo, useState ,useEffect } from "react";
import "./myApplication.less";

const url =
  "https://feature.kingdee.com:1026/feature_sit_hr/kingdee/hr/images/pc/icon/entrance/hr_hxrdxxz_48_48.png";

const _data = [
  {
    id: "app1",
    type: "1",
    typeName: "招聘",
    topApp: true,
    appName: "我的面试",
    appIcon: url,
  },
  {
    id: "app2",
    type: "2",
    typeName: "入职",
    topApp: true,
    appName: "入职报到",
    appIcon: url,
  },
  {
    id: "app3",
    type: "3",
    typeName: "培训",
    topApp: false,
    appName: "在线学习",
    appIcon: url,
  },
  {
    id: "app4",
    type: "4",
    typeName: "考勤",
    topApp: true,
    appName: "考勤打卡",
    appIcon: url,
  },
  {
    id: "app5",
    type: "5",
    typeName: "薪酬",
    topApp: false,
    appName: "工资条",
    appIcon: url,
  },
  {
    id: "app6",
    type: "6",
    typeName: "绩效",
    topApp: true,
    appName: "绩效考核",
    appIcon: url,
  },
  {
    id: "app7",
    type: "7",
    typeName: "假勤",
    topApp: false,
    appName: "请假申请",
    appIcon: url,
  },
  {
    id: "app8",
    type: "1",
    typeName: "招聘",
    topApp: false,
    appName: "简历筛选",
    appIcon: url,
  },
  {
    id: "app9",
    type: "2",
    typeName: "入职",
    topApp: false,
    appName: "入职引导",
    appIcon: url,
  },
  {
    id: "app10",
    type: "3",
    typeName: "培训",
    topApp: true,
    appName: "培训课程",
    appIcon: url,
  },
  {
    id: "app11",
    type: "4",
    typeName: "考勤",
    topApp: false,
    appName: "加班申请",
    appIcon: url,
  },
  {
    id: "app12",
    type: "5",
    typeName: "薪酬",
    topApp: true,
    appName: "薪资查询",
    appIcon: url,
  },
  {
    id: "app13",
    type: "6",
    typeName: "绩效",
    topApp: false,
    appName: "目标设定",
    appIcon: url,
  },
  {
    id: "app14",
    type: "7",
    typeName: "假勤",
    topApp: true,
    appName: "出差申请",
    appIcon: url,
  },
  {
    id: "app15",
    type: "1",
    typeName: "招聘",
    topApp: false,
    appName: "人才库",
    appIcon: url,
  },
  {
    id: "app16",
    type: "2",
    typeName: "入职",
    topApp: false,
    appName: "入职材料",
    appIcon: url,
  },
  {
    id: "app17",
    type: "3",
    typeName: "培训",
    topApp: true,
    appName: "考试中心",
    appIcon: url,
  },
  {
    id: "app18",
    type: "4",
    typeName: "考勤",
    topApp: false,
    appName: "考勤统计",
    appIcon: url,
  },
  {
    id: "app19",
    type: "5",
    typeName: "薪酬",
    topApp: true,
    appName: "福利管理",
    appIcon: url,
  },
  {
    id: "app20",
    type: "6",
    typeName: "绩效",
    topApp: false,
    appName: "绩效面谈",
    appIcon: url,
  },
];

const useContainerWidth = (ref) => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const updateWidth = () => {
      if (ref.current) {
        setWidth(ref.current.offsetWidth);
      }
    };

    updateWidth();
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, [ref]);

  return width;
};

function MyApplication(props) {
  const useSort = true;

  const [data, setData] = useState(_data ?? []);

  const [currType, setCurrType] = useState("normal");

  const containerRef = React.useRef(null);

  const containerWidth = useContainerWidth(containerRef);
  
  const currList = useMemo(() => {
    const itemsPerRow = Math.floor((containerWidth - 48) / 108)-1; // 108px为每个应用项的宽度，48px为容器padding
    console.log("个数",itemsPerRow);
    
    if (!useSort) return data.slice(0, itemsPerRow);
    return data
      .filter(item => {
        if (currType == "normal") {
          return item.topApp;
        } else {
          return item.type == currType;
        }
      })
      .slice(0, itemsPerRow);
  }, [data, currType,containerWidth]);

  const typeList = useMemo(() => {
    const uniqueTypes = new Set();
    return data.reduce((acc, item) => {
      if (!uniqueTypes.has(item.type)) {
        uniqueTypes.add(item.type);
        acc.push({
          type: item.type,
          typeName: item.typeName,
        });
      }
      return acc;
    }, []);
  }, [data]);

  const AddNewApp = () => {
    const id = `app${data.length + 1}`;
    const newApp = {
      id,
      type: "1",
      typeName: "招聘",
      topApp: false,
      appName: "新应用" + id,
      appIcon: url,
    };
    setData([newApp, ...data]);
  };

  return (
    <div className="my-application-container">
      <div className="header">
        <div className="title">我的应用</div>
      </div>
      <div className="body">
        {useSort && (
          <div className="nav">
            <div
              className={`nav-item ${currType === "normal" ? "active" : ""}`}
              onClick={() => setCurrType("normal")}
            >
              常用应用
            </div>
            {(typeList ?? []).map(({ typeName, type }) => (
              <div
                onClick={() => setCurrType(type)}
                className={`nav-item ${currType === type ? "active" : ""}`}
              >
                {typeName}
              </div>
            ))}
          </div>
        )}
        <div className="list" ref={containerRef}>
          {(currList ?? []).map(({ id = "", appIcon = "", appName = "" }) => {
            return (
              <div key={id} className="list-item">
                <div className="app-icon">
                  <img src={appIcon} alt="icon" />
                </div>
                <div className="app-name">{appName}</div>
              </div>
            );
          })}
          <div className="list-item">
            <div className="app-icon" onClick={() => AddNewApp()}>
              <img
                src={
                  "https://feature.kingdee.com:1026/feature_sit_hr/icons/pc/entrance/addicon_48_48.png?v=1.0"
                }
                alt="icon"
              />
            </div>
            <div className="app-name">添加应用</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyApplication;
