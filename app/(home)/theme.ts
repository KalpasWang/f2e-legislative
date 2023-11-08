import { createTheme } from "@mui/material";
import { Noto_Sans_TC } from "next/font/google";
import localFont from "next/font/local";

const notoSansTC = Noto_Sans_TC({
  subsets: ["latin"],
});
const xingothicTc = localFont({
  src: "../../jf-openhuninn-2.0.ttf",
  display: "swap",
});

const theme = createTheme({
  spacing: 4,
  palette: {
    mode: "light",
    primary: {
      dark: "#BFBFBF",
      main: "#F9A828",
      light: "#FFFFFF",
      contrastText: "#0B0A09",
    },
    secondary: {
      main: "#724600",
    },
    text: {
      primary: "#0B0A09",
      secondary: "#FFFFFF",
      disabled: "#BFBFBF",
    },
  },
  typography: {
    fontFamily: [
      xingothicTc.style.fontFamily,
      notoSansTC.style.fontFamily,
      "sans-serif",
    ].join(","),
    h1: {
      fontSize: "2.5rem", // 40px
      lineHeight: "3.75rem", // 60px
    },
    h2: {
      fontSize: "1.5rem", // 24px
      lineHeight: "2rem", // 32px
    },
    h3: {
      fontSize: "1.5rem", // 24px
      lineHeight: "normal",
    },
    h4: {
      fontSize: "1rem", // 16px
      lineHeight: "1.5rem", // 24px
    },
    h5: {
      fontSize: "0.875rem", // 14px
      lineHeight: "1.5",
    },
    h6: {
      fontSize: "0.75rem", // 12px
      lineHeight: "1.5",
    },
  },
});

export default theme;
