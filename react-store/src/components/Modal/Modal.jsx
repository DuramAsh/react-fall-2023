import React from 'react';
import classes from './Modal.module.css'
import CartProductsList from "../Products/CartProductsList";
import CustomButton from '../UI/CustomButton/CustomButton';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import useToken from '../../hooks/useToken';
import { paymentPage } from '../../utils/utils';

// alter table orders add column amount int;


const Modal = (props) => {
  const rootClasses = [classes.wrapper]
  if (props.visible) {
    rootClasses.push(classes.active)
  }
  
  const { email, token } = useToken();
  const navigateTo = useNavigate();
  
  let sum = 0;
  for (let i = 0; i < props.cart.length; i++) {
    sum += props.cart[i].price
  }

  const getEpayToken = async () => { 
    let formData = new FormData();
    formData.append('grant_type', 'client_credentials');
    formData.append('scope', 'webapi usermanagement email_send verification statement statistics payment');
    formData.append('client_id', 'test');
    formData.append('client_secret', 'yF587AV9Ms94qN2QShFzVR3vFnWkhjbAK3sG')
    formData.append('terminal', '67e34d63-102f-4bd1-898e-370781d0074d')
  
    let token

    await axios({
      method: "post",
      url: 'https://testoauth.homebank.kz/epay2/oauth2/token',
      data: formData,
      headers: { "Content-Type": "multipart/form-data" }
    }).then(response => {
      token = response.data.access_token
    })

    return token
  }

  const makeOrder = async () => {
    const response = await axios.post('https://store-back-6ylx.onrender.com' + '/api', {
      email: email,
      amount: sum,
    });

    const epayToken = await getEpayToken();

    paymentPage(sum, epayToken)
  }

  return (
    <div className={rootClasses.join(' ')} onClick={() => props.setVisible(false)}>
      <div className={classes.content} onClick={e => e.stopPropagation()}>
        {props.cart.length !== 0
          ? <div>
            <CartProductsList products={props.cart} onClick={props.deleteFromCart} />
            <h1>Общая сумма: {sum}</h1>
            <CustomButton onClick={() => { makeOrder() }}>
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