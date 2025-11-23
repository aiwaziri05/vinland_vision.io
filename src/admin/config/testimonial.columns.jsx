// table-config/testimonials.columns.js
export const testimonialColumns = [
	{
		header: '#',
		accessor: 'index',
		render: (row, rowIndex) => rowIndex + 1, // automatically numbers rows
	},
	{
		header: 'Client Name',
		accessor: 'name',
		render: (row) => <p className='font-medium text-gray-800'>{row.name}</p>,
	},
	{
		header: 'Quote',
		accessor: 'quote',
		render: (row) => <p className='text-gray-700'>{row.quote}</p>,
	},
	{
		header: 'Status',
		accessor: 'active',
		render: (row) => (
			<span className={`px-2 py-1 rounded-full text-xs font-semibold ${row.active ? 'bg-green-50 text-green-600' : 'bg-gray-100 text-gray-700'}`}>{row.active ? 'Active' : 'In-Active'}</span>
		),
	},
];
