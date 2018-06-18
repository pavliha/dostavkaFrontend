/* eslint-disable jsx-a11y/click-events-have-key-events,jsx-a11y/interactive-supports-focus, function-paren-newline */
import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'
import Avatar from '@material-ui/core/es/Avatar/Avatar'

const styles = theme => ({
  root: {
    paddingTop: theme.spacing.size3,
    paddingBottom: theme.spacing.size3,

    display: 'flex',
  },
  photo: {
    borderRadius: '5%',
    margin: 2,
    flexBasis: '24%',
    height: 'auto',
  },

  cargoBadge: {
    display: 'flex',
  },

})
const LargePictureCargoBadge = ({ classes, pictures }) =>
  <div className={classes.root}>
    {
      pictures.map((img, index) =>
        <Avatar key={index} className={classes.photo} src={img.url} />)
    }
  </div>
LargePictureCargoBadge.propTypes = {
  classes: PropTypes.object.isRequired,
  pictures: PropTypes.array.isRequired,
}

export default withStyles(styles)(LargePictureCargoBadge)
