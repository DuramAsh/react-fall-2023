import React from 'react';
import classes from './CustomButton.module.css'

const CustomButton = ({children, onClick}) => {
  return (
    <button onClick={onClick} className={classes.btn}>{children}</button>
  );
};

export default CustomButton;