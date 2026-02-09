/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#16A34A",
        "rich-black": "#0B0B0B",
        "neutral-gray": "#6B7280",
      },
      fontFamily: {
        sans: ["Space Grotesk", "Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
}
