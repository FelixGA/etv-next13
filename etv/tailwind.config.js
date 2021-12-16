module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
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
          dark: "#004225",
          darker: "#4e4e4e",
          darkest: "#212121",
        },
        green: {
          lightest: "",
          lighter: "",
          light: "#85BA4B",
          dark: "#004225",
          darker: "#1F2624",
          darkest: "#202624",
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
  plugins: [require("@tailwindcss/forms"), require("tailwind-scrollbar")],
};
