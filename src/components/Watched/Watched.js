import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { MovieCard } from "../Movie Card/MovieCard";
import "./Watched.css";

export const Watched = () => {
  const { watched } = useContext(GlobalContext);
  return (
    <div className="movi_page">
      <div className="watched_container">
        <div className="watched_header">
          <div className="heading">Watched Movies</div>
        </div>
        {watched.length > 0 ? (
          <div className="movie_grid">
            {watched.map((movie) => (
              <MovieCard movie={movie} type="watched" />
            ))}
          </div>
        ) : (
          <h2 className="no_movies">No movies in you list</h2>
        )}
      </div>
    </div>
  );
};
export default Watched;
