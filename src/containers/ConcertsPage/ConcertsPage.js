import React from 'react';

import { connect } from 'react-redux';
import * as actionTypes from '../../store/actions/actionTypes';
import ConcertsList from './ConcertsList/ConcertsList';

const concertsPage = props => {

  console.log("CONCERTS PAGE : ", props)
  return (
      <ConcertsList />
  );
};

const mapDispatchToProps = dispatch => {
  return {
    onConcertAdded: conData =>
      dispatch({ type: actionTypes.ADD_CONCERT, concertData: conData })
  };
};

export default connect(null, mapDispatchToProps)(concertsPage);
