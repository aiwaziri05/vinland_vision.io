import { NavLink } from 'react-router-dom';

export default function Sidebar() {
	return (
		<aside className='flex w-64 flex-col bg-sidebar-dark p-4 text-white fixed h-full'>
			<div className='flex flex-col gap-8'>
				{/* Logo / Title */}
				<div className='flex items-center gap-3 px-3 pt-3'>
					<div
						className='bg-center bg-no-repeat aspect-square bg-cover rounded-lg size-10'
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
				<nav className='flex flex-col gap-2'>
					<NavLink
						to='/admin/dashboard'
						className={({ isActive }) => `flex items-center gap-3 px-3 py-2 rounded-DEFAULT ${isActive ? 'bg-primary/20 text-primary' : 'text-body-text-dark hover:bg-white/10'}`}>
						<span className='material-symbols-outlined'>dashboard</span>
						<p className='text-sm font-medium leading-normal'>Dashboard</p>
					</NavLink>

					<NavLink
						to='/admin/manage-projects'
						className={({ isActive }) => `flex items-center gap-3 px-3 py-2 rounded-DEFAULT ${isActive ? 'bg-primary/20 text-primary' : 'text-body-text-dark hover:bg-white/10'}`}>
						<span className='material-symbols-outlined'>domain</span>
						<p className='text-sm font-medium leading-normal'>Manage Projects</p>
					</NavLink>

					<NavLink
						to='/admin/manage-services'
						className={({ isActive }) => `flex items-center gap-3 px-3 py-2 rounded-DEFAULT ${isActive ? 'bg-primary/20 text-primary' : 'text-body-text-dark hover:bg-white/10'}`}>
						<span className='material-symbols-outlined'>construction</span>
						<p className='text-sm font-medium leading-normal'>Manage Services</p>
					</NavLink>

					<NavLink
						to='/admin/manage-testimonials'
						className={({ isActive }) => `flex items-center gap-3 px-3 py-2 rounded-DEFAULT ${isActive ? 'bg-primary/20 text-primary' : 'text-body-text-dark hover:bg-white/10'}`}>
						<span className='material-symbols-outlined'>star</span>
						<p className='text-sm font-medium leading-normal'>Manage Testimonials</p>
					</NavLink>

					<NavLink
						to='/admin/manage-inquiries'
						className={({ isActive }) => `flex items-center gap-3 px-3 py-2 rounded-DEFAULT ${isActive ? 'bg-primary/20 text-primary' : 'text-body-text-dark hover:bg-white/10'}`}>
						<span className='material-symbols-outlined'>mail</span>
						<p className='text-sm font-medium leading-normal'>Manage Inquiries</p>
					</NavLink>

					<NavLink
						to='/admin/settings'
						className={({ isActive }) => `flex items-center gap-3 px-3 py-2 rounded-DEFAULT ${isActive ? 'bg-primary/20 text-primary' : 'text-body-text-dark hover:bg-white/10'}`}>
						<span className='material-symbols-outlined'>settings</span>
						<p className='text-sm font-medium leading-normal'>Settings</p>
					</NavLink>
				</nav>
			</div>

			{/* Logout Button */}
			<div className='mt-auto flex flex-col gap-1'>
				<button className='flex items-center gap-3 px-3 py-2 text-body-text-dark hover:bg-white/10 rounded-DEFAULT'>
					<span className='material-symbols-outlined'>logout</span>
					<p className='text-sm font-medium leading-normal'>Logout</p>
				</button>
			</div>
		</aside>
	);
}
