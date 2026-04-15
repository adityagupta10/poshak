import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        saffron: "#FF9933",
        maroon: "#7A1F2A",
        gold: "#FFD700",
        cream: "#F5F0E6",
        "soft-green": "#8AA86F"
      }
    }
  }
};

export default config;
