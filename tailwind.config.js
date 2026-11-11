/** @type {import('tailwindcss').Config} */
module.exports = {
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
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
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
        // Brand palette: warm newsprint, ink, one signal colour and a highlighter.
        paper: {
          DEFAULT: "#F2EDE4",
          deep: "#E6DFD2",
          rule: "#CFC6B6",
        },
        ink: {
          DEFAULT: "#16130F",
          soft: "#57504A",
          raised: "#221E19",
          muted: "#A39A8E",
        },
        // Signal fails WCAG AA for small text on paper: keep it for display type and shapes.
        signal: {
          DEFAULT: "#E4401B",
          deep: "#B8300C",
          soft: "#FF9B80",
        },
        marker: {
          DEFAULT: "#F2D21B",
        },
      },
      fontFamily: {
        display: ["Fraunces", "Georgia", "serif"],
        sans: ['"Schibsted Grotesk"', "system-ui", "sans-serif"],
        mono: ['"JetBrains Mono"', "ui-monospace", "monospace"],
      },
      fontSize: {
        kicker: ["0.75rem", { lineHeight: "1rem", letterSpacing: "0.14em" }],
        "display-sm": ["clamp(2.25rem, 5vw, 4rem)", { lineHeight: "0.98" }],
        "display-md": ["clamp(2.75rem, 6.5vw, 5.75rem)", { lineHeight: "0.95" }],
        "display-lg": ["clamp(2.6rem, 8.4vw, 8.5rem)", { lineHeight: "0.9" }],
      },
      maxWidth: {
        page: "84rem",
        measure: "38rem",
      },
      boxShadow: {
        print: "6px 6px 0 0 #16130F",
        "print-lg": "10px 10px 0 0 #16130F",
        "print-signal": "8px 8px 0 0 #E4401B",
        "print-signal-lg": "12px 12px 0 0 #E4401B",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
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
        "draw-line": {
          from: { strokeDashoffset: "1" },
          to: { strokeDashoffset: "0" },
        },
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.2" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "draw-line": "draw-line 1.1s cubic-bezier(0.65, 0, 0.35, 1) 0.9s both",
        blink: "blink 1.6s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
