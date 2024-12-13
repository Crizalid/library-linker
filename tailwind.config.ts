import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
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
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#9b87f5",
          foreground: "#FFFFFF",
          100: "#F3F0FE",
          200: "#E1D9FD",
          300: "#C4B5FB",
          400: "#A790F7",
          500: "#9b87f5",
          600: "#7E69AB",
          700: "#6A559E",
          800: "#4E3B8A",
          900: "#372C68",
        },
        secondary: {
          DEFAULT: "#F97316",
          foreground: "#FFFFFF",
          100: "#FEF3E7",
          200: "#FDE3CC",
          300: "#FBC599",
          400: "#FAA666",
          500: "#F97316",
          600: "#E65A00",
          700: "#BF4B00",
          800: "#993C00",
          900: "#732D00",
        },
        accent: {
          DEFAULT: "#0EA5E9",
          foreground: "#FFFFFF",
          100: "#E6F6FE",
          200: "#CCE9FD",
          300: "#99D3FB",
          400: "#66BDF9",
          500: "#0EA5E9",
          600: "#0284C7",
          700: "#0369A1",
          800: "#075985",
          900: "#0C4A6E",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
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
        lg: "12px",
        md: "8px",
        sm: "4px",
      },
      boxShadow: {
        'win11': '0 2px 8px rgba(0, 0, 0, 0.15)',
        'win11-hover': '0 4px 12px rgba(0, 0, 0, 0.2)',
        'colored': '0 4px 12px rgba(155, 135, 245, 0.2)',
        'colored-hover': '0 6px 16px rgba(155, 135, 245, 0.3)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-primary': 'linear-gradient(135deg, #9b87f5 0%, #7E69AB 100%)',
        'gradient-secondary': 'linear-gradient(135deg, #F97316 0%, #E65A00 100%)',
        'gradient-accent': 'linear-gradient(135deg, #0EA5E9 0%, #0284C7 100%)',
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
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.3s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;