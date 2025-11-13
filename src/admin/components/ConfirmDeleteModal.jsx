import React from 'react';

export default function ConfirmDeleteModal({ projectTitle, onConfirm, onCancel }) {
	return (
		<div className='fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm transition-all'>
			<div className='bg-white w-full max-w-sm rounded-xl shadow-xl p-6 animate-fadeIn'>
				<h2 className='text-lg font-semibold text-gray-800 mb-3'>Confirm Deletion</h2>
				<p className='text-gray-600 text-sm mb-6'>
					Are you sure you want to delete <strong>{projectTitle}</strong>? This action cannot be undone.
				</p>

				<div className='flex justify-end gap-3'>
					<button onClick={onCancel} className='px-4 py-2 text-sm border rounded-lg hover:bg-gray-100'>
						No
					</button>
					<button onClick={onConfirm} className='px-4 py-2 text-sm bg-red-600 text-white rounded-lg hover:bg-red-700'>
						Yes, Delete
					</button>
				</div>
			</div>
		</div>
	);
}
