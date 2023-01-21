import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";
//import "../Header/Header.css";

export const Nav = () => {
  return (
    <div className="container">
      <div className="inner-container">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
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
  );
};

export default Nav;
