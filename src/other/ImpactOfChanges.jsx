import React, { useRef, memo, useState } from "react";

function ImpactOfChanges(props) {
  console.log("main");
  const [name, setName] = useState("ming");
  const levelRef = useRef(1);

  return (
    <div>
      <h4>main</h4>
      <button
        onClick={() => {
          console.log(levelRef);
        }}
      >
        log level
      </button>
      <button
        onClick={() => {
          levelRef.current = (Math.random() * 100).toFixed();
        }}
      >
        up level
      </button>
      <p>name: {name}</p>
      <Sub1 setName={setName} />
      <Sub2 />
      <Sub3 />
      <Sub4 levelRef={levelRef} />
    </div>
  );
}

function Sub1({ setName }) {
  console.log("sub1");
  return (
    <div className="sub1">
      <h4>sub1</h4>
      <input
        type="text"
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
    </div>
  );
}

function Sub2() {
  console.log("sub2");
  const [age, setAge] = useState("12");
  return (
    <div className="sub3">
      <h4>sub2:{age}</h4>
      <input
        type="text"
        onChange={(e) => {
          setAge(e.target.value);
        }}
      />
    </div>
  );
}

const Sub3 = memo(() => {
  console.log("sub3");
  return (
    <div className="sub3">
      <h4>sub3</h4>
    </div>
  );
});

function Sub4({ levelRef }) {
  console.log("sub4");
  return (
    <div className="sub3">
      <h4>sub4</h4>
      <input
        type="text"
        defaultValue={levelRef.current}
        onChange={(e) => {
          levelRef.current = e.target.value;
        }}
      />
    </div>
  );
}

export default ImpactOfChanges;
