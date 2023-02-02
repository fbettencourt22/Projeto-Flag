import React from "react";
import { MovieControls } from "../MovieControls/MovieControls";

export const MovieCard = ({ movie, type }) => {
  return (
    <div className="movie_card">
      <div className="poster_card"> </div>
      {movie.poster_path ? (
        <img
          key={movie.id}
          src={`https:/image.tmdb.org/t/p/w200${movie.poster_path}`}
          alt={`${movie.title}Poster`}
        />
      ) : (
        <div className="filler-poster"></div>
      )}

      <MovieControls type={type} movie={movie} />
    </div>
  );
};
