import React, { useState } from "react";
import "./Bulb.css";

export default function Bulb() {
  const [selectedBulb, setSelectedBulb] = useState("bulbon");

  const bulbImages = {
    bulbon: "/main/react/projects/public/Bulb is On.png ",
    bulboff: "/main/react/projects/public/Bulb is Off.png ",
  };

  const onSelectChange = (event) => {
    console.log("Bulb: ", event.target.value);
    setSelectedBulb(event.target.value);
  };

  return (
    <div>
      <h1>Select a bulb : </h1>
      <select onChange={onSelectChange} value={selectedBulb}>
        <option value="bulbon">Bulb On</option>
        <option value="bulboff">Bulb Off</option>
      </select>

      <h2>You selected {selectedBulb}</h2>

      <img
        src={bulbImages[selectedBulb]}
        alt={selectedBulb}
        style={{ width: "300px", height: "auto" }}
      />
    </div>
  );
}
