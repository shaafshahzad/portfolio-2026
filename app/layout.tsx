import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

const jetBrains = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Portfolio 2026 | Shaaf Shahzad",
  description:
    "Shaaf Shahzad's one-page portfolio: projects, experience, education, and contact.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={jetBrains.className}>
      <body>{children}</body>
    </html>
  );
}
