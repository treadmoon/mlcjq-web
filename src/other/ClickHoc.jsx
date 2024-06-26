import React, { useEffect, useRef } from "react";

function ClickHoc(Component) {
  return function Wrap(props) {
    const dom = useRef(null);
    useEffect(() => {
      const handerClick = () => console.log("发生点击事件");
      dom.current.addEventListener("click", handerClick);
      return () => dom.current.removeEventListener("click", handerClick);
    }, []);
    return (
      <div ref={dom}>
        <Component {...props} />
      </div>
    );
  };
}

const Index = ClickHoc(() => {
  return (
    <div className="index">
      <p>hello，world</p>
      <button>组件内部点击</button>
    </div>
  );
});

export default ClickHoc = () => {
  return (
    <div className="box">
      <Index />
      <button>组件外部点击</button>
    </div>
  );
};
