"use client";
import { useState } from "react";

export default function StarRating({
  rating = 0,
  onRatingClicked,
}: {
  rating?: number;
  onRatingClicked?: (msg: string) => void;
}) {
  const [width] = useState((rating * 75) / 5);
  return (
    <div
      className="star-rating"
      style={{ width: 75, cursor: "pointer" }}
      onClick={() => onRatingClicked?.(`The rating ${rating} was clicked!`)}
      title={`${rating} stars`}
    >
      <div style={{ width, overflow: "hidden", whiteSpace: "nowrap", color: "#f5c518" }}>
        ★★★★★
      </div>
    </div>
  );
}
