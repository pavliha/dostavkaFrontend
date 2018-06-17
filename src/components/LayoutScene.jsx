import React from 'react'
import { Route, Switch } from 'react-router-dom'
import CargoCreateScene from './@cargo-create/CargoCreateScene'

const LayoutScene = () =>
  <main>
    <Header />
    <Switch>
      <Route path="/cargo" component={CargoCreateScene} />
    </Switch>
  </main>

LayoutScene.propTypes = {}

export default LayoutScene
