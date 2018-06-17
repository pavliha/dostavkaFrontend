import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/es/Grid/Grid'
import CargoForm from './CagoForm'

const styles = theme => ({
  root: {}
})

const CreateScene = ({ classes }) =>
  <section className={classes.root}>
    <Grid container>
      <Grid item md={5}>
        <CargoForm />
      </Grid>
    </Grid>
  </section>

CreateScene.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(CreateScene)
