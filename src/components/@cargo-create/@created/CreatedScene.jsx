import React from 'react'
import PropTypes from 'prop-types'
import Typography from '@material-ui/core/es/Typography/Typography'
import { Link } from 'react-router-dom'
import Button from '@material-ui/core/es/Button/Button'

const CreateScene = () =>
  <div className={classes.root}>
    <div className={classes.main}>
      <Typography
        gutterBottom
        className={classes.text}
        align="center"
        variant="subheading"
      >
        Thank you. Cargo created
      </Typography>

      <Link to="/cargo/create">
        <Button variant="raised" color="primary">add another cargo</Button>
      </Link>
    </div>
  </div>

CreateScene.propTypes = {}

export default CreateScene
