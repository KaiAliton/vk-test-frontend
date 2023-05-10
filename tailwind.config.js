/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
    daisyui: {
    themes: [{
      base: {
        primary: "#282828",
        secondary: "#292929",
        accent: "#424242",
        neutral: "#3d4451",
        "base-100": "#141414",
        "base-content": "#E1E3E6",
      },}]},
   plugins: [
    require("daisyui"),
    require('@headlessui/tailwindcss')({ prefix: 'ui' }),
  ],
}

