/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import classes from './Services.module.scss'

const Services = () => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.container}>
        <div className={classes.content}>
          <article className={classes.article}>
            Компания "ЭлСи-Трейд" - результат совместной работы команды профессионалов.
          </article>
          <article className={classes.article}>
            Мы занимаемся поставками электронных компонентов американских, европейских и азиатских производителей.
          </article>
          <article className={classes.article}>
            У нас можно заказать микросхемы и полупроводниковые компоненты, источники питания, драйверы для светодиодов,
            TFT панели, модули беспроводной связи, силовые компоненты и пассивные компоненты.
          </article>
          <article className={classes.article}>
            Наша компания заключает прямые контракты с производителями, что позволяет гарантировать высокое качество по
            доступным ценам.
          </article>
          <article className={classes.article}>
            Также наша компания предоставляет услуги по контрактному производству печатных плат любого уровня сложности
            для российских предприятий.
          </article>
        </div>
        <div className={classes.contentImg} />
      </div>
    </div>
  )
}

export default Services
