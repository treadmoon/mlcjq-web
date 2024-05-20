import React, { useState } from "react";
import { KeepaliveItem } from "../plugins/react-keepalive-component";

function KeepAlive(props) {
  const [show, setShow] = useState(true);
  return (
    <div>
      {show && (
        <KeepaliveItem cacheId="sub">
          <Sub></Sub>
        </KeepaliveItem>
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
  return <div>{children}i am sub</div>;
}

export default KeepAlive;
