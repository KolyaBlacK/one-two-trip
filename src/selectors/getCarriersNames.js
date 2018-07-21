import { createSelector } from 'reselect'
import { filterDuplicates } from '../helpers/filterDuplicates'

const flights = state => state.flights.data

export const getCarriersNames = createSelector(
  flights,
  (flights) => filterDuplicates(flights, 'carrier')
)
