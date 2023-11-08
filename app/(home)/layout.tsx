"use client";
import { CssBaseline, ThemeProvider } from "@mui/material";
import React from "react";
import theme from "./theme";

type Props = {
  children: React.ReactNode;
};

export default function HomeLayout({ children }: Props) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}
