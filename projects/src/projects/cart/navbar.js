import React from "react";
import "./../styles/navbar.css";

export default class Navbar extends React.Component {
  render() {
    return (
      <nav className="navbar">
        <div className="navbar-title">Amazon</div>
        <input type="text" className="search-input" placeholder="Search products..." />
        <div className="cart-div">🛒</div>
      </nav>
    );
  }
}
