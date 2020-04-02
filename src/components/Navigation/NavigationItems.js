import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = props => {
  return (
    <nav className="sidebar">
      <ul className="side-nav">
        <NavigationItem link="/books">
          <span>Books</span>
        </NavigationItem>
        <NavigationItem link="/visited-concerts">
          <span>Visited Concerts</span>
        </NavigationItem>
        <NavigationItem link="/information">
          <span>Information</span>
        </NavigationItem>
        <NavigationItem link="/about">
          <span>About</span>
        </NavigationItem>
      </ul>
      <div className="legal">
        <span className="copyleft">&copy;</span> 2020 by Rogopop. All rights are
        not reserved.
      </div>
    </nav>
  );
};

export default navigationItems;
