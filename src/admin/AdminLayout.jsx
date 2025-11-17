import { useLocation } from 'react-router-dom';
import Sidebar from './components/Sidebar.jsx';

const AdminLayout = ({ children }) => {
	const location = useLocation();

	// Check if current route is exactly /admin/login
	const isLoginPage = location.pathname === '/admin/login';

	return (
		<div className='relative flex min-h-screen w-full'>
			{/* Sidebar: Only show if NOT login page */}
			{!isLoginPage && <Sidebar />}

			{/* Main content */}
			<main className={`flex-1 p-6 md:p-8 transition-all duration-300 ${!isLoginPage ? 'md:ml-64' : ''}`}>{children}</main>
		</div>
	);
};

export default AdminLayout;
