import { createSelector } from 'reselect'

const flights = state => state.flights.data
const currentFlights = state => state.flights.currentCarrier

export const getCurrentFlights = createSelector(
  flights,
  currentFlights,
  (flights, currentFlights) =>
    currentFlights === 'all' ? flights : flights.filter(flight => flight.carrier === currentFlights)
)
