import React, { useState, useEffect } from 'react';

export default function ProjectModal({ project, onClose, onSave }) {
	const [editedProject, setEditedProject] = useState(null);
	const [isVisible, setIsVisible] = useState(false);

	// Sync modal state
	useEffect(() => {
		if (project) {
			setEditedProject({ ...project });
			setIsVisible(true);
		}
	}, [project]);

	if (!project || !editedProject) return null;

	const handleClose = () => {
		// Animate out before unmounting
		setIsVisible(false);
		setTimeout(onClose, 250);
	};

	return (
		<div className='fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm'>
			<div className={`bg-white w-full max-w-lg rounded-xl shadow-xl p-6 relative transition-all ${isVisible ? 'animate-fadeInScale' : 'animate-fadeOutScale'}`}>
				<h2 className='text-xl font-semibold mb-4 text-gray-800'>Project Details</h2>

				{/* Image */}
				<img src={editedProject.image} alt={editedProject.title} className='w-full h-48 object-cover rounded-lg border mb-4' />

				{/* Editable Fields */}
				<div className='space-y-3'>
					<div>
						<label className='text-sm text-gray-600'>Project Name</label>
						<input
							type='text'
							value={editedProject.title}
							onChange={(e) => setEditedProject({ ...editedProject, title: e.target.value })}
							className='w-full border rounded-lg px-3 py-2 text-sm mt-1 focus:ring-2 focus:ring-primary focus:outline-none'
						/>
					</div>

					<div>
						<label className='text-sm text-gray-600'>Description</label>
						<textarea
							value={editedProject.description}
							onChange={(e) => setEditedProject({ ...editedProject, description: e.target.value })}
							className='w-full border rounded-lg px-3 py-2 text-sm mt-1 focus:ring-2 focus:ring-primary focus:outline-none h-20 resize-none'
						/>
					</div>

					<div>
						<label className='text-sm text-gray-600'>Status</label>
						<select
							value={editedProject.status}
							onChange={(e) => setEditedProject({ ...editedProject, status: e.target.value })}
							className='w-full border rounded-lg px-3 py-2 text-sm mt-1 focus:ring-2 focus:ring-primary focus:outline-none'>
							<option value='Pending'>Pending</option>
							<option value='Ongoing'>In Progress</option>
							<option value='Completed'>Completed</option>
						</select>
					</div>

					{/* Toggle */}
					<div className='flex items-center justify-between mt-4'>
						<span className='text-sm text-gray-600'>Show on Homepage</span>
						<div
							onClick={() => setEditedProject({ ...editedProject, showOnHome: !editedProject.showOnHome })}
							className={`w-12 h-6 flex items-center rounded-full cursor-pointer transition-colors duration-300 ${editedProject.showOnHome ? 'bg-primary' : 'bg-gray-300'}`}>
							<div className={`w-5 h-5 bg-white rounded-full shadow-md transform transition-transform duration-300 ${editedProject.showOnHome ? 'translate-x-6' : 'translate-x-1'}`}></div>
						</div>
					</div>
				</div>

				{/* Buttons */}
				<div className='flex justify-end gap-3 mt-6'>
					<button onClick={handleClose} className='px-4 py-2 text-sm border rounded-lg hover:bg-gray-100 transition-colors'>
						Cancel
					</button>
					<button onClick={() => onSave(editedProject)} className='px-4 py-2 text-sm bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors'>
						Save
					</button>
				</div>
			</div>
		</div>
	);
}
