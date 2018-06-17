/* eslint-disable object-curly-newline,camelcase */
import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'
import Card from '@material-ui/core/es/Card/Card'
import Grid from '@material-ui/core/es/Grid/Grid'
import Typography from '@material-ui/core/es/Typography/Typography'
import Icon from '@material-ui/core/es/Icon/Icon'

const styles = theme => ({
  root: {
    marginBottom: theme.spacing.size3,
    padding: theme.spacing.size2,
  },
  rotated: {
    transform: 'rotate(45deg)',
  },
  detailsButton: {
    marginTop: theme.spacing.size1,
  },
})

const CargoCard = ({ classes, cargo }) => {
  const { id, from, to, title } = cargo

  return (
    <Card className={classes.root} key={id}>
      <Grid container>
        <Grid container alignItems="center">
          <Grid item xs={7}>
            <Typography gutterBottom variant="headline">
              {title}
            </Typography>
          </Grid>
          <Grid item justify="flex-end" container xs={5}>
          </Grid>
        </Grid>
        <div className={classes.locations}>
          <div>
            <Icon>send</Icon>
            <Typography>{from.address}</Typography>
          </div>
          <div className={classes.location}>
            <Icon>call_missed_outgoing</Icon>
            <Typography>{to.address}</Typography>
          </div>
        </div>
      </Grid>
    </Card>
  )
}

CargoCard.propTypes = {
  cargo: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(CargoCard)
