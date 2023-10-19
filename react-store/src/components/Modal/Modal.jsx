import React from 'react';
import classes from './Modal.module.css'
import CartProductsList from "../Products/CartProductsList";

const Modal = (props) => {
  const rootClasses = [classes.wrapper]
  if (props.visible) {
    rootClasses.push(classes.active)
  }
  
  const sep = '%0D%0A'
  let link = 'https://api.whatsapp.com/send/?phone=77775725184&text=Здравствуйте%21+Я+хотел+бы+сделать+заказ%3A%0D%0A'
  
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
          </div>
          : <h1>Корзина пуста</h1>
        }
      </div>
    </div>
  );
};

export default Modal;