/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.html"],
  theme: {
    extend: {
      colors: {
        blue: {
          pale: "hsl(243, 100%, 93%)",
          grayish: "hsl(229, 7%, 55%)",
          dark: "hsl(228, 56%, 26%)",
          "very-dark": "hsl(229, 57%, 11%)"
        },
        orange: {
          pale: "hsl(6, 100%, 80%)"
        },
        pink: "hsl(335, 100%, 65%)"
      },
      borderRadius: {
        nav: "8px 80px 8px 8px"
      },
      backgroundImage: {
        linear: ["linear-gradient(to right , hsl(6, 100%, 80%), hsl(335, 100%, 65%))"]
      },
      screens: {
        md: {
          max: "750px",
        }
      }
    },
    
  },
  plugins: [],
}

