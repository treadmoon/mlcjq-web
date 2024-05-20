import React, {
  forwardRef,
  useImperativeHandle,
  useReducer,
  useTransition,
} from "react";

const Son = forwardRef((props, ref) => {
  const [isPending, startTransition] = useTransition();

  const say = () => console.log("say");
  const run = () => console.log("run");

  useImperativeHandle(
    ref,
    () => {
      return {
        say,
        run,
      };
    },
    []
  );

  const [state, dispatch] = useReducer(
    (state, action) => {
      return {
        age: state.age + action.v,
      };
    },
    { age: 42 }
  );

  return (
    <>
      {state.age}
      {isPending ? "……" : "OK"}
      <div
        onClick={() => {
          startTransition(() => {
            dispatch({ type: "add", v: 10 });
          });
        }}
      >
        btn
      </div>
    </>
  );
});

export default Son;
