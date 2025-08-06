import React, { useState, useRef, useMemo } from "react";

import { Select, Input, Divider, Icon, Tooltip } from "@kdcloudjs/kdesign";

import useClickAway from "../../hooks/useClickAway";

// 简中更新==>同步到简中、繁体
// 繁体更新==>繁体更新
// 繁体都是把简中发给后端===》转为繁体（也可使用chinese-conv三方库转换）
// 其他语言独立

const _langTypeList = [
  {
    name: "简体中文",
    type: "cn_zh",
  },
  {
    name: "繁體中文",
    type: "cn_tw",
  },
  {
    name: "English",
    type: "en",
  },
  {
    name: "Français",
    type: "fr",
  },
];

const resolveLangTypeList = (allLangTypeList) => {
  const isTW = allLangTypeList.some(({ type }) => type == "cn_tw");
  const langTypeList = allLangTypeList.filter(
    ({ type }) => type !== "cn_tw" && type !== "cn_zh"
  );

  return { isTW, langTypeList };
};

function MultiLangSetting2() {
  const [inpVal_zh, setInpVal_zh] = useState("图形");
  const [inpVal_tw, setInpVal_tw] = useState("圖形");

  const { isTW, langTypeList } = resolveLangTypeList(_langTypeList);

  const [langValues, setLangValues] = useState({
    en: "graphic",
    fr: "Graphique",
  });

  const handleLangChange = (type, value) => {
    setLangValues((prev) => ({
      ...prev,
      [type]: value,
    }));
  };

  const containerRef = useRef(null);
  const trigglerRef = useRef(null);

  const changeZH = (val) => {
    setInpVal_zh(val);
    setInpVal_tw(val);
  };

  const changeTW = (val) => {
    if (!isTW) return;
    setInpVal_tw(val);
  };

  const tipDom = (
    <div className="tips-inp">
      <div className="form-item">
        <div className="label">简体中文</div>
        <Input
          borderType="border"
          value={inpVal_zh}
          onChange={(e) => changeZH(e.target.value)}
        />
      </div>
      {isTW && (
        <div className="form-item">
          <div className="label">繁體中文</div>
          <Input
            borderType="border"
            value={inpVal_tw}
            onChange={(e) => changeTW(e.target.value)}
          />
        </div>
      )}
      {langTypeList.map(({ name = "", type }) => (
        <div className="form-item">
          <div className="label">{name}</div>
          <Input
            borderType="border"
            defaultValue={langValues[type]}
            onChange={(e) => handleLangChange(type, e.target.value)}
          />
        </div>
      ))}
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
      >
        <span />
      </Tooltip>
    </div>
  );
}

export default MultiLangSetting2;
