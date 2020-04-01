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
    {
      id: 3,
      name: 'Slipknot',
      place: 'Vilnius',
      price: 43,
      date: '11.05.2015'
    },
    {
      id: 4,
      name: 'Testament',
      place: 'Riga',
      price: 43,
      date: '01.04.2015'
    },
    {
      id: 5,
      name: 'Eluveitie',
      place: 'Riga',
      price: 20,
      date: '11.05.2015'
    },
    {
      id: 6,
      name: 'Mystic Festival',
      place: 'Krakow',
      price: 90,
      date: '24.06.2019'
    },
    {
      id: 7,
      name: 'Neuromonakh Feofan',
      place: 'Krakow',
      price: 15,
      date: '20.01.2019'
    }
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
