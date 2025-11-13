import { Routes, Route, useLocation } from 'react-router-dom';
/* eslint no-unused-vars: "off" */
import { AnimatePresence, motion } from 'framer-motion';

// Public pages
import Home from './pages/Home.jsx';
import Services from './pages/Services.jsx';
import Projects from './pages/Projects.jsx';
import ProjectDetails from './pages/ProjectDetails.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';

// Admin pages
import DashboardPage from './admin/Dashboard.jsx';
import LoginPage from './admin/pages/LoginPage.jsx';
import AdminLayout from './admin/AdminLayout.jsx';
import ManageProjects from './admin/pages/ManageProjects.jsx';
import ProjectDetailsPage from './admin/pages/ProjectDetails.jsx';
import ManageServices from './admin/pages/ManageServices.jsx';
import ManageTestimonials from './admin/pages/ManageTestimonials.jsx';
import ManageInquiries from './admin/pages/ManageInquiries.jsx';
import Settings from './admin/pages/Settings.jsx';

// Motion settings for public pages
const pageVariants = {
	initial: { opacity: 0, y: 10 },
	animate: { opacity: 1, y: 0 },
	exit: { opacity: 0, y: -10 },
};
const pageTransition = { duration: 0.4, ease: 'easeInOut' };

const AnimatedRoutes = () => {
	const location = useLocation();

	return (
		<AnimatePresence mode='wait'>
			<Routes location={location} key={location.pathname}>
				{/* Public routes */}
				<Route
					path='/'
					element={
						<motion.div variants={pageVariants} initial='initial' animate='animate' exit='exit' transition={pageTransition}>
							<Home />
						</motion.div>
					}
				/>
				<Route
					path='/services'
					element={
						<motion.div variants={pageVariants} initial='initial' animate='animate' exit='exit' transition={pageTransition}>
							<Services />
						</motion.div>
					}
				/>
				<Route
					path='/projects'
					element={
						<motion.div variants={pageVariants} initial='initial' animate='animate' exit='exit' transition={pageTransition}>
							<Projects />
						</motion.div>
					}
				/>
				<Route
					path='/project/:id'
					element={
						<motion.div variants={pageVariants} initial='initial' animate='animate' exit='exit' transition={pageTransition}>
							<ProjectDetails />
						</motion.div>
					}
				/>
				<Route
					path='/about'
					element={
						<motion.div variants={pageVariants} initial='initial' animate='animate' exit='exit' transition={pageTransition}>
							<About />
						</motion.div>
					}
				/>
				<Route
					path='/contact'
					element={
						<motion.div variants={pageVariants} initial='initial' animate='animate' exit='exit' transition={pageTransition}>
							<Contact />
						</motion.div>
					}
				/>

				{/* Admin pages */}
				<Route
					path='/admin/login'
					element={
						<AdminLayout>
							<LoginPage />
						</AdminLayout>
					}
				/>
				<Route
					path='/admin/dashboard'
					element={
						<AdminLayout>
							<DashboardPage />
						</AdminLayout>
					}
				/>
				<Route
					path='/admin/manage-projects'
					element={
						<AdminLayout>
							<ManageProjects />
						</AdminLayout>
					}
				/>
				<Route
					path='/admin/project-details/:id'
					element={
						<AdminLayout>
							<ProjectDetailsPage />
						</AdminLayout>
					}
				/>
				<Route
					path='/admin/manage-services'
					element={
						<AdminLayout>
							<ManageServices />
						</AdminLayout>
					}
				/>
				<Route
					path='/admin/manage-testimonials'
					element={
						<AdminLayout>
							<ManageTestimonials />
						</AdminLayout>
					}
				/>
				<Route
					path='/admin/manage-inquiries'
					element={
						<AdminLayout>
							<ManageInquiries />
						</AdminLayout>
					}
				/>
				<Route
					path='/admin/settings'
					element={
						<AdminLayout>
							<Settings />
						</AdminLayout>
					}
				/>
				{/* Add more admin pages under /admin/... */}
			</Routes>
		</AnimatePresence>
	);
};

export default AnimatedRoutes;
