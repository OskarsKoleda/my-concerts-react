import React from 'react';

const concert = props => {
  return (
    <div className="concert">
      <h2>{props.name}</h2>
      <h4>{props.place}</h4>
      {/* <p>{props.price} &euro;</p> */}
      <h4>{props.date}</h4>
      <button>More Info</button>
      <button className={"btn-remove"} onClick={props.removeConcert}>X</button>
    </div>
  );
};

export default concert;
