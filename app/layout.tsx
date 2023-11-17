import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";

export const xingothicTc = localFont({
  src: "../jf-openhuninn-2.0.ttf",
  display: "swap",
});

export const metadata: Metadata = {
  title: "喵立翰",
  description: "喵立翰立法委員競選官網",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={xingothicTc.className}>{children}</body>
    </html>
  );
}
