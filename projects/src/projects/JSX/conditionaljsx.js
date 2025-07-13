import React from "react";

export default class ConditionalJSX extends React.Component {
  render() {
    let greeting = "hello world";
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    if (hours < 12) {
      greeting = "Good morning";
    } else if (hours < 16) {
      greeting = "Good afternoon";
    } else if (hours < 20) {
      greeting = "Good evening";
    } else {
      greeting = "Good night";
    }

    return (
      <div>
        <h1>{greeting}</h1>
        <p>
          Current time is {hours}:{minutes}:{seconds}
        </p>
      </div>
    );
  }
}
