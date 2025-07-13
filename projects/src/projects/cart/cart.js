import React from "react";
import { Image } from "react-bootstrap";
import "./../styles/img.css";

export default class Cart extends React.Component {
  render() {
    return (
      <div className="main-img">
        <Image
          className="cart-ico"
          src="https://t4.ftcdn.net/jpg/02/48/54/89/360_F_248548930_7ZtT5VLUrTHBHq4wLTjtTw16AotdL1gI.jpg"
          alt="Cart"
        />
        <div className="cart-count">00</div>
      </div>
    );
  }
}
