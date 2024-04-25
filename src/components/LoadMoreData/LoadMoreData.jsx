import React, { useEffect, useState } from "react";

function LoadMoreData({ url }) {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState(null);
  const [count, setCount] = useState(0);
  const [disableProducts, setDisableProducts] = useState(false);
  useEffect(() => {
    setLoading(true);
    fetch(`${url}limit=20&skip=${count === 0 ? 0 : count * 20}`)
      .then((res) => res.json())
      .then((res) => {
        if (res.products && res.products.length && cards.length < 100) {
          setCards((prev) => [...prev, ...res.products]);
        }
        setLoading(false);
      })
      .catch((e) => setErrors(e.message));
  }, [count]);
  console.log(cards);

  useEffect(() => {
    if (cards && cards.length === 100) setDisableProducts(true);
  }, [cards]);

  if (loading) {
    return <div className="bg-slate-950 w-full h-screen">Loading.....</div>;
  }
  if (errors) {
    return <div>{errors}</div>;
  }
  return (
    <div className="w-full flex justify-center flex-col gap-3">
      <div className="relative grid grid-cols-4  rounded-xl bg-white bg-clip-border text-gray-700  gap-3 p-4">
        {cards.length > 0
          ? cards.map((val, i) => {
              return (
                <div className="shadow-md rounded-lg">
                  <div className=" relative mx-4 mt-4 h-96 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700">
                    <img
                      src={`${val.thumbnail} `}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <div className="mb-2 flex items-center justify-between">
                      <p className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
                        {val.title}--{i}
                      </p>
                      <p className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
                        ${val.price}.99
                      </p>
                    </div>
                    <p className="block font-sans text-sm font-normal leading-normal text-gray-700 antialiased opacity-75">
                      {val.description}
                    </p>
                  </div>
                  <div className="p-6 pt-0">
                    <button
                      className="block w-full select-none rounded-lg bg-blue-gray-900/10 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-blue-gray-900 transition-all hover:scale-105 focus:scale-105 focus:opacity-[0.85] active:scale-100 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                      type="button"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              );
            })
          : null}
      </div>
      <button
        className="px-5 py-3 disabled:text-gray-950 bg-slate-950 mx-auto text-center  disabled:bg-slate-700 rounded"
        onClick={() => setCount((prev) => prev + 1)}
        disabled={disableProducts}
      >
        Load More
      </button>
      <h3 className="mx-auto text-black">
        {disableProducts ? `you Reached 100 products` : null}
      </h3>
    </div>
  );
}

export default LoadMoreData;
