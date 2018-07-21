import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getCurrentFlights } from '../selectors/getCurrentFlights'
import { FlightCard } from '../components/FlightCard'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'

const ContainerFlights = (props) => {
  const { data } = props
  return (
    <React.Fragment>
      <Typography gutterBottom variant="display1">
        Рейсы:
      </Typography>
      <Grid container spacing={24}>
        {data.map(flight =>
          <Grid item xs={12} sm={6} md={4} lg={3} key={flight.id}>
            <FlightCard {...flight} />
          </Grid>
        )}
      </Grid>
    </React.Fragment>
  )
}

const mapStateToProps = (state) => {
  return { data: getCurrentFlights(state) }
}

export default connect(mapStateToProps)(ContainerFlights)

ContainerFlights.propTypes = {
  data: PropTypes.array.isRequired
}
