/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Adjust for React/Vue/Svelte
    "./resources/**/*.blade.php"
  ],
  theme: {
    extend: {
      colors: {
        purple: {
          600: "#7164c0",
          500: "9492db",
          200: "d9ddee"
        }
      }
    },
  },
  plugins: [],
}

