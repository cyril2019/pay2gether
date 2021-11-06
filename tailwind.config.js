module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        "login-image": "url('./assets/5553.jpg')",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
