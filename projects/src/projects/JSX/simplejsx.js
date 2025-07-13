import React from "react";

export default class LoopJSX extends React.Component {
  render() {
    const fruits = ["apple", "banana", "orange"];
    return (
      <div style={{ backgroundColor: "lightgray", color: "black" }}>
        <h1>Fruits</h1>
        <ul>
          {fruits.map((fruit, index) => (
            <li key={index}>{fruit}</li>
          ))}
        </ul>
      </div>
    );
  }
}
