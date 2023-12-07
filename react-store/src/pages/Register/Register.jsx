// register page

import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import classes from './Register.module.css';
import { parseToken } from '../../utils/utils';

const Register = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [name, setName] = useState("");
	const [surname, setSurname] = useState("");
	const [error, setError] = useState("");
	const navigateTo = useNavigate();

	const register = async () => {
		try {
			const response = await axios.post('https://store-back-6ylx.onrender.com' + '/api/register', {
				email,
				password,
				name,
				surname,
			});
			navigateTo('/login')
		} catch (e) {
			setError(e.response.data.message);
		}
	}

	return (
		< div className = { classes.Register } >
			<h1>Регистрация</h1>
			<div className={classes.Register__form}>
				<input value={email} onChange={e => setEmail(e.target.value)} type="text" placeholder="Email" />
				<input value={password} onChange={e => setPassword(e.target.value)} type="password" placeholder="Пароль" />
				<input value={name} onChange={e => setName(e.target.value)} type="text" placeholder="Имя" />
				<input value={surname} onChange={e => setSurname(e.target.value)} type="text" placeholder="Фамилия" />
				<button onClick={register}>Зарегистрироваться</button>
				{error && <div className={classes.Register__error}>{error}</div>}
			</div>
		</div >

	);
}

export default Register;