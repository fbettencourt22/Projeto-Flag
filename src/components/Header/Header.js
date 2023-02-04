import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

export const Header = () => {
  return (
    <div className="site_header">
      <Link className="logo" to="/">
        Movie List
      </Link>
      <div className="navbar">
        <ul className="navbar_links">
          <li>
            <Link to="/watchlist">Watch List</Link>
          </li>
          <li>
            <Link to="/watched">My List</Link>
          </li>
        </ul>

        <Link to="/add" className="btn">
          + Add
        </Link>
      </div>
    </div>
  );
};
