import classes from './ProductsList.module.css'
import React from "react";
import CustomButton from "../UI/CustomButton/CustomButton";


const ProductsList = ({products, onClick}) => {
  return (
    <div className={classes.productList}>
      {products.map(product => (
        <div key={product.id} className={classes.product}>
          <img src={product.imgURLs[0]} alt={product.id}></img>
          <h3>{product.title}</h3>
          <h3>{["Цена:", product.price, "₸"].join(' ')}</h3>
          <h3>{"Размеры: " + product.sizes[0]}</h3>
          <CustomButton onClick={() => onClick(product.id)}>Добавить в корзину</CustomButton>
        </div>
      ))}
    </div>
  );
};

export default ProductsList;