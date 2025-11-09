// Slider utilities (ES6 module)
// Provides a generic horizontal slider with prev/next controls

const $ = (selector, root = document) => root.querySelector(selector);

function clamp(value, min, max) {
	return Math.min(Math.max(value, min), max);
}

export function initSlider({ containerId, prevButtonId, nextButtonId }) {
	const container = $('#' + containerId);
	const prev = $('#' + prevButtonId);
	const next = $('#' + nextButtonId);
	if (!container || !prev || !next) return;

	const computeStep = () => {
		const slide = container.firstElementChild?.firstElementChild;
		if (!slide) return container.clientWidth;
		const style = window.getComputedStyle(slide.parentElement);
		const gap = parseFloat(style.gap) || 0;
		return slide.offsetWidth + gap;
	};

	let autoScrollInterval;

	const resetAutoScroll = () => {
		clearInterval(autoScrollInterval);
		autoScrollInterval = setInterval(() => {
			const maxScrollLeft = container.scrollWidth - container.clientWidth;
			if (container.scrollLeft >= maxScrollLeft - 1) {
				container.scrollTo({ left: 0, behavior: 'smooth' });
			} else {
				scrollByStep(1);
			}
		}, 5000);
	};

	const scrollByStep = (direction) => {
		container.scrollBy({ left: direction * computeStep(), behavior: 'smooth' });
		resetAutoScroll();
	};

	prev.addEventListener('click', () => scrollByStep(-1));
	next.addEventListener('click', () => scrollByStep(1));

	// Optional: keyboard support when container is focused
	container.setAttribute('tabindex', '0');
	container.addEventListener('keydown', (e) => {
		if (e.key === 'ArrowLeft') scrollByStep(-1);
		if (e.key === 'ArrowRight') scrollByStep(1);
	});

	// Update step on resize is implicit as computeStep reads clientWidth
	resetAutoScroll();
}
