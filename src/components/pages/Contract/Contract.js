/* eslint-disable react/no-unescaped-entities */
import React from 'react'
// import PropTypes from 'prop-types'
import classes from './Contract.module.scss'

const Contract = () => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.about}>
        <h1>КОНТРАКТНОЕ ПРОИЗВОДСТВО</h1>
        <div className={classes.image} />
        <div className={classes.content}>
          ООО "ЭлСи-Трейд" предоставляет услуги по контрактному производству печатных плат для российских предприятий.
          Прямые контракты с российскими и китайскими площадками и проверенные поставщики электронных компонентов
          позволяют осуществлять законченный цикл производства электронных изделий под заказ по конкурентым ценам в
          сжатые сроки.
        </div>
      </div>
      <div className={classes.services}>
        <div className={classes.lists}>
          <ul className={classes.list}>
            Печатные платы любого уровня сложности
            <li className={classes.item}>
              Изготовление односторонних, двухсторонних и многослойных (до 40 слоёв) плат
            </li>
            <li className={classes.item}>Изготовление плат для ВЧ/СВЧ применений</li>
            <li className={classes.item}>
              Изготовление печатных плат по свинцовой, бессвинцовой и смешанной технологии
            </li>
            <li className={classes.item}>изготовление опытных образцов печатных плат от 5 рабочих дней</li>
          </ul>
          <ul className={classes.list}>
            Монтаж печатных плат
            <li className={classes.item}>Поверхностный, объёмный и штыревой монтаж печатных узлов</li>
            <li className={classes.item}>Сложные печатные узлы</li>
            <li className={classes.item}>Селективная пайка</li>
            <li className={classes.item}>Ручная пайка</li>
            <li className={classes.item}>Пайка по свинцовой, бессвинцовой и смешанной технологии</li>
          </ul>
          <ul className={classes.list}>
            Контроль качества изделий РЭА
            <li className={classes.item}>Контроль волнового сопротивления</li>
            <li className={classes.item}>Контроль плат перед монтажом</li>
            <li className={classes.item}>Визуальный контроль</li>
            <li className={classes.item}>Рентген-контроль</li>
            <li className={classes.item}>Контроль качества отмывки</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Contract
