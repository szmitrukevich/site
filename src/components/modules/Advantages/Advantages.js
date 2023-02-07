import React from 'react'
import classes from './Advantages.module.scss'

const Advantages = () => {
  return (
    <div className={classes.wrapper}>
      <h2>НАШИ ОСНОВНЫЕ ПРЕИМУЩЕСТВА:</h2>
      <div className={classes.container}>
        <ul className={classes.list}>
          <li className={classes.item}>оригинальные качественные компоненты</li>
          <li className={classes.item}>гарантию на поставленные компоненты</li>
          <li className={classes.item}>бесплатные образцы</li>
          <li className={classes.item}>высокую надежность поставок</li>
          <li className={classes.item}>низкие оптовые цены</li>
          <li className={classes.item}>доставку по всей территории РФ</li>
          <li className={classes.item}>
            товар лучших мировых, российских и азиатских производителей по привлекательным ценам
          </li>
          <li className={classes.item}>инженерную поддержку</li>
        </ul>
      </div>
    </div>
  )
}

export default Advantages
