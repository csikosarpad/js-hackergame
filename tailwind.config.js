/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                'dark-bg': '#0a0e27',
                'dark-card': '#1a1f3a',
                'neon-green': '#00ff41',
                'neon-blue': '#00d4ff',
                'neon-purple': '#b300ff',
                'neon-red': '#ff0055',
            },
            fontFamily: {
                mono: ['Monaco', 'Courier New', 'monospace'],
            },
        },
    },
    plugins: [],
};
