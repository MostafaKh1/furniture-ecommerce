module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  important: true,
  theme: {
    extend: {
      backgroundImage: {
        shop: "url('https://i.postimg.cc/W3j7k63K/shopbg.png')",
      },
      colors: {
        mainYellow: "#FFF9E5",
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
