import { Link } from 'react-router-dom';

export default function ReusableButton({ label, to, onClick, icon: Icon, className = null, variant = 'primary', type = 'button' }) {
	const baseClasses = 'px-4 py-2 rounded-lg text-md font-medium flex items-center gap-2 transition';

	const variants = {
		primary: ' bg-primary text-white hover:bg-primary/90',
		secondary: 'bg-gray-100 text-gray-800 hover:bg-gray-200',
		danger: 'bg-red-600 text-white hover:bg-red-700',
		green: 'bg-green-50 text-green-700 border border-green-200 hover:bg-green-100',
	};

	const classes = `${baseClasses} ${variants[variant]} ${className || ''}`;

	// If "to" exists → act as a Link button
	if (to) {
		return (
			<Link to={to} className={classes}>
				{Icon && <Icon size={18} />}
				{label}
			</Link>
		);
	}

	// Otherwise act as a normal button
	return (
		<button type={type} onClick={onClick} className={classes}>
			{Icon && <Icon size={18} />}
			{label}
		</button>
	);
}
