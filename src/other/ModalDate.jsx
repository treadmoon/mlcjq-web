import React, { useState, useRef, useMemo,useEffect } from "react";

import { Modal,DatePicker ,Button} from "@kdcloudjs/kdesign";

const initData={name:"1"}
function ModalDate() {

  const [arr,setArr]=useState(initData)

  useEffect(()=>{
    console.log("改变");
    
  },[arr])

  return (
    <div>
        <Button onClick={()=>{
            // Modal.confirm({
            //     body:<div><DatePicker /></div>
            // })
            setArr({name:"1"})
        }}>打开</Button>
        <Button onClick={()=>{
            // Modal.confirm({
            //     body:<div><DatePicker /></div>
            // })
            setArr(initData)
        }}>g2</Button>
    </div>
  );
}

export default ModalDate;
