import type { Metadata } from "next";
import { Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const playfair_display = Playfair_Display({
  weight: '400',
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "Ribeval Ceven",
  description: "Web Application for bakery services :)",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${playfair_display.className} antialiased mx-auto min-h-screen box-border`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
