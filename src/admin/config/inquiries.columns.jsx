export const inquiriesColumns = [
	{
		header: 'ID',
		accessor: 'id',
		render: (row) => <p className='text-gray-600'>{row.id}</p>,
	},
	{
		header: 'Sender',
		accessor: 'sender',
		render: (row) => (
			<div className='text-gray-800 font-medium'>
				<p>{row.sender}</p>
				{row.email && <p className='text-gray-500 text-xs'>{row.email}</p>}
			</div>
		),
	},
	{
		header: 'Subject',
		accessor: 'subject',
		render: (row) => <p className='text-gray-700'>{row.subject}</p>,
	},
	{
		header: 'Date Received',
		accessor: 'date',
		render: (row) => <p className='text-gray-700'>{row.date}</p>,
	},
];
