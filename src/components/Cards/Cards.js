import React from "react";
import "./Cards.css";

export const Cards = ({ movie }) => {
  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  return (
    <div className="result-card">
      <div className="poster-wrapper">
        {movie.poster_path ? (
          <img
            src={`https:/image.tmdb.org/t/p/w200${movie.poster_path}`}
            alt={`${movie.title}Poster`}
          />
        ) : (
          <div className="filler-poster"></div>
        )}
      </div>
      <div className="info">
        <div className="film_info">
          <h3 className="title">{movie.title}</h3>
          <h4 className="discription">{truncate(movie?.overview, 150)}</h4>
          <h4 className="release-date">
            {movie.release_date ? (
              movie.release_date.substring(0, 4)
            ) : (
              <div className="filler-text"></div>
            )}
          </h4>
        </div>
        <div className="controls">
          <button className="btn">Add to Watchlist</button>
        </div>
      </div>
    </div>
  );
};
