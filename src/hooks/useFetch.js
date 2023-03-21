import { useState, useEffect, useCallback } from "react";

export const useFetch = (url, method = "GET") => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = useCallback(
    async (fetchOptions) => {
      setIsPending(true);

      try {
        const res = await fetch(url, fetchOptions);
        if (!res.ok) {
          throw new Error(res.statusText);
        }
        const fetchedData = await res.json();

        setIsPending(false);
        setData(fetchedData);
        setError(null);
      } catch (err) {
        setIsPending(false);
        if (err.name !== "AbortError") {
          setError("Could not fetch the data");
        }
      }
    },
    [url]
  );

  useEffect(() => {
    const controller = new AbortController();

    if (method === "GET") {
      fetchData({ signal: controller.signal });
    }

    return () => {
      controller.abort();
    };
  }, [fetchData, method]);

  const postData = async (data) => {
    const fetchOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };

    await fetchData(fetchOptions);
  };

  return { data, isPending, error, postData };
};
