import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import EnhancedSidebar from './components/sidebar/Sidebar';
import { Provider } from 'react-redux';
import { store } from './store/store';

import './App.css';

const App = () => {
	return (
		<Provider store={store}>
			<div className="bg-gradient-to-br from-background to-muted min-h-screen">
				{/* <div className="outer-div grid grid-cols-[250px_1fr] gap-4"> */}
				<div className="flex">
					<EnhancedSidebar className="w-fit mr-4" />
					<main className="flex-1">
						<Header />
						<Outlet />
					</main>
				</div>
				<footer></footer>
			</div>
		</Provider>
	);
};

export default App;
