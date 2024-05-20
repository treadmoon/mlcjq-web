import React, { Profiler } from "react";
import ReactDOM from "react-dom/client";

import AppProviders from "./content/AppProviders";
import { KeepaliveScope } from "./plugins/react-keepalive-component";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  // <KeepaliveScope>
  <Profiler id="App" onRender={onRender}>
    <AppProviders />
  </Profiler>
  // </KeepaliveScope>
  // </React.StrictMode>
);

function onRender(
  id,
  phase,
  actualDuration,
  baseDuration,
  startTime,
  commitTime
) {
  // console.log({
  //   id,
  //   phase,
  //   actualDuration,
  //   baseDuration,
  //   startTime,
  //   commitTime,
  // });
}
