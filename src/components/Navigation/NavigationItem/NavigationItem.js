import React from "react";
import { NavLink } from "react-router-dom";

const navigationItem = props => {
  return (
    <li className={props.classes.join(" ")}>
      <NavLink
        exact
        className={"side-nav__link"}
        to={props.link}
      >
        {props.children}
      </NavLink>
    </li>
  );
};

export default navigationItem;
