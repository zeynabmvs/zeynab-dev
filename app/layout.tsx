import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Zeynab's Portfolio",
  description: "Frontend web developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased text-primary min-h-screen flex flex-col`}
      >
        <div className="flex-1">
          {children}
        </div>
        <footer className="py-8 text-center text-sm text-muted">
          2025 © Zeynab movasaqpour
        </footer>
      </body>
    </html>
  );
}

