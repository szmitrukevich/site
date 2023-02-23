import React from 'react'
import classes from './Contacts.module.scss'

const Contacts = () => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.contacts}>
        <h2>КОНТАКТЫ</h2>
        <div className={classes.address}>
          <div className={classes.title}>Адрес:</div>
          <div className={classes.info}>
            196006, г.Санкт-Петербург, вн. тер.г муниципальный округ Московская застава, ул. Коли Томчака, д.28, литера
            Ц, помещ./офис 1-Н/413
          </div>
        </div>
        <div className={classes.phone}>
          <div className={classes.title}>Телефон:</div>
          <div className={classes.info}>
            <a href="tel:+79818907580">+7 (981) 890-75-80</a>
          </div>
        </div>
        <div className={classes.email}>
          <div className={classes.title}>Электронная почта:</div>
          <div className={classes.info}>
            <a href="mailto:sales@elctrade.ru">sales@elctrade.ru</a>
          </div>
        </div>
      </div>
      <div className={classes.map}>
        <iframe
          title="map"
          className={classes.iframe}
          src={
            // eslint-disable-next-line max-len
            'https://yandex.ru/map-widget/v1/?um=constructor%3A16733964c780b257b22524f0f1728605ec84fedb954ae26b303d82d0084e5ea8&amp;source=constructor'
          }
          // width="700"
          // height="400"
          frameBorder="0"
        />
      </div>
    </div>
  )
}

export default Contacts
