import React from 'react';
import { NavLink } from 'react-router-dom';

const navigationItem = props => {
  return (
    <li className="side-nav__item">
      <NavLink className="side-nav__link" to="#">{props.children}</NavLink>
    </li>
  );
};

export default navigationItem;
