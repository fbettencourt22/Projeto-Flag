import React, { useContext, useState } from "react";
import { GlobalContext } from "../context/GlobalState";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faXmark } from "@fortawesome/free-solid-svg-icons";

export const MovieControls = ({ movie, type }) => {
  const { removeMovieFromWatchlist } = useContext(GlobalContext);
  const [hover, setHover] = useState(false);

  return (
    <div className="inner_card_controls">
      {type == "watchlist" && (
        <>
          <button className="ctrl_btn">
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
    </div>
  );
};
