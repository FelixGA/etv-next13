module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
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
      boxShadow: (theme) => ({
        card: "2px 4px 20px -4px rgba(0,0,0,0.75)",
        "product-card": "2px 2px 10px 3px rgba(0,0,0,0.5)",
        "configurator-card": `0 0 0 2px ${theme("colors.green.dark")}`,
        "configurator-card-selected": `0 0 0 4px ${theme(
          "colors.green.light"
        )}`,
        header: "0 2px 24px 0 rgba(0,0,0,0.5)",
      }),
      blur: {
        xs: "2px",
      },
      colors: {
        grey: {
          lightest: "#F2F2F2",
          lighter: "",
          light: "#CCCCCC",
          dark: "#6e6e6e",
          darker: "#4e4e4e",
          darkest: "#212121",
        },

        blue: {
          lightest: "",
          lighter: "",
          light: "#356aa6",
          dark: "#243280",
          darker: "#1F1E80",
          darkest: "",
        },
      },
      maxWidth: {
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
  // plugins: [require("@tailwindcss/forms"), require("tailwind-scrollbar")],
};
