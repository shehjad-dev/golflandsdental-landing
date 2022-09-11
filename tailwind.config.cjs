const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        screens: {
            xs: "370px",
            ...defaultTheme.screens,
        },
        extend: {
            screens: {
                lg: "1025px",
                // => @media (min-width: 992px) { ... }
            },
        },
    },
    plugins: [],
};
