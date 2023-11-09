import type { Metadata } from "next";
import { Noto_Sans_TC } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

export const notoSansTC = Noto_Sans_TC({
  subsets: ["latin"],
});

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
    <html lang="en">
      <body className={xingothicTc.className}>{children}</body>
    </html>
  );
}
