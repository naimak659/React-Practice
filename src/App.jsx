import { useState } from "react";
import Navbar from "./components/Navbar";
import Weather from "./components/Weather/Weather.jsx";
import CustomHook from "./components/CustomHook/CustomHook.jsx";

// ! component's
// import TreeView from "./components/Tree-view/TreeView.jsx";
// import ScrollIndicator from "./components/Scroll-indicator/ScrollIndicator.jsx";
// import Search from "./components/Search-AutoComplete/Search.jsx";
// import Accordian from "./components/accordian/Accordian";
// import StarRating from "./components/starRating/StarRating";
// import ImageSlider from "./components/image Slider/ImageSlider";
// import LoadMoreData from "./components/LoadMoreData/LoadMoreData";
// import QRcodegenerator from "./components/QR-code-generator/QRcodegenerator.jsx";
// import GithubProfile from "./components/GithubUserProfile/GithubProfile.jsx";

function App() {
  return (
    <>
      <div className="text-zinc-950 dark:text-white duration-700 bg-slate-100 dark:bg-gray-950 ">
        <Navbar />
        {/* <Accordian /> */}
        {/* <StarRating /> */}
        {/* <ImageSlider
          url={`https://picsum.photos/v2/list`}
          page={'6'}
          limit={'5'}
        /> */}
        {/* <LoadMoreData url={`https://dummyjson.com/products?`} /> */}

        {/* <TreeView /> */}

        {/* <QRcodegenerator /> */}

        {/* <GithubProfile /> */}

        {/* <ScrollIndicator /> */}

        {/* <Search /> */}

        {/* <Weather /> */}

        {/* <CustomHook /> */}
      </div>
    </>
  );
}

export default App;
