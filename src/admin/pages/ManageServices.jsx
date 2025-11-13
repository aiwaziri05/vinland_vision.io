import React, { useState } from 'react';

const initialServices = [
	{ id: 1, title: 'New Home Construction', description: 'Building custom homes from the ground up.', icon: 'home', status: 'Active' },
	{ id: 2, title: 'Commercial Buildings', description: 'Construction for commercial properties and offices.', icon: 'apartment', status: 'Active' },
	{ id: 3, title: 'Major Renovations', description: 'Complete overhauls and renovations of existing structures.', icon: 'construction', status: 'Active' },
	{ id: 4, title: 'Architectural Design', description: 'Design and planning services for new projects.', icon: 'architecture', status: 'Draft' },
	{ id: 5, title: 'Project Management', description: 'Overseeing projects from start to finish.', icon: 'engineering', status: 'Inactive' },
];

const statusClasses = {
	Active: 'bg-green-50 text-green-600',
	Draft: 'bg-yellow-50 text-yellow-800',
	Inactive: 'bg-red-50 text-red-600',
};

export default function ManageServices() {
	const [services] = useState(initialServices);

	return (
		<div className='flex flex-col gap-6'>
			{/* Header */}
			<div className='flex flex-col gap-4'>
				<h1 className='text-3xl font-bold text-gray-800'>Manage Services</h1>
				<p className='text-gray-500'>Create, edit, and manage the services offered by Vinland Vision.</p>
			</div>

			{/* Desktop Table */}
			<div className='hidden md:block bg-white border border-gray-100 rounded-xl shadow-sm overflow-x-auto'>
				<table className='min-w-full text-sm text-left'>
					<thead className='bg-gray-50 text-gray-600 text-xs uppercase tracking-wider'>
						<tr>
							<th className='px-6 py-3 font-medium'>#</th>
							<th className='px-6 py-3 font-medium'>Service</th>
							<th className='px-6 py-3 font-medium'>Description</th>
							<th className='px-6 py-3 font-medium'>Status</th>
							<th className='px-6 py-3 font-medium text-right'>Actions</th>
						</tr>
					</thead>
					<tbody>
						{services.map((service, index) => (
							<tr key={service.id} className={`${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'} hover:bg-gray-100 transition`}>
								<td className='px-6 py-4 text-gray-600'>{index + 1}</td>
								<td className='px-6 py-4 flex items-center gap-3'>
									<div className='flex items-center justify-center rounded-md w-12 h-12 bg-primary/10'>
										<span className='material-symbols-outlined text-primary text-2xl'>{service.icon}</span>
									</div>
									<p className='font-medium text-gray-800'>{service.title}</p>
								</td>
								<td className='px-6 py-4 text-gray-700'>{service.description}</td>
								<td className='px-6 py-4'>
									<span className={`px-2 py-1 rounded-full text-xs font-semibold ${statusClasses[service.status]}`}>{service.status}</span>
								</td>
								<td className='px-6 py-4 text-right'>
									<div className='flex justify-end gap-3'>
										<button className='text-gray-500 hover:text-primary transition' title='Edit Service'>
											<span className='material-symbols-outlined text-[20px]'>edit</span>
										</button>
										<button className='text-gray-500 hover:text-red-600 transition' title='Delete Service'>
											<span className='material-symbols-outlined text-[20px]'>delete</span>
										</button>
									</div>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>

			{/* Mobile Card View */}
			<div className='md:hidden flex flex-col gap-4'>
				{services.map((service) => (
					<div key={service.id} className='border border-gray-200 rounded-lg p-4 shadow-sm bg-white'>
						<div className='flex justify-between items-start'>
							<div>
								<div className='flex items-center gap-3 mb-2'>
									<div className='flex items-center justify-center rounded-md w-10 h-10 bg-primary/10'>
										<span className='material-symbols-outlined text-primary text-2xl'>{service.icon}</span>
									</div>
									<p className='font-medium text-gray-800'>{service.title}</p>
								</div>
								<p className='text-xs text-gray-500'>{service.description}</p>
								<span className={`px-2 py-1 mt-2 inline-block text-xs rounded-full ${statusClasses[service.status]}`}>{service.status}</span>
							</div>
							<div className='flex flex-col gap-2'>
								<button className='text-gray-500 hover:text-primary transition'>
									<span className='material-symbols-outlined text-[20px]'>edit</span>
								</button>
								<button className='text-gray-500 hover:text-red-600 transition'>
									<span className='material-symbols-outlined text-[20px]'>delete</span>
								</button>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
