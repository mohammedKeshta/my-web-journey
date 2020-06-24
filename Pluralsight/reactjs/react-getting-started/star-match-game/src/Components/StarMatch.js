import UTILS from "../Helpers/UTILS";
import React, { useState } from "react";

const StarMatch = () => {
  const [stars, setStarts] = useState(UTILS.random(1, 9));
  return (
    <div className="game">
      <div className="help">
        Pick 1 or more numbers that sum to the number of stars
      </div>
      <div className="body">
        <div className="left">
          {UTILS.range(1, stars).map(starId => (
            <div key={starId} className="star" />
          ))}
        </div>
        <div className="right">
          {UTILS.range(1, 9).map(number => (
            <button key={number} className="number">
              {number}
            </button>
          ))}
        </div>
      </div>
      <div className="timer">Time Remaining: 10</div>
    </div>
  );
};

export default StarMatch;
