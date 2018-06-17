import React from 'react'
import PropTypes from 'prop-types'
import formik from './formik'

class CargoForm extends React.Component {

  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {

    return (
      <div>
        form
      </div>
    )

  }
}

CargoForm.propTypes = {}

export default formik(CargoForm)
