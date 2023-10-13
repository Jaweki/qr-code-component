/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        light_gray: "hsl(212, 45%, 89%)",
        grayish_blue: "hsl(220, 15%, 55%)",
        dark_blue: "hsl(218, 44%, 22%)",
      },
      fontWeight: {
        tx_normal: '400',
        tx_bold: '700',
      },
      fontSize: {
        font_p: '15px',
      },
      screens: {
        'mobile' : '375px',
        'desktop': '1440px',
      },
    },
  },
  plugins: [],
}

