import React from "react";
import Cards from "./cards";
import "./../styles/panel.css";

export default class Panel extends React.Component {
  render() {
    return (
      <div className="product-container">
        {this.props.array.map((product, index) => (
          <Cards key={index} item={product} />
        ))}
      </div>
    );
  }
}
