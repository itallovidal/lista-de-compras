module.exports = {
  darkMode: 'class',
  content: ["./App.{js,jsx,ts,tsx}", "./app/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        background: "#111827",
        foreground: "#ffffff",
        border: "#374151",
        input: "#4b5563",
        ring: "#60a5fa",
        accent: {
          DEFAULT: "#1f2937",
          foreground: "#ffffff",
        },
        blue: {
          700: "#2e83cb",
          600: "#379DF1",
        },
        gray: {
          50: "#f8f9fa", // Bright Snow
          100: "#e9ecef", // Platinum
          200: "#dee2e6", // Alabaster Grey
          300: "#ced4da", // Pale Slate (lighter)
          400: "#adb5bd", // Pale Slate (darker)
          500: "#6c757d", // Slate Grey
          600: "#495057", // Iron Grey
          700: "#343a40", // Gunmetal
          800: "#212529", // Shadow Grey
        },
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
