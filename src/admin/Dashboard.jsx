import { Link } from 'react-router-dom';
import ReusableButton from './components/ui/Button.jsx';

// Reusable Stats Card component
const StatsCard = ({ title, value, icon, color }) => (
	<div className='flex flex-col justify-between p-5 bg-white border border-gray-100 rounded-xl shadow-sm hover:shadow-md transition-shadow'>
		<div className='flex items-center justify-between mb-2'>
			<div className={`flex items-center justify-center w-12 h-12 rounded-lg bg-${color}-50 text-${color}-600`}>
				<span className='material-symbols-outlined text-3xl'>{icon}</span>
			</div>
			<span className='text-2xl sm:text-3xl font-bold text-gray-800'>{value}</span>
		</div>
		<p className='text-sm font-medium text-gray-500'>{title}</p>
	</div>
);

const DashboardPage = () => {
	const recentProjects = [
		{ id: 1, title: 'Oakridge Commercial Center', category: 'Commercial', date: 'Oct 20, 2025', status: 'In Progress' },
		{ id: 2, title: 'Serene Villa', category: 'Residential', date: 'Oct 12, 2025', status: 'Completed' },
		{ id: 3, title: 'Innovation Hub Center', category: 'Institutional', date: 'Sep 30, 2025', status: 'In Progress' },
	];

	return (
		<div className='flex flex-col gap-10'>
			{/* Header */}
			<div className='flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4'>
				<div>
					<h1 className='text-3xl font-bold text-gray-800'>Welcome back, Admin 👋</h1>
					<p className='text-gray-500'>Here’s an overview of your website’s performance and content.</p>
				</div>
				<ReusableButton label='View Website' to='/' icon={() => <span className='material-symbols-outlined text-[20px]'>arrow_outward</span>} variant='green' />
			</div>

			{/* Quick Actions */}
			<div className='flex flex-col sm:flex-row gap-3'>
				<ReusableButton label='Go to Projects' to='/admin/manage-projects' icon={() => <span className='material-symbols-outlined text-[20px]'>foundation</span>} variant='primary' />

				<ReusableButton label='Go to Services' to='/admin/manage-services' icon={() => <span className='material-symbols-outlined text-[20px]'>construction</span>} variant='secondary' />
			</div>

			{/* Stats Grid */}
			<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
				<StatsCard title='Total Projects' value='128' icon='foundation' color='blue' />
				<StatsCard title='Total Services' value='15' icon='construction' color='yellow' />
				<StatsCard title='Testimonials' value='42' icon='star' color='purple' />
				<StatsCard title='New Inquiries' value='76' icon='mail' color='green' />
			</div>

			{/* Recent Projects Section */}
			<div className='bg-white border border-gray-100 rounded-xl shadow-sm overflow-hidden'>
				<div className='flex items-center justify-between px-6 py-4 border-b border-gray-100'>
					<h2 className='text-lg font-semibold text-gray-800'>Recent Projects</h2>
					<Link to='/admin/projects' className='text-sm font-medium text-primary hover:underline'>
						View All
					</Link>
				</div>

				<div className='divide-y divide-gray-100'>
					{recentProjects.map((project) => (
						<div key={project.id} className='flex flex-col sm:flex-row sm:items-center justify-between px-6 py-4 hover:bg-gray-50 transition-colors gap-2'>
							<div className='flex flex-col sm:flex-row sm:items-center sm:gap-4'>
								<p className='font-medium text-gray-800'>{project.title}</p>
								<p className='text-sm text-gray-500'>
									{project.category} • {project.date}
								</p>
							</div>
							<span className={`text-sm font-semibold px-3 py-1 rounded-full ${project.status === 'Completed' ? 'bg-green-50 text-green-600' : 'bg-yellow-50 text-yellow-600'}`}>{project.status}</span>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default DashboardPage;
