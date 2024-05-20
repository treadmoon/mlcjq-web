import React, {
  useEffect,
  useMemo,
  useState,
  useDebugValue,
  useReducer,
} from "react";

const initObj = {
  age: 16,
  name: "m",
};

function init(initialCount) {
  return { count: initialCount };
}

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    case "reset":
      return init(action.payload);
    default:
      throw new Error();
  }
}

console.log("Usestate 外面");

function Usestate(props) {
  const [stu1, setStu1] = useState(initObj);
  const [stu2, setStu2] = useState(initObj);

  useDebugValue(stu1.age > 18 ? "Online" : "Offline");

  const [state, dispatch] = useReducer(reducer, 1, init);

  const stu1age = `i am stu1, ${stu1.age} years old`;

  const sub2key = useMemo(() => `sub2key${new Date().getTime()}`, [stu1]);

  useEffect(() => {
    console.log("effect");
    return () => {
      console.log("uneffect");
    };
  });

  return (
    <div>
      <div>
        <p>{state.count}</p>
        stu1:{stu1.age}
        {stu1age}
      </div>
      <div>stu2:{stu2.age}</div>
      <input
        type="text"
        value={stu1.name}
        onChange={(e) => {
          console.log(e);
          setStu1((pre) => {
            pre.name = e.target.value;
            return {
              ...pre,
            };
          });
        }}
      />
      <button
        onClick={() => {
          setStu1((pre) => {
            pre.age++;
            return {
              ...pre,
            };
          });
        }}
      >
        up stu1 age
      </button>

      {/* <Sub {...stu1} /> */}
      <p>sub2key:{sub2key}</p>
      <Sub2 {...stu1} key={sub2key} />
      <p>{[1, 2, 3].join()}</p>
    </div>
  );
}

function Sub({ age, name }) {
  const iage = useMemo(() => `i am ${age}`, [age]);
  const iname = useMemo(() => `i am ${name}`, [name]);
  return (
    <div>
      <p>{age}</p>
      <p>{iage}</p>
      <p>{iname}</p>
    </div>
  );
}

function Sub2() {
  const [txt, setTxt] = useState("init");

  return (
    <div>
      <input type="text" value={txt} onChange={(e) => setTxt(e.target.value)} />
    </div>
  );
}

export default Usestate;
