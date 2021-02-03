import React from "react";
import { NavLink } from "react-router-dom";
import useWindowSize from "../hooks/useWindowSize";

const Nav = (props) => {
  const windowSize = useWindowSize();

  return (
    <nav
      className={`nav-container ${
        windowSize > 1101 ? "" : props.mobileBackground
      }`}
    >
      <ul>
        <NavLink activeClassName="selected" exact to="/">
          Home
        </NavLink>
        <NavLink activeClassName="selected" to="/about">
          About
        </NavLink>
      </ul>
    </nav>
  );
};

export { Nav as default };
