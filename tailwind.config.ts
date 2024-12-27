import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        mainbg: "#1A1A1D",
      },
      colors: {
        c_darkpurple: "#3B1C32",
        c_purple: "#6A1E55",
        c_lightpurple: "#A64D79",
        c_white: "#E1E1E1",
        c_gray: "#A1A1A1",
      },
    },
  },
  plugins: [],
} satisfies Config;
