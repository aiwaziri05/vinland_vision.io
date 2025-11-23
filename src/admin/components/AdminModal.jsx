import React, { useState, useEffect } from 'react';

export default function AdminModal({ isOpen, onClose, title, onSave, fields = [], initialData = {} }) {
	const [isVisible, setIsVisible] = useState(false);
	const [formData, setFormData] = useState(initialData);

	useEffect(() => {
		if (isOpen) {
			setIsVisible(true);
			setFormData(initialData); // reset form when modal opens
		}
	}, [isOpen, initialData]);

	const handleClose = () => {
		setIsVisible(false);
		setTimeout(onClose, 250);
	};

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prev) => ({ ...prev, [name]: value }));
	};

	const handleSave = () => {
		onSave(formData);
	};

	if (!isOpen) return null;

	return (
		<div className='fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm'>
			<div
				className={`bg-white w-full max-w-lg rounded-xl shadow-xl p-6 
            transition-all ${isVisible ? 'animate-fadeInScale' : 'animate-fadeOutScale'}`}>
				{/* Title */}
				<h2 className='text-xl font-semibold mb-4 text-gray-800'>{title}</h2>

				{/* Dynamic Form */}
				<div className='space-y-4 max-h-[70vh] overflow-y-auto pr-2'>
					{fields.map((field) => {
						if (field.type === 'textarea') {
							return (
								<div key={field.name} className='flex flex-col'>
									<label className='text-sm font-medium mb-1'>{field.label}</label>
									<textarea name={field.name} value={formData[field.name] || ''} onChange={handleChange} placeholder={field.placeholder} className='border border-gray-300 rounded-lg p-2 text-sm' />
								</div>
							);
						}
						if (field.type === 'select') {
							return (
								<div key={field.name} className='flex flex-col'>
									<label className='text-sm font-medium mb-1'>{field.label}</label>
									<select name={field.name} value={formData[field.name] || ''} onChange={handleChange} className='border border-gray-300 rounded-lg p-2 text-sm'>
										{field.options.map((opt) => (
											<option key={opt} value={opt}>
												{opt}
											</option>
										))}
									</select>
								</div>
							);
						}
						// default input type=text
						return (
							<div key={field.name} className='flex flex-col'>
								<label className='text-sm font-medium mb-1'>{field.label}</label>
								<input
									name={field.name}
									type={field.type || 'text'}
									value={formData[field.name] || ''}
									onChange={handleChange}
									placeholder={field.placeholder}
									className='border border-gray-300 rounded-lg p-2 text-sm'
								/>
							</div>
						);
					})}
				</div>

				{/* Buttons */}
				<div className='flex justify-end gap-3 mt-6'>
					<button onClick={handleClose} className='px-4 py-2 text-sm border rounded-lg hover:bg-gray-100'>
						Cancel
					</button>
					<button onClick={handleSave} className='px-4 py-2 text-sm bg-primary text-white rounded-lg hover:bg-primary/90'>
						Save
					</button>
				</div>
			</div>
		</div>
	);
}
