/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: "#c18446",
        dark: "#3a1d00",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
