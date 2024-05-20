import React, { useState, useTransition, useEffect } from "react";

function AsyncUpdate1(props) {
  const [isPending, startTransition] = useTransition();
  const [tab, setTab] = useState("about");

  return (
    <div>
      <h4>asyncUpdate</h4>
      {isPending && <div style={{ color: "red" }}>#####</div>}
      {!isPending && tab}
      <button
        onClick={() => {
          startTransition(() => {
            setTab("tab" + Math.random() * 1000);
          });
        }}
      >
        update tab
      </button>
    </div>
  );
}

function AsyncUpdate() {
  const [data, loading] = useSWR("/api/getUser", { id: 1001 });
  if (loading) return "loading...";
  return <>{data}</>;
}

function useSWR(url, params) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      const name = await getUserName(url, params);
      setData(name);
      setLoading(false);
    };
    fetchData();
  }, []);
  return [data, loading];
}

function getUserName(url, params) {
  return delay(
    new Promise((resolve) => {
      console.log(url, params);
      resolve("ming");
    })
  );
}

function delay(promise) {
  return new Promise((resolve) => setTimeout(resolve, 2000)).then(
    () => promise
  );
}

export default AsyncUpdate;
