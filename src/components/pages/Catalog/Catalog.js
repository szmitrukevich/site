import React from 'react'
// import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import classes from './Catalog.module.scss'
import pairui from '../../../assets/logos/dist/pairui.png'
import locosys from '../../../assets/logos/dist/locosys.png'
import renice from '../../../assets/logos/dist/renice.png'
import yetnorson from '../../../assets/logos/dist/yetnorson.png'
import multi from '../../../assets/logos/dist/multi.png'
import feasycom from '../../../assets/logos/dist/feasycom.png'
import ad from '../../../assets/logos/worldBrands/AD.png'
import altera from '../../../assets/logos/worldBrands/Altera.png'
import atmel from '../../../assets/logos/worldBrands/Atmel.png'
import avago from '../../../assets/logos/worldBrands/Avago.png'
import broadcom from '../../../assets/logos/worldBrands/Broadcom.png'
import cypress from '../../../assets/logos/worldBrands/Cypres.png'
import fujitsu from '../../../assets/logos/worldBrands/Fujitsu.png'
import infenion from '../../../assets/logos/worldBrands/Infenion.png'
import intel from '../../../assets/logos/worldBrands/Intel.png'
import ir from '../../../assets/logos/worldBrands/IR.png'
import ixys from '../../../assets/logos/worldBrands/Ixys.png'
import maxim from '../../../assets/logos/worldBrands/Maxim.png'
import microchip from '../../../assets/logos/worldBrands/Microchip.png'
import micron from '../../../assets/logos/worldBrands/Micron.png'
import murata from '../../../assets/logos/worldBrands/Murata.png'
import nxp from '../../../assets/logos/worldBrands/NXP.png'
import ti from '../../../assets/logos/worldBrands/TI.png'
import xilinx from '../../../assets/logos/worldBrands/Xilinx.png'

const Catalog = () => {
  const distribution = [
    { name: 'Pairui', src: pairui, prod: 'Источники питания' },
    { name: 'Locosys', src: locosys, prod: 'GPS-модули' },
    { name: 'Yetnorson', src: yetnorson, prod: 'Антенны' },
    { name: 'MultiDimension ', src: multi, prod: 'Магнитные датчики' },
    { name: 'Feasycom', src: feasycom, prod: 'Bluetooth- и Wi-Fi-модули' },
    { name: 'Renice', src: renice, prod: 'SSD-накопители' },
  ]
  const worldBrands = [
    { name: 'AD', src: ad },
    { name: 'Altera', src: altera },
    { name: 'Atmel', src: atmel },
    { name: 'Avago', src: avago },
    { name: 'Broadcom', src: broadcom },
    { name: 'Cypress', src: cypress },
    { name: 'Fujitsu', src: fujitsu },
    { name: 'Infenion', src: infenion },
    { name: 'Intel', src: intel },
    { name: 'IR', src: ir },
    { name: 'Ixys', src: ixys },
    { name: 'Maxim', src: maxim },
    { name: 'Microchip', src: microchip },
    { name: 'Micron', src: micron },
    { name: 'Murata', src: murata },
    { name: 'NXP', src: nxp },
    { name: 'TI', src: ti },
    { name: 'Xilinx', src: xilinx },
  ]
  const createListItem = (item) => (
    <li
      className={classes.item}
      key={item.name}
    >
      <div className={classes.itemWrapper}>
        <img
          src={item.src}
          alt={item.name}
        />
      </div>
      <div className={classes.description}>{item.prod && item.prod}</div>
    </li>
  )
  const createLink = (item) => (
    <Link
      to={`${item.name}`}
      key={item.name}
    >
      {createListItem(item)}
    </Link>
  )
  const distributionList = distribution.map((item) => createLink(item))
  const worldBrandsList = worldBrands.map((item) => createListItem(item))
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
        <h2 className={classes.title}>Дистрибьюция</h2>
        <ul className={classes.distribution}>{distributionList}</ul>
      </div>
      <div className={classes.container}>
        <h2 className={classes.title}>Мировые бренды</h2>
        <ul className={classes.worldBrands}>{worldBrandsList}</ul>
      </div>
    </div>
  )
}

export default Catalog
