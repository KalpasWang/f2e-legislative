"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { Noto_Sans_TC } from "next/font/google";
import NavBar from "./NavBar";
import Footer from "./Footer";

export const notoSansTC = Noto_Sans_TC({
  subsets: ["latin"],
});

type Props = {
  children: React.ReactNode;
};

export default function HomeLayout({ children }: Props) {
  const router = useRouter();

  return (
    <NextUIProvider navigate={router.push}>
      <NextThemesProvider attribute="class" defaultTheme="light">
        <NavBar />
        {children}
        <Footer />
      </NextThemesProvider>
    </NextUIProvider>
  );
}
