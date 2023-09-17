/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      transparent: "transparent",
      black: "#000",
      white: "#fff",
      background: "#F3F3F3",
      card_details: "rgba(28, 27, 27, 0.60)",
      "card-headings": "#1C1B1B",
      "btn-bg": "#2F80ED",
      "cart-credit-hr": "#2F80ED",
      "cart-text-total": "rgba(28, 27, 27, 0.80)",
      'cart-hr' : 'rgba(28, 27, 27, 0.20)'
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#47cde5",

          secondary: "#5363ef",

          accent: "#db51b6",

          neutral: "#1c1a23",

          "base-100": "#f8f6f8",

          info: "#9cc4e2",

          success: "#3dd699",

          warning: "#f49025",

          error: "#f37168",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
