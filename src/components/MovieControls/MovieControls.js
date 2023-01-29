import React, { useContext, useState } from "react";
import { GlobalContext } from "../context/GlobalState";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faXmark } from "@fortawesome/free-solid-svg-icons";

export const MovieControls = ({ movie, type }) => {
  const {
    removeMovieFromWatchlist,
    addMovieToWatched,
    removeMovieFromWatched,
  } = useContext(GlobalContext);
  const [hover, setHover] = useState(false);

  return (
    <div className="inner_card_controls">
      {type == "watchlist" && (
        <>
          <button className="ctrl_btn" onClick={() => addMovieToWatched(movie)}>
            <FontAwesomeIcon icon={faArrowRight} />
          </button>

          <button
            className="ctrl_btn"
            onClick={() => removeMovieFromWatchlist(movie.id)}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
          >
            {hover ? <FontAwesomeIcon icon={faXmark} /> : "Remove"}
          </button>
        </>
      )}

      {type == "watched" && (
        <>
          <button
            className="ctrl_btn"
            onClick={() => removeMovieFromWatched(movie.id)}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
          >
            {hover ? <FontAwesomeIcon icon={faXmark} /> : "Remove"}
          </button>
        </>
      )}
    </div>
  );
};
