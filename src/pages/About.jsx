/* eslint no-unused-vars: "off" */
import { motion } from 'framer-motion';
import CallToAction from '../components/CallToAction';

const fadeUp = {
	initial: { opacity: 0, y: 30 },
	whileInView: { opacity: 1, y: 0 },
};

export default function AboutPage() {
	return (
		<main className='flex-1'>
			{/* Hero Section */}
			<section className='w-full relative'>
				<motion.div
					className='w-full bg-cover bg-center bg-no-repeat'
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					transition={{ duration: 0.8 }}
					viewport={{ once: true }}
					style={{
						backgroundImage: `
              linear-gradient(rgba(30, 43, 59, 0.65) 0%, rgba(30, 43, 59, 0.75) 100%),
              url('https://lh3.googleusercontent.com/aida-public/AB6AXuAHcPM7z8w_aOhPL1X959PRySpzIaxv9udRa0eWOSEetPs3iaCnM4nsnqLvHXYOhuFJZWq8uc-JhTPugSLlUigKEV9r10KfLF6sm09azfwCHwElLXypuRL4ELbAPqyEF_LaFYt70bAMKnEILP0knkvZNRTxKb2YHhQZfVsVePBd8_gzdgLC-hNrZ62iRML9al12vHLP5KX6YRGAdZ-gmiSzTLkwLMeveQFP8Tlz0Mie13wDdK4wx34aazhOk2rKPHzAUpSd8QUGbCU')
            `,
						minHeight: '360px',
					}}>
					<div className='w-full'>
						<div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-20 flex flex-col items-center text-center'>
							<motion.div
								className='flex flex-col gap-4 max-w-3xl'
								initial='initial'
								whileInView='whileInView'
								variants={fadeUp}
								viewport={{ once: true, amount: 0.3 }}
								transition={{ duration: 0.7, ease: 'easeOut' }}>
								<h1 className='text-white text-4xl font-black leading-tight tracking-[-0.03em] md:text-5xl'>About The Vinland Vision</h1>
								<h2 className='text-slate-300 text-base font-normal leading-normal md:text-lg'>
									Building the future on a foundation of trust, quality, and unwavering dedication to our clients' vision.
								</h2>
								<motion.div
									className='mt-6 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center'
									initial={{ opacity: 0, y: 20 }}
									whileInView={{ opacity: 1, y: 0 }}
									viewport={{ once: true, amount: 0.3 }}
									transition={{ duration: 0.7, delay: 0.3, ease: 'easeOut' }}>
									<a
										href='/projects'
										className='inline-flex items-center justify-center rounded-lg h-12 px-6 bg-primary text-text-base text-base font-bold hover:opacity-95 transition w-full sm:w-auto'>
										View Projects
									</a>
									<a
										href='/contact'
										className='inline-flex items-center justify-center rounded-lg h-12 px-6 border border-white/20 text-white text-base font-medium hover:bg-white/5 transition w-full sm:w-auto'>
										Request a Quote
									</a>
								</motion.div>
							</motion.div>
						</div>
					</div>
				</motion.div>
			</section>

			{/* Content Section */}
			<section className='flex flex-1 justify-center py-16 sm:py-24'>
				<div className='flex flex-col max-w-7xl flex-1 px-4 sm:px-6 lg:px-8'>
					{/* Our Story */}
					<motion.section
						className='mb-20 md:mb-28'
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, amount: 0.3 }}
						transition={{ duration: 0.7, ease: 'easeOut' }}>
						<div className='grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center'>
							<motion.div
								className='flex flex-col gap-6 order-2 lg:order-1'
								initial={{ opacity: 0, y: 30 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true, amount: 0.3 }}
								transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}>
								<div className='flex flex-col gap-4'>
									<div className='inline-flex items-center gap-3'>
										<div className='h-px w-12 bg-linear-to-r from-text-primary to-transparent'></div>
										<p className='text-text-primary dark:text-accent-yellow text-sm font-bold tracking-wider uppercase'>OUR STORY</p>
									</div>
									<h2 className='text-text-primary text-3xl md:text-4xl lg:text-5xl font-bold leading-tight tracking-[-0.015em]'>Building on a Foundation of Trust</h2>
								</div>
								<div className='space-y-4'>
									<p className='text-text-muted text-base leading-relaxed'>
										Discover the mission and values that drive The Vinland Vision. We are founded on principles of quality, integrity, and a steadfast commitment to bringing our clients' visions to
										life with precision and expertise.
									</p>
									<p className='text-text-muted text-base leading-relaxed'>
										Our journey is one of partnership, innovation, and an unwavering dedication to excellence in every project we undertake. From groundbreaking to completion, we ensure that every
										detail reflects our commitment to superior craftsmanship and client satisfaction.
									</p>
								</div>
							</motion.div>

							<motion.div
								className='order-1 lg:order-2 relative group'
								initial={{ opacity: 0, y: 30 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true, amount: 0.3 }}
								transition={{ duration: 0.7, delay: 0.3, ease: 'easeOut' }}>
								<div className='relative overflow-hidden rounded-2xl shadow-2xl'>
									<img
										alt='Professional photograph of The Vinland Vision team'
										className='object-cover w-full h-[400px] md:h-[500px] lg:h-[550px] transition-transform duration-700 group-hover:scale-110'
										src='https://lh3.googleusercontent.com/aida-public/AB6AXuB0XZnIvxcgLsPNogJKDYKsbnSNaDvS-2fk02U7SZcNihfvhw6lUy9WKr9ff2L1WEM90A1rzeffxJlsjFhNnpy6JItsExlq9Fp-Zloa3j-djNXD71vXNT-KtATb2ojVhYpJjfZeNRlaQ1Yt4Kp1ZvoE6JQmKs2uhSs7U-fSC1P7AdAEliqIxNUlTtYzyznOJ5_CARLYBgaaggdBDLJghU7xxwnGic7ak_k3d142_TjYt7_tJTpyWAtFG_t5YT_WACwB1lI0UlPi73A'
									/>
								</div>
							</motion.div>
						</div>
					</motion.section>

					{/* Core Values */}
					<section className='mb-20 md:mb-28'>
						<div className='text-center mb-16'>
							<motion.h2
								className='text-text-primary dark:text-text-light text-3xl md:text-4xl font-bold leading-tight tracking-[-0.015em] mb-4'
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true, amount: 0.3 }}
								transition={{ duration: 0.6 }}>
								Our Core Values
							</motion.h2>
							<motion.p
								className='text-text-muted text-base max-w-2xl mx-auto leading-relaxed'
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true, amount: 0.3 }}
								transition={{ duration: 0.6, delay: 0.1 }}>
								The principles that guide our work and define our commitment to excellence.
							</motion.p>
						</div>

						<div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
							{[
								{ icon: 'straighten', title: 'Precision', desc: 'Meticulous attention to detail ensures every aspect of a project meets the highest standards of quality and accuracy.' },
								{ icon: 'shield', title: 'Integrity', desc: "We build lasting relationships based on honesty, transparency, and a steadfast commitment to doing what's right." },
								{ icon: 'groups', title: 'Collaboration', desc: 'We work closely with clients, architects, and partners to turn shared visions into tangible, successful realities.' },
							].map((value, i) => (
								<motion.div
									key={value.title}
									className='group flex flex-col items-center text-center p-8 rounded-xl bg-white dark:bg-background-dark shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100'
									initial={{ opacity: 0, y: 20 }}
									whileInView={{ opacity: 1, y: 0 }}
									viewport={{ once: true, amount: 0.3 }}
									transition={{ delay: i * 0.2, duration: 0.5, ease: 'easeOut' }}>
									<div className='flex items-center justify-center size-16 rounded-full bg-linear-to-br from-primary/20 primary-yellow/10 text-primary mb-6 transition-transform duration-300 group-hover:scale-110'>
										<span className='material-symbols-outlined text-4xl'>{value.icon}</span>
									</div>
									<h3 className='text-text-primary dark:text-text-light text-xl font-bold mb-3 transition-colors duration-300 group-hover:text-primary dark:group-hover:text-accent-yellow'>
										{value.title}
									</h3>
									<p className='text-text-muted text-sm leading-relaxed'>{value.desc}</p>
								</motion.div>
							))}
						</div>
					</section>

					{/* Call To Action */}
					<motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.6, delay: 0.2 }}>
						<CallToAction />
					</motion.div>
				</div>
			</section>
		</main>
	);
}
