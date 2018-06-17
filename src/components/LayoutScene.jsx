import React from 'react'
import { Route, Switch } from 'react-router-dom'
import CargoCreateScene from './@cargo-create/CargoCreateScene'
import RegisterScene from './auth/@register/RegisterScene'
import withTheme from '../utils/withTheme'
import LoginScene from './auth/@login/LoginScene'
import Header from './Header'
import IndexScene from './@index/IndexScene'

const LayoutScene = () =>
  <main>
    <Header />
    <Switch>
      <Route path="/" exact component={IndexScene} />
      <Route path="/cargo" component={CargoCreateScene} />
      <Route path="/register" component={RegisterScene} />
      <Route path="/login" component={LoginScene} />
    </Switch>
  </main>

LayoutScene.propTypes = {}

export default withTheme(LayoutScene)
