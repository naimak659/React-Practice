import { useState } from "react";
// import Accordian from "./components/accordian/Accordian";
import Navbar from "./components/Navbar";
// import StarRating from "./components/starRating/StarRating";
import ImageSlider from "./components/image Slider/ImageSlider";
import LoadMoreData from "./components/LoadMoreData/LoadMoreData";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="text-white ">
        <Navbar />
        {/* <Accordian /> */}
        {/* <StarRating /> */}
        {/* <ImageSlider
          url={`https://picsum.photos/v2/list`}
          page={'6'}
          limit={'5'}
        /> */}
        <LoadMoreData url={`https://dummyjson.com/products?`} />
      </div>
    </>
  );
}

export default App;
