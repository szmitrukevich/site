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
            195196, Российская Федерация, г. Санкт-Петербург, Варшавская ул., 9, корп. 1
          </div>
        </div>
        <div className={classes.phone}>
          <div className={classes.title}>Телефон:</div>
          <div className={classes.info}>+7 (911) 7467069</div>
        </div>
      </div>
      <div className={classes.map}>
        <iframe
          title="map"
          src={
            // eslint-disable-next-line max-len
            'https://yandex.ru/map-widget/v1/?um=constructor%3A7f8dc1db917063c61a3377d8383b86d4773a71524006fd8874f036d283cb353b&amp;source=constructor'
          }
          width="700"
          height="400"
          frameBorder="0"
        />
      </div>
    </div>
  )
}

export default Contacts
