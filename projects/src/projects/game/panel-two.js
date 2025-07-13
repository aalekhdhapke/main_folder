import React from "react";
import CardComponent from "./card";
import "./panel-two.css";

export default function PanelTwoComponent({ CoinOne, CoinTwo, CoinFive, CoinTen, CoinTwenty }) {
  return (
    <div className="panel-two">
      <CardComponent value={1} number={CoinOne} />
      <CardComponent value={2} number={CoinTwo} />
      <CardComponent value={5} number={CoinFive} />
      <CardComponent value={10} number={CoinTen} />
      <CardComponent value={20} number={CoinTwenty} />
    </div>
  );
}
