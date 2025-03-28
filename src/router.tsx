import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import Home from './pages/Home';
import Quotes from './pages/Quotes';
import QuotesDetails from './pages/QuotesDetail';

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		//  TODO
		// errorElement: ,
		children: [
			{
				path: '/',
				element: <Home />,
			},
			{
				path: '/quotes',
				element: <Quotes />,
			},
			{
				path: '/quotes/:id',
				element: <QuotesDetails />,
			},
		],
	},
]);

export default router;
