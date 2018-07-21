import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Select } from '../components/Select'
import { getCarriersNames } from '../selectors/getCarriersNames'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'

class ContainerSelect extends Component {
  constructor() {
    super()

    this.state = {
      currentCarrier: 'all'
    }

    this.actionChangeCarrier = this.actionChangeCarrier.bind(this)
  }

  actionChangeCarrier(carrier) {
    this.setState({
      currentCarrier: carrier
    }, () => this.props.actionCurrentFlights(carrier))
  }

  render() {
    const { data } = this.props
    const { currentCarrier } = this.state
    return (
      <Grid container alignItems='center' spacing={24}>
        <Grid item xs={12} sm={7} md={4} lg={3}>
          <Typography variant='title'>
            Выберите авиакомпанию
          </Typography>
        </Grid>
        <Grid item xs={12} sm={5}>
          <Select carriers={data} currentCarrier={currentCarrier} actionChangeCarrier={this.actionChangeCarrier} />
        </Grid>
      </Grid>
    )
  }
}

const mapStateToProps = (state) => {
  return { data: getCarriersNames(state) }
}

export default connect(mapStateToProps)(ContainerSelect)

ContainerSelect.propTypes = {
  data: PropTypes.arrayOf(PropTypes.string).isRequired
}
