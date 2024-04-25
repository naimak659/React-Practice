import React, { useEffect, useState } from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

function ImageSlider({ url, page = 10, limit = 5 }) {
  const [images, setImages] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handlePrevious = () => {
    setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1);
  };
  const handleNext = () => {
    setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1);
  };

  useEffect(() => {
    setLoading(true);
    fetch(`${url}?page=${page}&limit=${limit}`)
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setImages(res);
        setLoading(false);
      })
      .catch((e) => {
        setError(e.message);
        setLoading(false);
      });
  }, [url, page, limit]);

  // ! autometic Pagination but it has bug.
  // useEffect(() => {
  //   const slideInterval = setInterval(handleNext, 6000);

  //   return () => clearInterval(slideInterval);

  // }, [currentSlide]);
  // ! END

  if (loading) {
    return (
      <div className="bg-slate-950 h-screen flex flex-col items-center justify-center">
        Loading...
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-slate-950 h-screen flex flex-col items-center justify-center">
        Error: {error}
      </div>
    );
  }

  return (
    <div className="bg-slate-950 h-screen flex flex-col items-center justify-center gap-11">
      <div className="flex items-center gap-11">
        <MdKeyboardArrowLeft
          onClick={handlePrevious}
          className="imageSliderArrow"
        />
        <div className="flex w">
          {images.map((val, i) => {
            return (
              <div>
                <img
                  className={`w-[600px] drop-shadow-lg h-full rounded-lg select-none duration-500 ${
                    currentSlide === i ? "scale-100" : "hidden scale-0"
                  }`}
                  key={val.id}
                  src={val.download_url}
                  alt={val.download_url}
                />
              </div>
            );
          })}
        </div>
        <MdKeyboardArrowRight
          onClick={handleNext}
          className="imageSliderArrow"
        />
      </div>
      <div>
        {images.map((_, i) => {
          return (
            <button
              key={i}
              className={` w-2 h-2 mx-1 rounded-full cursor-pointer ${
                currentSlide === i ? `bg-white` : `bg-slate-600`
              }`}
              onClick={() => setCurrentSlide(i)}
            ></button>
          );
        })}
      </div>
    </div>
  );
}

export default ImageSlider;
