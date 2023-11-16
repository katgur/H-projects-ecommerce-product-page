/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './index.html',
        './src/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            flexGrow: {
                4: '4'
            },
            borderColor: {
                orange: '#FF7D1A'
            },
        },
    },
    plugins: [],
}

