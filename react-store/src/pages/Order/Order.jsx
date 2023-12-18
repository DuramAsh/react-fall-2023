import React from 'react';
import { useState, useEffect } from 'react';
import useToken from '../../hooks/useToken';
import axios from 'axios';
import classes from './Order.module.css';
import { formatDate } from '../../utils/utils';
import Loader from '../../components/UI/Loader/Loader';
import CustomButton from '../../components/UI/CustomButton/CustomButton';
import { Link } from 'react-router-dom';

const Order = () => {
  const [orders, setOrders] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const { email, token } = useToken();

  useEffect(() => {
    const fetchOrders = async () => {
      const response = await axios.get('https://store-back-6ylx.onrender.com' + '/api/orders/' + email);
      setOrders(response.data);
      setIsLoading(false);
    };

    if (email !== "") {
      fetchOrders();
    }
  }, [email, token]);

  if (email === "") return (
    <div>
      <h1>Вы не авторизованы</h1>
      <Link to={'/'}>
        <CustomButton>На главную</CustomButton>
      </Link>
    </div>
  );

  return !isLoading ? (
    <div className={classes.Order}>
      <h1>Заказы пользователя {email}</h1>
      <div className={classes.Order__form}>
        {orders === null ? (
          <div className={classes.Order__noOrders}>
            <h2>У вас нет заказов</h2>
          </div>
        ) : (
          orders.map(order => (
            <div key={order.id} className={classes.Order__item} >
              <h3>Заказ №{order.id}</h3>
              <p>Сумма заказа: {order.amount}₸</p>
              <p>Дата заказа: {formatDate(order.created_at)}</p>
              <br />
            </div>
          ))
        )}
        <Link to={'/'}>
          <CustomButton>На главную</CustomButton>
        </Link>

      </div>
    </div >
  ) : (<Loader />);
}

export default Order;