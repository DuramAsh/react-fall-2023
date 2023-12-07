import { useEffect, useState } from 'react';
import { parseToken } from '../utils/utils';

const useToken = () => {
	const [email, setEmail] = useState('');
	const [token, setToken] = useState('');

	useEffect(() => {
		const storedToken = localStorage.getItem('token');

		if (storedToken) {
			setEmail(parseToken(storedToken).email);
			setToken(storedToken);
		}
	}, []);

	return { email, token };
};

export default useToken;
