/* eslint-disable no-console */
import TextField from '@material-ui/core/es/TextField/TextField'
import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Geosuggest extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: props.value.formatted_address,
    }
  }

  componentDidMount() {
  }

  handleChange = e => {
    this.setState({ value: e.target.value })
    this.props.onChange(this.props.name, e.target.value)
  }

  handleBlur = () => {
    this.props.onBlur(this.props.name, true)
  }

  render() {
    const {
      ...props
    } = this.props

    return (
      <TextField
        {...props}
        value={this.state.value}
        onChange={this.handleChange}
        onBlur={this.handleBlur}
      />
    )
  }
}

Geosuggest.propTypes = {
  name: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  onBlur: PropTypes.func,
  options: PropTypes.shape({}),
}

Geosuggest.defaultProps = {
  name: 'geosuggest',
  value: '',
  onChange: () => {},
  onBlur: () => {},
  options: {},
}

export default Geosuggest
