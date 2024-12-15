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
          DEFAULT: "#1a73e8",
          foreground: "#FFFFFF",
          100: "#e8f0fe",
          200: "#c2d7fc",
          300: "#8ab4f8",
          400: "#4285f4",
          500: "#1a73e8",
          600: "#1557b0",
          700: "#174ea6",
          800: "#185abc",
          900: "#1967d2",
        },
        secondary: {
          DEFAULT: "#34a853",
          foreground: "#FFFFFF",
          100: "#e6f4ea",
          200: "#ceead6",
          300: "#a8dab5",
          400: "#81c995",
          500: "#34a853",
          600: "#137333",
          700: "#0d652d",
          800: "#0c5524",
          900: "#0b4f1f",
        },
        accent: {
          DEFAULT: "#ea4335",
          foreground: "#FFFFFF",
          100: "#fce8e6",
          200: "#fad2cf",
          300: "#f6aea7",
          400: "#f28b82",
          500: "#ea4335",
          600: "#d93025",
          700: "#c5221f",
          800: "#b31412",
          900: "#a50e0e",
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
        lg: "0px",
        md: "0px",
        sm: "0px",
      },
      boxShadow: {
        'oneui': '0 1px 3px rgba(0, 0, 0, 0.08)',
        'oneui-hover': '0 4px 6px rgba(0, 0, 0, 0.12)',
        'oneui-active': '0 1px 2px rgba(0, 0, 0, 0.15)',
        'oneui-colored': '0 2px 4px rgba(26, 115, 232, 0.15)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-oneui': 'linear-gradient(145deg, #1a73e8 0%, #8ab4f8 100%)',
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