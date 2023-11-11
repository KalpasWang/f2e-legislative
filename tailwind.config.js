import { nextui } from "@nextui-org/theme";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        md: "1.5rem",
        lg: "2rem",
      },
    },
    extend: {
      gridTemplateRows: {
        "activity-layout": "49vh, auto, 49vh",
      },
      boxShadow: {
        title: "10px 10px 0px 0px #BFBFBF",
        activity: "8px 8px 0px 0px #000",
      },
      borderRadius: {
        title: "20px",
      },
      left: {
        "8/9": "88.9%",
      },
      fontSize: {
        "6xl": "4rem",
      },
    },
  },
  darkMode: "class",
  plugins: [
    nextui({
      themes: {
        light: {
          colors: {
            background: "#FFFFFF",
            foreground: "#0B0A09",
            primary: {
              DEFAULT: "#F9A828",
              foreground: "#0B0A09",
              dark: "#C78620",
            },
            secondary: "#724600",
            shadow: "#BFBFBF",
            support: "#FFFFFF",
          },
          layout: {
            disabledOpacity: "0.3",
            spacingUnit: 4,
            fontSize: {
              tiny: "0.75rem", // text-tiny 12px
              small: "0.875rem", // text-small 14px
              medium: "1.5rem", // text-medium 24px
              large: "2.5rem", // text-large
              DEFAULT: "1rem", // text-base
            },
            lineHeight: {
              tiny: "1rem", // text-tiny
              small: "1.25rem", // text-small
              medium: "1.5rem", // text-medium
              large: "1.75rem", // text-large
            },
            radius: {
              small: "8px", // rounded-small
              medium: "12px", // rounded-medium
              large: "14px", // rounded-large
            },
            borderWidth: {
              small: "1px", // border-small
              medium: "2px", // border-medium (default)
              large: "3px", // border-large
            },
          },
        },
        dark: {
          layout: {}, // dark theme layout tokens
          colors: {}, // dark theme colors
        },
      },
    }),
  ],
};
