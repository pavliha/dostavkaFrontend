import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'
import RegisterCard from './LoginCard/index'

const styles = theme => ({
  root: {
    marginTop: theme.spacing.size5,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
const LoginScene = ({ classes }) =>
  <div className={classes.root}>
    <RegisterCard />
  </div>

LoginScene.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(LoginScene)
