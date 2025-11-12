/* eslint no-unused-vars: "off" */
import { motion } from 'framer-motion';

import GeoLocation from '../components/GeoLocation.jsx';

export default function ContactPage() {
	const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } } };
	const staggerContainer = { hidden: {}, visible: { transition: { staggerChildren: 0.15 } } };

	return (
		<motion.main initial='hidden' whileInView='visible' viewport={{ once: true }} className='flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20'>
			{/* Page Heading */}
			<motion.div variants={fadeUp} className='flex flex-col gap-3 text-center mb-16'>
				<h1 className='text-text-primary text-4xl lg:text-5xl font-black leading-tight tracking-[-0.033em]'>Contact The Vinland Vision</h1>
				<p className='text-gray-600 lg:text-lg font-normal leading-normal max-w-3xl mx-auto'>We're here to answer your questions. Reach out for inquiries, project discussions, or quotes.</p>
			</motion.div>

			<motion.div variants={staggerContainer} initial='hidden' whileInView='visible' className='grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start'>
				{/* Left Column: Form */}
				<motion.div variants={fadeUp} className='bg-white p-8 rounded-xl shadow-md w-full'>
					<h2 className='text-primary dark:text-white text-2xl font-bold leading-tight tracking-[-0.015em] text-left pb-6'>Send Us an Inquiry</h2>
					<form className='space-y-6' noValidate>
						{/* Name Grid */}
						<div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
							<div className='flex flex-col'>
								<label className='text-gray-800 text-base font-medium leading-normal pb-2' htmlFor='firstName'>
									First Name <span className='text-primary'>*</span>
								</label>
								<input
									id='firstName'
									name='firstName'
									type='text'
									placeholder='Jane'
									required
									autoComplete='given-name'
									className='form-input w-full rounded-lg h-12 px-4 text-gray-900 placeholder:text-gray-500 border border-gray-300 bg-white outline-0 focus:border-primary focus:ring-2 focus:ring-primary/40 transition-shadow'
								/>
							</div>
							<div className='flex flex-col'>
								<label className='text-gray-800 text-base font-medium leading-normal pb-2' htmlFor='lastName'>
									Last Name <span className='text-primary'>*</span>
								</label>
								<input
									id='lastName'
									name='lastName'
									type='text'
									placeholder='Doe'
									required
									autoComplete='family-name'
									className='form-input w-full rounded-lg h-12 px-4 text-gray-900 placeholder:text-gray-500 border border-gray-300 bg-white outline-0 focus:border-primary focus:ring-2 focus:ring-primary/40 transition-shadow'
								/>
							</div>
						</div>

						{/* Contact Grid */}
						<div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
							<div className='flex flex-col'>
								<label className='text-gray-800 text-base font-medium leading-normal pb-2' htmlFor='emailAddress'>
									Email Address <span className='text-primary'>*</span>
								</label>
								<input
									id='emailAddress'
									name='email'
									type='email'
									placeholder='you@example.com'
									required
									autoComplete='email'
									className='form-input w-full rounded-lg h-12 px-4 text-gray-900 placeholder:text-gray-500 border border-gray-300 bg-white outline-0 focus:border-primary focus:ring-2 focus:ring-primary/40 transition-shadow'
								/>
							</div>
							<div className='flex flex-col'>
								<label className='text-gray-800 text-base font-medium leading-normal pb-2' htmlFor='phoneNumber'>
									Phone (optional)
								</label>
								<input
									id='phoneNumber'
									name='phone'
									type='tel'
									placeholder='(123) 456-7890'
									autoComplete='tel'
									className='form-input w-full rounded-lg h-12 px-4 text-gray-900 placeholder:text-gray-500 border border-gray-300 bg-white outline-0 focus:border-primary focus:ring-2 focus:ring-primary/40 transition-shadow'
								/>
							</div>
						</div>

						{/* Subject */}
						<div className='flex flex-col'>
							<label className='text-gray-800 text-base font-medium leading-normal pb-2' htmlFor='subject'>
								Subject
							</label>
							<select
								id='subject'
								name='subject'
								className='form-select w-full rounded-lg h-12 px-4 text-gray-900 outline-0 border border-gray-300 bg-white focus:border-primary focus:ring-2 focus:ring-primary/40'>
								<option value='General Inquiry'>General Inquiry</option>
								<option value='Request a Quote'>Request a Quote</option>
								<option value='Project Consultation'>Project Consultation</option>
							</select>
						</div>

						{/* Message */}
						<div className='flex flex-col'>
							<label className='text-gray-800 text-base font-medium leading-normal pb-2' htmlFor='message'>
								Your Message <span className='text-primary'>*</span>
							</label>
							<textarea
								id='message'
								name='message'
								placeholder='Tell us about your project...'
								required
								className='form-textarea w-full rounded-lg min-h-[160px] px-4 py-3 text-gray-900 placeholder:text-gray-500 border border-gray-300 bg-white focus:border-primary focus:ring-2 focus:ring-primary/40 outline-0'
							/>
							<p className='text-sm text-gray-500 mt-2'>We typically respond within 1–2 business days.</p>
						</div>

						{/* Consent */}
						<div className='flex items-start gap-3'>
							<input id='consent' name='consent' type='checkbox' className='mt-1 size-4 rounded border-gray-300 text-primary focus:ring-primary' />
							<label htmlFor='consent' className='text-sm text-gray-400'>
								You agree to our terms and privacy policy.
							</label>
						</div>

						{/* Submit Button */}
						<button
							type='submit'
							className='flex w-full cursor-pointer items-center justify-center rounded-lg h-12 px-6 bg-text-primary text-white text-base font-bold tracking-[0.015em] hover:bg-text-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-text-primary focus-visible:ring-offset-2 transition shadow-sm'>
							<span className='truncate'>Send Message</span>
						</button>
					</form>
				</motion.div>

				{/* Right Column: Info & Map */}
				<motion.div variants={staggerContainer} className='flex flex-col gap-8'>
					{/* Office Info */}
					<motion.div variants={fadeUp} className='bg-white p-8 rounded-xl shadow-md w-full'>
						<h2 className='text-text-primary text-2xl font-bold leading-tight tracking-[-0.015em] text-left pb-6'>Our Office</h2>
						<div className='space-y-4'>
							<div className='flex items-start gap-4'>
								<span className='material-symbols-outlined text-primary text-2xl mt-1'>location_on</span>
								<p className='text-gray-800 text-base font-medium'>Obum Plaza Suite 110, 16 Ademola Adetokumbo</p>
							</div>
							<div className='flex items-start gap-4'>
								<span className='material-symbols-outlined text-primary text-2xl mt-1'>phone</span>
								<a href='tel:+23409133344425' className='text-gray-800 text-base font-medium hover:text-primary transition-colors'>
									(+234) 0913 334 4425
								</a>
							</div>
							<div className='flex items-start gap-4'>
								<span className='material-symbols-outlined text-primary text-2xl mt-1'>email</span>
								<a href='mailto:contact@vinlandvision.com' className='text-gray-800 text-base font-medium hover:text-primary transition-colors'>
									contact@vinlandvision.com
								</a>
							</div>
						</div>
					</motion.div>

					{/* Embedded Map */}
					<motion.div variants={fadeUp}>
						<h2 className='text-text-primary text-2xl font-bold leading-tight tracking-[-0.015em] text-left pb-4'>Find Us Here</h2>
						<div className='relative z-10 w-full h-96 rounded-xl overflow-hidden shadow-md'>
							<GeoLocation />
						</div>
					</motion.div>

					{/* Secondary CTA */}
					<motion.div variants={fadeUp} className='text-center'>
						<p className='text-gray-700 mb-3'>Prefer to speak with us directly?</p>
						<a
							href='tel:+23409133344425'
							className='inline-flex items-center justify-center gap-2 rounded-lg h-12 px-6 bg-primary text-white text-base font-bold leading-normal tracking-[0.015em] hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 transition shadow-sm'>
							<span className='material-symbols-outlined'>call</span>
							Call Us Directly
						</a>
					</motion.div>
				</motion.div>
			</motion.div>
		</motion.main>
	);
}
