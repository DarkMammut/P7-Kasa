import React from "react";
import "../styles/rating.css";

function Rating({ rate }) {
  function StarColor({ index }) {
    let color = "#E3E3E3";

    if (index <= +rate) {
      color = "#FF6060";
    }

    return (
      <svg viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M18.645 12L15 0L11.355 12H0L9.27 18.615L5.745 30L15 22.965L24.27 30L20.745 18.615L30 12H18.645Z"
          fill={color}
        />
      </svg>
    );
  }

  return (
    <div className="Rating">
      <StarColor index={1} />
      <StarColor index={2} />
      <StarColor index={3} />
      <StarColor index={4} />
      <StarColor index={5} />
    </div>
  );
}

export default Rating;
