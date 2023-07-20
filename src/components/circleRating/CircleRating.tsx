import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

import "./CircleRating.scss";

interface Props {
  rating: number;
}

const CircleRating = ({ rating }: Props) => {
  const ratingText = rating.toString(); // Convert the number to a string

  return (
    <div className="circleRating">
      <CircularProgressbar
        value={rating}
        maxValue={10}
        text={ratingText} // Pass the converted string as the text prop
        styles={buildStyles({
          pathColor: rating < 5 ? "red" : rating < 7 ? "orange" : "green",
        })}
      />
    </div>
  );
};

export default CircleRating;
