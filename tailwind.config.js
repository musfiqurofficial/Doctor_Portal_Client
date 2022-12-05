/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],

  // daisyUI config (optional)
  daisyui: {

    styled: true,
    themes: [
      {
        doctorPortal: {

          "primary": "#0FCFEC",

          "secondary": "#19D3AE",

          "accent": "#3A4256",

          "base-200": "#ECEEF2",
        },
      },
    ],
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
    darkTheme: "light",
  },
}