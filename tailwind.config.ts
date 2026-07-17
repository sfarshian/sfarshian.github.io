import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: { DEFAULT: "#fafafa", elevated: "#f8fafc" },
        foreground: { DEFAULT: "#0f172a", secondary: "#475569", muted: "#94a3b8" },
        primary: { DEFAULT: "#047857", foreground: "#ffffff", hover: "#065f46" },
        secondary: { DEFAULT: "#f1f5f9", foreground: "#1e293b", hover: "#e2e8f0" },
        accent: { DEFAULT: "#0f766e", foreground: "#ffffff", hover: "#115e59" },
        border: { DEFAULT: "#e2e8f0", light: "#f1f5f9", focus: "#047857" },
        surface: { DEFAULT: "#ffffff", elevated: "#f8fafc", hover: "#f1f5f9" },
        muted: { DEFAULT: "#f1f5f9", foreground: "#64748b" },
      },
      fontFamily: {
        serif: ["EB Garamond", "Georgia", "serif"],
        sans: ["Inter", "system-ui", "-apple-system", "sans-serif"],
      },
      boxShadow: {
        card: "0 1px 3px 0 rgb(0 0 0 / 0.04), 0 1px 2px -1px rgb(0 0 0 / 0.04)",
        "card-hover": "0 4px 6px -4px rgb(0 0 0 / 0.06), 0 2px 4px -2px rgb(0 0 0 / 0.04)",
        dropdown: "0 10px 15px -3px rgb(0 0 0 / 0.06), 0 4px 6px -4px rgb(0 0 0 / 0.04)",
      },
    },
  },
  plugins: [],
} satisfies Config;
