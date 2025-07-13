import React from "react";
import Button from "./button";
import "./colour.css";

export default class ColourChanger extends React.Component {
  constructor(props) {
    super(props);
    this.state = { color: "white" };
  }

  changeColor = (newColor) => {
    this.setState({ color: newColor });
  };

  render() {
    const { color } = this.state;

    return (
      <div className="container" style={{ backgroundColor: color }}>
        <div className="text">Colour Changer</div>
        <div>
          <Button onClick={() => this.changeColor("red")} label="Red" />
          <Button onClick={() => this.changeColor("green")} label="Green" />
          <Button onClick={() => this.changeColor("yellow")} label="Yellow" />
          <Button onClick={() => this.changeColor("pink")} label="Pink" />
          <Button onClick={() => this.changeColor("lightblue")} label="Light Blue" />
        </div>
      </div>
    );
  }
}
