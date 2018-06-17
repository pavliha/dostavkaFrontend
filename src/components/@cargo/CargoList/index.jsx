/* eslint-disable function-paren-newline */
import React from 'react'
import PropTypes from 'prop-types'
import CargoCard from './CargoCard'
import connector from './connector'

class CargoList extends React.Component {
  componentDidMount() {
    this.props.actions.cargo.load()
  }

  render() {
    const { cargos, loading } = this.props

    return cargos.map(cargo =>
      <CargoCard key={cargo.id} cargo={cargo} />,
    )
  }
}

CargoList.propTypes = {
  cargos: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
  actions: PropTypes.object.isRequired,
}

export default connector(CargoList)
