module.exports = {
  darkMode: "class",
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
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
