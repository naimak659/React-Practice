import React, { useEffect, useState } from "react";
import PreloadCard from "./PreloadCard";
import ShopingCard from "./ShopingCard";

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
          cards.length <= 19
            ? setCards([...res.products])
            : setCards((prev) => [...prev, ...res.products]);
        }
        setLoading(false);
      })
      .catch((e) => setErrors(e.message));
  }, [url, count]);

  useEffect(() => {
    if (cards && cards.length === 100) setDisableProducts(true);
  }, [cards]);

  if (loading) {
    return (
      <div className="w-full h-screen">
        <PreloadCard />
      </div>
    );
  }
  if (errors) {
    return <div>{errors}</div>;
  }
  return (
    <div className="mx-auto container flex justify-center flex-col gap-3">
      <div className="relative grid grid-cols-4  rounded-xl bg-white bg-clip-border text-gray-700  gap-3 p-4">
        <ShopingCard shopcard={cards} />
      </div>
      <button
        className="px-5 py-3 disabled:bg-gray-300  bg-purple-600 mx-auto text-center  rounded"
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
