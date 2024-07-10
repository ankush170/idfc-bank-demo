import type { Config } from "tailwindcss"
import withMT from "@material-tailwind/react/utils/withMT";


const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
	],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        'idfc-red': '#EF5350',
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        black: 'rgba(34, 34, 34, 1)',
        primary: {
          DEFAULT: "var(--primary)",
          foreground: "hsl(var(--primary-foreground))"
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        header: "24px"
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      backgroundImage: {
        'primary-light-gradient': "linear-gradient(126.03deg, rgba(176, 85, 93, 0.1425) 6.51%, rgba(176, 85, 93, 0.38) 94.56%, rgba(176, 85, 93, 0.361) 95.02%)",
        'secondary-dark-gradient': "linear-gradient(282.75deg, #123681 0%, #1948AA 90.37%)",
        'primary-dark-gradient': "linear-gradient(58.71deg, #CE623E 37.8%, #A64627 99.54%)",
        'purple-gradient': 'linear-gradient(246.56deg, #CFBEEC -5.56%, rgba(207, 190, 236, 0.0001) 222.45%)'
      },
      boxShadow: {
        'default': '0px 0px 4px 1px rgba(0, 0, 0, 0.15)'
      }
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default withMT(config)