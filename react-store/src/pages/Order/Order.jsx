import React from 'react';
import { useState } from 'react';
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

  // use useEffect to fetch orders on page load
  React.useEffect(() => {
    const fetchOrders = async () => {
      const response = await axios.get('https://store-back-6ylx.onrender.com' + '/api/orders/' + email);
      setOrders(response.data);
      setIsLoading(false);
    };
    fetchOrders();
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
      <Link to={'/'}>
        <CustomButton>На главную</CustomButton>
      </Link>
      <h1>Заказы пользователя {email}</h1>
      <div className={classes.Order__form}>
        {orders.map(order => (
          <div key={order.id} className={classes.Order__item}>
            <h3>Заказ №{order.id}</h3>
            <p>Дата заказа: {formatDate(order.created_at)}</p>
            <br />
          </div>
        ))}
      </div>
    </div>
  ) : (<Loader />);
}

export default Order;