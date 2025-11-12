import { useState } from 'react';

export default function CategoryFilter({ onFilterChange }) {
	const [activeCategory, setActiveCategory] = useState('All');

	const categories = ['All', 'Commercial', 'Residential', 'Renovations'];

	const handleCategoryClick = (category) => {
		setActiveCategory(category);
		onFilterChange?.(category); // optional callback for parent component
	};

	return (
		<div className='flex gap-3 flex-wrap justify-start mb-12'>
			{categories.map((category) => (
				<button
					key={category}
					onClick={() => handleCategoryClick(category)}
					className={`flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-lg px-6 text-sm font-semibold leading-normal shadow-md transition-all duration-200 hover:scale-105 ${
						activeCategory === category
							? 'bg-text-primary text-white shadow-lg'
							: 'bg-white dark:bg-background-dark text-text-base border border-gray-200 hover:bg-text-primary hover:text-white hover:shadow-md cursor-pointer'
					}`}>
					{category}
				</button>
			))}
		</div>
	);
}
