/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,vue}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
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
        indigo500: "#4318FF",
        primaryBg: "#F4F7FE",
        glass400: "rgba(75, 0, 130, 0.16)",
      },
      backgroundImage: {
        doctor: "url('/src/assets/image/doc.jpg')",
      },
      gridTemplateColumns: {
        "dash-col": "18rem auto",
      },
    },
  },
  plugins: [],
};
