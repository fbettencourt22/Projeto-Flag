import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { MovieCard } from "../Movie Card/MovieCard";
import "./Watchlist.css";

export const Watchlist = () => {
  const { watchlist } = useContext(GlobalContext);
  return (
    <div className="movi_page">
      <div className="watchlist_container">
        <div className="watchlist_header">
          <div className="heading">My Watchlist</div>
        </div>
        {watchlist.length > 0 ? (
          <div className="movie_grid">
            {watchlist.map((movie) => (
              <MovieCard movie={movie} type="watchlist" />
            ))}
          </div>
        ) : (
          <h2 className="no_movies">No movies</h2>
        )}
      </div>
    </div>
  );
};

export default Watchlist;
