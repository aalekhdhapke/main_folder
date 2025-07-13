import React from "react";
import "./form.css";

export default class MoviesForm extends React.Component {
  handleSubmit = (event) => {
    event.preventDefault();
    const movie = {
      movieName: document.getElementById("movieName").value,
      movieDuration: document.getElementById("duration").value,
      movieImg: document.getElementById("imageUrl").value,
      movieDate: document.getElementById("releaseDate").value,
    };
    this.props.AddNewMovies(movie);
  
    document.getElementById("movieForm").reset();
  };
  

  render() {
    return (
      <div className="movies-main-movies-form">
        <div className="movies-container">
          <div className="movies-form-box">
            <h2 className="movies-title">Add Movie</h2>
            <form id="movieForm" onSubmit={this.handleSubmit}>
              <input
                type="text"
                name="movieName"
                className="movies-input"
                placeholder="Movie Name"
                id="movieName"
                required
              />
              <input
                type="number"
                name="duration"
                className="movies-input"
                placeholder="Duration "
                id="duration"
                required
              />
              <input
                type="text"
                name="imageUrl"
                className="movies-input"
                placeholder="Image URL"
                id="imageUrl"
                required
              />
              <input
                type="date"
                name="releaseDate"
                className="movies-input"
                placeholder="Release Date"
                id="releaseDate"
                required
              />
              <button type="submit" className="movies-button">
                Add Movie
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
