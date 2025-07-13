import React from "react";
import "./button.css"

export default class AddMovieButton extends React.Component {
  render() {
    return <div className="button-main">
    <button className="button-btn" onClick={this.props.switchPanel}>Add Movie</button>

    </div>;
  }
}
  
  