import React from 'react';
import CloseButton from '../UI/CloseButton/CloseButton';

const concert = props => {
  return (
    <div className="card">
      <div className="card__side card__side--front">
        <img className="card__picture" src={props.src} alt="band-poster" />
      </div>
      <div className="card__side card__side--back">
        <h3>{props.name}</h3>
        <h4>{props.place}</h4>
        <h4>{props.date}</h4>
      </div>
    </div>
  );
};

export default concert;
