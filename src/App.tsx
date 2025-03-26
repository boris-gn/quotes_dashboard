import { Link } from 'react-router-dom';
import Layout from './components/Layout';

import './App.css';

function App() {
	return (
		<Layout>
			<nav className="mb-6">
				<Link to="/quotes" className="text-blue-600 font-semibold">
					Quotes
				</Link>
			</nav>
		</Layout>
	);
}

export default App;
