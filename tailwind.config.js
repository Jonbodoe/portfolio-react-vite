/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/resume.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily : {
      sans: ["Barlow", "sans-serif"]
    },
    
    extend: {
    },
  },
  plugins: [],
}

