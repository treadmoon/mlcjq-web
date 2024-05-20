import React, { useEffect, useState } from "react";
import useGetState from "../hooks/useGetState";

function TestHooks() {
  const [show, setShow] = useState(true);

  return (
    <>
      <button onClick={() => setShow((pre) => !pre)}>toggle</button>
      {show && <Info />}
      <div style={{ display: show ? "" : "none" }}>
        <Info />
      </div>
    </>
  );
}

function Info() {
  const [age, setAge] = useState(10);
  return (
    <>
      <h4>{age}</h4>
      <button onClick={() => setAge((pre) => pre + 1)}>add age</button>
    </>
  );
}

function TestHooks2(props) {
  console.log("load TestHooks");
  const [num, setNum, getNum] = useGetState(0);

  //   useEffect(() => {
  //     setInterval(() => {
  //       console.log("num", getNum());
  //     }, 3000);
  //   }, []);

  return (
    <div>
      <h4>TestHooks</h4>
      <p>num:{num}</p>
      <button
        onClick={() => {
          setNum((pre) => pre + 1);
        }}
      >
        add
      </button>
    </div>
  );
}

export default TestHooks;
