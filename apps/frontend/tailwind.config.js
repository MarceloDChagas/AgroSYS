module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "Roboto", "system-ui", "sans-serif"],
        display: ["Merriweather", "Inter", "system-ui", "serif"],
        serif: ["Lora", "Georgia", "serif"],
      },
      colors: {
        // Central brand colors
        brand: {
          DEFAULT: "#193A3C", // primary brand
          primary: "#193A3C",
          accent: "#D5E6AB",
        },
        // Map existing palettes to new brand colors so current classes work
        agro: {
          50: "#eaf0f0",
          100: "#cdd9da",
          200: "#aec1c2",
          300: "#8fa9aa",
          400: "#6f9193",
          500: "#193A3C", // Primary brand (dark teal)
          600: "#143033",
          700: "#0f2628",
          800: "#0a1c1e",
          900: "#051214",
        },
        earth: {
          50: "#fafaf5",
          100: "#f5f5e6",
          200: "#e8e8cc",
          300: "#d1d1a3",
          400: "#b3b375",
          500: "#a65628", // Marrom rústico
          600: "#8a4520",
          700: "#6e361a",
          800: "#522814",
          900: "#361a0e",
        },
        wheat: {
          50: "#fbfdf5",
          100: "#f6faea",
          200: "#edf4d7",
          300: "#e3efc4",
          400: "#ddebb7",
          500: "#D5E6AB", // Accent brand (light green)
          600: "#c5d893",
          700: "#b3c97c",
          800: "#9fb968",
          900: "#8aa955",
        },
        neutral: {
          50: "#fafaf5",
          100: "#f5f5e6",
          200: "#e8e8cc",
          300: "#d1d1a3",
          400: "#a3a375",
          500: "#737347",
          600: "#5c5c39",
          700: "#45452b",
          800: "#2e2e1d",
          900: "#17170f",
        },
      },
      boxShadow: {
        soft: "0 2px 8px -1px rgba(0, 0, 0, 0.1), 0 1px 3px 0 rgba(0, 0, 0, 0.06)",
        card: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
        "card-hover":
          "0 4px 12px -1px rgba(0, 0, 0, 0.15), 0 2px 4px 0 rgba(0, 0, 0, 0.08)",
        institutional:
          "0 2px 4px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.08)",
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-in-out",
        "slide-up": "slideUp 0.3s ease-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(10px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};
