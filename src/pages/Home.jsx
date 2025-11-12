import { Link } from 'react-router-dom';
/* eslint no-unused-vars: "off" */
import { motion } from 'framer-motion';

import PortfolioSection from '../components/PortfolioSection.jsx';
import TestimonialsSection from '../components/TestmonialsSection.jsx';

const fadeUp = {
	initial: { opacity: 0, y: 30 },
	whileInView: { opacity: 1, y: 0 },
};

export default function HomePage() {
	return (
		<div className='relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden'>
			<div className='layout-container flex h-full grow flex-col'>
				<main className='flex-1'>
					{/* Full-bleed hero */}
					<section className='w-full relative'>
						<motion.div
							className='w-full bg-cover bg-center bg-no-repeat'
							initial={{ opacity: 0 }}
							whileInView={{ opacity: 1 }}
							transition={{ duration: 0.8 }}
							viewport={{ once: true }}
							style={{
								backgroundImage:
									"linear-gradient(rgba(30, 43, 59, 0.65), rgba(30, 43, 59, 0.75)), url('https://lh3.googleusercontent.com/aida-public/AB6AXuCgzhbks2a_8owaj5EaYvjz8VFNH9zIC2BgHcF4TIcrhhPNWRXRnVGDTOpf-ZLKyn1N-a_CXpUhv8tTSC_WcxxSFR_QBQGzDXLmFfPRYucOEB1dhglVTzHmNOANxGa_rYgOOcOGYBEa1b2kZkDXekkoI9wH_q-sMUw6PB99XCNgQfo8DJq6LZwjUkcYTW6yFnknPu72db5YNWst6GafXsXTtEZI06egPczEzl_Mg-DK0ghMvwkAkZ2xnqAh07zlNeQK1zMK3B7cXkk')",
								minHeight: '420px',
							}}>
							<div className='w-full'>
								<div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24 flex flex-col items-center text-center'>
									<motion.div
										className='flex flex-col gap-4 max-w-3xl'
										initial='initial'
										whileInView='whileInView'
										variants={fadeUp}
										viewport={{ once: true, amount: 0.3 }}
										transition={{ duration: 0.7, ease: 'easeOut' }}>
										<h1 className='text-white text-4xl font-black leading-tight tracking-[-0.03em] md:text-6xl'>Building the Future with Precision and Vision</h1>
										<h2 className='text-slate-300 text-base font-normal leading-normal md:text-lg'>
											Crafting exceptional spaces with unwavering commitment to quality and innovation. Let's build your legacy together.
										</h2>
										<motion.div
											className='mt-6 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center'
											initial={{ opacity: 0, y: 20 }}
											whileInView={{ opacity: 1, y: 0 }}
											viewport={{ once: true, amount: 0.3 }}
											transition={{ duration: 0.7, delay: 0.3, ease: 'easeOut' }}>
											<Link
												to='/projects'
												className='inline-flex items-center justify-center rounded-lg h-12 px-6 bg-primary text-gray-900 text-base font-bold hover:opacity-95 transition w-full sm:w-auto'>
												View Projects
											</Link>
											<Link
												to='/contact'
												className='inline-flex items-center justify-center rounded-lg h-12 px-6 border border-white/20 text-white text-base font-medium hover:bg-white/5 transition w-full sm:w-auto'>
												Request a Quote
											</Link>
										</motion.div>
									</motion.div>
								</div>
							</div>
						</motion.div>
					</section>

					{/* Expertise section */}
					<section className='flex flex-1 justify-center py-16 sm:py-20'>
						<div className='flex flex-col max-w-7xl flex-1 px-4 sm:px-6 lg:px-8'>
							<motion.div className='text-center px-4 pb-8' initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.7 }}>
								<h2 className='text-text-primary text-3xl font-bold leading-tight tracking-tight md:text-4xl'>Our Expertise</h2>
								<p className='mt-4 max-w-2xl mx-auto text-text-muted'>
									We deliver a comprehensive range of construction services, tailored to meet the unique needs of each project. Our commitment to excellence ensures superior results every time.
								</p>
							</motion.div>
							<div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
								{[
									{
										icon: 'domain',
										title: 'Building Construction',
										text: 'From foundation to finish, we deliver high-quality construction with precision and care, ensuring durability and excellence in every detail.',
									},
									{
										icon: 'account_tree',
										title: 'Project Management',
										text: 'Our experts ensure your project is completed on time, within budget, and to the highest standards through meticulous planning and execution.',
									},
									{
										icon: 'architecture',
										title: 'Architectural Design',
										text: 'Innovative and sustainable design solutions tailored to bring your vision to life, blending functionality with aesthetic brilliance.',
									},
								].map((item, i) => (
									<motion.div
										key={i}
										className='flex flex-col gap-4 text-center items-center p-6 bg-white rounded-xl shadow-sm'
										initial={{ opacity: 0, y: 20 }}
										whileInView={{ opacity: 1, y: 0 }}
										viewport={{ once: true, amount: 0.3 }}
										transition={{ delay: i * 0.2, duration: 0.5, ease: 'easeOut' }}>
										<div className='flex items-center justify-center size-12 rounded-full bg-primary/20 text-primary mb-2'>
											<span className='material-symbols-outlined text-3xl'>{item.icon}</span>
										</div>
										<h3 className='text-text-primary dark:text-text-light text-xl font-medium leading-normal'>{item.title}</h3>
										<p className='text-text-muted text-sm font-normal leading-normal'>{item.text}</p>
									</motion.div>
								))}
							</div>
						</div>
					</section>

					{/* Portfolio Section */}
					<PortfolioSection />

					{/* Build Together section */}
					<section className='bg-white flex flex-1 justify-center py-16 sm:py-24'>
						<div className='flex flex-col max-w-7xl flex-1 px-4 sm:px-6 lg:px-8'>
							<motion.div className='text-center px-4 pb-8' initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.7 }}>
								<h2 className='text-text-primary text-3xl mb-8 font-bold leading-tight tracking-tight md:text-4xl'>Let's Build Together</h2>
							</motion.div>

							<div className='grid grid-cols-1 md:grid-cols-2 gap-12 items-center'>
								<motion.div className='order-2' initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.7, delay: 0.2 }}>
									<h2 className='text-text-primary dark:text-text-light text-3xl font-bold leading-tight tracking-tight md:text-4xl mb-4'>The Vision Behind Vinland</h2>
									<p className='text-text-muted mb-6'>
										For over two decades, The Vinland Vision has been synonymous with integrity, quality, and innovation in the construction industry. Our mission is to transform your ideas into
										tangible structures that stand the test of time, creating spaces that inspire and endure.
									</p>
									<div className='mt-4 grid grid-cols-2 gap-6 text-left'>
										<div>
											<p className='text-text-primary dark:text-accent-yellow text-4xl font-bold whitespace-nowrap'>250+</p>
											<p className='text-text-muted text-sm mt-1 whitespace-nowrap'>Projects Completed</p>
										</div>
										<div>
											<p className='text-text-primary dark:text-accent-yellow text-4xl font-bold whitespace-nowrap'>20</p>
											<p className='text-text-muted text-sm mt-1 whitespace-nowrap'>Years in Business</p>
										</div>
									</div>
									<div className='mt-6 w-full'>
										<div className='flex flex-col sm:flex-row sm:justify-start md:justify-start gap-3'>
											<Link
												to='/contact'
												className='whitespace-nowrap inline-flex items-center justify-center rounded-lg h-12 px-6 bg-primary text-text-primary font-bold hover:opacity-95 transition w-full sm:w-auto'>
												Get a Quote
											</Link>
											<Link
												to='/projects'
												className='whitespace-nowrap inline-flex items-center justify-center rounded-lg h-12 px-6 border border-text-primary text-text-primary font-medium hover:bg-text-primary/5 transition w-full sm:w-auto'>
												View Projects
											</Link>
										</div>
									</div>
								</motion.div>

								<motion.div className='order-1' initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.7, delay: 0.3 }}>
									<img
										className='rounded-xl w-full h-64 md:h-80 object-cover'
										alt='A professional team of architects and engineers collaborating in a modern office.'
										src='https://lh3.googleusercontent.com/aida-public/AB6AXuDRvPrcb01uRtHPW78bHRJ5OyECSOceJ9uH_Wt1AzGHEgZTWZR56WxksS9-8EXj2HAGUZ7cY62pZu2Ld022YuZRR0iBIwzaow6O0sfWxHIuf_mDhETIe-N6drESNNWZ8q9LYEh59NJIOPhf3V7TX_lYAE-x0R6hVtliDuM2JmIAV-tMQkFVY_syF_ZjrPfkNkiwdZqu6axxEIzHjwtQB99WJDUTFI1rjeKtIbHDvmn1erCKIBtgS2AYxq3iemPXkprE1nKl81I03vA'
									/>
								</motion.div>
							</div>
						</div>
					</section>

					{/* Testimonials Section */}
					<TestimonialsSection />
				</main>
			</div>
		</div>
	);
}
