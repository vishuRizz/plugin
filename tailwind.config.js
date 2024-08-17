/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        black: "#000",
        darkolivegreen: "#426b1f",
      },
      spacing: {},
      fontFamily: {
        inter: "Inter",
        newsreader: "Newsreader",
      },
    },
    fontSize: {
      xl: "20px",
      base: "16px",
      sm: "14px",
      "45xl": "64px",
      "19xl": "38px",
      "32xl": "51px",
      inherit: "inherit",
    },
    screens: {
      mq1125: {
        raw: "screen and (max-width: 1125px)",
      },
      mq1050: {
        raw: "screen and (max-width: 1050px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
