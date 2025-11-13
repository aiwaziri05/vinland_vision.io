import Sidebar from './components/Sidebar.jsx';

const AdminLayout = ({ children }) => {
	return (
		<div className='relative flex min-h-screen w-full'>
			{/* Sidebar */}
			<aside
				className={`
					fixed top-0 left-0 h-full w-64 
					bg-card-light dark:bg-card-dark border-r border-border-light dark:border-border-dark
					transform transition-transform duration-300 ease-in-out
					-translate-x-full md:translate-x-0 z-40
				`}>
				<Sidebar />
			</aside>

			{/* Main content */}
			<main className='flex-1 md:ml-64 p-6 md:p-8 transition-all duration-300'>{children}</main>
		</div>
	);
};

export default AdminLayout;
