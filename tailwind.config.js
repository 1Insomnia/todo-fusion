/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme")

export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      height: {
        "button-md": "42px"
      },
      width: {
        "button-md": "42px"
      }
    },
    colors: {
      foreground: {
        DEFAULT: "#fff",
        dark: "#adadad"
      },
      background: {
        DEFAULT: "#1f1f1f",
        light: "#292929",
        lighter: "#4c4c4c"
      },
      primary: {
        purple: {
          DEFAULT: "#9780e5",
          light: "#b9aaee"
        },
        magenta: "#e666cc",
        flamingo: "#fa97a1",
        blue: "#53ceda"
      }
    },
    fontFamily: {
      sans: ["'Space Grotesk'", ...defaultTheme.fontFamily.sans]
    }
  },
  plugins: []
}
