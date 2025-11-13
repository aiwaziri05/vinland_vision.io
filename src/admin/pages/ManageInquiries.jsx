// src/pages/admin/ManageInquiries.jsx
import React, { useState } from 'react';

export default function ManageInquiries() {
	const initialInquiries = [
		{
			id: 1,
			sender: 'Elena Petrov',
			email: 'elena.p@email.com',
			subject: 'Inquiry about commercial build-out',
			date: 'Oct 26, 2023',
			active: true,
		},
		{
			id: 2,
			sender: 'Marcus Thorne',
			email: 'm.thorne@corp.net',
			subject: 'Request for quote - residential remodel',
			date: 'Oct 25, 2023',
			active: true,
		},
		{
			id: 3,
			sender: 'Anya Sharma',
			email: 'anya.s@webmail.com',
			subject: 'Follow-up on project proposal #1124',
			date: 'Oct 24, 2023',
			active: false,
		},
		{
			id: 4,
			sender: 'Chen Wei',
			email: 'chen.wei@techsolutions.io',
			subject: 'Architectural consultation services',
			date: 'Oct 23, 2023',
			active: false,
		},
		{
			id: 5,
			sender: 'Sofia Rossi',
			email: 'sofia.rossi@designs.it',
			subject: 'Partnership opportunities',
			date: 'Oct 22, 2023',
			active: true,
		},
	];

	const [inquiries, setInquiries] = useState(initialInquiries);
	const [statusFilter, setStatusFilter] = useState('all');
	const [searchQuery, setSearchQuery] = useState('');

	const filteredInquiries = inquiries
		.filter((i) => {
			if (statusFilter === 'active') return i.active;
			if (statusFilter === 'inactive') return !i.active;
			return true;
		})
		.filter(
			(i) => i.sender.toLowerCase().includes(searchQuery.toLowerCase()) || i.email.toLowerCase().includes(searchQuery.toLowerCase()) || i.subject.toLowerCase().includes(searchQuery.toLowerCase())
		);

	return (
		<div className='ps-1 flex flex-col gap-6 w-full overflow-x-hidden'>
			{/* Header */}
			<div className='flex flex-col gap-2'>
				<h1 className='text-3xl font-bold text-gray-800'>Manage Inquiries</h1>
				<p className='text-gray-500 text-sm'>View, filter, or remove inquiries submitted by clients.</p>
			</div>

			{/* Controls: Search + Status Filter */}
			<div className='flex flex-wrap items-center gap-3 mb-4'>
				<input
					type='text'
					placeholder='Search inquiries...'
					value={searchQuery}
					onChange={(e) => setSearchQuery(e.target.value)}
					className='min-w-[250px] sm:min-w-[400px] px-3 py-2 border border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary'
				/>

				<select
					value={statusFilter}
					onChange={(e) => setStatusFilter(e.target.value)}
					className='flex-none px-3 py-2 border border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary'>
					<option value='all'>All Status</option>
					<option value='active'>Active</option>
					<option value='inactive'>In-Active</option>
				</select>
			</div>

			{/* Table view (desktop) */}
			<div className='hidden md:block bg-white border border-gray-100 rounded-xl shadow-sm overflow-x-auto'>
				<table className='min-w-full text-sm text-left'>
					<thead className='bg-gray-50 text-gray-600 text-xs uppercase tracking-wider'>
						<tr>
							<th className='px-6 py-3 font-medium'>ID</th>
							<th className='px-6 py-3 font-medium'>Sender</th>
							<th className='px-6 py-3 font-medium w-2/5'>Subject</th>
							<th className='px-6 py-3 font-medium'>Date Received</th>
							<th className='px-6 py-3 font-medium text-right'>Actions</th>
						</tr>
					</thead>
					<tbody>
						{filteredInquiries.map((i, idx) => (
							<tr key={i.id} className={`${idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'} hover:bg-gray-100 transition`}>
								<td className='px-6 py-4 text-gray-600'>{i.id}</td>
								<td className='px-6 py-4 text-gray-800 font-medium'>
									{i.sender}
									<p className='text-gray-500 text-xs'>{i.email}</p>
								</td>
								<td className='px-6 py-4 text-gray-700'>{i.subject}</td>
								<td className='px-6 py-4 text-gray-700'>{i.date}</td>
								<td className='px-6 py-4 text-right'>
									<div className='flex justify-end gap-3'>
										<button className='text-gray-500 hover:text-primary transition relative' title='View Details'>
											<span className='material-symbols-outlined text-[20px]'>visibility</span>
										</button>
										<button className='text-gray-500 hover:text-red-600 transition relative' title='Delete'>
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
			<div className='md:hidden flex flex-col gap-4 w-full overflow-x-hidden'>
				{filteredInquiries.map((i) => (
					<div key={i.id} className='border border-gray-200 rounded-lg p-4 shadow-sm bg-white w-full'>
						<div className='flex justify-between items-start'>
							<div>
								<p className='font-medium text-gray-800'>{i.sender}</p>
								<p className='text-xs text-gray-500 mt-1'>{i.email}</p>
								<p className='text-sm text-gray-700 mt-2'>{i.subject}</p>
								<p className='text-xs text-gray-500 mt-1'>{i.date}</p>
							</div>
							<div className='flex flex-col gap-2'>
								<button className='text-gray-500 hover:text-primary transition' title='View Details'>
									<span className='material-symbols-outlined text-[20px]'>visibility</span>
								</button>
								<button className='text-gray-500 hover:text-red-600 transition' title='Delete'>
									<span className='material-symbols-outlined text-[20px]'>delete</span>
								</button>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
