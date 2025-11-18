import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Sidebar from './components/Sidebar.jsx';

const AdminLayout = ({ children }) => {
	const location = useLocation();

	// Check if current route is exactly /admin/login
	const isLoginPage = location.pathname === '/admin/login';

	// Only for mobile: sidebar open state
	const [isSidebarOpen, setIsSidebarOpen] = useState(false);

	// Toggle function (only affects mobile)
	const toggleSidebar = () => setIsSidebarOpen((prev) => !prev);

	return (
		<div className='relative flex min-h-screen w-full'>
			{/* Sidebar: always visible on desktop, togglable on mobile */}
			{!isLoginPage && <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />}

			{/* Main content */}
			<main className={`flex-1 p-6 md:p-8 transition-all duration-300 ${!isLoginPage ? 'md:ml-64' : ''}`}>
				{!isLoginPage && (
					<div className='flex items-center gap-4 mb-6'>
						{/* Sidebar toggle button: mobile only */}
						<button onClick={toggleSidebar} className='lg:hidden bg-primary text-white p-2 rounded-md shadow-md flex items-center justify-center'>
							<span className='material-symbols-outlined text-2xl'>menu</span>
						</button>

						{/* Optional: Page heading placeholder */}
						{/* <h1 className="text-3xl font-bold text-gray-800">Page Title</h1> */}
					</div>
				)}

				{/* Page content */}
				{children}
			</main>
		</div>
	);
};

export default AdminLayout;
