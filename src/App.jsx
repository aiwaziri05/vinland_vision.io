import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import './index.css';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Home from './pages/Home.jsx';
import Services from './pages/Services.jsx';
import Projects from './pages/Projects.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import ProjectDetails from './pages/ProjectDetails';

// Define transition variants
const pageVariants = {
	initial: { opacity: 0, y: 10 },
	animate: { opacity: 1, y: 0 },
	exit: { opacity: 0, y: -10 },
};

const pageTransition = {
	duration: 0.4,
	ease: 'easeInOut',
};

// Component wrapper for smooth transitions
function AnimatedRoutes() {
	const location = useLocation();

	return (
		<AnimatePresence mode='wait'>
			<Routes location={location} key={location.pathname}>
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
			</Routes>
		</AnimatePresence>
	);
}

function App() {
	return (
		<BrowserRouter>
			<Header />
			<AnimatedRoutes />
			<Footer />
		</BrowserRouter>
	);
}

export default App;
