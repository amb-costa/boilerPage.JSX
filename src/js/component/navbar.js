import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand navbar-light bg-light mb-3">
      <div className="container-fluid">
        <Link to="/">
          <span className="navbar-brand mb-0 h1">Amber's Modern Life</span>
        </Link>
        <div>
          <ul className="navbar-nav">
            <li className="nav-item dropdown">
              <button
                className="btn btn-secondary dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Reviews
              </button>
              <ul className="dropdown-menu dropdown-menu-end">
                <li>
                  <Link className="dropdown-item" to="/revMusic">
                    Music
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/revMovies">
                    Movies
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
