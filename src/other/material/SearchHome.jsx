import React, { useState, useRef, useMemo } from "react";

import { Select, Input, Divider, Icon, Tooltip } from "@kdcloudjs/kdesign";

import useClickAway from "../../hooks/useClickAway";

function SearchHome() {
  const { Option } = Select;

  const options = [
    {
      children: "苹果苹果",
      value: "apple",
    },
    {
      children: "橘子橘子",
      value: "orange",
    },
    {
      children: "葡萄葡萄",
      value: "grape",
    },
    {
      children: "葡萄柚子",
      value: "grapefruit",
    },
  ];

  const historyList = [
    { hisRecordId: "h001", hisRecordText: "高级1" },
    { hisRecordId: "h002", hisRecordText: "高级2" },
    { hisRecordId: "h003", hisRecordText: "高级3" },
    { hisRecordId: "h004", hisRecordText: "高级4" },
  ];

  const _associationList = [
    {
      associationId: "21036370282969825391",
      associationText: "AAA标签0000101010bbbb#@$",
    },
    {
      associationId: "21036370282969825392",
      associationText: "BBB标签0000101010bbbb#@$",
    },
    {
      associationId: "21036370282969825393",
      associationText: "CCC标签0000101010bbbb#@$",
    },
  ];

  const [type, setType] = useState("grape");

  const [inpVal, setInpVal] = useState("");

  const [focus, setFocus] = useState(false);

  const [tipsVisible, setTipsVisible] = useState(false);

  const [associationList, setAsociationList] = useState(_associationList);

  const isHistory = useMemo(() => inpVal == "", [inpVal]);

  const containerRef = useRef(null);

  const tipsRef = useRef(null);

  const inpRef = useRef(null);

  useClickAway(() => setTipsVisible(false), [tipsRef, inpRef]);

  const focusHandle = () => {
    setFocus(true);
    setTipsVisible(true);
  };

  const blurHandle = () => {
    setFocus(false);
  };

  const searchHandle = () => {
    console.log("searchHandle");
  };

  const changeInp = e => {
    const value = e.target.value;
    console.log("changeInp", value);
    setInpVal(value);
  };

  const delHis = hisRecordId => {};

  const selectHis = ({ hisRecordId, hisRecordText }) => {
    setInpVal(hisRecordText);
    setTipsVisible(false);
  };

  const selectAssociation = ({ associationId, associationText }) => {
    setInpVal(associationText);
    setTipsVisible(false);
  };

  const tipsDom = (
    <div className="tips-wrapper" ref={tipsRef}>
      {isHistory && (
        <div className="nav">
          <span className="title">历史记录</span>
          <span className="clear">清空</span>
        </div>
      )}
      <div className="info">
        <ul className="list">
          {isHistory &&
            historyList.map(({ hisRecordId = "", hisRecordText = "" }) => (
              <li className="item" key={hisRecordId}>
                <div
                  className="txt"
                  onClick={() => selectHis({ hisRecordId, hisRecordText })}
                >
                  {hisRecordText}
                </div>
                <div className="icon">
                  <Icon type="delete" onClick={() => delHis(hisRecordId)} />
                </div>
              </li>
            ))}
          {!isHistory &&
            associationList.map(
              ({ associationId = "", associationText = "" }) => (
                <li className="item asso" key={associationId}>
                  <div
                    className="txt"
                    onClick={() =>
                      selectAssociation({ associationId, associationText })
                    }
                  >
                    {associationText}
                  </div>
                </li>
              )
            )}
        </ul>
      </div>
    </div>
  );

  return (
    <div className={`search-wrapper ${focus ? "focus" : ""}`}>
      <Tooltip
        arrow={false}
        visible={tipsVisible}
        placement={"bottom"}
        tip={() => tipsDom}
        getPopupContainer={() => containerRef.current}
        popperOuterClassName={"outer"}
        popperClassName={"inner"}
      >
        <div ref={containerRef} className="search-box">
          <Select
            size="middle"
            value={type}
            showSearch
            optionFilterProp="children"
            borderType="none"
            suffixIcon={<Icon type="arrow-down-solid" />}
            onChange={val => setType(val)}
            style={{
              width: 110,
              padding: "0 0 0 20px",
            }}
          >
            {options.map(item => {
              return (
                <Option value={item.value} key={item.value}>
                  {item.children}
                </Option>
              );
            })}
          </Select>
          <Divider
            type="vertical"
            style={{
              margin: "0 8px 0 4px",
            }}
          />
          <div className="inp-wrapper" ref={inpRef}>
            <Input
              value={inpVal}
              allowClear
              borderType="none"
              onBlur={blurHandle}
              onFocus={focusHandle}
              onClick={focusHandle}
              onChange={changeInp}
            />
          </div>
          <Icon type="search" className="search-icon" onClick={searchHandle} />
        </div>
      </Tooltip>
    </div>
  );
}

export default SearchHome;
