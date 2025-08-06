import React, { useEffect, useCallback, useState, useMemo } from "react";

import { Input, Switch } from "@kdcloudjs/kdesign";

const formItemList = [
  { msgProcessId: "c01", name: "待办任务", isshow: true },
  { msgProcessId: "c02", name: "已办任务", isshow: true },
  { msgProcessId: "c03", name: "待办申请", isshow: false },
];

function DinamicForm(props) {
  // const {onChange=()=>{}}=props

  const initFormValue = useMemo(
    () =>
      formItemList.reduce((acc, item) => {
        acc[`${item.msgProcessId}_isshow`] = item.isshow;
        acc[`${item.msgProcessId}_name`] = item.name;
        return acc;
      }, {}),
    []
  );

  const [formData, setFormData] = useState(initFormValue);

  useEffect(() => {
    formItemList.forEach(item => {
      item.isshow = formData[`${item.msgProcessId}_isshow`];
      item.name = formData[`${item.msgProcessId}_name`];
    });
    // onChange(formItemList)
  }, [formData]);

  const memoizedFormItems = useMemo(
    () =>
      formItemList.map(item => ({
        ...item,
        showKey: `${item.msgProcessId}_isshow`,
        nameKey: `${item.msgProcessId}_name`,
      })),
    []
  );

  const handleChange = useCallback((key, value) => {
    setFormData(prev => ({ ...prev, [key]: value }));
  }, []);

  return (
    <div className="dyform-container">
      {memoizedFormItems.map(item => (
        <div className="form-item" key={item.msgProcessId}>
          <div className="form-item-main">
            <div className="label">{item.name}</div>
            <Switch
              checked={formData?.[item.showKey]}
              onChange={v => handleChange(item.showKey, v)}
            />
          </div>
          <div
            className={`form-item-sub ${
              formData?.[item.showKey] ? "" : "hidden"
            }`}
          >
            <div className="label">{"显示别名"}</div>
            <Input
              borderType="border"
              value={formData?.[item.nameKey]}
              onChange={e => handleChange(item.nameKey, e.target.value)}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export default DinamicForm;
