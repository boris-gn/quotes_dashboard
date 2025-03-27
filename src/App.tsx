import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { useFetchQuotes } from './hooks/useFetch';
import { setQuotes } from './store/slices/quoteSlice';
import Header from './components/Header';
import EnhancedSidebar from './components/sidebar/Sidebar';
import { useAppDispatch } from './hooks/useRedux';
import './App.css';

const App = () => {
	const dispatch = useAppDispatch();
	const { data, error, isLoading } = useFetchQuotes();

	useEffect(() => {
		if (data) {
			dispatch(setQuotes(data));
		}
	}, [data, dispatch]);

	if (isLoading) {
		return <div>Loading...</div>;
	}

	// if (error) {
	// 	return <div>Error: {error}</div>;
	// }

	return (
		<div className="bg-gradient-to-br from-background to-muted min-h-screen">
			<div className="flex">
				<EnhancedSidebar className="w-fit mr-4" />
				<main className="flex-1">
					<Header />
					<Outlet />
				</main>
			</div>
			<footer></footer>
		</div>
	);
};

export default App;
