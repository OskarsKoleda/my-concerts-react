import React from 'react';

const closeButton = props => {
  return (
    <span onClick={props.clicked} className="btn-close">
      &times;
    </span>
  );
};

export default closeButton;
