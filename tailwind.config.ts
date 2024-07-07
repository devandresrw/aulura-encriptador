import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "darkblue": "#0A3871",
        "txtazulb": "#343A40",
        "bgazul": "#F3F5FC",
        "bgwhite": "#FFF",
        "graytxt": "#495057"
      },
      fontFamily:{
        "inter":["Inter", "sans-serif"]
      },
      boxShadow:{
        "boxsh":"0px 24px 32px -8px rgba(0, 0, 0, 0.08)"
      }
    },
  },
  plugins: [],
};
export default config;
