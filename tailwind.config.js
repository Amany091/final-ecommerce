/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        padding: '2rem',
        center: true,
      },
      boxShadow: {
        custom: '0 4px 10px rgba(0, 0, 0, 0.1);', 
      },
      clipPath: {
        'custom-star': 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)'
      },
      colors: {
        forground: "hsl(var(--forground-background))",
        forgroundColor: "hsl(var(--forground-color))",
        headerBackground: "hsl(var(--header-background))",
        buttonBackground: "hsl(var(--button-background))",
        buttonColor: "hsl(var(--button-color))",
        inputBackground: "hsl(var(--input-background))",
        searchColor: "hsl(var(--search-color))",
        placeholderColor: "hsl(var(--placeholder-color))",
        descriptionColor: "hsl(var(--description-color))",
        iconLightColor: "hsl(var(--icon-light-color))",
        iconBackground: "hsl(var(--icon-background))",
        iconColor: "hsl(var(--icon-color))",
        cardBackground: "hsl(var(--card-background))",
        discountBackground :"hsl(var(--discount-background))",
        discountColor : "hsl(var(--discount-color))",
        footerBackground: "hsl(var(--footer-background))",
        iconVerifiedBackground: "hsl(var(--icon-verified-background))",
        iconStarColor: "hsl(var(--star-color))"
      },
      borderRadius: {
        inputRadius: 62,
        buttonRadius : 62,
        cardRadius: 20
      },
      fontSize: {
        cardTitle: 20,
        cardPrice: 24,
        cardRating: 14
      },
      padding: {
        buttonPadding: "var(--button-padding)" ,
        inputPadding: "var(--input-padding)"
      },
      fontFamily: {
        cairo: ["Cairo", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    function ({ addUtilities }) {
      addUtilities({
        '.clip-star': {
          'clip-path': 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)',
        },
      })
    },
  ],
};
