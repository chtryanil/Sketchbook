import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        accent: "var(--accent)",
        "secondary-accent": "var(--secondary-accent)",
      },
      fontFamily: {
        handwritten: ['var(--font-caveat)', 'cursive'],
        serif: ['var(--font-merriweather)', 'serif'],
      },
      animation: {
        'slide-up': 'slide-up 30s linear infinite',
        'slide-down': 'slide-down 30s linear infinite',
        'float': 'float 10s ease-in-out infinite',
      },
    },
  },
  plugins: [
    function({ addUtilities, theme, e }) {
      const rotationUtilities = {};
      for (let i = -180; i <= 180; i += 15) {
        rotationUtilities[`.${e(`rotate-${i}`)}`] = {
          '--tw-rotate': `${i}`,
        };
      }
      addUtilities(rotationUtilities);
    },
  ],
};
export default config;
