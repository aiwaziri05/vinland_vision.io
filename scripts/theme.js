tailwind.config = {
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                primary: '#002B5B', // Deep Navy Blue
                secondary: '#1E2B3B', // Dark Gray
                'accent-yellow': '#F6B400', // Golden Yellow
                'accent-red': '#E63946', // Crimson Red
                'background-light': '#F9FAFB', // Soft Gray
                'background-dark': '#0f1823', // Dark mode equivalent
                'text-light': '#F9FAFB',
                'text-dark': '#1E2B3B',
                'text-muted': '#64748B',
            },
            fontFamily: {
                display: ['Inter', 'sans-serif'],
            },
            borderRadius: {
                DEFAULT: '0.25rem',
                lg: '0.5rem',
                xl: '0.75rem',
                full: '9999px',
            },
        },
    },
};
