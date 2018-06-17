import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
  root: {}
})

const CargoCard = ({ classes, cargo }) =>
  <div className={classes.root}>
    {cargo.title}
  </div>

CargoCard.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(CargoCard)
