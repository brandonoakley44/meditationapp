/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}", 
    "./app/**/*.{js,jsx,ts,tsx}", 
    "./components/**/*.{js,jsx,ts,tsx}",  // Add this line to include components folder
    "./app/(tabs)/meditate.tsx",
  ],
  theme: {
    extend: {
      rmono: ["Roboto-Monto", "sans-serif"],
    },
  },
  plugins: [],
}
