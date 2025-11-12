import { Link } from 'react-router-dom';
export default function Footer() {
	const links = ['Services', 'Projects', 'About Us', 'Contact'];
	return (
		<footer className='relative flex justify-center bg-linear-to-b from-secondary via-[#182735] to-[#0f1823] dark:from-[#0f1823] dark:via-[#0a1118] dark:to-[#050a0f] text-slate-400 py-12 overflow-hidden'>
			<div className='w-full max-w-7xl px-4 sm:px-6 lg:px-8'>
				<div className='grid grid-cols-1 md:grid-cols-4 gap-8'>
					{/* Branding */}
					<div className='col-span-1 md:col-span-2'>
						<h3 className='text-white text-lg font-bold mb-2'>The Vinland Vision</h3>
						<p className='text-sm'>Building the future on a foundation of trust and excellence.</p>
					</div>

					{/* Quick Links */}
					<div>
						<h4 className='text-white font-semibold mb-3'>Quick Links</h4>
						<ul className='flex flex-col gap-0 space-y-2 text-sm'>
							{links.map((item, idx) => {
								const path = item === 'Home' ? '/' : `/${item.toLowerCase().replace(/\s/g, '')}`;
								return (
									<Link key={idx} to={path} className={`text-sm font-medium leading-normal transition hover:text-primary dark:hover:text-primary'}`}>
										{item}
									</Link>
								);
							})}
						</ul>
					</div>

					{/* Social Links */}
					<div>
						<h4 className='text-white font-semibold mb-3'>Connect With Us</h4>
						<div className='flex space-x-4'>
							{/* Facebook */}
							<a className='hover:text-primary' href='#' aria-label='Facebook'>
								<svg className='w-6 h-6' fill='currentColor' viewBox='0 0 24 24'>
									<path d='M12 2.04C6.5 2.04 2 6.53 2 12.06c0 5.02 3.66 9.18 8.44 9.95v-7.03H7.9v-2.92h2.54V9.81c0-2.52 1.49-3.93 3.78-3.93 1.1 0 2.25.2 2.25.2v2.48h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.45 2.92h-2.33v7.03c4.78-.77 8.44-4.93 8.44-9.95C22 6.53 17.5 2.04 12 2.04z' />
								</svg>
							</a>

							{/* Twitter */}
							<a className='hover:text-primary' href='#' aria-label='Twitter'>
								<svg className='w-6 h-6' fill='currentColor' viewBox='0 0 24 24'>
									<path d='M22.46 6c-.77.35-1.6.58-2.46.67.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.22-1.95-.55v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.94.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21c7.35 0 11.37-6.08 11.37-11.37 0-.17 0-.34-.01-.51.78-.56 1.45-1.26 1.98-2.03z' />
								</svg>
							</a>

							{/* LinkedIn */}
							<a className='hover:text-primary' href='#' aria-label='LinkedIn'>
								<svg className='w-6 h-6' fill='currentColor' viewBox='0 0 24 24'>
									<path d='M20.45 2h-16.9C2.67 2 2 2.67 2 3.55v16.9C2 21.33 2.67 22 3.55 22h16.9c.88 0 1.55-.67 1.55-1.55v-16.9C22 2.67 21.33 2 20.45 2zM8.09 18.5H5.45V9.4h2.64v9.1zm-1.32-10.2c-.86 0-1.55-.7-1.55-1.55s.7-1.55 1.55-1.55 1.55.7 1.55 1.55-.69 1.55-1.55 1.55zm10.78 10.2h-2.64v-4.4c0-1.05-.02-2.4-1.46-2.4-1.46 0-1.69 1.14-1.69 2.32v4.48H9.15V9.4h2.53v1.16h.04c.35-.66 1.2-1.36 2.5-1.36 2.67 0 3.16 1.76 3.16 4.05v4.65z' />
								</svg>
							</a>
						</div>
					</div>
				</div>

				{/* Footer Bottom */}
				<div className='border-t border-slate-700 mt-8 pt-6 text-center text-sm'>
					<p>© 2024 The Vinland Vision. All Rights Reserved.</p>
				</div>
			</div>
		</footer>
	);
}
