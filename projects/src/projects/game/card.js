import React from "react";
import "./card.css";

export default function CardComponent({ value, number }) {
  return (
    <div className="card">
      <h1>₹{value}</h1>
      <p>Count: {number}</p>
    </div>
  );
}
