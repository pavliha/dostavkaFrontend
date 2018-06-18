import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/es/Grid/Grid'
import CargoForm from './CargoForm'
import Container from '../../Container'
import MyMaps from './MyMaps'
import addCargoFormReducer from '../../../reducers/createCargo.reducer'

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

  map: {
    paddingTop: theme.spacing.size4,
    borderRadius: 3,
  }

})

const CreateScene = ({ classes, from, to }) =>
  <section className={classes.root}>
    {console.log(from)}
    {console.log(to)}
    <Container>
      <Grid container>
        <Grid item md={5}>
          <CargoForm valuesSearch={from} valuesTo={to} />
        </Grid>
        <Grid item md={7} className={classes.map}>
          <MyMaps />
        </Grid>
      </Grid>
    </Container>
  </section>

CreateScene.propTypes = {
  classes: PropTypes.object.isRequired,
}

const mapStateToProps = (store) => ({
  from: store.addCargoFormReducer.value,
  to: store.addCargoFormReducer.to,
})

export default connect(mapStateToProps)(withStyles(styles)(CreateScene))
