import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/es/Grid/Grid'
import CargoForm from './CargoForm'

const styles = theme => ({
  root: {
    // color: theme.palette.common.white,
    background: theme.palette.primary.main,
    flexGrow: 1,
  },
  flex: {
    flex: 1,
  },
  color: {
    '&::-webkit-input-placeholder': {
      color: theme.palette.error.dark,
    },
    color: theme.palette.error.dark,
  },

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
