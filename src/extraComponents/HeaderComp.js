import React from "react";
import { NavLink } from "react-router-dom";
import "./headerStyle.css";

const HeaderComp = () => {
  const styles = {
    backgroundColor: "teal",
    height: 25,
    display: "flex",
    justifyContent: "flex-end"
  };

  const itemStyles = {
    display: "flex",
    justifyContent: "space-around",
    height: 20,
    width: "50%",
    margin: 0,
    padding: 3
  };

  return (
    <div style={styles}>
      <div style={itemStyles}>
        <NavLink exact to="/" activeClassName="activeLink">
          Home
        </NavLink>
        <NavLink to="/about" activeClassName="activeLink">
          About us
        </NavLink>
        <NavLink to="/about" activeClassName="activeLink">
          Contact
        </NavLink>
      </div>
    </div>
  );
};

export default HeaderComp;
