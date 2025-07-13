// File: average.js         

import React from 'react';
import "./avergae.css";

export default class Average extends React.Component {
  constructor() {
    super();
    this.state = {
    };
  }

  changeNum1(value) {
    this.setState({ num1: value });
  }

  changeNum2(value) {
    this.setState({ num2: value });
  }

  changeNum3(value) {
    this.setState({ num3: value });
  }

  // Calculate average
  calculateAverage() {
    const a = +this.state.num1;
    const b = +this.state.num2;
    const c = +this.state.num3;
    const avg = (a + b + c)     ;
    this.setState({ result: avg });
  }

  render() {
    return (
      <div>
        <h1>Average Calculator</h1>
        <div className="average">
          <input
            type="number"
            placeholder="Enter first number"
            className="input"
            value={this.state.num1}
            onChange={(x) => this.changeNum1(x.target.value)}
          />
          <input
            type="number"
            placeholder="Enter second number"
            className="input"
            value={this.state.num2}
            onChange={(x) => this.changeNum2(x.target.value)}
          />
          <input
            type="number"
            placeholder="Enter third number"
            className="input"
            value={this.state.num3}
            onChange={(x) => this.changeNum3(x.target.value)}
          />
          <button className="button" onClick={() => this.calculateAverage()}>
            Calculate Average
          </button>
          {this.state.result !== '' && (
            <p style={{ marginTop: "10px", fontWeight: "bold", color: "#2c3e50" }}>
              Average: {this.state.result}
            </p>
          )}
        </div>
      </div>
    );
  }
}
