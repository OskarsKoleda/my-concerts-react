import React from 'react';

import { connect } from 'react-redux';
import Concert from '../../components/Concert/Concert';
import * as actionTypes from '../../store/actions/actionTypes';

const concertsList = props => {
  const concerts = props.concerts.map(con => (
    <Concert
      key={con.id}
      name={con.name}
      place={con.place}
      price={con.price}
      date={con.date}
      removeConcert={() => props.onConcertRemoved(con.id)}
    />
  ));

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
