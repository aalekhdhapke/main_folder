import React from "react";
import CoinComponent from "./coin";
import "./panel-one.css";

export default function PanelComponent({ count }) {
  return (
    <div className="panel">
      {[1, 2, 5, 10, 20].map((value) => (
        <CoinComponent key={value} value={value} count={count} />
      ))}
    </div>
  );
}
