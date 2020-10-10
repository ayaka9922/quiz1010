import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <div className="nav-wrapper pink">
        <Link to="/" className="brand-logo center">
          Tech Quiz
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
