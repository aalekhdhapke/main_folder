import React from "react";
import "./MyComponents.css";

class MyComponent extends React.Component {
  renderButtons = () => {
    const buttons = Array.from({ length: 10 }, (_, i) => (
      <button
        key={i + 1}
        className="custom-button"
        onClick={() => this.handleButtonClick(i + 1)}
      >
        Button {i + 1}
      </button>
    ));
    return <div className="button-container">{buttons}</div>;
  };

  handleButtonClick = (index) => {
    console.log(`Button ${index} clicked`);
  };

  render() {
    return <div>{this.renderButtons()}</div>;
  }
}

export default MyComponent;
