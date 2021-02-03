module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        body: ["Manrope"],
      },
      backgroundImage: (theme) => ({
        pattern: "url('/bg-pattern.svg')",
        circles: "url('/pattern-circles.svg')",
        slider: "url('/icon-slider.svg')",
      }),
      boxShadow: {
        cyan: "0px 20px 40px hsla(174,77%,80%,1)",
      },
      colors: {
        cyan: {
          soft: "#a5f3eb",
          strong: "#10d5c2",
        },
        light: {
          grayish: {
            red: "#feece7",
            blue: "#eaeefb",
            blue2: "#cdd7ee",
          },
          red: "#ff8c66",
        },
        blue: {
          pale: "#bdccff",
          very: {
            pale: "#fafbff",
          },
          grayish: "#858fad",
          dark: "#293356",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
