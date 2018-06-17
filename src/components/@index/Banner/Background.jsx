/* eslint-disable react/forbid-prop-types */
import React from 'react'
import PropTypes from 'prop-types'

// eslint-disable-next-line max-len
const url = 'https://lh3.googleusercontent.com/UY7g1wiPeGHuTMXrEIf7-jW7C1SVHJgEmdgc0KtUXlNPai39JpigHScQhXcE2SldzGHdvPjq4TLPGijyOtK0=w1600-h794-rw'

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
