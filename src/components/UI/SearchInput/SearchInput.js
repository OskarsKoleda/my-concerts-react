import React from 'react';

const searchInput = props => {
  return <input className="search-input" onChange={props.onInputChanged} />;
};

export default searchInput;
