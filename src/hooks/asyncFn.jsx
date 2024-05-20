import { useCallback, useRef, useState } from "react";
import { useMountedState } from "react-use";

export default function useAsyncFn(
  fn,
  deps,
  initialState = { loading: false }
) {
  const lastCallId = useRef(0);
  const isMounted = useMountedState();
  const [state, set] = useState(initialState);

  const callback = useCallback((...args) => {
    const callId = ++lastCallId.current;

    if (!state.loading) {
      set((prevState) => ({ ...prevState, loading: true }));
    }

    return fn(...args).then(
      (value) => {
        console.log("success callId", callId, lastCallId.current);
        isMounted() &&
          callId === lastCallId.current &&
          set({ value, loading: false });

        return value;
      },
      (error) => {
        console.log("error callId", callId, lastCallId.current);
        isMounted() &&
          callId === lastCallId.current &&
          set({ error, loading: false });

        return error;
      }
    );
  }, deps);

  return [state, callback];
}
