import React from "react";
import { NavLink } from "react-router-dom";

import "./head.less";

function Head(props) {
  const navs = [
    { path: "/", name: "只因", sub: "键盘撒一把米" },
    // { path: "/langDoc", name: "文档", sub: "记不住" },
    // { path: "/notes", name: "借鉴", sub: "不算抄袭" },
    // { path: "/minPg", name: "改编", sub: "不是乱编" },
    // { path: "/posts", name: "看书", sub: "看懂了就是我的" },
  ];

  return (
    <div className="nav-container">
      {navs.map(item => {
        return (
          <NavLink className="nav-link" key={item.path} to={item.path}>
            {item.name}
            <span className="sub">{item.sub}</span>
          </NavLink>
        );
      })}
    </div>
  );
}

export default Head;
