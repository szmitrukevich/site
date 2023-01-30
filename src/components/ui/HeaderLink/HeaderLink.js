import React from 'react'
import PropTypes from 'prop-types'
import classes from './HeaderLink.module.scss'

const HeaderBtn = ({ text }) => {
  return <span className={classes.link}>{text}</span>
}

export default HeaderBtn

HeaderBtn.defaultProps = { text: '' }

HeaderBtn.propTypes = { text: PropTypes.string }
