import { useState } from 'react';
import { projects as projectData } from '../../data/projects.js';
import { projectColumns } from '../config/projects.columns.jsx';
import { mobileCardFields } from '../config/mobileCardsFields.jsx';

import ProjectModal from '../components/ProjectModal.jsx';
import ConfirmDeleteModal from '../components/ConfirmDeleteModal.jsx';
import AdminModal from '../components/AdminModal.jsx';
import ReusableButton from '../components/ui/Button.jsx';
import SearchInput from '../components/ui/SearchInput.jsx';
import SelectInput from '../components/ui/SelectInput.jsx';
import ReusableTable from '../components/ui/Table.jsx';

export default function ManageProjects() {
	// Extend project data with status, lastUpdated, showOnHome
	const extendedProjects = projectData.map((p, index) => ({
		...p,
		status: ['Ongoing', 'Completed', 'Pending'][index % 3],
		lastUpdated: new Date(Date.now() - Math.floor(Math.random() * 10) * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
		showOnHome: false,
	}));

	const [projects, setProjects] = useState(extendedProjects);

	// For editing
	const [selectedProject, setSelectedProject] = useState(null);
	// For deleting
	const [deleteTarget, setDeleteTarget] = useState(null);

	// For add new project modal
	const [isAddModalOpen, setIsAddModalOpen] = useState(false);

	// Search + filter states
	const [searchTerm, setSearchTerm] = useState('');
	const [statusFilter, setStatusFilter] = useState('all');
	const [selectedCategory, setSelectedCategory] = useState('All');

	// Form state for new project
	const [newProject, setNewProject] = useState({
		title: '',
		category: '',
		image: '',
		description: '',
		content: '',
		status: 'Pending',
		showOnHome: false,
		location: { lat: '', lng: '', address: '' },
	});

	const [imagePreview, setImagePreview] = useState(null);

	// Handle form changes
	const handleChange = (field, value) => {
		setNewProject({ ...newProject, [field]: value });
	};

	const handleLocationChange = (field, value) => {
		setNewProject({
			...newProject,
			location: { ...newProject.location, [field]: value },
		});
	};

	// Image upload handler
	const handleImageUpload = (e) => {
		const file = e.target.files[0];
		if (!file) return;

		const reader = new FileReader();
		reader.onloadend = () => {
			setNewProject({ ...newProject, image: reader.result });
			setImagePreview(reader.result);
		};
		reader.readAsDataURL(file);
	};

	// Save updated project (edit)
	const handleSave = (updated) => {
		setProjects((prev) => prev.map((p) => (p.id === updated.id ? { ...p, ...updated } : p)));
		setSelectedProject(null);
	};

	// Delete project
	const handleDelete = (id) => {
		setProjects((prev) => prev.filter((p) => p.id !== id));
		setDeleteTarget(null);
	};

	// _Add new project_
	const handleAddProject = () => {
		if (!newProject.title || !newProject.category) return;

		const projectToSave = {
			...newProject,
			id: newProject.title.toLowerCase().replace(/\s+/g, '-'),
			lastUpdated: new Date().toISOString().split('T')[0],
		};

		setProjects((prev) => [projectToSave, ...prev]);

		// Reset
		setNewProject({
			title: '',
			category: '',
			image: '',
			description: '',
			content: '',
			status: 'Pending',
			showOnHome: false,
			location: { lat: '', lng: '', address: '' },
		});
		setImagePreview(null);
		setIsAddModalOpen(false);
	};

	// Filter projects
	const filteredProjects = projects.filter((p) => {
		const matchesSearch = p.title.toLowerCase().includes(searchTerm.toLowerCase());
		const matchesStatus = statusFilter === 'all' || p.status === statusFilter;
		const matchesCategory = selectedCategory === 'All' || p.category === selectedCategory;

		return matchesSearch && matchesStatus && matchesCategory;
	});

	return (
		<div className='flex flex-col gap-6'>
			{/* Header */}
			<div className='flex flex-col gap-4 mb-8'>
				<h1 className='text-3xl font-bold text-gray-800'>Manage Projects</h1>
				{/* Controls */}
				<div className='flex flex-wrap items-center gap-3'>
					<SearchInput value={searchTerm} onChange={setSearchTerm} placeholder='Search projects...' className='w-full sm:w-64' />
					{/* Status Filter */}
					<SelectInput
						value={statusFilter}
						onChange={setStatusFilter}
						options={[
							{ value: 'all', label: 'All Status' },
							{ value: 'Ongoing', label: 'Ongoing' },
							{ value: 'Pending', label: 'Pending' },
							{ value: 'Completed', label: 'Completed' },
						]}
						placeholder='Filter by status'
						className='w-full sm:w-auto'
					/>

					{/* Category Filter */}

					<SelectInput
						value={selectedCategory}
						onChange={setSelectedCategory}
						options={[{ value: 'All', label: 'All Categories' }, ...[...new Set(projects.map((p) => p.category))].map((cat) => ({ value: cat, label: cat }))]}
						placeholder='Filter by category'
						className='w-full sm:w-auto'
					/>

					{/* Add Button */}

					<ReusableButton
						className='ml-auto'
						label='Add Project'
						onClick={() => setIsAddModalOpen(true)}
						icon={() => <span className='material-symbols-outlined text-[20px]'>add</span>}
						variant='primary'
					/>
				</div>
			</div>

			{/* Projects Table using ReusableTable */}

			<ReusableTable
				data={filteredProjects}
				columns={projectColumns}
				mobileCardFields={mobileCardFields}
				actions={[
					{
						title: 'View / Edit',
						icon: <span className='material-symbols-outlined text-[20px]'>edit</span>,
						onClick: (row) => setSelectedProject(row),
					},
					{
						title: 'Delete Inquiry',
						icon: <span className='material-symbols-outlined text-[20px]'>delete</span>,
						color: 'text-red-600 hover:text-red-800',
						onClick: (row) => setDeleteTarget(row),
					},
				]}
				keyField={projects.id}
			/>

			{/* ========== MODALS ========== */}

			{/* Edit project */}
			{selectedProject && <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} onSave={handleSave} />}

			{/* Delete confirm */}
			{deleteTarget && <ConfirmDeleteModal projectTitle={deleteTarget.title} onCancel={() => setDeleteTarget(null)} onConfirm={() => handleDelete(deleteTarget.id)} />}

			{/* Add new project modal (using AdminModal) */}
			<AdminModal isOpen={isAddModalOpen} onClose={() => setIsAddModalOpen(false)} title='Add New Project' onSave={handleAddProject}>
				{/* FORM FIELDS INSIDE Reusable Modal */}

				{/* Title */}
				<div>
					<label className='text-sm text-gray-600'>Project Title</label>
					<input type='text' value={newProject.title} onChange={(e) => handleChange('title', e.target.value)} className='w-full border rounded-lg px-3 py-2 text-sm mt-1' />
				</div>

				{/* Category */}
				<div>
					<label className='text-sm text-gray-600'>Category</label>
					<select value={newProject.category} onChange={(e) => handleChange('category', e.target.value)} className='w-full border rounded-lg px-3 py-2 text-sm mt-1'>
						<option value=''>Select category</option>
						<option value='Commercial'>Commercial</option>
						<option value='Residential'>Residential</option>
						<option value='Hospitality'>Hospitality</option>
						<option value='Institutional'>Institutional</option>
					</select>
				</div>

				{/* Image Upload */}
				<div>
					<label className='text-sm text-gray-600'>Upload Project Image</label>

					<div className='mt-1 flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-lg p-4'>
						{imagePreview ? (
							<img src={imagePreview} alt='Preview' className='w-full h-48 object-cover rounded-md mb-3' />
						) : (
							<div className='text-gray-400 text-sm flex flex-col items-center'>
								<span className='material-symbols-outlined text-4xl mb-2'>upload_file</span>
								<p>Click below to upload image</p>
							</div>
						)}

						<input type='file' accept='image/*' onChange={handleImageUpload} className='w-full text-sm text-gray-700 mt-2' />
					</div>
				</div>

				{/* Short Description */}
				<div>
					<label className='text-sm text-gray-600'>Short Description</label>
					<textarea value={newProject.description} onChange={(e) => handleChange('description', e.target.value)} className='w-full border rounded-lg px-3 py-2 text-sm mt-1 h-20 resize-none' />
				</div>

				{/* Content */}
				<div>
					<label className='text-sm text-gray-600'>Detailed Content</label>
					<textarea value={newProject.content} onChange={(e) => handleChange('content', e.target.value)} className='w-full border rounded-lg px-3 py-2 text-sm mt-1 h-24 resize-none' />
				</div>

				{/* Status */}
				<div>
					<label className='text-sm text-gray-600'>Status</label>
					<select value={newProject.status} onChange={(e) => handleChange('status', e.target.value)} className='w-full border rounded-lg px-3 py-2 text-sm mt-1'>
						<option value='Pending'>Pending</option>
						<option value='Ongoing'>Ongoing</option>
						<option value='Completed'>Completed</option>
					</select>
				</div>

				{/* Location */}
				<div className='grid grid-cols-2 gap-2'>
					<div>
						<label className='text-sm text-gray-600'>Latitude</label>
						<input type='text' value={newProject.location.lat} onChange={(e) => handleLocationChange('lat', e.target.value)} className='w-full border rounded-lg px-3 py-2 text-sm mt-1' />
					</div>

					<div>
						<label className='text-sm text-gray-600'>Longitude</label>
						<input type='text' value={newProject.location.lng} onChange={(e) => handleLocationChange('lng', e.target.value)} className='w-full border rounded-lg px-3 py-2 text-sm mt-1' />
					</div>
				</div>

				{/* Address */}
				<div>
					<label className='text-sm text-gray-600'>Address</label>
					<input type='text' value={newProject.location.address} onChange={(e) => handleLocationChange('address', e.target.value)} className='w-full border rounded-lg px-3 py-2 text-sm mt-1' />
				</div>

				{/* Show On Home toggle */}
				<div className='flex items-center justify-between mt-3'>
					<span className='text-sm text-gray-600'>Show on Homepage</span>

					<div
						onClick={() => handleChange('showOnHome', !newProject.showOnHome)}
						className={`w-12 h-6 flex items-center rounded-full cursor-pointer transition ${newProject.showOnHome ? 'bg-primary' : 'bg-gray-300'}`}>
						<div className={`w-5 h-5 bg-white rounded-full shadow-md transform transition ${newProject.showOnHome ? 'translate-x-6' : 'translate-x-1'}`} />
					</div>
				</div>
			</AdminModal>
		</div>
	);
}
