import React from 'react'
// import PropTypes from 'prop-types'
import { NavLink, Outlet } from 'react-router-dom'
import HeaderLink from '../../ui/HeaderLink'
import classes from './Header.module.scss'

// const setActive = ({ isActive }) => (isActive ? 'activeLink' : '')

const Header = () => {
  const linkList = [
    {
      link: '/',
      text: 'На главную',
    },
    {
      link: '/about',
      text: 'О компании',
    },
    {
      link: '/catalog',
      text: 'Линейка поставок',
    },
    {
      link: '/contract',
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
      style={({ isActive }) => ({ color: isActive ? '#08e8de' : 'gray' })}
    >
      <HeaderLink text={item.text} />
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
        </div>
      </div>
      <Outlet />
    </>
  )
}

export default Header
