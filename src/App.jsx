import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Accordian from "./components/accordian/Accordian";
import Navbar from "./components/Navbar";
import StarRating from "./components/starRating/StarRating";


function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="text-white ">
        <Navbar />
        {/* <Accordian /> */}
        <StarRating />
      </div>
    </>
  );
}

export default App;
