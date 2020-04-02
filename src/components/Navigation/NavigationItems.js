import React from "react";
import NavigationItem from "./NavigationItem/NavigationItem";

const navigationItems = props => {
  const classes = ["side-nav__item"];
  const classesActive = ["side-nav__item", "side-nav__item--active"];

  return (
    <nav className="sidebar">
      <ul className="side-nav">
        <NavigationItem
          classes={window.location.pathname !== "/" ? classes : classesActive}
          link="/"
        >
          <span>Home</span>
        </NavigationItem>
        <NavigationItem
          classes={
            window.location.pathname !== "/books" ? classes : classesActive
          }
          link="/books"
        >
          <span>Books</span>
        </NavigationItem>
        <NavigationItem
          classes={
            window.location.pathname !== "/visited-concerts"
              ? classes
              : classesActive
          }
          link="/visited-concerts"
        >
          <span>Visited Concerts</span>
        </NavigationItem>
        <NavigationItem
          classes={
            window.location.pathname !== "/information"
              ? classes
              : classesActive
          }
          link="/information"
        >
          <span>Information</span>
        </NavigationItem>
        <NavigationItem
          classes={
            window.location.pathname !== "/about" ? classes : classesActive
          }
          link="/about"
        >
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
