// src/pages/admin/ManageProjects.jsx
import React, { useState } from 'react';
import { projects as projectData } from '../../data/projects.js';
import ProjectModal from '../components/ProjectModal.jsx';
import ConfirmDeleteModal from '../components/ConfirmDeleteModal';
import AddProjectModal from '../components/AddProjectModal';

export default function ManageProjects() {
	// Extend project data with status, lastUpdated, showOnHome
	const extendedProjects = projectData.map((p, index) => ({
		...p,
		status: ['Ongoing', 'Completed', 'Pending'][index % 3],
		lastUpdated: new Date(Date.now() - Math.floor(Math.random() * 10) * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
		showOnHome: false,
	}));

	const [projects, setProjects] = useState(extendedProjects);
	const [selectedProject, setSelectedProject] = useState(null);
	const [deleteTarget, setDeleteTarget] = useState(null);
	const [isAddModalOpen, setIsAddModalOpen] = useState(false);
	const [searchTerm, setSearchTerm] = useState('');
	const [statusFilter, setStatusFilter] = useState('all');
	const [selectedCategory, setSelectedCategory] = useState('All'); // ✅ Category state

	// Save updated project info
	const handleSave = (updated) => {
		setProjects((prev) => prev.map((p) => (p.id === updated.id ? { ...p, ...updated } : p)));
		setSelectedProject(null);
	};

	// Delete a project
	const handleDelete = (id) => {
		setProjects((prev) => prev.filter((p) => p.id !== id));
		setDeleteTarget(null);
	};

	// Add new project
	const handleAddProject = (newProject) => {
		setProjects((prev) => [
			{
				...newProject,
				lastUpdated: new Date().toISOString().split('T')[0],
			},
			...prev,
		]);
	};

	// Filtered projects based on search, status, and category
	const filteredProjects = projects.filter((p) => {
		const matchesSearch = p.title.toLowerCase().includes(searchTerm.toLowerCase());
		const matchesStatus = statusFilter === 'all' || p.status === statusFilter;
		const matchesCategory = selectedCategory === 'All' || p.category === selectedCategory;
		return matchesSearch && matchesStatus && matchesCategory;
	});

	return (
		<div className='flex flex-col gap-6'>
			{/* Header */}
			<div className='flex flex-col gap-4'>
				<h1 className='text-3xl font-bold text-gray-800'>Manage Projects</h1>

				{/* Controls: search, status filter, category filter, add button */}
				<div className='flex flex-wrap items-center gap-3'>
					{/* Search */}
					<input
						type='text'
						placeholder='Search projects...'
						className='w-full sm:w-64 border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary'
						value={searchTerm}
						onChange={(e) => setSearchTerm(e.target.value)}
					/>

					{/* Status Filter */}
					<select
						value={statusFilter}
						onChange={(e) => setStatusFilter(e.target.value)}
						className='w-full sm:w-auto border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary'>
						<option value='all'>All Status</option>
						<option value='Ongoing'>Ongoing</option>
						<option value='Pending'>Pending</option>
						<option value='Completed'>Completed</option>
					</select>

					{/* Category Filter */}
					<select
						value={selectedCategory}
						onChange={(e) => setSelectedCategory(e.target.value)}
						className='w-full sm:w-auto border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary'>
						<option value='All'>All Categories</option>
						{[...new Set(projects.map((p) => p.category))].map((cat) => (
							<option key={cat} value={cat}>
								{cat}
							</option>
						))}
					</select>

					{/* Add Project Button */}
					<button
						onClick={() => setIsAddModalOpen(true)}
						className='w-full sm:w-auto flex items-center gap-2 ms-auto h-11 px-5 bg-primary text-white rounded-lg text-sm font-medium shadow-sm hover:bg-primary/90 transition-colors'>
						<span className='material-symbols-outlined text-[20px]'>add</span>
						Add Project
					</button>
				</div>
			</div>

			{/* Table for desktop */}
			<div className='hidden md:block bg-white border border-gray-100 rounded-xl shadow-sm overflow-x-auto'>
				<table className='min-w-full text-sm text-left'>
					<thead className='bg-gray-50 text-gray-600 text-xs uppercase tracking-wider'>
						<tr>
							<th className='px-6 py-3 font-medium'>#</th>
							<th className='px-6 py-3 font-medium'>Project</th>
							<th className='px-6 py-3 font-medium'>Category</th>
							<th className='px-6 py-3 font-medium'>Status</th>
							<th className='px-6 py-3 font-medium text-right'>Actions</th>
						</tr>
					</thead>
					<tbody>
						{filteredProjects.map((project, index) => (
							<tr key={project.id} className={`${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'} hover:bg-gray-100 transition`}>
								<td className='px-6 py-4 text-gray-600'>{index + 1}</td>
								<td className='px-6 py-4 flex items-center gap-3'>
									<img src={project.image} alt={project.title} className='w-12 h-12 rounded-md object-cover border border-gray-200' />
									<div>
										<p className='font-medium text-gray-800'>{project.title}</p>
										<p className='text-xs text-gray-500'>{project.description.slice(0, 50)}...</p>
									</div>
								</td>
								<td className='px-6 py-4 text-gray-700'>{project.category}</td>
								<td className='px-6 py-4'>
									<span
										className={`px-2 py-1 rounded-full text-xs font-semibold ${
											project.status === 'Completed' ? 'bg-green-50 text-green-600' : project.status === 'Ongoing' ? 'bg-yellow-50 text-yellow-700' : 'bg-gray-100 text-gray-700'
										}`}>
										{project.status}
									</span>
								</td>
								<td className='px-6 py-4 text-right'>
									<div className='flex justify-end gap-3'>
										<button onClick={() => setSelectedProject(project)} title='View / Edit' className='text-gray-500 hover:text-primary transition'>
											<span className='material-symbols-outlined text-[20px]'>visibility</span>
										</button>
										<button onClick={() => setDeleteTarget(project)} title='Delete Project' className='text-gray-500 hover:text-red-600 transition'>
											<span className='material-symbols-outlined text-[20px]'>delete</span>
										</button>
									</div>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>

			{/* Mobile card view */}
			<div className='md:hidden flex flex-col gap-4'>
				{filteredProjects.map((project) => (
					<div key={project.id} className='border border-gray-200 rounded-lg p-4 shadow-sm bg-white'>
						<div className='flex justify-between items-start'>
							<div>
								<p className='font-medium text-gray-800'>{project.title}</p>
								<p className='text-xs text-gray-500'>{project.description}</p>
								<p className='text-xs text-gray-500 mt-1'>{project.category}</p>
								<span
									className={`px-2 py-1 mt-2 inline-block text-xs rounded-full ${
										project.status === 'Completed' ? 'bg-green-50 text-green-600' : project.status === 'Ongoing' ? 'bg-yellow-50 text-yellow-700' : 'bg-gray-100 text-gray-700'
									}`}>
									{project.status}
								</span>
							</div>
							<div className='flex flex-col gap-2'>
								<button onClick={() => setSelectedProject(project)} className='text-gray-500 hover:text-primary transition'>
									<span className='material-symbols-outlined text-[20px]'>visibility</span>
								</button>
								<button onClick={() => setDeleteTarget(project)} className='text-gray-500 hover:text-red-600 transition'>
									<span className='material-symbols-outlined text-[20px]'>delete</span>
								</button>
							</div>
						</div>
					</div>
				))}
			</div>

			{/* Modals */}
			{selectedProject && <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} onSave={handleSave} />}
			{deleteTarget && <ConfirmDeleteModal projectTitle={deleteTarget.title} onCancel={() => setDeleteTarget(null)} onConfirm={() => handleDelete(deleteTarget.id)} />}
			{isAddModalOpen && <AddProjectModal isOpen={isAddModalOpen} onClose={() => setIsAddModalOpen(false)} onSave={handleAddProject} />}
		</div>
	);
}
