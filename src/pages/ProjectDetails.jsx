import { useParams, Link } from 'react-router-dom';
/* eslint no-unused-vars: "off" */
import { motion } from 'framer-motion';
import projects from '../data/projects';
import CallToActionSection from '../components/CallToAction';

export default function ProjectDetails() {
	const { id } = useParams();
	const project = projects.find((p) => p.id === id);

	if (!project) {
		return (
			<div className='py-20 text-center'>
				<h2 className='text-2xl font-bold text-primary'>Project not found</h2>
				<Link to='/projects' className='text-blue-600 underline mt-4 block'>
					Back to Projects
				</Link>
			</div>
		);
	}

	const { location } = project;
	const lat = location?.lat;
	const lng = location?.lng;
	const address = location?.address || 'Address not available';

	// Motion Variants
	const fadeUp = {
		hidden: { opacity: 0, y: 30 },
		visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
	};

	const staggerContainer = {
		hidden: {},
		visible: { transition: { staggerChildren: 0.15 } },
	};

	return (
		<motion.main initial='hidden' whileInView='visible' viewport={{ once: true }} className='py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto'>
			{/* Hero Image */}
			<motion.div variants={fadeUp} className='relative rounded-2xl overflow-hidden shadow-xl mb-12'>
				<img src={project.image} alt={project.title} className='w-full h-[420px] md:h-[500px] object-cover transition-transform duration-700 hover:scale-105' />
				<div className='absolute inset-0 bg-linear-to-t from-black/50 via-black/10 to-transparent' />
				<span className='absolute top-5 left-5 bg-primary text-white font-semibold py-1.5 px-4 rounded-full text-xs uppercase tracking-wide shadow-lg'>{project.category}</span>
			</motion.div>

			{/* Project Info + Location */}
			<motion.section variants={staggerContainer} initial='hidden' whileInView='visible' className='grid md:grid-cols-3 gap-10 mb-16'>
				{/* Project Info */}
				<motion.div variants={fadeUp} className='md:col-span-2 space-y-6'>
					<h1 className='text-4xl md:text-5xl font-extrabold text-text-primary leading-tight'>{project.title}</h1>
					<p className='text-gray-700 text-lg leading-relaxed'>{project.description}</p>

					{/* Project Content */}
					<article className='prose dark:prose-invert max-w-none space-y-6' dangerouslySetInnerHTML={{ __html: project.content }} />

					{/* Address Section (Professional Layout) */}
					{address && (
						<div className='mt-4 flex items-center gap-3 text-gray-700'>
							<span className='material-symbols-outlined text-primary'>location_on</span>
							<span className='font-medium'>{address}</span>
						</div>
					)}
				</motion.div>

				{/* Location Map Card */}
				<motion.aside variants={fadeUp} whileHover={{ y: -5, boxShadow: '0px 10px 25px rgba(0,0,0,0.1)' }} className='bg-white rounded-2xl shadow-md p-6 border border-gray-100 h-fit'>
					<h3 className='text-xl font-bold text-text-primary mb-4 flex items-center gap-2'>
						<span className='material-symbols-outlined'>map</span> Project Location
					</h3>
					{lat && lng ? (
						<div className='w-full h-48 rounded-lg overflow-hidden border border-gray-200 mb-4'>
							<iframe
								title='Project Location Map'
								src={`https://www.google.com/maps?q=${lat},${lng}&z=15&output=embed`}
								className='w-full h-full border-0'
								loading='lazy'
								referrerPolicy='no-referrer-when-downgrade'></iframe>
						</div>
					) : (
						<p className='text-sm text-gray-500 mb-3'>Map unavailable</p>
					)}
					{/* {address && <p className='text-gray-700 font-medium'>{address}</p>} */}
				</motion.aside>
			</motion.section>

			{/* Back Button */}
			<motion.div variants={fadeUp} transition={{ duration: 0.6, delay: 0.2 }} className='text-center md:text-left mb-16'>
				<Link to='/projects' className='inline-flex items-center gap-2 text-text-primary font-semibold hover:text-primary transition-colors duration-200'>
					<span className='material-symbols-outlined'>arrow_back</span>
					Back to Projects
				</Link>
			</motion.div>

			{/* Call to Action */}
			<motion.div variants={fadeUp} transition={{ duration: 0.8 }}>
				<CallToActionSection />
			</motion.div>
		</motion.main>
	);
}
