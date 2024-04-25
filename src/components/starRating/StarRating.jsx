import React, { useMemo, useState } from "react";
import { FaStar } from "react-icons/fa";

function StarRating({ initial = 5 }) {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);

  let handleClick = (currentStar) => {
    setRating(currentStar);
  };
  let onStarHover = (currentStar) => {
    setHoverRating(currentStar);
  };
  let onMouseleave = () => {
    setHoverRating(rating);
  };
  let ResetRating = () => {
    setRating(0);
    setHoverRating(0);
  };

  const stars = useMemo(() => [...Array(initial)], [initial]);

  return (
    <div className="bg-slate-950 h-screen  flex flex-col items-center justify-center gap-10">
      <div className="flex gap-2">
        {stars.map((_, i) => {
          i++;
          return (
            <FaStar
              key={i}
              className={` text-2xl ${
                i <= (rating || hoverRating) ? "active" : " notActive"
              }`}
              onClick={() => handleClick(i)}
              onMouseEnter={() => onStarHover(i)}
              onMouseLeave={() => onMouseleave()}
              aria-label={`Star ${
                i <= (rating || hoverRating) ? "filled" : "empty"
              }`}
            />
          );
        })}
      </div>
      <button
        className="bg-white px-4 py-2 rounded text-gray-950 font-cascadiaRegular"
        onClick={ResetRating}
      >
        Reset Rating
      </button>
    </div>
  );
}

export default StarRating;
