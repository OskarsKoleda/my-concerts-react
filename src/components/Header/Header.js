import React from "react";
import NavigationItem from "../Navigation/NavigationItem/NavigationItem";

const header = props => (
  <div className="header">
    <p>Place for Logo</p>
    <h1>Welcome</h1>
    <NavigationItem classes={["side-nav__item"]} link="/login">
      Login
    </NavigationItem>
  </div>
);

export default header;
