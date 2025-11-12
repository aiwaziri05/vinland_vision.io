import { Link } from 'react-router-dom';

export default function CallToActionSection() {
	return (
		<section className='relative overflow-hidden bg-linear-to-br from-text-primary via-[#003a6f] to-secondary dark:from-secondary dark:via-[#1a2d42] dark:to-[#0f1823] rounded-2xl p-12 md:p-16 lg:p-20 shadow-2xl'>
			{/* subtle background pattern */}
			<div className="absolute inset-0 opacity-20 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAzNGMwIDItMiA0LTQgNHMtNC0yLTQtNCAyLTQgNC00IDQgNHoiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wMykiLz48L2c+PC9zdmc+')]"></div>

			<div className='relative flex flex-col lg:flex-row items-center gap-12 lg:gap-16'>
				{/* Text Section */}
				<div className='flex-1 text-center lg:text-left'>
					<h2 className='text-white text-3xl md:text-4xl lg:text-5xl font-black leading-tight tracking-[-0.03em] mb-6'>Ready to Build Your Vision?</h2>
					<p className='text-slate-200 text-lg md:text-xl max-w-2xl mx-auto lg:mx-0 leading-relaxed mb-8'>
						Let's discuss how we can bring your next project to life. Explore our work or get in touch with our team today.
					</p>

					{/* Buttons */}
					<div className='flex flex-col sm:flex-row items-center lg:items-start gap-4'>
						<Link
							to='/projects'
							className='group inline-flex items-center justify-center gap-2 rounded-lg h-14 px-8 bg-primary text-white text-base font-bold leading-normal tracking-[0.015em] hover:opacity-95 hover:scale-105 transition-all duration-200 shadow-xl hover:shadow-2xl'>
							<span className='truncate'>View Our Projects</span>
							<span className='material-symbols-outlined text-xl transition-transform duration-300 group-hover:translate-x-1'>arrow_forward</span>
						</Link>

						<Link
							to='/contact'
							className='group inline-flex items-center justify-center gap-2 rounded-lg h-14 px-8 border-2 border-white/30 text-white text-base font-semibold leading-normal hover:bg-white/10 hover:border-white/50 transition-all duration-200 backdrop-blur-sm'>
							<span className='truncate'>Contact Us</span>
							<span className='material-symbols-outlined text-xl transition-transform duration-300 group-hover:translate-x-1'>mail</span>
						</Link>
					</div>
				</div>

				{/* Icon Section */}
				<div className='shrink-0'>
					<div className='relative'>
						<div className='absolute -inset-4 bg-text-primary/20 rounded-full blur-2xl animate-pulse'></div>
						<div className='relative flex items-center justify-center size-32 md:size-40 rounded-full bg-linear-to-br from-text-primary/30 to-text-primary/10 border-4 border-white/20 backdrop-blur-sm'>
							<span className='material-symbols-outlined text-6xl md:text-7xl text-white'>construction</span>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
