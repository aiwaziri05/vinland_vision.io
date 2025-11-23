export default function SearchInput({ value, onChange, placeholder = 'Search...', className = '' }) {
	return (
		<div className={`relative w-full sm:w-64 ${className}`}>
			{/* Search Icon */}
			<span className='material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-[20px]'>search</span>

			{/* Input */}
			<input
				type='text'
				value={value}
				onChange={(e) => onChange(e.target.value)}
				placeholder={placeholder}
				className='w-full border border-gray-300 rounded-lg pl-10 pr-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary'
			/>
		</div>
	);
}
