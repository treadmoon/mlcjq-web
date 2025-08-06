import React from "react";
import useMountedState from "../../hooks/useMountedState";
import { Icon, Space, Button, DatePicker } from "@kdcloudjs/kdesign";

function UseArraySetter() {
  const isMounted = useMountedState();
  console.log("load UseArraySetter", isMounted);

  return (
    <div className="container">
      <DatePicker
        showTime
        onChange={() => {
          console.log("onChange");
        }}
        onOk={() => {
          console.log("onOk");
        }}
        onOpenChange={(e) => {
          console.log("onOpenChange",e);
        }}
      />
      {/* {isMounted?"是":"还没"} */}
    </div>
  );
}

export default UseArraySetter;
