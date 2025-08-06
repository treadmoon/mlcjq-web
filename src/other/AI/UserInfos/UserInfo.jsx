import React, { useState } from "react";
import { Icon } from "@kdcloudjs/kdesign";
import "./UserInfo.less";

function hiddenMid(target){
  let res=target[0]
  for (let i = 1; i < target.length-1; i++) {
    res+="*"
    
  }
  res+=target[target.length-1]

  return res
}

function UserInfo() {
  const [phoneShow, setPhoneShow] = useState(false);
  const [emailShow, setEmailShow] = useState(false);
  const phoneNumber = "13800138000"; // 假设完整电话号码
  const email = "example@example.com"; // 假设完整邮箱

  return (
    <div className="user-info">
      <img
        src="https://kui.kingdee.com/assets/image/avatar_m.png" // 替换为实际头像地址
        alt="用户头像"
        className="avatar"
      />
      <div className="info">
        <div className="top-line">
          <span className="name">别晓楠</span>
          <span className="number">388607</span>
          <span className="phone">
            <Icon type="phone" />
            {phoneShow ? phoneNumber : phoneNumber.replace(/(\d{1})\d+(\d{1})/, '$1*********$2') }
            <button
              onClick={() => setPhoneShow(!phoneShow)}
              className="toggle-btn"
            >
              {phoneShow ? <Icon type="hide" /> : <Icon type="preview" />}
            </button>
          </span>
          <span className="email">
            <Icon type="cell" />
            {emailShow ? email :  hiddenMid(email)}
            <button
              onClick={() => setEmailShow(!emailShow)}
              className="toggle-btn"
            >
              {emailShow  ? <Icon type="hide" /> : <Icon type="preview" />}
            </button>
          </span>
        </div>
        <div className="bottom-line">
          <span>性别：男</span>
          <span className="age">年龄：35</span>
        </div>
      </div>
    </div>
  );
}

export default UserInfo;
