import { callApi } from '../api'
import * as actionTypes from './actionTypes'

const fetchFlightsSuccess = data => {
  return {
    type: actionTypes.FETCH_FLIGHTS_SUCCESS,
    data
  }
}

const getCurrentFlights = carrier => {
  return {
    type: actionTypes.CURRENT_FLIGHTS,
    carrier
  }
}

export const fetchFlights = () => dispatch => callApi()
  .then(response => {
    dispatch(fetchFlightsSuccess(response.data.flights))
  })
  .catch(error => {
    console.log(error)
  })

export const currentFlights = carrier => dispatch =>
  dispatch(getCurrentFlights(carrier))
