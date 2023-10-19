import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './pages/App/App';
import Order from './pages/Order/Order';
import ErrorPage from './pages/ErrorPage/ErrorPage';

import {
	createBrowserRouter,
	RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		errorElement: <ErrorPage />
	},
	{
		path: "/order",
		element: <Order />,
		errorElement: <ErrorPage />
	}
]);

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);