/* eslint-disable react/forbid-prop-types */
import React from 'react'
import PropTypes from 'prop-types'

// eslint-disable-next-line max-len
const url = 'https://lh4.googleusercontent.com/v8dNbUclPVoejmQJ8obvhPAqP82cD3VvsciM7t9x4AzCdIubbDH-eLcnz0po4pxyBT-rEdSbbBc4bPepBguh=w1600-h794-rw'

const style = {
  backgroundImage: `url(${url})`,
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  height: '730px',
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
