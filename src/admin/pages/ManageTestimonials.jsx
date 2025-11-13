// src/pages/admin/ManageTestimonials.jsx
import React, { useState } from 'react';
// import TestimonialModal from '../components/TestimonialModal.jsx';
// import ConfirmDeleteModal from '../components/ConfirmDeleteModal.jsx';
// import AddTestimonialModal from '../components/AddTestimonialModal.jsx';

export default function ManageTestimonials() {
	const initialTestimonials = [
		{
			id: 1,
			name: 'Amelia Chen',
			quote: 'An exceptional experience from start to finish. Their attention to detail is unmatched.',
			active: true,
		},
		{
			id: 2,
			name: 'Benjamin Carter',
			quote: "Vinland Vision transformed our space. We couldn't be happier with the final result.",
			active: true,
		},
		{
			id: 3,
			name: 'Olivia Rodriguez',
			quote: 'Professional, punctual, and highly skilled. A pleasure to work with from concept to completion.',
			active: false,
		},
		{
			id: 4,
			name: 'Liam Goldberg',
			quote: 'Their innovative approach to architecture is truly inspiring. Highly recommend.',
			active: true,
		},
	];

	const [testimonials, setTestimonials] = useState(initialTestimonials);
	const [statusFilter, setStatusFilter] = useState('all');
	// const [selected, setSelected] = useState(null);
	// const [deleteTarget, setDeleteTarget] = useState(null);
	// const [isAddModalOpen, setIsAddModalOpen] = useState(false);

	// const handleSave = (updated) => {
	// 	setTestimonials((prev) => prev.map((t) => (t.id === updated.id ? { ...t, ...updated } : t)));
	// 	setSelected(null);
	// };

	// const handleDelete = (id) => {
	// 	setTestimonials((prev) => prev.filter((t) => t.id !== id));
	// 	setDeleteTarget(null);
	// };

	// const handleAdd = (newTestimonial) => {
	// 	setTestimonials((prev) => [{ id: Date.now(), ...newTestimonial }, ...prev]);
	// };

	// Filtered testimonials based on status
	const filteredTestimonials = testimonials.filter((t) => {
		if (statusFilter === 'all') return true;
		if (statusFilter === 'active') return t.active;
		if (statusFilter === 'inactive') return !t.active;
		return true;
	});

	return (
		<div className='flex flex-col gap-6'>
			{/* Header */}
			<div className='flex flex-col gap-2'>
				<h1 className='text-3xl font-bold text-gray-800'>Manage Testimonials</h1>
				<p className='text-gray-500 text-sm'>View, edit, or remove testimonials submitted by clients.</p>
			</div>

			{/* Controls: Add button + status filter */}
			<div className='flex flex-wrap items-center gap-3'>
				{/* Status Filter */}
				<select
					value={statusFilter}
					onChange={(e) => setStatusFilter(e.target.value)}
					className='w-full sm:w-auto border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary'>
					<option value='all'>All Status</option>
					<option value='active'>Active</option>
					<option value='inactive'>In-Active</option>
				</select>

				{/* Add Testimonial Button */}
				<button
					onClick={() => setIsAddModalOpen(true)}
					className='flex items-center gap-2 h-11 px-5 bg-primary text-white rounded-lg text-sm font-medium shadow-sm hover:bg-primary/90 transition-colors ms-auto'>
					<span className='material-symbols-outlined text-[20px]'>add</span>
					Add Testimonial
				</button>
			</div>

			{/* Table view */}
			<div className='hidden md:block bg-white border border-gray-100 rounded-xl shadow-sm overflow-x-auto'>
				<table className='min-w-full text-sm text-left'>
					<thead className='bg-gray-50 text-gray-600 text-xs uppercase tracking-wider'>
						<tr>
							<th className='px-6 py-3 font-medium'>#</th>
							<th className='px-6 py-3 font-medium'>Client Name</th>
							<th className='px-6 py-3 font-medium w-2/5'>Quote</th>
							<th className='px-6 py-3 font-medium'>Status</th>
							<th className='px-6 py-3 font-medium text-right'>Actions</th>
						</tr>
					</thead>
					<tbody>
						{filteredTestimonials.map((t, idx) => (
							<tr key={t.id} className={`${idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'} hover:bg-gray-100 transition`}>
								<td className='px-6 py-4 text-gray-600'>{idx + 1}</td>
								<td className='px-6 py-4 text-gray-800 font-medium'>{t.name}</td>
								<td className='px-6 py-4 text-gray-700'>{t.quote}</td>
								<td className='px-6 py-4'>
									<span className={`px-2 py-1 rounded-full text-xs font-semibold ${t.active ? 'bg-green-50 text-green-600' : 'bg-gray-100 text-gray-700'}`}>{t.active ? 'Active' : 'In-Active'}</span>
								</td>
								<td className='px-6 py-4 text-right'>
									<div className='flex justify-end gap-3'>
										<button onClick={() => setSelected(t)} className='text-gray-500 hover:text-primary transition relative' title='View / Edit'>
											<span className='material-symbols-outlined text-[20px]'>edit</span>
										</button>
										<button onClick={() => setDeleteTarget(t)} className='text-gray-500 hover:text-red-600 transition relative' title='Delete'>
											<span className='material-symbols-outlined text-[20px]'>delete</span>
										</button>
									</div>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>

			{/* Mobile cards */}
			<div className='md:hidden flex flex-col gap-4'>
				{filteredTestimonials.map((t) => (
					<div key={t.id} className='border border-gray-200 rounded-lg p-4 shadow-sm bg-white'>
						<div className='flex justify-between items-start'>
							<div>
								<p className='font-medium text-gray-800'>{t.name}</p>
								<p className='text-xs text-gray-500 mt-1'>{t.quote}</p>
								<span className={`px-2 py-1 mt-2 inline-block text-xs rounded-full ${t.active ? 'bg-green-50 text-green-600' : 'bg-gray-100 text-gray-700'}`}>{t.active ? 'Active' : 'In-Active'}</span>
							</div>
							<div className='flex flex-col gap-2'>
								<button onClick={() => setSelected(t)} className='text-gray-500 hover:text-primary transition' title='View / Edit'>
									<span className='material-symbols-outlined text-[20px]'>edit</span>
								</button>
								<button onClick={() => setDeleteTarget(t)} className='text-gray-500 hover:text-red-600 transition' title='Delete'>
									<span className='material-symbols-outlined text-[20px]'>delete</span>
								</button>
							</div>
						</div>
					</div>
				))}
			</div>

			{/* Modals */}
			{/* {selected && <TestimonialModal testimonial={selected} onClose={() => setSelected(null)} onSave={handleSave} />}
			{deleteTarget && <ConfirmDeleteModal title={deleteTarget.name} onCancel={() => setDeleteTarget(null)} onConfirm={() => handleDelete(deleteTarget.id)} />}
			{isAddModalOpen && <AddTestimonialModal onClose={() => setIsAddModalOpen(false)} onSave={handleAdd} />} */}
		</div>
	);
}
