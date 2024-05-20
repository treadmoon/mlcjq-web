import React from "react";
import { useBearStore, useDogStore, useCatStore } from "./store";
import { shallow } from "zustand/shallow";

function UseStore(props) {
  return (
    <div>
      <h3>UseStore</h3>
      <SubStore1 />
      <SubStore2 />
      <SubStore3 />
      <CatStor />
    </div>
  );
}

function SubStore1() {
  console.log("load SubStore1");
  const bears = useBearStore((state) => state.bears);
  return (
    <div>
      <h4>SubStore1</h4>
      {/* <div>bears:{bears}</div> */}
    </div>
  );
}

function SubStore2() {
  console.log("load SubStore2");
  const state = useBearStore();
  return (
    <div>
      <h4>SubStore1</h4>
      {/* <div>bears:{state.bears}</div> */}
    </div>
  );
}

function SubStore3() {
  const upFoo = useDogStore((state) => state.upFoo);

  const foo = useDogStore((state) => state.foo);

  // Getting non-reactive fresh state
  const paw = useDogStore.getState().paw;
  // Listening to all changes, fires synchronously on every change
  const unsub1 = useDogStore.subscribe((v) => {
    console.log("监听", v);
  });

  // Unsubscribe listeners
  //   unsub1();
  return (
    <div>
      <h4>SubStore3</h4>
      <div>foo:{foo}</div>
      <button
        onClick={() => {
          // Updating state, will trigger listeners
          useDogStore.setState({ paw: !useDogStore.getState().paw });
          //   upFoo();
        }}
      >
        upFoo
      </button>
    </div>
  );
}

function CatStor() {
  // Listening to selected changes, in this case when "paw" changes
  const unsub2 = useCatStore.subscribe((state) => state.paw, console.log);

  // Subscribe also exposes the previous value
  const unsub3 = useCatStore.subscribe(
    (state) => state.paw,
    (paw, previousPaw) => console.log(paw, previousPaw)
  );

  //   Subscribe also supports an optional equality function
  const unsub4 = useCatStore.subscribe(
    (state) => [state.paw, state.fur],
    console.log,
    { equalityFn: shallow }
  );

  // Subscribe and fire immediately
  const unsub5 = useCatStore.subscribe((state) => state.paw, console.log, {
    fireImmediately: true,
  });
  return (
    <div>
      <h4>cat</h4>
      <button
        onClick={() => {
          useCatStore.setState({ paw: Math.random() > 0.5 });
          //   useCatStore.setState({ snout: Math.random() > 0.5 });
        }}
      >
        update
      </button>
    </div>
  );
}

export default UseStore;
