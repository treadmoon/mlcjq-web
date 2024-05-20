import React, { useState, useRef, useEffect } from "react";

import "./FiltBoard.less";

function FiltBoard2() {
  return (
    <div className="FiltBoard2">
      <div className="txt">
        测试文字测试文字测试文字测试文字测试文字测试文字测试文字
      </div>
      <span className="icon">X</span>
    </div>
  );
}

function FiltBoard(props) {
  const [filtParams, setFiltParams] = useState({
    name: "m",
    age: 14,
    level: 1,
  });
  return (
    <div>
      <h4>main key:{filtParams.name + filtParams.age}</h4>
      <button
        onClick={() => {
          setFiltParams({
            name: "mei" + (Math.random() * 10).toFixed(),
            age: (Math.random() * 100).toFixed(),
            level: (Math.random() * 10).toFixed(),
          });
        }}
      >
        chang filtparams
      </button>
      <Filt key={filtParams.name + filtParams.age} filtParams={filtParams} />
    </div>
  );
}

function Filt({ filtParams }) {
  console.log("Load Filt filtParams", filtParams);

  const filtRef = useRef(filtParams);

  return (
    <div>
      <h4>filt</h4>
      <p>
        <button onClick={() => console.log(filtRef.current)}>log filt</button>
      </p>
      <input
        type="text"
        defaultValue={filtRef.current.name}
        onChange={(e) => {
          filtRef.current.name = e.target.value;
        }}
      />
    </div>
  );
}

export default FiltBoard2;
