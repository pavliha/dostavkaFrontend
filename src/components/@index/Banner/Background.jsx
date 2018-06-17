/* eslint-disable react/forbid-prop-types */
import React from 'react'
import PropTypes from 'prop-types'

// eslint-disable-next-line max-len
const url = 'https://besthqwallpapers.com/img/original/29482/tesla-semi-truck-4k-road-2018-truck-electric-truck.jpg'

const style = {
  backgroundImage: `url(${url})`,
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  height: '800px',
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
