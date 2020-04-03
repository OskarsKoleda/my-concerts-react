import React, { useState } from 'react';

import { connect } from 'react-redux';
import * as actionTypes from '../../store/actions/actionTypes';
import ConcertsList from './ConcertsList/ConcertsList';

const ConcertsPage = props => {
  const [filter, setFilter] = useState('');

  return (
    <>
      <ConcertsList filterValue={filter} />
    </>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    onConcertAdded: conData =>
      dispatch({ type: actionTypes.ADD_CONCERT, concertData: conData })
  };
};

export default connect(null, mapDispatchToProps)(ConcertsPage);
