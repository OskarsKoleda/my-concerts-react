import React from "react";

import { connect } from "react-redux";
import ConcertCard from "../../components/Concert/ConcertCard";
import * as actionTypes from "../../store/actions/actionTypes";

const concertsList = props => {
  let concerts;

  if (props.concerts.length === 0) {
    console.log("I AM HERE");
    concerts = <div>You don't have any concerts!</div>;
  } else {
    concerts = props.concerts.map(con => (
      <ConcertCard
        key={con.id}
        name={con.name}
        place={con.place}
        price={con.price}
        date={con.date}
        removeConcert={() => props.onConcertRemoved(con.id)}
      />
    ));
  }

  return <div className="content">{concerts}</div>;
};

const mapStateToProps = state => {
  return {
    concerts: state.concerts
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onConcertAdded: conData =>
      dispatch({ type: actionTypes.ADD_CONCERT, concertData: conData }),
    onConcertRemoved: conId =>
      dispatch({ type: actionTypes.REMOVE_CONCERT, concertId: conId })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(concertsList);
