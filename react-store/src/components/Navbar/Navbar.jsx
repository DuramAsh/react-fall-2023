import React from 'react';
import { Link } from 'react-router-dom';
import classes from './Navbar.module.css'
import Logo from "../Logo/Logo";
import CustomButton from "../UI/CustomButton/CustomButton";

const Navbar = ({ onClick }) => {
  return (
    <div className={classes.navbar}>
      <Logo />
      <Link to={'/order'}>
        <CustomButton>Заказать</CustomButton>
      </Link>
      <CustomButton onClick={() => onClick()}>Корзина</CustomButton>
    </div>
  );
};

export default Navbar;