import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { RingLoader } from "react-spinners";

// function hello() {
//   const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
//   const number1 = [1, 10, 3, 6, 0];

//   let result = [];

//   for (let i = 0; i < number.length; i++) {
//     if (number1.includes(number[i])) {
//       result.push(number[i]);
//     }
//   }

//   return result.join(", ");
// }

const ComponentA = ({ bgcolor, counter }) => (
  <button
    className="button1"
    style={{ backgroundColor: bgcolor }}
    onClick={counter}
  >
    Click me
  </button>
);

function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div className="App">
      <header className="App-header">
        <RingLoader color="#61dafb" />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>

        <ComponentA bgcolor="green" counter={increment} />

        <ComponentA bgcolor="red" counter={decrement} />0

        <p> {count}</p>

        {/* <p>{hello()}</p> */}

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        ></a>
      </header>
    </div>
  );
}

export default App;
