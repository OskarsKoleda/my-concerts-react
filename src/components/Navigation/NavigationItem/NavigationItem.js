import React from 'react';
import { NavLink } from 'react-router-dom';

const navigationItem = props => {
  const activeClass = props.classes
  const classes=["side-nav__item"]
  classes.push(activeClass)
  return (
    <li className={classes.join(" ")}>
      <NavLink className="side-nav__link" to="#">{props.children}</NavLink>
    </li>
  );
};

export default navigationItem;
