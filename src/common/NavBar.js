import React from "react";
import { Link, NavLink } from "react-router-dom";

export const NavBar = () => {
  function setActive({ isActive }) {
    return isActive ? "nav-link active" : "nav-link";
  }

  return (
    <nav className="navbar">
      <NavLink to="home" className={setActive}>
        Home
      </NavLink>
      <NavLink to="admin" className={setActive}>
        admin
      </NavLink>
      <NavLink to="login" className={setActive}>
        login
      </NavLink>
      <NavLink to="catalog" className={setActive}>
        catalog
      </NavLink>
    </nav>
  );
};
