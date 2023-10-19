import React from 'react';
import classes from './Order.module.css'

const Order = () => {
  return (
    <>
      <img className={classes.img} alt={"some img"}
        src={'https://www.pmexamstudy.com/wp-content/uploads/2020/07/whatsapp-button.png'} onClick={() => {
          const link = 'https://api.whatsapp.com/send/?phone=77775725184&text=Здравствуйте%21+Я+хотел+бы+сделать+заказ%3A%0D%0A'
          window.open(link, '_blank')
          // const link = 'Проконсультируйте+меня%2C+пожалуйста&type=phone_number&app_absent=0'
        }
        }></img>
    </>
  );
};

export default Order;