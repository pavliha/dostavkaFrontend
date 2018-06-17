import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/es/Grid/Grid'
import CargoForm from './CargoFilter'
import Container from '../Container'
import CargoList from './CargoList'

const styles = theme => ({
  root: {}
})

const CargoScene = ({ classes }) =>
  <Container className="mt-4">
    <Grid container justify="space-between">
      <Grid item sm={12} md={6}>
        <CargoForm />
      </Grid>
      <Grid item md={6}>
        <CargoList />
      </Grid>
    </Grid>
  </Container>

CargoScene.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(CargoScene)
