import React from 'react';
import { NavLink } from 'react-router-dom';

const navigationItem = props => {
  // const activeClass = props.classes;
  // const classes = ['side-nav__item'];
  // classes.push(activeClass);
  return (
    <li className={'side-nav__item'}>
      <NavLink
        exact
        className={'side-nav__link'}
        activeClassName={'side-nav__item--active'}
        to={props.link}
      >
        {props.children}
      </NavLink>
    </li>
  );
};

export default navigationItem;
