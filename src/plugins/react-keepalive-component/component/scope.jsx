/* eslint-disable react/jsx-max-props-per-line */
/* eslint-disable react/no-multi-comp */
import React, { memo, useCallback, useRef, useEffect, useMemo } from "react";
import ReactDOM from "react-dom";

import KeepaliveContext from "../core/keepContext";
import useKeep from "../core/useKeep";
import {
  ACTION_ACTIVE,
  ACITON_UNACTIVE,
  ACTION_UNACTIVED,
  ACTION_ACTIVED,
  ACTION_DESTORY,
} from "../utils";

const CACHE_MAX_DEFAULT_LIMIT = 10;
const keepChange = (pre, next) =>
  pre.status === next.status && pre.updater === next.updater;
const beforeScopeDestory = {};

const ScopeItem = memo(function ({
  cacheId,
  updater,
  children,
  status,
  dispatch,
  load = () => {},
}) {
  const currentDOM = useRef();
  const renderChildren =
    status === ACTION_ACTIVE ||
    status === ACTION_ACTIVED ||
    status === ACITON_UNACTIVE ||
    status === ACTION_UNACTIVED
      ? children
      : () => null;

  // console.log("scopitem", status);

  const element = ReactDOM.createPortal(
    <div
      ref={currentDOM}
      // style={{ display: status === ACTION_UNACTIVED ? "none" : "block" }}
    >
      {useMemo(() => renderChildren(), [updater])}
    </div>,
    document.body
  );
  useEffect(() => {
    beforeScopeDestory[cacheId] = function () {
      if (currentDOM.current) document.body.appendChild(currentDOM.current);
    };
    return function () {
      delete beforeScopeDestory[cacheId];
    };
  }, []);

  // currentDOM.current是被挪动的，不是复制的
  // body全局位置，div应该显示的位置
  // 从body挪到div，从div挪到body
  useEffect(() => {
    if (status === ACTION_ACTIVE) {
      console.log("挂载");
      load && load(currentDOM.current);
    } else if (status === ACITON_UNACTIVE) {
      console.log("卸载");
      document.body.appendChild(currentDOM.current);
      dispatch({
        type: ACTION_UNACTIVED,
        payload: cacheId,
      });
    }
  }, [status]);

  return element;
},
keepChange);

function Scope({ children, maxLimit = CACHE_MAX_DEFAULT_LIMIT }) {
  const keeper = useKeep(maxLimit);
  const { cacheDispatch, cacheList, hasAliveStatus } = keeper;
  const renderChildren = useCallback(children, []);
  useEffect(() => {
    return function () {
      try {
        for (let key in beforeScopeDestory) {
          beforeScopeDestory[key]();
        }
      } catch (e) {}
    };
  }, []);
  const contextValue = useMemo(() => {
    return {
      cacheDispatch: cacheDispatch.bind(keeper),
      hasAliveStatus: hasAliveStatus.bind(keeper),
      cacheDestory: (payload) =>
        cacheDispatch.call(keeper, { type: ACTION_DESTORY, payload }),
    };
  }, [keeper]);

  console.log("来了scope", keeper);
  return (
    <KeepaliveContext.Provider value={contextValue}>
      {renderChildren}
      {cacheList.map((item) => (
        <ScopeItem
          {...item}
          dispatch={cacheDispatch.bind(keeper)}
          key={item.cacheId}
        />
      ))}
    </KeepaliveContext.Provider>
  );
}

export default Scope;
