import React from "react";
import "./panel.css";
import MoviesForm from "./form";
import List from "./list";

export default class Panel extends React.Component {
  render() {
    return (
      <div className="movies-panel-main">
        {this.props.panelShow ? (
          <div className="movies-panel-section">
            <MoviesForm AddNewMovies={this.props.AddNewMovies} />
          </div>
        ) : (
          <div className="movies-panel-section">
            {this.props.movies.length > 0 ? (
              this.props.movies.map((item, index) => (
                <List key={index} item={item} />
              ))
            ) : (
              <p>No movies added yet.</p>
            )}
          </div>
        )}
      </div>
    );
  }
}
