import React from "react";
import "./list.css";

export default class List extends React.Component {
    render() {
        const { item } = this.props;

        if (!item) {
            return <p></p>;
        }

        return (
            <div className="imdb-moviecard">
                <div className="imdb-moviecard_img_container">
                    <img className="imdb-moviecard_img" src={item.movieImg} />
                </div>
                <div className="imdb-moviecard_info">
                    <h3>{item.movieName}</h3>
                    <p>Duration: {item.movieDuration}</p>
                    <p>Release Date: {item.movieDate}</p>
                </div>

            </div>
        );
    }
}