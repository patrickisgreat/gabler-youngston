import React, { useState } from "react";
import { Link } from "gatsby";
import logo from "../img/gy_logo.png";
import "bootstrap/dist/css/bootstrap.min.css";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar-brand">
          <Link to="/" className="navbar-item" title="Logo">
            <img src={logo} alt="Gabler Youngston" />
          </Link>
          <button
            className={`navbar-burger burger ${isOpen ? "is-active" : ""}`}
            aria-label="menu"
            aria-expanded="false"
            onClick={toggleMenu}
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </button>
        </div>
        <div className={`navbar-menu ${isOpen ? "is-active" : ""}`}>
          <div className="navbar-end">
            <Link activeClassName="is-active" className="navbar-item" to="/about">
              ABOUT
            </Link>
            <Link activeClassName="is-active" className="navbar-item" to="/works">
              WORK
            </Link>
            <Link activeClassName="is-active" className="navbar-item" to="/news">
              NEWS
            </Link>
            <Link activeClassName="is-active" className="navbar-item" to="/contact">
              CONTACT
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;