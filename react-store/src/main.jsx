import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './pages/App/App';
import Order from './pages/Order/Order';
import ErrorPage from './pages/ErrorPage/ErrorPage';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';

import {
	createBrowserRouter,
	RouterProvider,
	Navigate
} from "react-router-dom";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		errorElement: <ErrorPage />
	},
	{
		path: "/orders",
		element: <Order />,
		errorElement: <ErrorPage />
	},
	{
		path: "/login",
		element: <Login />,
		errorElement: <ErrorPage />
	},
	{
		path: "/register",
		element: <Register />,
		errorElement: <ErrorPage />
	},
	{
		path: "*",
		element: <Navigate to="/" />,
		errorElement: <ErrorPage />
	}
]);

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);