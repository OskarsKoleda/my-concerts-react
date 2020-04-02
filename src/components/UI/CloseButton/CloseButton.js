import React from "react";

const closeButton = props => {
  return (
    <button onClick={props.clicked} className="close-button">
      Remove
    </button>
  );
};

export default closeButton;
