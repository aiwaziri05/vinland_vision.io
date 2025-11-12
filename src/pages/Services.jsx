import { Link } from 'react-router-dom';
/* eslint no-unused-vars: "off" */
import { motion } from 'framer-motion';

export default function ServicesPage() {
	// Motion Variants
	const fadeUp = {
		hidden: { opacity: 0, y: 20 },
		visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
	};

	const staggerContainer = {
		hidden: {},
		visible: {
			transition: { staggerChildren: 0.05, delayChildren: 0.1 },
		},
	};

	const services = [
		{
			title: 'General Contracting',
			description: 'Comprehensive management of day-to-day oversight of a construction site, ensuring projects are completed on time and within budget.',
			image:
				'https://lh3.googleusercontent.com/aida-public/AB6AXuAx2iPafF3NLYlj-d8pmeEa5kgtidi1z3FiEDstdD-_H9E5fFlJS-np7d0nsa0K0rVQukLhbum7tA-wurFhDCh4qil4t0HTqEUNDGArvsp00f_d_mlqjIPjYcsQL-NpbsSeMzRUbMNV2WbWKOKtJAGd4bZuYfI6DO186YrJOLsMhO_RFtng5oMw47fg7ZtNAMIMlDZgmgBWrcHW6xwODcMAyCwyqW1UIHr9HyA9-_R_kguRrw3MO2viTmdtTfKYij0KJC9m_agDm0w',
			link: '#general-contracting',
		},
		{
			title: 'Design-Build',
			description: 'A single point of responsibility for both the design and construction phases, streamlining your project from concept to completion.',
			image:
				'https://lh3.googleusercontent.com/aida-public/AB6AXuDpm-6iauM2FSHnYzU62niPjDD1JtzJDFW7613hdX9HKn4RkJSZwbPKmYEnxz7TD28uI1Vp3vRbuJegz-d9mF1NImcZkXIYW25Zj3h3A3xT5ZURKDGAQ0T-_aZGPSIRfs4qiOZqYwZvY-JrSYTpNv3G9-YA1CPsWNNmg8QQDBTvmok4vNTa3vyMEeazPQnn5Dk0i_4m4HIRtErNgs3eoVsPSNoAv0UFGhYKpi7xaJoIcolrlbKWNpjikYgHahjayDkvoQygy9sT2qE',
			link: '#design-build',
		},
		// ... add other services here
	];

	return (
		<motion.main initial='hidden' animate='visible'>
			{/* Hero Section */}
			<motion.section variants={fadeUp} className='w-full relative'>
				<div
					className='w-full bg-cover bg-center bg-no-repeat'
					style={{
						backgroundImage: `linear-gradient(rgba(30, 43, 59, 0.65) 0%, rgba(30, 43, 59, 0.75) 100%), url('https://lh3.googleusercontent.com/aida-public/AB6AXuAadCbP5svnsiAPHfZuMaOskJ-C3w76SUZ3QbQ3nDNQdGDDK3D2MoJ_RSoyppXrjaZg1KxNfyMdyPj9Qy0eRl8rK23ERErLT4zOTw1ZZkLXuTcvG4vtz-esBB17-Gjr-9YnUwpJqri1rXj4rzN0grgyLTRT-k-8LMjGD8dFRAYaybvagFQvEos_KAGSIlgvsvJSXLMdJ2IlM09nuDxBsF2YUAjueEMi2nJdkyBhl0bjrzR6rwma-2G_wY3xaJRXv5VI4klaCG-dKKE')`,
						minHeight: '360px',
					}}>
					<div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-20 flex flex-col items-center text-center'>
						<motion.div variants={fadeUp} className='flex flex-col gap-4 max-w-3xl'>
							<h1 className='text-white text-4xl font-black leading-tight tracking-[-0.03em] md:text-5xl'>Our Services</h1>
							<h2 className='text-slate-300 text-base font-normal leading-normal md:text-lg'>We deliver comprehensive solutions with the highest standards of quality, precision, and partnership.</h2>
							<div className='mt-6 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center'>
								<Link
									to='/services'
									className='inline-flex items-center justify-center rounded-lg h-12 px-6 bg-primary text-text-primary text-base font-bold hover:opacity-95 transition w-full sm:w-auto'>
									Explore Services
								</Link>
								<Link
									to='/contact'
									className='inline-flex items-center justify-center rounded-lg h-12 px-6 border border-white/20 text-white text-base font-medium hover:bg-white/5 transition w-full sm:w-auto'>
									Request a Quote
								</Link>
							</div>
						</motion.div>
					</div>
				</div>
			</motion.section>

			{/* Services Grid */}
			<motion.section variants={staggerContainer} initial='hidden' animate='visible' className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24'>
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
					{services.map((service, idx) => (
						<motion.div
							key={idx}
							variants={fadeUp}
							whileHover={{ scale: 1.03 }}
							className='group relative flex flex-col overflow-hidden rounded-xl bg-white shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2'>
							<div className='relative w-full overflow-hidden'>
								<div
									className='w-full bg-center bg-no-repeat aspect-video bg-cover transition-transform duration-500 ease-in-out group-hover:scale-110'
									style={{ backgroundImage: `url('${service.image}')` }}>
									<div className='absolute inset-0 bg-linear-to-t from-black/70 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
								</div>
							</div>
							<div className='relative p-6 bg-linear-to-br from-white to-gray-50 dark:from-background-dark dark:to-secondary/50'>
								<h3 className='text-text-primary text-xl font-bold leading-normal mb-2 transition-colors duration-300 group-hover:text-primary'>{service.title}</h3>
								<p className='text-text-muted text-sm font-normal leading-relaxed mb-4'>{service.description}</p>
								<a className='inline-flex items-center gap-2 text-primary dark:text-primary text-sm font-bold transition-all duration-300 group-hover:gap-3' href={service.link}>
									Learn More <span className='material-symbols-outlined text-base transition-transform duration-300 group-hover:translate-x-1'>arrow_forward</span>
								</a>
							</div>
						</motion.div>
					))}
				</div>
			</motion.section>

			{/* CTA Section */}
			<motion.section
				variants={fadeUp}
				className='relative overflow-hidden bg-linear-to-b from-text-primary via-[#003a6f] to-secondary dark:from-secondary dark:via-[#1a2d42] dark:to-[#0f1823] py-16 sm:py-24'>
				<div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='flex flex-col items-center justify-center gap-8 text-center'>
						<div className='flex flex-col gap-6 max-w-3xl'>
							<h2 className='text-white text-3xl font-black leading-tight tracking-[-0.03em] sm:text-4xl md:text-5xl'>Ready to Start Your Next Project?</h2>
							<p className='text-slate-200 text-lg font-normal leading-relaxed'>
								Let's build something great together. Our team is ready to bring your vision to life with precision, quality, and innovation.
							</p>
						</div>
						<div className='flex flex-col sm:flex-row items-center justify-center gap-4'>
							<Link
								to='/contact'
								className='inline-flex items-center justify-center rounded-lg h-14 px-8 bg-primary text-text-primary text-base font-bold leading-normal tracking-[0.015em] hover:opacity-95 hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl'>
								<span className='truncate'>Get Started Today</span>
							</Link>
							<Link
								to='/projects'
								className='inline-flex items-center justify-center rounded-lg h-14 px-8 border-2 border-white/30 text-white text-base font-semibold leading-normal hover:bg-white/10 hover:border-white/50 transition-all duration-200'>
								<span className='truncate'>View Our Work</span>
							</Link>
						</div>
					</div>
				</div>
			</motion.section>
		</motion.main>
	);
}
