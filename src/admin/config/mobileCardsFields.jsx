export const mobileCardFields = [
	{ label: null, accessor: 'title', render: (row) => row.title },
	{ label: 'Category', accessor: 'category' },
	{
		label: 'Status',
		accessor: 'status',
		render: (row) => (
			<span
				className={`px-2 py-1 mt-2 inline-block text-xs rounded-full ${
					row.status === 'Completed' ? 'bg-green-50 text-green-600' : row.status === 'Ongoing' ? 'bg-yellow-50 text-yellow-700' : 'bg-gray-100 text-gray-700'
				}`}>
				{row.status}
			</span>
		),
	},
];
