// Example columns for services page
export const serviceColumns = [
	{
		header: '#',
		accessor: 'index',
		render: (row, rowIndex) => rowIndex + 1, // automatically numbers rows
	},
	{
		header: 'Service',
		accessor: 'title',
		render: (row) => (
			<div className='flex items-center gap-3'>
				{row.icon && (
					<div className='flex items-center justify-center rounded-md w-12 h-12 bg-primary/10'>
						<span className='material-symbols-outlined text-primary text-2xl'>{row.icon}</span>
					</div>
				)}
				<p className='font-medium text-gray-800'>{row.title}</p>
			</div>
		),
	},
	{ header: 'Description', accessor: 'description' },
	{
		header: 'Status',
		accessor: 'status',
		render: (row) => <span className={`px-2 py-1 rounded-full text-xs font-semibold ${row.status === 'Active' ? 'bg-green-100 text-green-600' : 'bg-gray-200 text-gray-700'}`}>{row.status}</span>,
	},
];
