import { useCallback, useEffect, useRef ,useState} from 'react';

export default function useMountedState() {
  // const mountedRef = useRef<boolean>(false);
  // const get = useCallback(() => mountedRef.current, []);
  const [flag,setFlag]=useState(false)

  useEffect(() => {
    // mountedRef.current = true;
    setFlag(true)

    return () => {
      // mountedRef.current = false;
      setFlag(false)
    };
  }, []);

  return flag;
}
