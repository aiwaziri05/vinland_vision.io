
tailwind.config = {
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                "primary": "#F6B400", // Golden Yellow
                "text-primary": "#002B5B", // Deep Navy Blue for text on yellow
                "background-light": "#F8FAFC",
                "background-dark": "#1E293B", // Using a slightly lighter dark for main content
                "sidebar-dark": "#0F172A",
                "card-light": "#FFFFFF",
                "card-dark": "#1E293B",
                "heading-text-light": "#1E293B",
                "heading-text-dark": "#F8FAFC",
                "body-text-light": "#64748B",
                "body-text-dark": "#94A3B8",
                "border-light": "#E2E8F0",
                "border-dark": "#334155",
            },
            fontFamily: {
                "display": ["Inter", "sans-serif"]
            },
            borderRadius: {
                "DEFAULT": "0.5rem",
                "lg": "0.75rem",
                "xl": "1rem",
                "full": "9999px"
            },
            boxShadow: {
                'subtle': '0 4px 6px -1px rgb(0 0 0 / 0.05), 0 2px 4px -2px rgb(0 0 0 / 0.05)',
            }
        },
    },
}
