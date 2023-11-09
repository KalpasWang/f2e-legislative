"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import NavBar from "./NavBar";

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
      </NextThemesProvider>
    </NextUIProvider>
  );
}
