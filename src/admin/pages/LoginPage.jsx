export default function LoginPage() {
	return (
		<div className='relative flex h-screen w-full flex-col overflow-hidden bg-gray-50 font-sans'>
			<main className='flex justify-center items-center w-full px-4 sm:px-6 md:px-8 h-full'>
				<div className='flex flex-col w-full items-center'>
					{/* Card container with responsive max-width */}
					<div className='flex flex-col w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-md'>
						<div className='flex flex-col items-center justify-center bg-white shadow-lg rounded-xl p-6 sm:p-8 md:p-10 w-full'>
							{/* Logo */}
							<div className='w-full flex justify-center mb-4'>
								<div
									className='w-16 h-16 bg-center bg-no-repeat bg-cover rounded-lg'
									style={{
										backgroundImage:
											"url('https://lh3.googleusercontent.com/aida-public/AB6AXuBnkesdxoubFa3W42MnOyVYG_hymAz0aRbkpJwhvcSWkUoIUitX0R80A16wukDaJOUJiDO7X8DBo-Y3CBJ-SpiDlhXFsHjaVBsgPbWt4HLAYUvY1QEyi1IfXh3TOEbND5lzv9bivTatFEidokfm_KBTkZXjP4BtBKR34JYEigp2-a0Hhl1eiJJwMZp_Nk6XwE-1LXK293FVcHH1kMN8AJGc8we67VmO5IgXpSvXH7ftvcZsFO8yBJBAWfbPAdgf1yPIm74oKA8mAZw')",
									}}
								/>
							</div>

							{/* Title */}
							<h1 className='text-gray-900 tracking-tight text-xl sm:text-2xl font-bold leading-tight text-center pb-2'>The Vinland Vision Admin Portal</h1>

							{/* Form */}
							<form className='w-full mt-6 space-y-4 sm:space-y-5'>
								{/* Email */}
								<div className='flex w-full flex-col'>
									<label className='flex flex-col w-full'>
										<p className='text-gray-600 text-sm font-medium pb-2'>Email</p>
										<div className='relative flex w-full items-stretch'>
											<div className='text-gray-400 pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 sm:pl-4'>
												<span className='material-symbols-outlined text-xl'>mail</span>
											</div>
											<input
												className='form-input flex w-full rounded-lg border border-gray-200 bg-gray-50 h-10 sm:h-12 placeholder:text-gray-400 pl-10 sm:pl-12 pr-3 sm:pr-4 text-base focus:outline-none focus:ring-2 focus:ring-yellow-400'
												placeholder='Enter your email'
												type='email'
											/>
										</div>
									</label>
								</div>

								{/* Password */}
								<div className='flex w-full flex-col'>
									<label className='flex flex-col w-full'>
										<p className='text-gray-600 text-sm font-medium pb-2'>Password</p>
										<div className='relative flex w-full items-stretch'>
											<div className='text-gray-400 pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 sm:pl-4'>
												<span className='material-symbols-outlined text-xl'>lock</span>
											</div>
											<input
												className='form-input flex w-full rounded-lg border border-gray-200 bg-gray-50 h-10 sm:h-12 placeholder:text-gray-400 pl-10 sm:pl-12 pr-10 sm:pr-12 text-base focus:outline-none focus:ring-2 focus:ring-yellow-400'
												placeholder='Enter your password'
												type='password'
											/>
											<button type='button' className='text-gray-400 absolute inset-y-0 right-0 flex items-center pr-3 sm:pr-4' aria-label='Toggle password visibility'>
												<span className='material-symbols-outlined text-xl'>visibility</span>
											</button>
										</div>
									</label>
								</div>

								{/* Sign In Button */}
								<div className='flex pt-3 justify-center'>
									<button
										type='submit'
										className='flex w-full items-center justify-center rounded-lg h-10 sm:h-12 px-4 sm:px-5 bg-yellow-400 text-gray-900 font-bold hover:bg-yellow-300 transition-colors'>
										Sign In
									</button>
								</div>

								{/* Forgot Password */}
								<div className='flex justify-center pt-2'>
									<a className='text-sm text-gray-500 hover:text-yellow-500 transition-colors' href='#'>
										Forgot Password?
									</a>
								</div>
							</form>
						</div>
					</div>
				</div>
			</main>
		</div>
	);
}
