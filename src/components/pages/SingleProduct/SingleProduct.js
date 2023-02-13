import React from 'react'
import { useParams } from 'react-router-dom'
// import PropTypes from 'prop-types'
import classes from './SingleProduct.module.scss'
import pairui from '../../../assets/logos/dist/pairui.png'

const SingleProduct = () => {
  const { id } = useParams()

  return (
    <div className={classes.wrapper}>
      <div className={classes.section}>
        <h1>Линейка поставок</h1>
      </div>
      <div className={classes.container}>
        <h2 className={classes.title}>{id}</h2>
        <ul className={classes.distribution}>{id}</ul>
      </div>
    </div>
  )
}

export default SingleProduct
