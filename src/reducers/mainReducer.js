import { fromJS } from 'immutable';

import * as constants from './constants';

const initialState = fromJS({
  isLoading: false,
  isAuthenticated: JSON.parse(localStorage.getItem('isAuthenticated')),
  casos: [],
  departamentos: [],
});

function mainReducer(state = initialState, action) {
  switch (action.type) {
    case constants.IS_LOADING:
      return state.set('isLoading', action.payload.isLoading);

    case constants.SET_IS_AUTHENTICATED:
      return state.set('isAuthenticated', action.payload.isAuthenticated);

    case constants.SET_CASOS:
      return state.set('casos', action.payload.list);

    case constants.SET_DEPARTAMENTOS:
      return state.set('departamentos', action.payload.list);

    default:
      return state;
  }
}

export default mainReducer;
