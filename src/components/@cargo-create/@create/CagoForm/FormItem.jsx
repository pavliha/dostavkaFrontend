import React from 'react'
import PropTypes from 'prop-types'
import Typography from '@material-ui/core/es/Typography/Typography'
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
  root: {}
})

const FormItem = ({ classes, label, children }) =>
  <div className={classes.root}>
    <Typography color="inherit">{label}</Typography>
    {children}
  </div>

FormItem.propTypes = {
  classes: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired,
  label: PropTypes.string.isRequired,
}

export default withStyles(styles)(FormItem)
