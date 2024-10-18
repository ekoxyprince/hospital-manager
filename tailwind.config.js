/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,vue}"],
  theme: {
    screens: {
      sm: "580px",
      md: "768px",
      lg: "976px",
      slg: "1024px",
      xl: "1440px",
    },
    extend: {
      colors: {
        borderColor: "#D9D9D9",
        linkColor: "#0C2A92",
        primary: "#3A5B22",
        adminSidebg: "#2E2E48",
        adminDashbg: "#171725",
        indigo300: "#7E73FF",
        indigo400: "#756AFF",
        lightblue500: "#3497F9",
        primaryBg: "#F4F7FE",
        primaryOverlay: "rgba(52, 151, 249, 0.16)",
        glass400: "rgba(255,255,255,0.55)",
        darkOverlay: "rgba(0,0,0,0.25)",
        gray500: "#748F98",
        fadeTextColor: "#808080",
        lightDarkTextColor: "#374858",
        lightDarkerTextColor: "#242222",
        lighBrownTextColor: "#2D421E",
        darkBrownTextColor: "#4B4403",
        cardColor1: "#A4D2FF",
        cardColor2: "#A4FFBD",
        cardColor3: "#FFF598",
        cardColor4: "#CCA4FF",
      },
      backgroundImage: {
        doctor: "url('/src/assets/image/doc.jpg')",
      },
      gridTemplateColumns: {
        "dash-col": "17.8rem auto",
        "tile-col": "2rem auto 4rem",
        "tile2-col": "2rem auto auto",
      },
    },
  },
  plugins: [],
};
