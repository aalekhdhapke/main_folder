import React from "react";
import "./tableone.css";
export default class Tablecomponents extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  
  tableButtons = () => {
    let i = 1;
    let array = [];
    while (i <= 10) {
      let index = i;
      array.push(
        <button
          key={index}
          className="btns"
          style={this.props.bgColor}
          onClick={() => this.buttonClicked(index)}
        >
          {index}
        </button>
      );
      i++;
    }
    return <div className="button-container1">{array}</div>;
  };
  buttonClicked = (index) => {
    console.log("Button==>", index);
    
  };
  render() {
    return (
    <div>
        {this.tableButtons()}
     </div>)
  }
};
