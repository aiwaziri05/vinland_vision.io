import { Link } from 'react-router-dom';

export default function NotFound() {
	return (
		<div className='min-h-screen flex flex-col items-center justify-center bg-gray-50 px-6 text-center'>
			<div className='mb-6'>
				<span className='material-symbols-outlined text-gray-400 text-[120px]'>search_off</span>
			</div>

			<h1 className='text-6xl font-bold text-gray-800 mb-2'>404</h1>
			<p className='text-lg text-gray-500 mb-6'>Sorry, the page you’re looking for doesn’t exist.</p>

			<div className='flex flex-col sm:flex-row gap-3'>
				<Link to='/admin/login' className='h-11 px-5 inline-flex items-center justify-center gap-2 bg-primary text-white rounded-lg font-medium shadow-sm hover:bg-primary/90 transition-colors'>
					<span className='material-symbols-outlined text-[20px]'>dashboard</span>
					Go to Dashboard
				</Link>

				<Link to='/' className='h-11 px-5 inline-flex items-center justify-center gap-2 bg-gray-100 text-gray-800 rounded-lg font-medium shadow-sm hover:bg-gray-200 transition-colors'>
					<span className='material-symbols-outlined text-[20px]'>arrow_back</span>
					Back to Home
				</Link>
			</div>
		</div>
	);
}
