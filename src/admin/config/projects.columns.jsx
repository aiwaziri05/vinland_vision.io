export const projectColumns = [
	{
		header: '#',
		accessor: 'index',
		render: (row, rowIndex) => rowIndex + 1, // automatically numbers rows
	},
	{
		header: 'Project',
		accessor: 'title',
		render: (row) => (
			<div className='flex items-center gap-3'>
				<img src={row.image} alt={row.title} className='w-12 h-12 rounded-md object-cover' />
				<div>
					<p className='font-medium text-gray-800'>{row.title}</p>
					<p className='text-xs text-gray-500'>{row.description.slice(0, 50)}...</p>
				</div>
			</div>
		),
	},
	{ header: 'Category', accessor: 'category' },
	{
		header: 'Status',
		accessor: 'status',
		render: (row) => (
			<span
				className={`px-2 py-1 rounded-full text-xs font-semibold ${
					row.status === 'Completed' ? 'bg-green-50 text-green-600' : row.status === 'Ongoing' ? 'bg-yellow-50 text-yellow-700' : 'bg-gray-100 text-gray-700'
				}`}>
				{row.status}
			</span>
		),
	},
];
