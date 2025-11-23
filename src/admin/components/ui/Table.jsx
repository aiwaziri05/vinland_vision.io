export default function ReusableTable({ data = [], columns = [], actions = [], mobileCardFields = [], keyField = 'id' }) {
	return (
		<>
			{/* Desktop table */}
			<div className='hidden md:block bg-white border border-gray-100 rounded-xl shadow-sm overflow-x-auto'>
				<table className='min-w-full text-sm text-left'>
					<thead className='bg-gray-50 text-gray-600 text-xs uppercase tracking-wider'>
						<tr>
							{columns.map((col) => (
								<th key={col.accessor} className={`px-6 py-3 font-medium ${col.align === 'right' ? 'text-right' : ''}`}>
									{col.header}
								</th>
							))}
							{actions.length > 0 && <th className='px-6 py-3 font-medium text-right'>Actions</th>}
						</tr>
					</thead>

					<tbody>
						{data.map((row, index) => (
							<tr key={row[keyField]} className={`${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'} hover:bg-gray-100 transition`}>
								{columns.map((col) => (
									<td key={col.accessor} className={`px-6 py-4 ${col.align === 'right' ? 'text-right' : ''}`}>
										{/* Pass row and row index to render function */}
										{col.render ? col.render(row, index) : row[col.accessor]}
									</td>
								))}

								{actions.length > 0 && (
									<td className='px-6 py-4 text-right'>
										<div className='flex justify-end gap-3'>
											{actions.map((action, idx) => (
												<button key={idx} onClick={() => action.onClick(row)} title={action.title} className={`text-gray-500 hover:${action.color || 'text-primary'}`}>
													{action.icon}
												</button>
											))}
										</div>
									</td>
								)}
							</tr>
						))}
					</tbody>
				</table>
			</div>

			{/* Mobile cards */}
			<div className='md:hidden flex flex-col gap-4'>
				{data.map((row, index) => (
					<div key={row[keyField]} className='border border-gray-200 rounded-lg p-4 shadow-sm bg-white'>
						<div className='flex justify-between'>
							<div className='flex flex-col gap-1'>
								{mobileCardFields.map((field, idx) => (
									<div key={idx}>
										{field.label && <p className='text-xs text-gray-500'>{field.label}</p>}
										<p className='font-medium text-gray-800'>{field.render ? field.render(row, index) : row[field.accessor]}</p>
									</div>
								))}
							</div>

							{actions.length > 0 && (
								<div className='flex flex-col gap-2'>
									{actions.map((action, idx) => (
										<button key={idx} onClick={() => action.onClick(row)} title={action.title} className={`text-gray-500 hover:${action.color || 'text-primary'}`}>
											{action.icon}
										</button>
									))}
								</div>
							)}
						</div>
					</div>
				))}
			</div>
		</>
	);
}
