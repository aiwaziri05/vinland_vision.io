import React, { useEffect, useRef, useState } from 'react';

export default function TestimonialsSection() {
	const testimonials = [
		{
			stars: 5,
			text: `"The team at Vinland Vision turned our dream home into a reality. Their attention to detail and commitment to quality was evident every step of the way."`,
			author: 'Sarah & Tom Jenkins',
		},
		{
			stars: 5,
			text: `"Professional, reliable, and incredibly skilled. They managed our commercial buildout flawlessly, finishing ahead of schedule and under budget."`,
			author: 'Michael Chen, CEO of Innovate Corp',
		},
		{
			stars: 5,
			text: `"From initial design to final walkthrough, the communication was excellent. We always felt informed and valued as clients. Highly recommended!"`,
			author: 'Emily Rodriguez',
		},
		{
			stars: 4.5,
			text: `"An outstanding experience from start to finish. The final result exceeded our expectations in every way."`,
			author: 'David Lee',
		},
		{
			stars: 5,
			text: `"A wonderful experience from start to finish. The final product blew us away!"`,
			author: 'Olivia Carter',
		},
	];

	const containerRef = useRef(null);
	const [currentIndex, setCurrentIndex] = useState(0);
	const [visibleCards, setVisibleCards] = useState(3);
	const [isHovered, setIsHovered] = useState(false);

	// 🔹 Adjust visible slides on resize
	useEffect(() => {
		const updateVisibleCards = () => {
			setVisibleCards(window.innerWidth < 768 ? 1 : 3);
		};
		updateVisibleCards();
		window.addEventListener('resize', updateVisibleCards);
		return () => window.removeEventListener('resize', updateVisibleCards);
	}, []);

	// 🔹 Duplicate slides for smooth infinite scroll
	const extendedSlides = [...testimonials, ...testimonials, ...testimonials];
	const middleIndex = testimonials.length;

	// 🔹 Smooth scroll to slide index
	const scrollToSlide = (index) => {
		if (!containerRef.current) return;
		const track = containerRef.current.firstChild;
		if (!track || !track.children.length) return;

		const card = track.children[0];
		const style = getComputedStyle(track);
		const gap = parseInt(style.gap) || 24;
		const cardWidth = card.offsetWidth + gap;

		containerRef.current.scrollTo({
			left: index * cardWidth,
			behavior: 'smooth',
		});
		setCurrentIndex(index);
	};

	// 🔹 Controls
	const handleNext = () => {
		let newIndex = currentIndex + 1;
		if (newIndex >= extendedSlides.length - visibleCards) newIndex = middleIndex;
		scrollToSlide(newIndex);
	};
	const handlePrev = () => {
		let newIndex = currentIndex - 1;
		if (newIndex < 0) newIndex = middleIndex + testimonials.length - 1;
		scrollToSlide(newIndex);
	};

	// 🔹 Auto scroll (pause on hover)
	useEffect(() => {
		if (isHovered) return;
		const autoSlide = setInterval(() => {
			handleNext();
		}, 4000);
		return () => clearInterval(autoSlide);
	});

	// 🔹 Start centered
	useEffect(() => {
		scrollToSlide(middleIndex);
	});

	// 🔹 Dots setup (max 3)
	const dotCount = Math.min(3, testimonials.length);
	const activeDot = ((Math.floor((currentIndex - middleIndex) / visibleCards) % dotCount) + dotCount) % dotCount;

	return (
		<section className='flex flex-1 justify-center py-16 sm:py-20 overflow-hidden' onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
			<div className='flex flex-col max-w-7xl flex-1 px-4 sm:px-6 lg:px-8'>
				<div className='text-center px-4 pb-12'>
					<h2 className='text-text-primary text-3xl font-bold leading-tight tracking-tight md:text-4xl'>What Our Clients Say</h2>
					<p className='mt-4 max-w-2xl mx-auto text-text-muted'>
						Our clients' satisfaction is the true measure of our success. Here’s what they have to say about their experience working with The Vinland Vision.
					</p>
				</div>

				<div className='relative'>
					{/* Prev Button */}
					<button
						onClick={handlePrev}
						className='hidden md:inline-flex absolute left-0 top-1/2 -translate-y-1/2 z-10 items-center justify-center size-10 rounded-full bg-white/80 dark:bg-secondary/80 text-primary dark:text-text-light shadow hover:bg-white transition'>
						<span className='material-symbols-outlined'>chevron_left</span>
					</button>

					{/* Next Button */}
					<button
						onClick={handleNext}
						className='hidden md:inline-flex absolute right-0 top-1/2 -translate-y-1/2 z-10 items-center justify-center size-10 rounded-full bg-white/80 dark:bg-secondary/80 text-primary dark:text-text-light shadow hover:bg-white transition'>
						<span className='material-symbols-outlined'>chevron_right</span>
					</button>

					{/* Slider Container */}
					<div ref={containerRef} className='overflow-hidden snap-x snap-mandatory pb-2 scroll-smooth'>
						<div className='flex gap-6 transition-transform duration-500 ease-in-out'>
							{extendedSlides.map((t, index) => (
								<div key={index} className={`snap-start shrink-0 w-full ${visibleCards === 3 ? 'md:w-1/3' : 'w-full'} transition-transform`}>
									<div className='flex flex-col gap-4 p-6 bg-white dark:bg-secondary rounded-xl shadow h-full'>
										<div className='flex text-primary'>
											{[...Array(Math.floor(t.stars))].map((_, i) => (
												<span key={i} className='material-symbols-outlined'>
													star
												</span>
											))}
											{t.stars % 1 !== 0 && <span className='material-symbols-outlined'>star_half</span>}
										</div>
										<blockquote className='text-text-muted italic grow'>{t.text}</blockquote>
										<p className='text-text-primary dark:text-text-light font-bold mt-2'>- {t.author}</p>
									</div>
								</div>
							))}
						</div>
					</div>

					{/* Dots */}
					<div className='flex justify-center mt-6 gap-2'>
						{Array.from({ length: dotCount }).map((_, i) => (
							<button
								key={i}
								onClick={() => scrollToSlide(middleIndex + i * visibleCards)}
								className={`w-3 h-3 rounded-full transition ${activeDot === i ? 'bg-primary' : 'bg-gray-300 dark:bg-gray-600'}`}></button>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
