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
        agro: {
          50: "#f4f1ed",
          100: "#e8e0d6",
          200: "#d1c0ad",
          300: "#b39a7d",
          400: "#8f7a5a",
          500: "#265c28", // Verde folhagem principal
          600: "#1e4a20",
          700: "#173a1a",
          800: "#0f2a13",
          900: "#081a0c",
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
          50: "#fefdf7",
          100: "#fef9e7",
          200: "#fdf3d1",
          300: "#fbe8a3",
          400: "#f8d675",
          500: "#fbba00", // Amarelo Moura
          600: "#e6a800",
          700: "#cc9600",
          800: "#b38400",
          900: "#997200",
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
