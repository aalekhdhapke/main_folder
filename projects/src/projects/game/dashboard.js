import React from "react";
import "./dashboard.css";
import PanelComponent from "./panel-one";
import PanelTwoComponent from "./panel-two";

export default class Coingame extends React.Component {
  state = {
    total: 0,
    CoinOne: 0,
    CoinTwo: 0,
    CoinFive: 0,
    CoinTen: 0,
    CoinTwenty: 0,
  };

  totalCount = (value) => {
    this.setState((prevState) => ({
      total: prevState.total + value,
      [`Coin${value === 1 ? 'One' : value}`]: prevState[`Coin${value === 1 ? 'One' : value}`] + 1,
      
    }));
  };

  render() {
    return (
      <div className="dashboard-container">
        <div className="counter">Total: ₹{this.state.total}</div>
        <div className="dashboard-display">
          <PanelComponent count={this.totalCount} />
          <PanelTwoComponent {...this.state} />
        </div>
      </div>
    );
  }
}
