import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <nav>
      <NavLink to="/" activeStyle={{ color: "orange" }}>
        Home
      </NavLink>
      {" | "}
      <NavLink to="/courses" activeStyle={{ color: "orange" }}>
        Courses
      </NavLink>
      {" | "}
      <NavLink to="/about" activeStyle={{ color: "orange" }}>
        About
      </NavLink>
    </nav>
  );
};

export default Header;
