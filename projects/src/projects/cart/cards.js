import React from "react";
import "./../styles/cards.css";

export default class Cards extends React.Component {
  render() {
    const { name, Image, price, info } = this.props.item;
    return (
      <div className="card">
        <img className="card-image" src={Image} alt={name} />
        <div className="card-title">{name}</div>
        <div className="card-info">{info}</div>
        <div className="card-price">Price: {price}</div>
        <button className="add-btn">Add to Cart</button>
      </div>
    );
  }
}
