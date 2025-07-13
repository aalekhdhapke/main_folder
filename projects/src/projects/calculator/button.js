import React from "react";
import "./button.css";

class Button extends React.Component {
  render() {
    return (
      <div className="main">
        <div className="btn1">

        <button className="btn">1 </button>
        <button className="btn">2 </button>
        <button className="btn">3 </button>
        <button className="btn">4</button>
        </div>
        <div className="btn2">
        <button className="btn">5 </button>
        <button className="btn">6</button>
        <button className="btn">7 </button>
        <button className="btn">8 </button>
        </div>
        <div className="btn3">
        <button className="btn">9 </button>
        <button className="btn">0</button>
        <button className="btn">AC </button>
        <button className="btn">X </button>
        </div>
        <div className="btn4">
        <button className="btn">% </button>
        <button className="btn">-</button>
        <button className="btn">+ </button>
        <button className="btn">=</button>
        </div>
        <div className="btn5">
        <button className="btn">4</button>
        <button className="btn">8 </button>
        <button className="btn">9 </button>
        <button className="btn">0</button>
        <button className="btn">0</button>
        </div>
      </div>
    );      
  }
}
export default Button;
