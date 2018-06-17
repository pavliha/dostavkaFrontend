import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import RegisterCard from './RegisterCard'

const styles = theme => ({
  root: {
    marginTop: theme.spacing.size5,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

const RegisterScene = ({ classes }) =>
  <div className={classes.root}>
    <RegisterCard />
  </div>

RegisterScene.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(RegisterScene)
