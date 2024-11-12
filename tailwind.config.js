/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        mthin: ["Montserrat-Thin", "sans-serif"],
        mextralight: ["Montserrat-ExtraLight", "sans-serif"],
        mlight: ["Montserrat-Light", "sans-serif"],
        mregular: ["Montserrat-Regular", "sans-serif"],
        mmedium: ["Montserrat-Medium", "sans-serif"],
        msemibold: ["Montserrat-SemiBold", "sans-serif"],
        mbold: ["Montserrat-Bold", "sans-serif"],
        mextrabold: ["Montserrat-ExtraBold", "sans-serif"],
        mblack: ["Poppins-Black", "sans-serif"],
      },
},
  },
  plugins: ["nativewind/babel"],
}

