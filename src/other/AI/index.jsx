import React,{useState,useEffect,useLayoutEffect} from "react";

import "./index.less"

const AI = () => {
  const [v,setV]=useState(0)

  useLayoutEffect(()=>{
    console.log("useLayoutEffect");
    return ()=>{
      console.log("销毁 useLayoutEffect");
    }
  },[v])

  useLayoutEffect(()=>{
    console.log("useLayoutEffect1");
    return ()=>{
      console.log("销毁 useLayoutEffect1");
    }
  },[v])

  useEffect(()=>{
    console.log("useEffect");
    return ()=>{
      console.log("销毁 useEffect");
    }
  },[v])

  useEffect(()=>{
    console.log("useEffect2");
    return ()=>{
      console.log("销毁 useEffect2");
    }
  },[v])

  useEffect(()=>{
    console.log("useEffect3");
    return ()=>{
      console.log("销毁 useEffect3");
    }
  },[v])


  return (
    <div className="bnotes-container">
      {v}
      <button onClick={()=>{setV(pre=>++pre)}}>click</button>

    </div>
  );
};

export default AI;
