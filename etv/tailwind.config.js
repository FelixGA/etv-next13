module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "410px",
      },
      animation: {
        slideL: "slideL 500ms linear",
        slideR: "slideR 500ms linear",
      },
      keyframes: {
        slideL: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0)" },
        },
        slideR: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0)" },
        },
      },
      backgroundImage: {
        "radial-green": "radial-gradient(circle, #00774c 0%, #004225 100%)",
        "horizontal-green": "linear-gradient(135deg, #004225 0%, #417538 100%)",
        "radial-green-invert":
          "radial-gradient(circle, #00774c 0%, #004225 100%)",
        "horizontal-green-invert":
          "linear-gradient(135deg, #417538 0%, #004225 100%)",
        "vertical-grey": "linear-gradient(180deg, #fafafa 0%, #d9d9d9 100%)",
        "center-grey":
          "linear-gradient(180deg, #ffffff 0%, #e6e6e6 65.11%, #ffffff 100%)",
      },
      borderWidth: {
        6: "6px",
      },
      fontSize: {
        xxs: "10px",
      },
      boxShadow: (theme) => ({
        card: "2px 4px 20px -4px rgba(0,0,0,0.75)",
        "product-card": "2px 2px 10px 3px rgba(0,0,0,0.5)",
        "configurator-card": `0 0 0 2px ${theme("colors.green.dark")}`,
        "configurator-card-selected": `0 0 0 4px ${theme(
          "colors.green.light"
        )}`,
        header: "0 2px 24px 0 rgba(0,0,0,0.5)",
        dropdown: "0 2px 6px 0 rgba(44,63,83,0.25)",
      }),
      blur: {
        xs: "2px",
      },
      /*  filter: {

      } */
      colors: {
        // white: {
        //   lightest: "",
        //   lighter: "",
        //   light: "#F2F9FF",
        //   dark: "",
        //   darker: "",
        //   darkest: "",
        // },
        grey: {
          lightest: "#F2F2F2",
          lighter: "#E7EDF3",
          light: "#CCCCCC",
          dark: "#6e6e6e",
          darker: "#4e4e4e",
          darkest: "#212121",
          extra: "#F2F9FF",
        },
        yellow: {
          lightest: "",
          lighter: "",
          light: "#ffd166",
          dark: "#FFAB00",
          darker: "",
          darkest: "",
        },
        blue: {
          lightest: "#727CF5",
          lighter: "#6F89A5",
          light: "#356aa6",
          dark: "#243280",
          darker: "#1F1E80",
          darkest: "#5A3DF5",
        },
        black: {
          lightest: "",
          lighter: "",
          light: "#356aa6",
          dark: "#2c3f53",
          darker: "#1F1E80",
          darkest: "#000000",
        },
        orange: {
          lightest: "",
          lighter: "",
          light: "#f35625",
          dark: "#EF5424",
          darker: "",
          darkest: "",
        },
      },
      maxWidth: {
        card: "300px",
      },
      minWidth: {
        card: "300px",
      },
      spacing: {
        18: "4.5rem",
      },
      zIndex: {},
      zIndex: {
        "-20": "-20",
        "-10": "-10",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("tailwind-scrollbar-hide")],
  // plugins: [require("@tailwindcss/forms"), require("tailwind-scrollbar")],
};
