import React from "react";
import Header from "./header";
import Panel from "./panel";
import "./MoviesDashboard.css";

export default class MovieDashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      MoviesList: [],
      showMovies: false,
    };
  }

  switchPanel = () => {
    this.setState(() => ({
      showMovies: !this.state.showMovies,
    }));
  };

  AddNewMovies = (movie) => {
    this.setState(() => ({
      MoviesList: [...this.state.MoviesList, movie],
    }));
  };

  render() {
    return (
      <div className="App">
        <Header showPanel={this.switchPanel} />
        <Panel
          panelShow={this.state.showMovies}
          AddNewMovies={this.AddNewMovies}
          movies={this.state.MoviesList}
        />
      </div>
    );
  }
}
