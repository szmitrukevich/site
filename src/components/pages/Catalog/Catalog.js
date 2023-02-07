import React from 'react'
// import PropTypes from 'prop-types'
import classes from './Catalog.module.scss'
import pairui from '../../../assets/logos/dist/pairui.png'
import locosys from '../../../assets/logos/dist/locosys.png'
import renice from '../../../assets/logos/dist/renice.png'
import yetnorson from '../../../assets/logos/dist/yetnorson.png'
import multi from '../../../assets/logos/dist/multi.png'

const Catalog = () => {
  const distribution = [pairui, locosys, renice, yetnorson, multi]
  const createListItem = (item) => (
    <li className={classes.item}>
      <div className={classes.itemWrapper}>
        <img
          src={item}
          alt="item"
        />
      </div>
    </li>
  )
  const distributionList = distribution.map((item) => createListItem(item))
  // const createList = (array) => {
  //   return array.map((item) => {
  //     return (<li className={classes.item}>
  //       `${item}`
  //       </li>)
  //   })
  // }
  return (
    <div className={classes.wrapper}>
      <div className={classes.section}>
        <h1>Линейка поставок</h1>
      </div>
      <div className={classes.container}>
        <h2 className={classes.title}>Официальная дистрибьюция</h2>
        <ul className={classes.distribution}>{distributionList}</ul>
      </div>
    </div>
  )
}

export default Catalog
