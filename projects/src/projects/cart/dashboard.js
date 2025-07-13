import React from "react";
import Navbar from "./components/Navbar";
import Cart from "./components/Cart";
import Panel from "./components/Panel";
import { Products } from "./data/products";
import "./styles/navbar.css";
import "./styles/img.css";
import "./styles/panel.css";
import "./styles/cards.css";

function Dashboard() {
  return (
    <div className="app">
      <Navbar />
      <Cart />
      <Panel array={Products} />
    </div>
  );
}

export default Dashboard ;
