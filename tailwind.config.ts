import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          DEFAULT: "#1F3A2E",
          light: "#2F5443",
          dark: "#152A20",
        },
        gold: {
          DEFAULT: "#B8873D",
          light: "#F3E8D2",
          soft: "#FBF6EC",
        },
        clay: {
          DEFAULT: "#8B4A3A",
          light: "#F1E4DF",
        },
        paper: "#F7F6F1",
        ink: {
          DEFAULT: "#20241F",
          muted: "#5B6259",
        },
      },
      fontFamily: {
        serif: ["var(--font-source-serif)", "Georgia", "serif"],
        sans: ["var(--font-plex-sans)", "Arial", "sans-serif"],
      },
      maxWidth: {
        content: "1180px",
      },
    },
  },
  plugins: [],
};

export default config;
