import React from 'react'
import { Link } from 'react-router-dom'
import classes from './NotFoundPage.module.scss'

const NotFoundPage = () => {
  return (
    <div className={classes.wrapper}>
      Упс, страница не найдена :(
      <Link to="/">Вернуться на главную страницу</Link>
    </div>
  )
}

export default NotFoundPage
