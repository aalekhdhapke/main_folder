import React from "react";
import "./coin.css";

export default function CoinComponent({ value, count }) {
  return (
    <div className="coin" onClick={() => count(value)}>
      <img 
        src={`https://dummyimage.com/60x60/ccc/000&text=₹${value}`} 
        alt={`₹${value} coin`} 
        className="coin-img"
      />
      <span className="coin-value">₹{value}</span>
    </div>
  );
}
