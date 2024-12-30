/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        spinBlob: "spinBlob 15s linear infinite",
      },
      keyframes: {
        spinBlob: {
          "0%": { transform: "rotate(0deg) scale(2)" },
          "100%": { transform: "rotate(360deg) scale(2)" },
        },
      },
      fontFamily: {
        montserrat: ["var(--font-montserrat)", "sans-serif"],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        bg_color:"#0f162a"
      },
      backgroundImage: {
        'offer-bg': "url('../public/images/bg-offer.png')",
      }
      
    },
  },
  plugins: [],
};
