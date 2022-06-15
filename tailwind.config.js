module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        main: "#202124",
        grayText: "#9AA0A6",
        border: '#5F6368',
        active: "#8AB4F8",
        hover: '#24272D',
        dropDown: '#3C4043',
      }
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp')
  ],
}
