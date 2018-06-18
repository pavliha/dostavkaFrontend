/* eslint-disable react/forbid-prop-types,max-len */
import React from 'react'
import PropTypes from 'prop-types'

const url = 'http://localhost:3333/images/transfer_cargo_blue.jpg'
const style = {
  backgroundImage: `url(${url})`,
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  height: '700px',
  position: 'relative',
}

const Background = ({ children }) =>
  <div style={style}>
    {children}
  </div>

Background.propTypes = {
  children: PropTypes.any,
}

Background.defaultProps = {
  children: '',
}

export default Background
