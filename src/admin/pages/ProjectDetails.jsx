import { useParams, Link } from 'react-router-dom';
import { projects as projectData } from '../../data/projects';

export default function ProjectDetailsPage() {
	const { id } = useParams();
	const project = projectData.find((p) => p.id === parseInt(id));

	if (!project) {
		return (
			<div className='p-8 text-center'>
				<h2 className='text-xl font-semibold text-gray-700'>Project not found</h2>
				<Link to='/admin/projects' className='mt-4 inline-block px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition'>
					Back to Projects
				</Link>
			</div>
		);
	}

	return (
		<div className='p-6 max-w-5xl mx-auto'>
			{/* Header */}
			<div className='flex items-center justify-between mb-8'>
				<h1 className='text-2xl font-bold text-gray-800'>{project.title}</h1>
				<Link to='/admin/projects' className='px-4 py-2 bg-green-600 text-white rounded-md text-sm font-medium hover:bg-green-700 transition'>
					← Back to Projects
				</Link>
			</div>

			{/* Project Overview */}
			<div className='bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden'>
				<img src={project.image} alt={project.title} className='w-full h-64 object-cover border-b border-gray-200' />

				<div className='p-6 space-y-4'>
					<p className='text-gray-700 leading-relaxed'>{project.description}</p>

					<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4'>
						<div className='bg-gray-50 rounded-md p-4 border border-gray-100'>
							<p className='text-xs text-gray-500 uppercase mb-1'>Category</p>
							<p className='text-sm font-medium text-gray-800'>{project.category}</p>
						</div>

						<div className='bg-gray-50 rounded-md p-4 border border-gray-100'>
							<p className='text-xs text-gray-500 uppercase mb-1'>Status</p>
							<span
								className={`px-2 py-1 rounded-md text-xs font-semibold ${
									project.status === 'Completed' ? 'bg-green-100 text-green-700' : project.status === 'Ongoing' ? 'bg-yellow-100 text-yellow-700' : 'bg-gray-100 text-gray-700'
								}`}>
								{project.status}
							</span>
						</div>

						<div className='bg-gray-50 rounded-md p-4 border border-gray-100'>
							<p className='text-xs text-gray-500 uppercase mb-1'>Last Updated</p>
							<p className='text-sm font-medium text-gray-800'>{project.lastUpdated || '—'}</p>
						</div>
					</div>
				</div>
			</div>

			{/* Additional Details */}
			<div className='mt-8'>
				<h2 className='text-lg font-semibold text-gray-800 mb-4'>Additional Information</h2>
				<div className='bg-white border border-gray-200 rounded-lg p-6 shadow-sm'>
					<p className='text-sm text-gray-700 leading-relaxed'>
						This project is part of our admin dashboard portfolio. You can extend this section with progress updates, team members, or client notes later.
					</p>
				</div>
			</div>
		</div>
	);
}
