import React from 'react'
import PropTypes from 'prop-types'
import { Route, Switch } from 'react-router-dom'
import Container from '../Container'
import CreateScene from './@create/CreateScene'
import CreatedScene from './@created/CreatedScene'

const CargoCreateScene = ({}) => (
  <div>
    <Container>
      <Switch>
        <Route exact path="/cargo/create" component={CreateScene} />
        <Route exact path="/cargo/created" component={CreatedScene} />
      </Switch>
    </Container>
  </div>
)

export default CargoCreateScene
