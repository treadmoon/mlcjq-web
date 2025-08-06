import React, { useContext, useEffect,useRef } from "react";
import { ThemeContext } from "../../App";
// import Son from "../../other/son";
// import LifeCycle from "../../other/lifeCycle";
// import KeepAlive from "../../other/keepAlive";
// import UpTiming from "../../other/upTiming";
// import Usestate from "../../other/usestate";
// import ImpactOfChanges from "../../other/ImpactOfChanges";
// import FiltBoard from "../../other/FiltBoard";
// import KDForm from "../../other/KDForm";
// import TestHooks from "../../other/TestHooks";
// import ZustandPage from "../../other/zustand";
// import UseStore from "../../other/UseStore";
// import ClassLifeCycle from "../../other/ClassLifeCycle";
import AsyncUpdate from "../../other/asyncUpdate";
// import ExternalStore from "../../other/externalStore";
// import ShoppingCart from "../../other/testStateArray";
import FormPage from "../../other/FormPage";
// import DragDND from "../../other/DragDND";
// import UpTiming2 from "../../other/upTiming2";
import Myform from "../../other/Myform";
import ClickHoc from "../../other/ClickHoc";
import TestUseForm from "../../other/TestUseForm";
import DnD from "../../other/dnd";

import MarkdownPreview from "../../other/markDown";

import Uoload from "../../other/uoload";

import PersonnelTab from "../../other/PersonnelTab";

import MyApplication from "../../other/myApplication";

import Setter from "../../other/Setter";

import Anchor from "../../other/AnchorPage";

import Material from "../../other/material";

import SetterGroup from "../../other/setterGroup";

import IBanner from "../../other/IBanner";

import ModalDate from "../../other/ModalDate";

import TestPromise from "../../other/TestPromise";

import ZustandPage from "../../other/zustand";

import {jsBaseMain} from "../../other/jsBase/index" 

import OtherIndex from "../../other/OtherIndex";

import "./index.less";

function Home() {
  // const theme = useContext(ThemeContext);
  // const sonRef = useRef();

  useEffect(()=>{
    jsBaseMain()
  },[])


  return (
    <div className="home-container">
      <OtherIndex />
      {/* <ZustandPage /> */}
      {/* <MyApplication /> */}
      {/* <Setter /> */}
      {/* <Material />
      <SetterGroup /> */}
      <div>
        {/* <IBanner /> */}
      </div>
      <div>
        {/* <ModalDate /> */}
      </div>
      <div>
        {/* <TestPromise /> */}
        {/* <TestPromise tk="222" /> */}
      </div>
      {/* <PersonnelTab /> */}
      {/* <Anchor /> */}

      {/* <MarkdownPreview /> */}

      {/* <Uoload /> */}

      {/* <DnD /> */}

      {/* <TestUseForm /> */}

      {/* <Myform /> */}

      {/* <ClickHoc /> */}

      {/* <UpTiming2 /> */}

      {/* <DragDND /> */}

      {/* <FormPage /> */}

      {/* <ShoppingCart /> */}

      {/* <ExternalStore /> */}

      {/* <AsyncUpdate /> */}

      {/* <ClassLifeCycle /> */}

      {/* zustand */}
      {/* <ZustandPage /> */}
      {/* <UseStore /> */}

      {/* <TestHooks /> */}

      {/* <KDForm /> */}
      {/* <FiltBoard /> */}
      {/* <ImpactOfChanges /> */}
      {/* <UpTiming /> */}
      {/* <KeepAlive /> */}
      {/* <Usestate /> */}
      {/* <LifeCycle /> */}
      {/* <Son ref={sonRef} /> */}

      {/* <p>撒把米键盘上！</p>
      <p>🐤都能写</p>
      <p>🐶都不学</p> */}
    </div>
  );
}

export default Home;
