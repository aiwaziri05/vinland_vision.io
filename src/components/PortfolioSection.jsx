import { Link } from 'react-router-dom';
/* eslint no-unused-vars: "off" */
import { motion } from 'framer-motion';

import projects from '../data/projects';

export default function PortfolioSection() {
	const fadeUp = {
		initial: { opacity: 0, y: 20 },
		animate: { opacity: 1, y: 0 },
	};

	return (
		<section className='flex flex-1 justify-center py-16 sm:py-20 bg-background-light dark:bg-background-dark'>
			<div className='flex flex-col max-w-7xl flex-1 px-4 sm:px-6 lg:px-8'>
				{/* Section Header */}
				<motion.div className='text-center px-4 pb-12' initial='initial' whileInView='animate' viewport={{ once: true }} variants={fadeUp}>
					<h2 className='text-text-primary text-3xl font-bold leading-tight tracking-tight md:text-4xl'>Our Portfolio</h2>
					<p className='mt-4 max-w-2xl mx-auto text-text-muted'>
						Explore a selection of our finest work, showcasing our dedication to craftsmanship, design, and attention to detail. Each project reflects our passion for building excellence.
					</p>
				</motion.div>

				{/* Projects Grid */}
				<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
					{projects.map((project, i) => (
						<motion.div
							key={project.id}
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.6, delay: i * 0.1 }}
							className='group relative block overflow-hidden rounded-xl shadow-lg hover:shadow-2xl'>
							<Link to={`/project/${project.id}`}>
								<img src={project.image} alt={project.title} className='w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105' />
								<div className='absolute inset-0 bg-linear-to-t from-black/60 via-black/40 to-black/20 opacity-70 group-hover:opacity-90 transition-opacity duration-300' />
								<div className='absolute bottom-0 left-0 p-4'>
									<h3 className='text-white text-xl font-bold drop-shadow-lg'>{project.title}</h3>
									<p className='text-gray-200 text-sm drop-shadow-lg mt-1 line-clamp-3'>{project.description || 'A showcase of our exceptional work and design expertise.'}</p>
								</div>
							</Link>
						</motion.div>
					))}
				</div>

				{/* View All Projects CTA */}
				<motion.div className='text-center mt-12' initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
					<Link to='/projects' className='inline-block px-6 py-3 bg-primary text-white text-base font-bold rounded-lg hover:bg-primary/90 transition-colors duration-300'>
						View All Projects
					</Link>
				</motion.div>
			</div>
		</section>
	);
}
