import React, { useState, useRef, useMemo, useEffect } from "react";

import { Button } from "@kdcloudjs/kdesign";

import { rsd, iajax, triggerCustomEvent } from "./utils";

function TestPromise() {
  // rsd({key:`AAA-${tk}`}).then(res=>console.log(res));
  // rsd({key:`BBB-${tk}`}).then(res=>console.log(res));

  const eventA = e => {
    console.log("A", e.detail);
    // window.removeEventListener("myMessage", eventA);
  };
  const eventB = e => {
    console.log("B", e.detail);
    // window.removeEventListener("myMessage", eventB);
  };

  // window.addEventListener("myMessage", eventA);
  // window.addEventListener("myMessage", eventB);

  return (
    <div>
      <Button
        onClick={() => {
          iajax({ key: `AAA` }, e => console.log("结果A", e));
          iajax({ key: `BBB` }, e => console.log("结果B", e));
          iajax({ key: `CCC` }, e => console.log("结果C", e));
          iajax({ key: `DDD` }, e => console.log("结果D", e));
        }}
      >
        监听
      </Button>
      <Button
        onClick={() => {
          triggerCustomEvent({ key: "AAA" });
          triggerCustomEvent({ key: "BBB" });
          triggerCustomEvent({ key: "CCC" });
          triggerCustomEvent({ key: "DDD" });
        }}
      >
        触发
      </Button>
    </div>
  );
}

export default TestPromise;
