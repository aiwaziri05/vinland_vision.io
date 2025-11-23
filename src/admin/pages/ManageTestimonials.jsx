// src/pages/admin/ManageTestimonials.jsx
import React, { useState } from 'react';
import { testimonialColumns } from '../config/testimonial.columns.jsx';

import AdminModal from '../components/AdminModal.jsx';
import ConfirmDeleteModal from '../components/ConfirmDeleteModal.jsx';
import ReusableButton from '../components/ui/Button.jsx';
import ReusableTable from '../components/ui/Table.jsx';
import { mobileCardFields } from '../config/mobileCardsFields.jsx';

export default function ManageTestimonials() {
	const initialTestimonials = [
		{ id: 1, name: 'Amelia Chen', quote: 'An exceptional experience from start to finish. Their attention to detail is unmatched.', active: true },
		{ id: 2, name: 'Benjamin Carter', quote: "Vinland Vision transformed our space. We couldn't be happier with the final result.", active: true },
		{ id: 3, name: 'Olivia Rodriguez', quote: 'Professional, punctual, and highly skilled. A pleasure to work with from concept to completion.', active: false },
		{ id: 4, name: 'Liam Goldberg', quote: 'Their innovative approach to architecture is truly inspiring. Highly recommend.', active: true },
	];

	const [testimonials, setTestimonials] = useState(initialTestimonials);
	const [statusFilter, setStatusFilter] = useState('all');
	// const [selected, setSelected] = useState(null);
	const [deleteTarget, setDeleteTarget] = useState(null);
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [editingTestimonial, setEditingTestimonial] = useState(null);

	// Filtered testimonials
	const filteredTestimonials = testimonials.filter((t) => {
		if (statusFilter === 'all') return true;
		if (statusFilter === 'active') return t.active;
		if (statusFilter === 'inactive') return !t.active;
		return true;
	});

	// Save (Add/Edit)
	const handleSaveTestimonial = (data) => {
		if (editingTestimonial) {
			setTestimonials((prev) => prev.map((t) => (t.id === editingTestimonial.id ? { ...t, ...data } : t)));
		} else {
			setTestimonials((prev) => [{ id: Date.now(), ...data }, ...prev]);
		}
		setIsModalOpen(false);
		setEditingTestimonial(null);
	};

	// Delete
	const handleDelete = (id) => {
		setTestimonials((prev) => prev.filter((t) => t.id !== id));
		setDeleteTarget(null);
	};

	// Open Add/Edit Modal
	const openAddModal = () => {
		setEditingTestimonial(null);
		setIsModalOpen(true);
	};
	const openEditModal = (testimonial) => {
		setEditingTestimonial(testimonial);
		setIsModalOpen(true);
	};

	// const modalFields = [
	// 	{ name: 'name', label: 'Client Name', type: 'text', placeholder: 'Enter client name' },
	// 	{ name: 'quote', label: 'Quote', type: 'textarea', placeholder: 'Enter testimonial quote' },
	// 	{ name: 'active', label: 'Status', type: 'select', options: ['Active', 'Inactive'] },
	// ];

	return (
		<div className='flex flex-col gap-6'>
			{/* Header */}
			<div className='flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-8'>
				<div>
					<h1 className='text-3xl font-bold text-gray-800'>Manage Testimonials</h1>
					<p className='text-gray-500 text-sm'>View, edit, or remove testimonials submitted by clients.</p>
				</div>

				<div className='mt-2 md:mt-0'>
					<ReusableButton label='Add Testimonial' onClick={openAddModal} icon={() => <span className='material-symbols-outlined text-[20px]'>add</span>} variant='primary' />
				</div>
			</div>

			{/* Reusable Table Component */}

			<ReusableTable
				data={filteredTestimonials}
				columns={testimonialColumns}
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
				mobileCardFields={mobileCardFields}
				keyField='id'
			/>

			{/* Delete Confirm Modal */}
			{deleteTarget && <ConfirmDeleteModal projectTitle={deleteTarget.name} onCancel={() => setDeleteTarget(null)} onConfirm={() => handleDelete(deleteTarget.id)} />}

			{/* Add/Edit Testimonial Modal */}

			{isModalOpen && (
				<AdminModal
					isOpen={isModalOpen}
					title={editingTestimonial ? 'Edit Testimonial' : 'Add New Testimonial'}
					onClose={() => setIsModalOpen(false)}
					onSave={handleSaveTestimonial}
					initialData={editingTestimonial || { name: '', quote: '', active: true }}
					fields={[
						{ name: 'name', label: 'Client Name', type: 'text', placeholder: 'Enter client name' },
						{ name: 'quote', label: 'Quote', type: 'textarea', placeholder: 'Enter testimonial quote' },
						{ name: 'active', label: 'Status', type: 'select', options: ['Active', 'Inactive'] },
					]}
				/>
			)}
		</div>
	);
}
