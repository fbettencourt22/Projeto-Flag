import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

export const Header = () => {
  return (
    <div>
      <span className="header">Film Infos</span>
      <div className="container">
        <div className="inner-container">
          <ul>
            <li>
              <Link to="/whatchlist">Watch List</Link>
            </li>
            <li>
              <Link to="/watched">Watched</Link>
            </li>
            <li>
              <Link to="/add" className="btn">
                + Add
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
