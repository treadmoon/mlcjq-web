import React from "react";

import { useChart } from "../store/tZustand";

function ZustandPage(props) {
  return (
    <div>
      <Tutorial />
    </div>
  );
}

function Tutorial() {
  const { name="", upName =""} = useChart(e=>e);
  // const { name="", upName=()=>{} } = useChart(({ name, upName }) => ({
  //   name,
  //   upName,
  // }));

  return (
    <div>
      <h4>Tutorial：{name}</h4>
      <input
        type="text"
        value={name}
        onChange={(e) => {
          upName(e.target.value);
        }}
      />
    </div>
  );
}

export default ZustandPage;
