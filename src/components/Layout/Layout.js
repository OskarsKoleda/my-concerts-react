import React from "react";
import Navigation from "../Navigation/NavigationItems";
import Header from "../Header/Header";

const layout = props => (
  <>
    <Header />
    <div className="container">
      <Navigation />
      <main>{props.children}</main>
    </div>
  </>
);

export default layout;
