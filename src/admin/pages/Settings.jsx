// src/pages/admin/Settings.jsx
import React, { useState } from 'react';

export default function Settings() {
	const [companyInfo, setCompanyInfo] = useState({
		address: '123 Visionary Ave, Archburg, VA 22030',
		phone: '(555) 123-4567',
		email: 'contact@thevinlandvision.com',
		mapEmbed: `<iframe allowfullscreen="" height="450" loading="lazy" src="https://www.google.com/maps/embed?..." style="border:0;" width="600"></iframe>`,
	});

	const [socialMedia, setSocialMedia] = useState({
		linkedin: 'https://linkedin.com/company/thevinlandvision',
		facebook: 'https://facebook.com/thevinlandvision',
		instagram: 'https://instagram.com/thevinlandvision',
	});

	const handleCompanyChange = (field, value) => {
		setCompanyInfo((prev) => ({ ...prev, [field]: value }));
	};

	const handleSocialChange = (field, value) => {
		setSocialMedia((prev) => ({ ...prev, [field]: value }));
	};

	return (
		<div className='flex flex-col gap-6'>
			{/* Header */}
			<div className='flex flex-col gap-2'>
				<h1 className='text-3xl font-bold text-gray-800'>Settings</h1>
				<p className='text-gray-500 text-sm'>Update company and social media information.</p>
			</div>

			{/* Company Info */}
			<Section title='Company Info'>
				<div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
					<InputField label='Address' value={companyInfo.address} onChange={(val) => handleCompanyChange('address', val)} />
					<InputField label='Phone' value={companyInfo.phone} onChange={(val) => handleCompanyChange('phone', val)} />
					<InputField label='Email' value={companyInfo.email} onChange={(val) => handleCompanyChange('email', val)} />
					<TextareaField label='Google Maps Embed Code' value={companyInfo.mapEmbed} onChange={(val) => handleCompanyChange('mapEmbed', val)} />
				</div>
			</Section>

			{/* Social Media */}
			<Section title='Social Media'>
				<div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
					<InputField label='LinkedIn URL' value={socialMedia.linkedin} onChange={(val) => handleSocialChange('linkedin', val)} />
					<InputField label='Facebook URL' value={socialMedia.facebook} onChange={(val) => handleSocialChange('facebook', val)} />
					<InputField label='Instagram URL' value={socialMedia.instagram} onChange={(val) => handleSocialChange('instagram', val)} />
				</div>
			</Section>

			{/* Action buttons */}
			<div className='flex flex-wrap justify-end gap-3 mt-8'>
				<button className='px-4 py-2 rounded-lg text-sm font-semibold text-gray-600 bg-white border border-gray-200 hover:bg-gray-50 transition-colors'>Cancel</button>
				<button className='px-4 py-2 rounded-lg text-sm font-semibold text-white bg-primary hover:bg-primary/90 transition-colors'>Save Changes</button>
			</div>
		</div>
	);
}

// Section container
const Section = ({ title, children }) => (
	<div className='bg-white p-4 md:p-6 rounded-xl shadow-sm border border-gray-200 overflow-hidden'>
		<h3 className='text-gray-900 text-lg font-bold pb-3 md:pb-4 border-b border-gray-200 mb-4 md:mb-6'>{title}</h3>
		{children}
	</div>
);

// Input field
const InputField = ({ label, value, onChange }) => (
	<label className='flex flex-col'>
		<p className='text-gray-600 text-sm font-medium pb-1'>{label}</p>
		<input
			type='text'
			className='form-input w-full text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary border border-gray-200 bg-white rounded-lg px-3 py-2 text-sm'
			value={value}
			onChange={(e) => onChange(e.target.value)}
		/>
	</label>
);

// Textarea field
const TextareaField = ({ label, value, onChange }) => (
	<label className='flex flex-col'>
		<p className='text-gray-600 text-sm font-medium pb-1'>{label}</p>
		<textarea
			className='form-textarea w-full resize-y rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary border border-gray-200 bg-white px-3 py-2 text-sm'
			rows={4}
			value={value}
			onChange={(e) => onChange(e.target.value)}
		/>
	</label>
);
