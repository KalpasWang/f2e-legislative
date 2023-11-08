import type { Metadata } from "next";
import "./globals.css";

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
      <body>{children}</body>
    </html>
  );
}
