import React, { useState, useRef, useMemo } from "react";

import { Carousel, Icon, Popconfirm, Tooltip } from "@kdcloudjs/kdesign";
import { Button } from "@kdcloudjs/kdesign";

function IBanner() {
  const [clist, setClist] = useState([
    { id: "1001", name: "1001" },
    { id: "1002", name: "1002" },
    { id: "1003", name: "1003" },
  ]);

  const popRef = useRef();

  const itemStyle = {
    backgroundColor: "#e9e",
    height: "160px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#212121",
    width: 1000,
  };
  const style = {
    width: 1000,
    height: 160,
  };

  const [vtip, setVtip] = useState(false);

  return (
    <div style={style}>
      <div>
        <Popconfirm message="你确定要删除这个任务吗？">
          <Icon type="delete" ref={popRef} />
        </Popconfirm>

        <Tooltip
          className="kkk"
          popperClassName={"popperClassName"}
          popperOuterClassName={"popperOuterClassName"}
          trigger={"hover"}
          // visible={vtip}
          getTriggerElement={() => popRef.current}
          // getPopupContainer={()=>document.body}
          tip="一行最多显示20个字符，超过的字符可折行显示，建议最多不要超过40个字符"
        >
          {""}
        </Tooltip>
      </div>
      <br />
      <Button
        onClick={() => {
          setClist((pre) => pre.slice(1));
        }}
      >
        del
      </Button>
      {JSON.stringify(clist)}
      <Carousel autoplay={true} intervalTime={1000}>
        {clist.map(({ id, name }) => (
          <div key={id} style={itemStyle}>
            <h3>{name}</h3>
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default IBanner;
