import React from 'react'
import PropTypes from 'prop-types'
import SelectUI from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'

export const Select = ({ carriers, currentCarrier, actionChangeCarrier }) =>
  <SelectUI
    value={currentCarrier}
    onChange={(e) => actionChangeCarrier(e.target.value)}
  >
    <MenuItem value={'all'}>Все авиакомании</MenuItem>
    {carriers.map((carrier, i) => <MenuItem key={i} value={carrier}>{carrier}</MenuItem>)}
  </SelectUI>

Select.propTypes = {
  carriers: PropTypes.arrayOf(PropTypes.string).isRequired,
  currentCarrier: PropTypes.string.isRequired,
  actionChangeCarrier: PropTypes.func.isRequired
}
