import React, { useEffect, useState } from "react";

function UpTiming2() {
  console.log("load root");
  const [name] = useState("ming");
  return (
    <div>
      <h4>root component</h4>
      <LoadAge>
        <Child2 name={name} />
      </LoadAge>
      <Container sex="female">
        {(ContainerProps) => <Child2 name="lisa" {...ContainerProps} />}
      </Container>
    </div>
  );
}

function LoadAge({ children }) {
  const [age, setAge] = useState(12);
  console.log(children);
  return (
    <>
      <Child1 age={age} />
      {children}
      <button
        onClick={() => {
          setAge((pre) => pre + 1);
          // setTimeout(() => {
          //   setAge((pre) => pre + 1);
          //   console.log("age", age);
          // }, 1000);
        }}
      >
        add age
      </button>
    </>
  );
}

function Container({ children, sex }) {
  const ContainerProps = {
    sex,
    age: 19,
  };
  return children(ContainerProps);
}

function Child1({ age }) {
  console.log("load Child1");

  useEffect(() => {
    console.log("Child1 useEffect");
  }, []);

  return (
    <>
      <div>Child1:{age}</div>
    </>
  );
}

function Child2({ name, sex = "male" }) {
  console.log("load Child2");
  return (
    <>
      <div>
        i am {name},<i>{sex}</i>
      </div>
    </>
  );
}

export default UpTiming2;
