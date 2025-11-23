import { useState } from 'react';

import { serviceColumns } from '../config/services.columns.jsx';
import { mobileCardFields } from '../config/mobileCardsFields.jsx';

import ConfirmDeleteModal from '../components/ConfirmDeleteModal';
import AdminModal from '../components/AdminModal.jsx';
import ReusableButton from '../components/ui/Button.jsx';
import ReusableTable from '../components/ui/Table.jsx';

const initialServices = [
	{ id: 1, title: 'New Home Construction', description: 'Building custom homes from the ground up.', icon: 'home', status: 'Active' },
	{ id: 2, title: 'Commercial Buildings', description: 'Construction for commercial properties and offices.', icon: 'apartment', status: 'Active' },
	{ id: 3, title: 'Major Renovations', description: 'Complete overhauls and renovations of existing structures.', icon: 'construction', status: 'Active' },
	{ id: 4, title: 'Architectural Design', description: 'Design and planning services for new projects.', icon: 'architecture', status: 'Draft' },
	{ id: 5, title: 'Project Management', description: 'Overseeing projects from start to finish.', icon: 'engineering', status: 'Inactive' },
];

export default function ManageServices() {
	const [services, setServices] = useState(initialServices);
	const [deleteTarget, setDeleteTarget] = useState(null);
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [editingService, setEditingService] = useState(null);

	// Delete service
	const handleDelete = (id) => {
		setServices((prev) => prev.filter((s) => s.id !== id));
		setDeleteTarget(null);
	};

	// Add or Edit service
	const handleSaveService = (serviceData) => {
		if (editingService) {
			// Edit existing
			setServices((prev) => prev.map((s) => (s.id === editingService.id ? { ...s, ...serviceData } : s)));
		} else {
			// Add new
			setServices((prev) => [{ id: prev.length ? Math.max(...prev.map((s) => s.id)) + 1 : 1, ...serviceData }, ...prev]);
		}
		setIsModalOpen(false);
		setEditingService(null);
	};

	const openAddModal = () => {
		setEditingService(null);
		setIsModalOpen(true);
	};

	const openEditModal = (service) => {
		setEditingService(service);
		setIsModalOpen(true);
	};

	const modalFields = [
		{ name: 'title', label: 'Service Name', type: 'text', placeholder: 'Enter service name' },
		{ name: 'description', label: 'Description', type: 'textarea', placeholder: 'Enter service description' },
		{ name: 'icon', label: 'Icon', type: 'text', placeholder: 'Enter Material Symbol name' },
		{ name: 'status', label: 'Status', type: 'select', options: ['Active', 'Draft', 'Inactive'] },
	];

	return (
		<div className='flex flex-col gap-6'>
			{/* Header */}
			<div className='flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-0 mb-8'>
				<div className='flex flex-col gap-1'>
					<h1 className='text-3xl font-bold text-gray-800'>Manage Services</h1>
					<p className='text-gray-500'>Create, edit, and manage the services offered by Vinland Vision.</p>
				</div>
				<ReusableButton label='Add Service' onClick={openAddModal} icon={() => <span className='material-symbols-outlined text-[20px]'>add</span>} variant='primary' />
			</div>

			{/* Reusable Table Component */}

			<ReusableTable
				data={services}
				columns={serviceColumns}
				mobileCardFields={mobileCardFields}
				actions={[
					{
						title: 'View / Edit',
						icon: <span className='material-symbols-outlined text-[20px]'>edit</span>,
						onClick: (row) => openEditModal(row),
					},
					{
						title: 'Delete Inquiry',
						icon: <span className='material-symbols-outlined text-[20px]'>delete</span>,
						color: 'text-red-600 hover:text-red-800',
						onClick: (row) => setDeleteTarget(row),
					},
				]}
				keyField='id'
			/>

			{/* Delete Confirm Modal */}
			{deleteTarget && <ConfirmDeleteModal projectTitle={deleteTarget.title} onCancel={() => setDeleteTarget(null)} onConfirm={() => handleDelete(deleteTarget.id)} />}

			{/* Add/Edit Service Modal */}
			{isModalOpen && (
				<AdminModal
					isOpen={isModalOpen}
					title={editingService ? 'Edit Service' : 'Add New Service'}
					onClose={() => setIsModalOpen(false)}
					onSave={handleSaveService}
					initialData={editingService || { title: '', description: '', icon: '', status: 'Active' }}
					fields={modalFields}
				/>
			)}
		</div>
	);
}
