import React, { useState, useRef, useMemo } from "react";

import { Select, Input, Divider, Icon, Tooltip } from "@kdcloudjs/kdesign";


function MultiLangSetting() {
  const [inpVal_zh, setInpVal_zh] = useState("图形");
  const [inpVal_tw, setInpVal_tw] = useState("图形tw");
  const [inpVal_en, setInpVal_en] = useState("图形en");

  const containerRef = useRef(null);
  const trigglerRef = useRef(null);

  const changeZH = (val) => {
    setInpVal_zh(val);
    setInpVal_tw(val);
  };
  const changeTW = (val) => {
    setInpVal_tw(val);
  };
  const changeEN = (val) => {
    setInpVal_en(val);
  };

  const tipDom = (
    <div className="tips-inp">
      <div className="form-item">
        <div className="label">English</div>
        <Input
          borderType="border"
          value={inpVal_en}
          onChange={(e) => changeEN(e.target.value)}
        />
      </div>
      <div className="form-item">
        <div className="label">简体中文</div>
        <Input
          borderType="border"
          value={inpVal_zh}
          onChange={(e) => changeZH(e.target.value)}
        />
      </div>
      <div className="form-item">
        <div className="label">繁體中文</div>
        <Input
          borderType="border"
          value={inpVal_tw}
          onChange={(e) => changeTW(e.target.value)}
        />
      </div>
    </div>
  );

  return (
    <div className="multiLangSetting-container" ref={containerRef}>
      <Input
        value={inpVal_zh}
        borderType="border"
        onChange={(e) => changeZH(e.target.value)}
        suffix={<Icon type="international" ref={trigglerRef} />}
      />
      <Tooltip
        placement="bottom"
        arrow={false}
        trigger={"click"}
        tip={() => tipDom}
        getPopupContainer={() => containerRef.current}
        getTriggerElement={() => trigglerRef.current}
        popperOuterClassName={"popperOuter"}
      ><span/></Tooltip>
    </div>
  );
}

export default MultiLangSetting;
