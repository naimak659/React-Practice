import React, { useEffect, useState } from "react";

export default function useFetch(url) {
  const [data, setData] = useState({});
  const [pending, setPending] = useState(false);
  const [errors, setErrors] = useState(null);

  useEffect(() => {
    setPending(true);
    fetch(url)
      .then((r) => r.json())
      .then((r) => {
        setData(r);
        setPending(false);
      })
      .catch((e) => {
        setPending(false);
        setErrors(`Fetch Error: ${e}`);
      });
  }, [url]);
  return { data, pending, errors };
}
