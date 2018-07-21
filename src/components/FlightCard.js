import React from 'react'
import PropTypes from 'prop-types'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'
import Chip from '@material-ui/core/Chip'

const option = {
  weekday: "long", year: "numeric", month: "short",
  day: "numeric", hour: "numeric", minute: "numeric"
}
const date = () => new Date().toLocaleString('ru-RU', option)

export const FlightCard = ({ id, direction, arrival, departure, carrier }) =>
  <Card id={id}>
    <CardContent>
      <Typography variant='headline'>
        {direction.from} — {direction.to}
      </Typography>
      <Divider style={{ marginTop: 12, marginBottom: 12 }} />
      <Typography variant='body1'>
        <b>Отправление:</b><br />{date(departure)}
      </Typography>
      <Typography variant='body1'>
        <b>Прибытие:</b><br />{date(arrival)}
      </Typography>
      <Divider style={{ marginTop: 12, marginBottom: 12 }} />
      <div style={{ textAlign: 'right' }}>
        <Chip label={carrier} />
      </div>
    </CardContent>
  </Card>

FlightCard.propTypes = {
  id: PropTypes.number,
  direction: PropTypes.shape({
    from: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired
  }).isRequired,
  arrival: PropTypes.string.isRequired,
  departure: PropTypes.string.isRequired,
  carrier: PropTypes.string.isRequired
}
