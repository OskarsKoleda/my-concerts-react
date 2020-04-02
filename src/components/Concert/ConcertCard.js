import React from 'react';
import CloseButton from '../UI/CloseButton/CloseButton'

const concert = props => {
  return (
    <div className="concert">
      <h3>{props.name}</h3>
      <h4>{props.place}</h4>
      <h4>{props.date}</h4>
      {/* <button className={"btn-remove"} onClick={props.removeConcert}>X</button> */}
      <CloseButton clicked={props.removeConcert} />
    </div>
  );
};

export default concert;
