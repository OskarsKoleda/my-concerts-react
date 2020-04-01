import React from "react";
import NavigationItem from "./NavigationItem/NavigationItem";

const navigationItems = props => {
  return (
    <nav className="sidebar">
      <ul className="side-nav">
        <NavigationItem classes={"side-nav__item--active"}>  
          <span>Books</span>
        </NavigationItem>
        <NavigationItem>
          <span>Visited Concerts</span>
        </NavigationItem>
        <NavigationItem>
          <span>Information</span>
        </NavigationItem>
        <NavigationItem>
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
