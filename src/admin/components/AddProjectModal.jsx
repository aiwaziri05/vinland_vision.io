// src/components/AddProjectModal.jsx
import React, { useState, useEffect } from 'react';

export default function AddProjectModal({ isOpen, onClose, onSave }) {
	const [isVisible, setIsVisible] = useState(false);
	const [imagePreview, setImagePreview] = useState(null);

	const [newProject, setNewProject] = useState({
		title: '',
		category: '',
		image: '',
		description: '',
		content: '',
		status: 'Pending',
		showOnHome: false,
		location: {
			address: '',
			lat: '',
			lng: '',
		},
	});

	useEffect(() => {
		if (isOpen) {
			setIsVisible(true);
		}
	}, [isOpen]);

	const handleClose = () => {
		setIsVisible(false);
		setTimeout(onClose, 250);
	};

	const handleChange = (field, value) => {
		setNewProject({ ...newProject, [field]: value });
	};

	const handleLocationChange = (field, value) => {
		setNewProject({
			...newProject,
			location: { ...newProject.location, [field]: value },
		});
	};

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

	const handleSave = () => {
		if (!newProject.title || !newProject.category) return;
		onSave({
			...newProject,
			id: newProject.title.toLowerCase().replace(/\s+/g, '-'),
		});
		handleClose();
	};

	if (!isOpen) return null;

	return (
		<div className='fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm'>
			<div className={`bg-white w-full max-w-lg rounded-xl shadow-xl p-6 relative transition-all ${isVisible ? 'animate-fadeInScale' : 'animate-fadeOutScale'}`}>
				<h2 className='text-xl font-semibold mb-4 text-gray-800'>Add New Project</h2>

				<div className='space-y-3 overflow-y-auto max-h-[70vh] pr-2'>
					{/* Title */}
					<div>
						<label className='text-sm text-gray-600'>Project Title</label>
						<input
							type='text'
							value={newProject.title}
							onChange={(e) => handleChange('title', e.target.value)}
							className='w-full border rounded-lg px-3 py-2 text-sm mt-1 focus:ring-2 focus:ring-primary focus:outline-none'
						/>
					</div>

					{/* Category */}
					<div>
						<label className='text-sm text-gray-600'>Category</label>
						<select
							value={newProject.category}
							onChange={(e) => handleChange('category', e.target.value)}
							className='w-full border rounded-lg px-3 py-2 text-sm mt-1 focus:ring-2 focus:ring-primary focus:outline-none'>
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
						<div className='mt-1 flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-lg p-4 hover:border-primary transition-colors'>
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

					{/* Description */}
					<div>
						<label className='text-sm text-gray-600'>Short Description</label>
						<textarea
							value={newProject.description}
							onChange={(e) => handleChange('description', e.target.value)}
							className='w-full border rounded-lg px-3 py-2 text-sm mt-1 focus:ring-2 focus:ring-primary focus:outline-none h-20 resize-none'
						/>
					</div>

					{/* Content */}
					<div>
						<label className='text-sm text-gray-600'>Detailed Content (HTML)</label>
						<textarea
							value={newProject.content}
							onChange={(e) => handleChange('content', e.target.value)}
							className='w-full border rounded-lg px-3 py-2 text-sm mt-1 focus:ring-2 focus:ring-primary focus:outline-none h-24 resize-none'
						/>
					</div>

					{/* Status */}
					<div>
						<label className='text-sm text-gray-600'>Status</label>
						<select
							value={newProject.status}
							onChange={(e) => handleChange('status', e.target.value)}
							className='w-full border rounded-lg px-3 py-2 text-sm mt-1 focus:ring-2 focus:ring-primary focus:outline-none'>
							<option value='Pending'>Pending</option>
							<option value='Ongoing'>In Progress</option>
							<option value='Completed'>Completed</option>
						</select>
					</div>

					{/* Location Fields */}
					<div className='grid grid-cols-2 gap-2'>
						<div>
							<label className='text-sm text-gray-600'>Latitude</label>
							<input
								type='text'
								value={newProject.location.lat}
								onChange={(e) => handleLocationChange('lat', e.target.value)}
								className='w-full border rounded-lg px-3 py-2 text-sm mt-1 focus:ring-2 focus:ring-primary focus:outline-none'
							/>
						</div>
						<div>
							<label className='text-sm text-gray-600'>Longitude</label>
							<input
								type='text'
								value={newProject.location.lng}
								onChange={(e) => handleLocationChange('lng', e.target.value)}
								className='w-full border rounded-lg px-3 py-2 text-sm mt-1 focus:ring-2 focus:ring-primary focus:outline-none'
							/>
						</div>
					</div>

					<div>
						<label className='text-sm text-gray-600'>Address</label>
						<input
							type='text'
							value={newProject.location.address}
							onChange={(e) => handleLocationChange('address', e.target.value)}
							className='w-full border rounded-lg px-3 py-2 text-sm mt-1 focus:ring-2 focus:ring-primary focus:outline-none'
						/>
					</div>

					{/* Toggle */}
					<div className='flex items-center justify-between mt-4'>
						<span className='text-sm text-gray-600'>Show on Homepage</span>
						<div
							onClick={() => handleChange('showOnHome', !newProject.showOnHome)}
							className={`w-12 h-6 flex items-center rounded-full cursor-pointer transition-colors duration-300 ${newProject.showOnHome ? 'bg-primary' : 'bg-gray-300'}`}>
							<div className={`w-5 h-5 bg-white rounded-full shadow-md transform transition-transform duration-300 ${newProject.showOnHome ? 'translate-x-6' : 'translate-x-1'}`}></div>
						</div>
					</div>
				</div>

				{/* Buttons */}
				<div className='flex justify-end gap-3 mt-6'>
					<button onClick={handleClose} className='px-4 py-2 text-sm border rounded-lg hover:bg-gray-100 transition-colors'>
						Cancel
					</button>
					<button onClick={handleSave} className='px-4 py-2 text-sm bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors'>
						Save
					</button>
				</div>
			</div>
		</div>
	);
}
