import * as actionTypes from '../actions/actionTypes';
import concertsData from '../../data/concerts-data';

const initialState = {
  concerts: [...concertsData]
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_CONCERT':
      console.log('CONCERT ADDED: ', action.concertData);
      return {
        ...state,
        concerts: [
          ...state.concerts,
          {
            id: Math.random().toString(),
            name: 'Indra',
            place: 'Riga',
            price: 42,
            date: '06.06.2006'
          }
        ]
      };

    case 'REMOVE_CONCERT':
      console.log('CONCERT REMOVED: ', action);
      return {
        ...state,
        concerts: state.concerts.filter(c => c.id !== action.concertId)
      };
    default:
      return state;
  }
};

export default reducer;
