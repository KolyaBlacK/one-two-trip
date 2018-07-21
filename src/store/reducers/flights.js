import * as actionTypes from '../actions/actionTypes'

const initialState = {
  loaded: false,
  data: [],
  currentCarrier: 'all'
}

export const flights = (state = initialState, action) => {
  switch (action.type) {

    case actionTypes.FETCH_FLIGHTS_SUCCESS:
      return { ...state, data: action.data, loaded: true }

    case actionTypes.CURRENT_FLIGHTS:
      return { ...state, currentCarrier: action.carrier }

    default:
      return state
  }
}
