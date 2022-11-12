/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}', 'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'],
    theme: {
        colors: {
            primary: '#0FCFEC',
            secondary: '#19D3AE',
            headingCol: '#3A4256',
        },
    },
    plugins: [require('flowbite/plugin')],
};
