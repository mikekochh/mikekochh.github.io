/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontSize: {
      100: "100px",
      60: "60px",
      40: "40px",
      32: "32px",
      30: "30px",
      20: "20px",
      15: "15px",
      12: "12px",
    },
    extend: {
      spacing: {
        100: "100px",
        80: "80px",
        40: "40px",
        50: "50px",
      },
    },
  },
  plugins: [],
}

