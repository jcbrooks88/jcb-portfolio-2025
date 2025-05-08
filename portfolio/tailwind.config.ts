// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
  "./src/pages/**/*.{js,ts,jsx,tsx}",
  "./src/components/**/*.{js,ts,jsx,tsx}",
  "./src/app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1A73E8',
        secondary: '#FBBF24',
        accent: '#34D399',
        background: '#F3F4F6',
        foreground: '#111827',
      },
    },
  },
  plugins: [],
};

export default config;
