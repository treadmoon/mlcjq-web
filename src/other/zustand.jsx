import React from "react";
import { shallow } from "zustand/shallow";

import { useBearStore } from "./store";

let rerenderCount = 0;

function ZustandPage(props) {
  return (
    <div>
      <Tutorial />
    </div>
  );
}

function Tutorial() {
  return (
    <div>
      <h4>Tutorial</h4>
    </div>
  );
}

function Demo() {
  return <div></div>;
}

export default ZustandPage;
