"use client"; // useEffect ব্যবহারের জন্য এটি প্রয়োজন

import { useEffect } from "react";
import { Geist, Geist_Mono } from "next/font/google";

// CSS ফাইলসমূহ
import "bootstrap/dist/css/bootstrap.min.css"; // বুটস্ট্র্যাপ সিএসএস
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  
  useEffect(() => {
    // বুটস্ট্র্যাপের জাভাস্ক্রিপ্ট লোড করা (স্লাইডার সচল করার জন্য)
    import("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}