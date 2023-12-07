import React from 'react';
import classes from './Modal.module.css'
import CartProductsList from "../Products/CartProductsList";
import CustomButton from '../UI/CustomButton/CustomButton';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { parseToken } from '../../utils/utils';
import useToken from '../../hooks/useToken';

const Modal = (props) => {
  const rootClasses = [classes.wrapper]
  if (props.visible) {
    rootClasses.push(classes.active)
  }

  const {email, token} = useToken();
  const navigateTo = useNavigate();

  const makeOrder = async () => {
    const response = await axios.post('https://store-back-6ylx.onrender.com' + '/api', {
      email: email
    });

    navigateTo('/orders')
  }


  let sum = 0;
  for (let i = 0; i < props.cart.length; i++) {
    sum += props.cart[i].price
  }
  
  return (
    <div className={rootClasses.join(' ')} onClick={() => props.setVisible(false)}>
      <div className={classes.content} onClick={e => e.stopPropagation()}>
        {props.cart.length !== 0
          ? <div>
            <CartProductsList products={props.cart} onClick={props.deleteFromCart}/>
            <h1>Общая сумма: {sum}</h1>
            <CustomButton onClick={() => {makeOrder()}}>
              Заказать
            </CustomButton>
          </div>
          : <h1>Корзина пуста</h1>
        }
      </div>
    </div>
  );
};

export default Modal;