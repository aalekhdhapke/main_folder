import React from "react";
import "./button.css";
export default class Button extends React.Component {
    render() {
        return (
            <div>
              <button className="add-to-cart-button">Add to Cart</button>
            </div>
        );
    }
}