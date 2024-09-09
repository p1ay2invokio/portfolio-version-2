import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import {AppWarpper} from "./index";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "p1ay2.14",
  description: "Welcome to my website created by next js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AppWarpper>
          {children}
        </AppWarpper>
      </body>
    </html>
  );
}
