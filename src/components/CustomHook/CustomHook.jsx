import React from "react";
import useFetch from "./useFetch";

function CustomHook() {
  const { data, pending, erros } = useFetch(
    `https://dummyjson.com/products?limit=100&skip=0`
  );
  console.log(data, pending);
  return (
    <div className="grid justify-center gap-6 py-28">
      <h2 className="text-2xl font-bold">Use Fetch Hook</h2>
      {pending ? <h3>Pending! plz wait</h3> : null}
      {erros ? <h3>{erros}</h3> : null}
      <div>
        {data && data.products && data.products.length
          ? data.products.map((val, i) => {
              return (
                <p className="text-lg font-medium text-left" key={val.key}>
                  {`${i + 1}.${val.title}`}
                </p>
              );
            })
          : null}
      </div>
    </div>
  );
}

export default CustomHook;
