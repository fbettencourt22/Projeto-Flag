import React from "react";
import { MovieControls } from "../MovieControls/MovieControls";
import "./MovieCard.css";

function truncate(str, n) {
  return str?.length > n ? str.substr(0, n - 1) + "..." : str;
}

export const MovieCard = ({ movie, type }) => {
  return (
    <div className="movie_card">
      <div className="poster_card">
        {movie.poster_path ? (
          <img
            key={movie.id}
            src={`https:/image.tmdb.org/t/p/w200${movie.poster_path}`}
            alt={`${movie.title}Poster`}
          />
        ) : (
          <div className="filler-poster"></div>
        )}
      </div>
      <div className="film_info">
        <h3 className="title">{movie.title}</h3>
        <h4 className="discription">{truncate(movie?.overview, 200)}</h4>
        <h4 className="release-date">
          {movie.release_date ? (
            movie.release_date.substring(0, 4)
          ) : (
            <div className="filler-text"></div>
          )}
        </h4>
      </div>

      <MovieControls type={type} movie={movie} />
    </div>
  );
};
