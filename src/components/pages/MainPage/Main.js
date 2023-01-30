import React from 'react'

import classes from './Main.module.scss'
import Contacts from '../../ui/Contacts'
import Advantages from '../../ui/Advantages'
import Services from '../../ui/Services'

const Main = () => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.container}>
        <div className={classes.title}>
          <h1>ДИСТРИБЬЮТОР ЭЛЕКТРОННЫХ КОМПОНЕНТОВ</h1>
        </div>
      </div>
      <Services />
      <div className={classes.basis} />
      <Advantages />
      <Contacts />
    </div>
  )
}

export default Main
