import { Link } from 'react-router-dom';
/* eslint no-unused-vars: "off" */
import { motion } from 'framer-motion';

const cardVariants = {
	hidden: { opacity: 0, y: 20 },
	visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

export default function ProjectCard({ project }) {
	return (
		<motion.div variants={cardVariants} whileHover={{ scale: 1.03 }} transition={{ duration: 0.3 }}>
			<Link to={`/project/${project.id}`} className='group relative block overflow-hidden rounded-xl bg-white dark:bg-background-dark shadow-lg hover:shadow-2xl transition-all duration-300'>
				<div className='relative h-64 w-full overflow-hidden'>
					<img src={project.image} alt={project.title} className='h-full w-full object-cover transition-transform duration-500 group-hover:scale-110' loading='lazy' />
					<div className='absolute inset-0 bg-linear-to-t from-text-base/90 via-text-base/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
					<div className='absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0'>
						<span className='inline-flex items-center gap-2 text-white text-sm font-semibold'>
							View Project
							<span className='material-symbols-outlined text-base'>arrow_forward</span>
						</span>
					</div>
				</div>
				<div className='relative p-6 bg-linear-to-br from-white to-gray-50'>
					<h3 className='text-xl font-bold text-text-base mb-2 transition-colors duration-300 group-hover:text-primary'>{project.title}</h3>
					<p className='text-sm text-text-muted leading-relaxed'>{project.description}</p>
				</div>
			</Link>
		</motion.div>
	);
}
