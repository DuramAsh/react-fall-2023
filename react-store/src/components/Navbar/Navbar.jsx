import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import classes from './Navbar.module.css'
import Logo from "../Logo/Logo";
import CustomButton from "../UI/CustomButton/CustomButton";

import { parseToken } from '../../utils/utils';

const Navbar = ({ onClick }) => {
  const accessToken = localStorage.getItem('token');
  const userEmail = accessToken ? parseToken(accessToken).email : null;

  const navigateTo = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigateTo('/');
  };

  return (
    <div className={classes.navbar}>
      <Logo />

      {accessToken ? (
        <>
          <CustomButton onClick={() => onClick()}>Корзина</CustomButton>
          <Link to={'/orders'}>
            <CustomButton>Мои заказы</CustomButton>
          </Link>
          <CustomButton onClick={handleLogout}>Выйти</CustomButton>
          <h4>Приветствуем, {userEmail}!</h4>
        </>
      ) : (
        <Link to={'/login'}>
          <CustomButton>Войти</CustomButton>
        </Link>
      )}
    </div>
  );
};

export default Navbar;