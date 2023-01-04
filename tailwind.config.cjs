module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        shop: "url('./src/assets/shopbg.png')",
      },
    },
  },
  section: {
    red: "#FAF4F4",
    yellow: "FFF9E5",
  },
  container: {
    padding: {
      DEFAULT: "1rem",
      lg: "0",
    },
  },
  plugins: [],
};
