import React from 'react';
import classes from "./CartProductsList.module.css";
import CustomButton from "../UI/CustomButton/CustomButton";

const CartProductsList = ({products, onClick}) => {
  return (
    <div className={classes.productList}>
      {products.map(product => (
        <div key={product.id} className={classes.product}>
          <div className={classes.info}>
            <img src={product.imgURLs[0]} alt={product.id}></img>
            <h3>{product.title}</h3>
            <h3>{[product.price, "₸"].join('')}</h3>
          </div>
          <CustomButton onClick={() => onClick(product.id)}>X</CustomButton>
        </div>
      ))}
    </div>
  );
};

export default CartProductsList;