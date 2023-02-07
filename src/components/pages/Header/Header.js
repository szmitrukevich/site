import React, { useState } from 'react'
// import PropTypes from 'prop-types'
import { NavLink, Outlet } from 'react-router-dom'
import HeaderLink from '../../ui/Link'
import classes from './Header.module.scss'

// const setActive = ({ isActive }) => (isActive ? 'activeLink' : '')

const Header = () => {
  const [isPopupOpened, setPopup] = useState(false)
  const linkList = [
    {
      link: '/',
      text: 'О компании',
    },
    {
      link: '/catalog',
      text: 'Линейка поставок',
    },
    {
      link: '/contract-production',
      text: 'Контрактное производство',
    },
    {
      link: '/news',
      text: 'Новости',
    },
    {
      link: '/contacts',
      text: 'Контакты',
    },
  ]

  const createLink = (item) => (
    <NavLink
      to={item.link}
      key={item.text}
      style={({ isActive }) => ({ color: isActive ? '#809aeb' : '#023059' })}
      onClick={() => setPopup(false)}
    >
      <HeaderLink
        text={item.text}
        header
      />
    </NavLink>
  )
  const links = linkList.map((item) => createLink(item))
  return (
    <>
      <div className={classes.wrapper}>
        <div className={classes.section}>
          <NavLink
            to="/"
            className="logo"
          >
            <div className={classes.logo} />
          </NavLink>
          <div className={classes.phone}>
            <a href="tel:+79117467069">+7 (911) 746-70-69</a>
          </div>
          <div className={classes.container}>{links}</div>
          <button
            type="button"
            className={isPopupOpened ? classes.btnOpened : classes.popupBtn}
            onClick={() => setPopup(!isPopupOpened)}
          >
            <span />
          </button>
          <div className={isPopupOpened ? `${classes.popup} ${classes.opened}` : `${classes.popup} ${classes.closed}`}>
            {links}
          </div>
        </div>
      </div>
      <Outlet />
    </>
  )
}

export default Header
