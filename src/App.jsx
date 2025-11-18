import { BrowserRouter, useLocation } from 'react-router-dom';
import AnimatedRoutes from './AnimatedRoutes.jsx';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';

function AppWrapper() {
	const location = useLocation();

	// Only show header/footer for non-admin routes
	const isAdminRoute = location.pathname.startsWith('/admin');
	const isNotFoundRoute = location.pathname === '/not-found';

	const hideLayout = isAdminRoute || isNotFoundRoute;

	return (
		<>
			{!hideLayout && <Header />}
			<AnimatedRoutes />
			{!hideLayout && <Footer />}
		</>
	);
}

function App() {
	return (
		<BrowserRouter>
			<AppWrapper />
		</BrowserRouter>
	);
}

export default App;
