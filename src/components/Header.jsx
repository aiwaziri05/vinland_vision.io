import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Header() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const menuRef = useRef(null);
	const iconRef = useRef(null);
	const location = useLocation();

	const links = ['Home', 'Services', 'Projects', 'About', 'Contact'];

	const toggleMenu = () => setIsMenuOpen((prev) => !prev);

	useEffect(() => {
		const menu = menuRef.current;
		const icon = iconRef.current;
		if (!menu || !icon) return;

		// Update aria attributes and icon
		const button = menu.parentElement.querySelector('button');
		if (button) {
			button.setAttribute('aria-expanded', String(isMenuOpen));
			button.setAttribute('aria-label', isMenuOpen ? 'Close menu' : 'Open menu');
		}
		icon.textContent = isMenuOpen ? 'close' : 'menu';

		if (isMenuOpen) {
			menu.classList.remove('pointer-events-none');
			menu.style.maxHeight = menu.scrollHeight + 'px';
			menu.style.opacity = '0.98';
			menu.style.transform = 'translateY(0)';
		} else {
			menu.style.maxHeight = '0px';
			menu.style.opacity = '0';
			menu.style.transform = 'translateY(-0.25rem)'; // move slightly up for smooth collapse
			setTimeout(() => menu.classList.add('pointer-events-none'), 300); // wait for transition
		}
	}, [isMenuOpen]);

	return (
		<header className='sticky top-0 z-50 flex items-center justify-center border-b border-border-light bg-background-light/80 backdrop-blur-sm'>
			<div className='flex w-full max-w-7xl items-center justify-between whitespace-nowrap px-4 sm:px-6 lg:px-8 py-3'>
				{/* Logo */}
				<div className='flex items-center gap-4 text-heading-text-light dark:text-heading-text-dark'>
					<div className='size-6 text-primary'>
						<svg fill='none' viewBox='0 0 48 48' xmlns='http://www.w3.org/2000/svg'>
							<path clipRule='evenodd' d='M24 4H6V17.3333V30.6667H24V44H42V30.6667V17.3333H24V4Z' fill='currentColor' fillRule='evenodd' />
						</svg>
					</div>
					<h2 className='text-text-primary text-xl font-bold leading-tight tracking-[-0.015em]'>The Vinland Vision</h2>
				</div>

				{/* Desktop Menu */}
				<div className='hidden md:flex flex-1 items-center justify-end gap-8'>
					<nav className='flex items-center gap-9'>
						{links.map((item, idx) => {
							const path = item === 'Home' ? '/' : `/${item.toLowerCase().replace(/\s/g, '')}`;
							const isActive = location.pathname === path;
							return (
								<Link
									key={idx}
									to={path}
									className={`text-sm font-medium leading-normal transition ${isActive ? 'text-primary dark:text-primary' : 'text-text-secondary hover:text-primary dark:hover:text-primary'}`}>
									{item}
								</Link>
							);
						})}
					</nav>
					<Link
						to='/contact'
						className='flex min-w-[84px] max-w-[480px] items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary text-text-primary text-sm font-bold leading-normal tracking-[0.015em] transition-opacity hover:opacity-90'>
						Request a Quote
					</Link>
				</div>

				{/* Mobile Menu Button */}
				<div className='md:hidden ml-auto'>
					<button
						onClick={toggleMenu}
						className='inline-flex items-center justify-center p-2 rounded-md border border-border-light bg-background-light/80 text-body-text-light backdrop-blur transition hover:bg-background-light dark:border-border-dark dark:bg-background-dark/80 dark:text-body-text-dark dark:hover:bg-background-dark'
						aria-controls='mobile-menu'
						aria-expanded={isMenuOpen}
						aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}>
						<span className='material-symbols-outlined text-text-secondary' ref={iconRef}>
							menu
						</span>
					</button>
				</div>
			</div>

			{/* Mobile Menu */}
			<div
				ref={menuRef}
				id='mobile-menu'
				className='md:hidden absolute top-full inset-x-0 w-full overflow-hidden max-h-0 opacity-0 transition-[max-height,opacity,transform] duration-300 ease-out pointer-events-none shadow-lg'>
				<div className='px-4 sm:px-6 lg:px-8 pb-4 pt-2 flex flex-col gap-3 bg-background-light/98 dark:bg-background-dark/98 backdrop-blur'>
					{links.map((item, idx) => {
						const path = item === 'Home' ? '/' : `/${item.toLowerCase().replace(/\s/g, '')}`;
						return (
							<Link key={idx} to={path} onClick={() => setIsMenuOpen(false)} className='px-3 py-2 rounded-lg text-text-primary hover:bg-body-text-dark/10 hover:text-primary'>
								{item}
							</Link>
						);
					})}
					<Link
						to='/contact'
						onClick={() => setIsMenuOpen(false)}
						className='mt-2 inline-flex items-center justify-center rounded-lg h-11 px-5 bg-primary text-text-primary text-sm font-bold tracking-[0.015em] hover:opacity-90'>
						Request a Quote
					</Link>
				</div>
			</div>
		</header>
	);
}
