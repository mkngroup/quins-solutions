module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./pages/products/**/*.{js,ts,jsx,tsx}",
    "./pages/hakkimizda/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  theme: {
    extend: {
      visibility: ["group-hover"],
    },
  },
  plugins: [require("tw-elements/dist/plugin")],
};
