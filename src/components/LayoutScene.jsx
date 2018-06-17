import React from 'react'
import { Route, Switch } from 'react-router-dom'
import CargoCreateScene from './@cargo-create/CargoCreateScene'
import RegisterScene from './@register/RegisterScene'
import withTheme from '../utils/withTheme'
import LoginScene from './@login/LoginScene'

const LayoutScene = () =>
  <main>
    <Switch>
      <Route path="/cargo" component={CargoCreateScene} />
      <Route path="/register" component={RegisterScene} />
      <Route path="/login" component={LoginScene} />
    </Switch>
  </main>

LayoutScene.propTypes = {}

export default withTheme(LayoutScene)
