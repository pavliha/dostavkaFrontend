/* eslint-disable jsx-a11y/click-events-have-key-events,jsx-a11y/interactive-supports-focus, function-paren-newline */
import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'
import Avatar from '@material-ui/core/es/Avatar/Avatar'
import CargoBadge from '../../../CargoBadges/CargoBadge'

const styles = theme => ({
  photo: {
    borderRadius: '5%',
    margin: 2,
  },
})
const PictureCargoBadge = ({ classes, pictures }) =>
  <CargoBadge
    label="фото"
    value={pictures.map((img, index) =>
      <Avatar key={index} className={classes.photo} src={img.url} />,
    )}
  />

PictureCargoBadge.propTypes = {
  classes: PropTypes.object.isRequired,
  pictures: PropTypes.array.isRequired,
}

export default withStyles(styles)(PictureCargoBadge)
