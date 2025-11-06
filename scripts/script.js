// General site scripts (ES6 module)
// Initializes mobile navigation and conditionally loads sliders

const qs = (selector, root = document) => root.querySelector(selector);
const on = (el, event, handler, options) => el && el.addEventListener(event, handler, options);

function initMobileNav() {
	const button = qs('#mobile-menu-button');
	const menu = qs('#mobile-menu');
	const icon = qs('#mobile-menu-icon');
	if (!button || !menu) return;

	const setExpanded = (expanded) => {
		button.setAttribute('aria-expanded', String(expanded));
		button.setAttribute('aria-label', expanded ? 'Close menu' : 'Open menu');
		if (icon) icon.textContent = expanded ? 'close' : 'menu';

		if (expanded) {
			menu.classList.remove('pointer-events-none');
			menu.style.maxHeight = menu.scrollHeight + 'px';
			menu.style.opacity = '1';
			menu.style.transform = 'translateY(0)';
		} else {
			menu.classList.add('pointer-events-none');
			menu.style.maxHeight = '0px';
			menu.style.opacity = '0';
			menu.style.transform = 'translateY(0.25rem)';
		}
	};

	on(button, 'click', () => {
		const expanded = button.getAttribute('aria-expanded') === 'true';
		setExpanded(!expanded);
	});

	// Keep height in sync on resize when open
	on(window, 'resize', () => {
		if (menu.style.opacity === '1') {
			menu.style.maxHeight = menu.scrollHeight + 'px';
		}
	});
}

async function initDynamicSliders() {
	const testimonials = qs('#testimonials');
	if (testimonials) {
		const { initSlider } = await import('./slider.js');
		initSlider({
			containerId: 'testimonials',
			prevButtonId: 'testimonials-prev',
			nextButtonId: 'testimonials-next',
			getPerView: () => (window.innerWidth >= 768 ? 3 : 1),
		});
	}
}

function init() {
	initMobileNav();
	initDynamicSliders();
	initPasswordVisibilityToggle();
}

function initPasswordVisibilityToggle() {
	const toggleButton = qs('#toggle-password-button');
	if (!toggleButton) return;

	const passwordInput = qs('#password-input');
	if (!passwordInput) return;

	const icon = toggleButton.querySelector('span');

	on(toggleButton, 'click', () => {
		const isPassword = passwordInput.type === 'password';
		passwordInput.type = isPassword ? 'text' : 'password';
		if (icon) icon.textContent = isPassword ? 'visibility_off' : 'visibility';
	});
}

if (document.readyState === 'loading') {
	document.addEventListener('DOMContentLoaded', init, { once: true });
} else {
	init();
}
