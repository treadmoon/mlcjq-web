import React, {
  useState,
  useContext,
  createContext,
  useEffect,
  useCallback,
} from "react";

const ProxyContext = createContext({});

function UpTiming(props) {
  const { add } = useContext(ProxyContext);
  return (
    <div>
      <Pub>
        <div className="container">
          <h4>main page</h4>
          <Sub />
          <Sub2 />
        </div>
      </Pub>
    </div>
  );
}

function UseProxy() {
  const [list, setList] = useState([]);
  const add = useCallback((newitem) => {
    setList((pre) => [...pre, newitem]);
  }, []);

  return {
    add,
  };
}

function Pub({ children }) {
  console.log("pub");
  const proxyer = UseProxy();
  return (
    <ProxyContext.Provider value={proxyer}>
      <div>
        <h4>Pub</h4>
        {children}
      </div>
    </ProxyContext.Provider>
  );
}

function Sub() {
  console.log("sub");
  const { add } = useContext(ProxyContext);
  const [txt, upTxt] = useState(1);

  useEffect(() => {
    add((Math.random() * 100).toFixed(0));
  }, []);

  return (
    <div>
      <h4>Sub</h4>
      <button
        onClick={() => {
          add((Math.random() * 100).toFixed(0));
        }}
      >
        add
      </button>
      <div>{txt}</div>
      <button
        onClick={() => {
          upTxt((Math.random() * 100).toFixed(0));
        }}
      >
        up
      </button>
    </div>
  );
}

function Sub2() {
  console.log("sub2");
  const { add } = useContext(ProxyContext);

  return (
    <div>
      <h4>Sub2</h4>
      {/* <button
        onClick={() => {
          add((Math.random() * 100).toFixed(0));
        }}
      >
        add
      </button> */}
    </div>
  );
}

export default UpTiming;
