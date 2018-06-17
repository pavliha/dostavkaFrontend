import React from 'react'
import { Route, Switch } from 'react-router-dom'
import CargoCreateScene from './@cargo-create/CargoCreateScene'
import RegisterScene from './@register/RegisterScene'
import withTheme from '../utils/withTheme'

const LayoutScene = () =>
  <main>
    <Switch>
      <Route path="/cargo" component={CargoCreateScene} />
      <Route path="/register" component={RegisterScene} />
    </Switch>
  </main>

LayoutScene.propTypes = {}

export default withTheme(LayoutScene)
