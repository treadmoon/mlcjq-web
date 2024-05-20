import React, { useEffect, useLayoutEffect, useState, useRef } from "react";

function LifeCycle(props) {
  const [show, setShow] = useState(true);
  return (
    <div>
      {show && (
        <Sub>
          <h4>标题</h4>
        </Sub>
      )}
      {!show && <h4>loading……</h4>}
      <button
        onClick={() => {
          setShow((pre) => !pre);
        }}
      >
        Toogle
      </button>
    </div>
  );
}

function Sub({ children }) {
  const first = useRef(false);

  console.log("first", first.current);

  useEffect(() => {
    first.current = true;
    console.log("sub useEffect 初次");
  }, []);

  useLayoutEffect(() => {
    console.log("sub useLayoutEffect 初次");
  }, []);

  useLayoutEffect(() => {
    console.log("sub useLayoutEffect 依托children");
  }, [children]);

  return <div>{children}i am sub</div>;
}

export default LifeCycle;
