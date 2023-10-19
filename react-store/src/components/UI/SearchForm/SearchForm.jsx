import React from 'react';
import classes from './SearchForm.module.css'

const SearchForm = ({value, onChange}) => {
  return <input className={classes.myInput} type="text" placeholder='Поиск по названию' value={value}
                onChange={e => onChange(e.target.value)}/>
};

export default SearchForm;