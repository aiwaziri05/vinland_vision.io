export default function SelectInput({ value, onChange, options = [], placeholder = 'Select...', className = '' }) {
	return (
		<select
			value={value}
			onChange={(e) => onChange(e.target.value)}
			className={`w-full sm:w-auto border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary ${className}`}>
			{/* Placeholder option */}
			{placeholder && (
				<option value='' disabled hidden>
					{placeholder}
				</option>
			)}

			{/* Dynamic options */}
			{options.map((option) => (
				<option key={option.value} value={option.value}>
					{option.label}
				</option>
			))}
		</select>
	);
}
