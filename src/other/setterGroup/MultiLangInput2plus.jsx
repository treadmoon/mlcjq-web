import React, { useState, useRef, useMemo } from "react";

import { s2t } from "./multiLang_utils";

import { Select, Input, Divider, Icon, Tooltip } from "@kdcloudjs/kdesign";
import { lowerCase } from "lodash";

const _langTypeList = [
  {
    name: "简体中文",
    type: "cn_zh",
    main: true,
    coverType: ["cn_tw"],
  },
  {
    name: "繁體中文",
    type: "cn_tw",
    main: false,
    coverType: [],
  },
  {
    name: "English",
    type: "en",
    main: false,
    coverType: ["fr"],
  },
  {
    name: "Français",
    type: "fr",
    main: false,
    coverType: [],
  },
];

function MultiLangInput2plus() {
  const initData = {
    cn_zh: "初始化内容",
    fr: "frfrfr",
  };
  const mainLangObj = useMemo(() => _langTypeList.find(({ main }) => main), []);

  const [main_val, setMain_val] = useState(initData[mainLangObj.type]??"默认值");

  const langTypeList = _langTypeList;

  const langTypeListMap = useMemo(() => {
    const res = {};
    langTypeList.map((item) => {
      res[item.type] = item;
    });
    return res;
  }, [langTypeList]);

  const [langValues, setLangValues] = useState(() => {
    const res = _langTypeList.reduce((res, cur) => {
      res[cur.type] = initData[cur.type]??"";
      return res;
    }, {});
    return res;
  });

  const switchStr = ({ sourceType, targetType, str }) => {
    const _sourceType=sourceType.toLowerCase()
    const _targetType=targetType.toLowerCase()
    if (_sourceType == "cn_zh") {
      switch (_targetType) {
        case "cn_tw":
          return s2t(str);
        default:
          return str;
      }
    }

    return str;
  };

  const handleLangChange = (type, value) => {
    const coverTypeChange = {};

    langTypeListMap[type].coverType.map((_type) => {
      coverTypeChange[_type] = switchStr({
        sourceType: type,
        targetType: _type,
        str: value,
      });
    });

    if (type === mainLangObj.type) {
      setMain_val(value);
    }

    setLangValues((prev) => {
      return {
        ...prev,
        ...coverTypeChange,
        [type]: value,
      };
    });
  };

  const containerRef = useRef(null);
  const trigglerRef = useRef(null);

  const mainInpChange = (val) => {
    setMain_val(val);
    handleLangChange(mainLangObj.type, val);
  };

  const tipDom = (
    <div className="tips-inp">
      {langTypeList.map(({ name = "", type }) => (
        <div className="form-item">
          <div className="label">{name}</div>
          <Input
            borderType="border"
            value={langValues?.[type]??""}
            onChange={(e) => handleLangChange(type, e.target.value)}
          />
        </div>
      ))}
    </div>
  );

  return (
    <div className="multiLangSetting-container" ref={containerRef}>
      <Input
        value={main_val}
        borderType="border"
        onChange={(e) => mainInpChange(e.target.value)}
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

export default MultiLangInput2plus;
