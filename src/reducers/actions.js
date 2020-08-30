import * as constants from './constants';

export const setIsLoading = (value) => ({
  type: constants.IS_LOADING,
  payload: {
    isLoading: value,
  },
});

export const setIsAuthenticated = (value) => ({
  type: constants.SET_IS_AUTHENTICATED,
  payload: {
    isAuthenticated: value,
  },
});

export const setCasos = (value) => ({
  type: constants.SET_CASOS,
  payload: {
    list: value,
  },
});

export const setDepartamentos = (value) => ({
  type: constants.SET_DEPARTAMENTOS,
  payload: {
    list: value,
  },
});
