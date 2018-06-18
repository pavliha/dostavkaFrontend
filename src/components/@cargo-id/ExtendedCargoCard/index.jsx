/* eslint-disable object-curly-newline,camelcase */
import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'
import moment from 'moment'
import Card from '@material-ui/core/es/Card/Card'
import Grid from '@material-ui/core/es/Grid/Grid'
import Typography from '@material-ui/core/es/Typography/Typography'
import Icon from '@material-ui/core/es/Icon/Icon'
import CargoBadges from '../../CargoBadges'
import connector from '../connector'

import CargoBadge from '../../CargoBadges/CargoBadge'

const styles = theme => ({
  root: {
    marginBottom: theme.spacing.size3,
    padding: theme.spacing.size2,
  },
  locations: {
    marginBottom: theme.spacing.size2,
  },
  location: {
    display: 'flex',
  },
  location_text: {
    paddingLeft: theme.spacing.size1,
  },
  rotated: {
    transform: 'rotate(45deg)',
  },
})

const ExtendedCargoCard = ({ classes, cargo }) => {
  const {
    id,
    from,
    to,
    title,
    ...rest
  } = cargo

  const other = Object.keys(rest).map(key => ({ key, value: rest[key] }))

  return (
    <Card className={classes.root} key={id}>
      <Grid spacing={8} container>
        <Grid item xs={8}>
          <Grid container alignItems="center">
            <Grid item xs={7}>
              <Typography gutterBottom variant="headline">
                {title}
              </Typography>
            </Grid>
          </Grid>
          <div className={classes.locations}>
            <div className={classes.location}>
              <Icon>send</Icon>
              <Typography className={classes.location_text}>{from.address}</Typography>
            </div>
            <div className={classes.location}>
              <Icon className={classes.rotated}>call_missed_outgoing</Icon>
              <Typography className={classes.location_text}>{to.address}</Typography>
            </div>
          </div>
          <CargoBadge label="дата отправления" value={moment(from.date).format('DD MMMM YYYY')} />
          <CargoBadge label="дата прибытия" value={moment(to.date).format('DD MMMM YYYY')} />
          <CargoBadges extended badges={other} />
        </Grid>
      </Grid>
    </Card>
  )
}

ExtendedCargoCard.propTypes = {
  cargo: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
}

export default connector(withStyles(styles)(ExtendedCargoCard))
