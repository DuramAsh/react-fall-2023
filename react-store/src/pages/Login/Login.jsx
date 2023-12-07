// Login page

import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import classes from './Login.module.css';

const Login = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");
	const navigateTo = useNavigate();

	const login = async () => {
		try {
			const response = await axios.post('https://store-back-6ylx.onrender.com' + '/api/login', {
				email,
				password
			});
			localStorage.setItem('token', response.data.access_token);
			navigateTo('/')
		} catch (e) {
			setError(e.response.data.message);
		}
	}

	return (
		// add Зарегистрироваться button
		<div className={classes.Login}>
			<h1>Вход</h1>
			<div className={classes.Login__form}>
				<input value={email} onChange={e => setEmail(e.target.value)} type="text" placeholder="Email" />
				<input value={password} onChange={e => setPassword(e.target.value)} type="password" placeholder="Пароль" />
				<button onClick={login}>Войти</button>
				<button onClick={() => navigateTo('/register')}>Зарегистрироваться</button>

				{error && <div className={classes.Login__error}>{error}</div>}
			</div>
		</div>
	);
}

export default Login;