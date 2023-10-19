import React from 'react';
import classes from './Selector.module.css'

const Selector = ({value, onChange}) => {
  return (
    <select className={classes.mySelect} value={value} onChange={event => onChange(event.target.value)}>
      <option defaultValue>Все товары</option>
      <option>Головные уборы</option>
      <option>Для девочек</option>
      <option>Для мальчиков</option>
      <option>Куртки</option>
      <option>Обувь</option>
      <option>Платья</option>
      <option>Сумки</option>
    </select>
  );
};

export default Selector;