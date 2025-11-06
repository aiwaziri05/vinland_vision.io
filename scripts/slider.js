// Slider utilities (ES6 module)
// Provides a generic horizontal slider with prev/next controls

const $ = (selector, root = document) => root.querySelector(selector);

function clamp(value, min, max) {
	return Math.min(Math.max(value, min), max);
}

export function initSlider({ containerId, prevButtonId, nextButtonId, getPerView }) {
	const container = $('#' + containerId);
	const prev = $('#' + prevButtonId);
	const next = $('#' + nextButtonId);
	if (!container || !prev || !next) return;

	const computeStep = () => {
		const perView = typeof getPerView === 'function' ? clamp(getPerView(), 1, 6) : 1;
		return Math.round(container.clientWidth / perView);
	};

	const scrollByStep = (direction) => {
		container.scrollBy({ left: direction * computeStep(), behavior: 'smooth' });
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
}
