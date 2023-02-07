import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import classes from './Footer.module.scss'
import FooterLink from '../../ui/Link'
import logo from '../../../assets/logos/logo.svg'

const Footer = () => {
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
      style={({ isActive }) => ({ color: isActive ? '#809aeb' : 'white' })}
    >
      <FooterLink
        text={item.text}
        header={false}
      />
    </NavLink>
  )
  const links = linkList.map((item) => createLink(item))
  return (
    <>
      <Outlet />
      <div className={classes.wrapper}>
        <div className={`${classes.container} ${classes.top}`}>
          <div className={classes.logoWrapper}>
            <NavLink
              to="/"
              className="logo"
            >
              <div className={classes.logo}>
                <img
                  src={logo}
                  alt="logo"
                />
              </div>
            </NavLink>
          </div>
          <div className={classes.links}>
            <div className={classes.title}>
              <h2>Меню</h2>
            </div>
            <div className={classes.list}>{links}</div>
          </div>
          <div className={classes.requisites}>
            <div className={classes.title}>
              <h2>Реквизиты</h2>
            </div>
            <div className={classes.info}>
              <div className={classes.left}>
                <h3>Юридический адрес:</h3>
                <div>196128, Российская Федерация, г. Санкт-Петербург, Варшавская ул., 9, корп. 1</div>
              </div>

              <div className={classes.right}>
                <span>
                  <b>ИНН/КПП</b>
                </span>
                <span> 7714546180/773231001</span>
                <span>
                  <b>Рассчетный счет</b>
                </span>
                <span> 40723810938040024665</span>
                <span>
                  <b>Корр.счет</b>
                </span>
                <span> 30101814500000000225</span>
                <span>
                  <b>БИК </b>
                  044534225
                </span>
                <span>
                  <b>OГРН </b>
                  457739381812
                </span>
                <span>
                  <b>ОКТМО </b>
                  45592700
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className={`${classes.container} ${classes.bottom}`}>
          <div className={classes.shortInfo}>
            <div>© ООО ЭлСи-Трейд 2022</div>
            <a href="mailto:sergey@elc-tr.ru">sergey@elc-tr.ru</a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer
