import React from 'react'
import PropTypes from 'prop-types'
import classes from './Link.module.scss'

const Link = ({ text, header }) => {
  return <span className={header ? classes.header : classes.footer}>{text}</span>
}

export default Link

Link.defaultProps = { text: '', header: true }

Link.propTypes = { text: PropTypes.string, header: PropTypes.bool }
