import { useState } from 'react';
/* eslint no-unused-vars: "off" */
import { motion } from 'framer-motion';
import ProjectCard from '../components/ProjectCard';
import projects from '../data/projects';
import CategoryFilter from '../components/CategoryFilter';
import CallToActionSection from '../components/CallToAction';

export default function ProjectsPage() {
	const [selectedCategory, setSelectedCategory] = useState('All');

	const filteredProjects = selectedCategory === 'All' ? projects : projects.filter((project) => project.category.toLowerCase() === selectedCategory.toLowerCase());

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

	return (
		<motion.main initial='hidden' animate='visible' className='grow'>
			{/* ===== Hero Section ===== */}
			<section
				className='relative w-full bg-cover bg-center bg-no-repeat min-h-[360px]'
				style={{
					backgroundImage: `
						linear-gradient(rgba(30, 43, 59, 0.65), rgba(30, 43, 59, 0.75)),
						url('https://lh3.googleusercontent.com/aida-public/AB6AXuBBUS1-DL6ZpU5nhYmKb1PVm0KqJvBAm7FMCXBETSLUBIXEHg91P_MdwrUulUHbWg-K_b5KJIyxozZZiEZevzLGsw1aDdBeeP60E-jsTseALwNvuRVShI6irxx3eRjusCRAZT6HySF_v80h_MtcdGhqHdZM28SWdCYLkQcKfSZ83L7JBxTsX-NfkM72p_i77zLa9Y9I_j462tIv89x0NKu6DIdJweYGIvx7F2_QhDpwA9mGAIzZPOWco-eBfJmFq6xG5rS7mL302_E')
					`,
				}}>
				<div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 text-center text-white'>
					<motion.h1 variants={fadeUp} className='text-4xl md:text-5xl font-black mb-4'>
						Our Portfolio of Work
					</motion.h1>
					<motion.p variants={fadeUp} transition={{ delay: 0.1 }} className='text-slate-300 text-base md:text-lg max-w-3xl mx-auto'>
						Explore our diverse range of projects across residential, commercial, and renovations.
					</motion.p>
					<motion.div variants={fadeUp} transition={{ delay: 0.2 }} className='mt-6 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center'>
						<a href='/projects' className='inline-flex items-center justify-center rounded-lg h-12 px-6 bg-primary text-white text-base font-bold hover:opacity-95 transition w-full sm:w-auto'>
							View Projects
						</a>
						<a
							href='/contact'
							className='inline-flex items-center justify-center rounded-lg h-12 px-6 border border-white/20 text-white text-base font-medium hover:bg-white/5 transition w-full sm:w-auto'>
							Request a Quote
						</a>
					</motion.div>
				</div>
			</section>

			{/* ===== Projects Section ===== */}
			<motion.section className='py-12 md:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto' variants={staggerContainer} initial='hidden' animate='visible'>
				{/* Category Filter */}
				<CategoryFilter onFilterChange={setSelectedCategory} />

				{/* Filtered Projects Grid */}
				<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8'>
					{filteredProjects.length > 0 ? (
						filteredProjects.map((project) => <ProjectCard key={project.id} project={project} />)
					) : (
						<p className='text-center text-text-secondary mt-10'>No projects found in this category.</p>
					)}
				</div>

				{/* Call to Action */}
				<motion.div variants={fadeUp} className='mt-24'>
					<CallToActionSection />
				</motion.div>
			</motion.section>
		</motion.main>
	);
}
