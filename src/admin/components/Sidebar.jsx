import { NavLink } from 'react-router-dom';

export default function Sidebar({ isOpen, onClose }) {
	return (
		<aside
			className={`fixed top-0 left-0 h-full w-64 flex flex-col bg-sidebar-dark p-4 text-white transform transition-transform duration-300 z-40
				${isOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0`}>
			{/* Close Button (mobile only) */}
			<button className='lg:hidden absolute top-2 right-4 text-white p-1 rounded-full transition-none hover:bg-transparent' onClick={onClose}>
				<span className='material-symbols-outlined text-lg'>close</span>
			</button>

			<div className='flex flex-col gap-8 mt-6'>
				{/* Logo / Title */}
				<div className='flex items-center gap-3 px-3 pt-3'>
					<div
						className='bg-center bg-no-repeat aspect-square bg-cover rounded-lg w-10 h-10'
						style={{
							backgroundImage:
								'url("https://lh3.googleusercontent.com/aida-public/AB6AXuC1HpbueRXJqUTlNF4uhoLtsGB75Oio1rPiTZTN7U3kz6Q_hzMH1MlDW3YlpJ4m2sWYKWpFiuFMJZNpTSa09Ux3Iy5CsFsdbeJzMQmtnWLCgKSrGpRGjjfLv14RAqcByF15FcW1IdznKVXJRHkypIfN4FUCXIwLE_LkqgC5IM_PM4EfT69s1HlDQ8YRwPkGqxhOHBEj5gmM3TT6Xlm-IrBVvl3dTzZq83WfGdpMp2tS0E0fzFjbmB35fz8iKEbV1xJX5J7X5HJSTh4")',
						}}
					/>
					<div className='flex flex-col'>
						<h1 className='text-white text-base font-bold leading-normal'>The Vinland Vision</h1>
						<p className='text-body-text-dark text-sm font-normal leading-normal'>CMS</p>
					</div>
				</div>

				{/* Navigation Links */}
				<nav className='flex flex-col gap-2 mt-6'>
					{[
						{ to: '/admin/dashboard', icon: 'dashboard', label: 'Dashboard' },
						{ to: '/admin/manage-projects', icon: 'domain', label: 'Manage Projects' },
						{ to: '/admin/manage-services', icon: 'construction', label: 'Manage Services' },
						{ to: '/admin/manage-testimonials', icon: 'star', label: 'Manage Testimonials' },
						{ to: '/admin/manage-inquiries', icon: 'mail', label: 'Manage Inquiries' },
						{ to: '/admin/settings', icon: 'settings', label: 'Settings' },
					].map((item) => (
						<NavLink
							key={item.to}
							to={item.to}
							className={({ isActive }) => `flex items-center gap-3 px-3 py-2 rounded-DEFAULT ${isActive ? 'bg-primary/20 text-primary' : 'text-body-text-dark hover:bg-white/10'}`}
							onClick={onClose} // auto close on mobile navigation
						>
							<span className='material-symbols-outlined'>{item.icon}</span>
							<p className='text-sm font-medium leading-normal'>{item.label}</p>
						</NavLink>
					))}
				</nav>
			</div>

			{/* Logout link pushed to bottom */}
			<NavLink
				to='/admin/login'
				className='mt-auto flex items-center gap-3 px-3 py-2 text-body-text-dark hover:bg-white/10 rounded-DEFAULT'
				onClick={onClose} // closes sidebar on mobile
			>
				<span className='material-symbols-outlined'>logout</span>
				<p className='text-sm font-medium leading-normal'>Logout</p>
			</NavLink>
		</aside>
	);
}
