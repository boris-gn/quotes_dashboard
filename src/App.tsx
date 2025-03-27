import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import EnhancedSidebar from './components/sidebar/Sidebar';
import { Provider } from 'react-redux';
import { store } from './store/store';

import './App.css';
import MobileSidebarContainer from './components/sidebar/MobileSidebar';
import SearchInput from './components/SearchInput';

const App = () => {
	return (
		<Provider store={store}>
		
			<div className="flex gap-4 h-screen w-full overflow-hidden">
				<EnhancedSidebar className="hidden md:block w-fit !p-4" />
				
				
				{/* Main Content */}
				<div className="flex gap-4 flex-col overflow-hidden w-full">
					<div className="flex overflow-hidden justify-between">
						<Header />
					</div>
					<SearchInput className='md:hidden' />

					<div className='md:hidden block'>
						<h1 className="text-24 text-brand-primary font-bold racking-minus-1 leading-117 mb-0.5">
							Page name
						</h1>
						<p className="leading-115 text-12 text-gray-500 text-base font-normal tracking-normal">
							Gallagher Insurance as Quotes
						</p>
					</div>
					
					<div className="flex overflow-hidden">
						<Outlet />
					</div>
				</div>
			</div>

			<MobileSidebarContainer className="!max-w-full flex w-full md:hidden  fixed bottom-0 !p-3 left-0" />


		</Provider>
	);
};

export default App;
