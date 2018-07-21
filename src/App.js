import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchFlights, currentFlights } from './store/actions'
import ContainerSelect from './containers/ContainerSelect'
import ContainerFlights from './containers/ContainerFlights'
import CssBaseline from '@material-ui/core/CssBaseline'
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'
import 'typeface-roboto'

const theme = createMuiTheme({
  typography: {
    htmlFontSize: 16,
  }
})

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      loaded: false
    }
    this.actionCurrentFlights = this.actionCurrentFlights.bind(this)
  }

  componentWillMount() {
    this.props.fetchFlights()
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ loaded: nextProps.loaded })
  }

  actionCurrentFlights(carrier) {
    this.props.currentFlights(carrier)
  }

  render() {
    const { loaded } = this.state
    return <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="static" style={{ marginBottom: 40 }}>
        <Toolbar>
          <Typography variant="title" color="inherit">
            One Two Trip
          </Typography>
        </Toolbar>
      </AppBar>
      <Grid container spacing={24} style={{ padding: 24 }}>
        <Grid item xs={12}>
          {loaded ?
            <React.Fragment>
              <ContainerSelect actionCurrentFlights={this.actionCurrentFlights} />
              <Divider style={{ marginTop: 24, marginBottom: 24 }} />
              <ContainerFlights />
            </React.Fragment>
            : 'Load'}
        </Grid>
      </Grid>
    </MuiThemeProvider>
  }
}

const mapStateToProps = (state) => {
  const { data, loaded } = state.flights
  return { data, loaded }
}

export default connect(mapStateToProps, {
  fetchFlights,
  currentFlights
})(App)
