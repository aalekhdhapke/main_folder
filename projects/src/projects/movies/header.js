import React from "react";
import "./header.css";
import AddMovieButton from "./button";

export default class Header extends React.Component {
  render() {
    return (
      <div className="header-main">
        <div className="header-sec-main">
          <img
            className="header-button-one"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/1280px-IMDB_Logo_2016.svg.png"
          />
          <AddMovieButton switchPanel={this.props.showPanel} />
        </div>
      </div>
    );
  }
}
