import * as actionTypes from '../actions/actionTypes';

const initialState = {
  concerts: [
    {
      id: 1,
      name: 'Rammstein',
      place: 'Riga',
      price: 42,
      date: '21.12.2013'
    },
    {
      id: 2,
      name: 'Children of Bodom',
      place: 'Riga',
      price: 35,
      date: '21.10.2015'

    },
    // {
    //   id: 3,
    //   name: 'Slipknot',
    //   place: 'Vilnius',
    //   price: 43,
    //   date: '11.05.2015'
    // },
    // {
    //   id: 4,
    //   name: 'Testament',
    //   place: 'Riga',
    //   price: 43,
    //   date: '01.04.2015'
    // }
  ]
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
