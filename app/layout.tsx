import type { Metadata } from "next";
import { Instrument_Sans } from "next/font/google";
import "./globals.css";

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
  variable: "--font-instrument-sans",
});

export const metadata: Metadata = {
  title: "Shaaf Shahzad",
  description: "Personal Portfolio of Shaaf Shahzad",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `try { var t = localStorage.getItem('portfolio-theme'); if (t === 'light' || t === 'dark') document.documentElement.dataset.theme = t; } catch (_) {}`,
          }}
        />
      </head>
      <body className={instrumentSans.variable}>{children}</body>
    </html>
  );
}
