"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Quicksand, Courgette, Mansalva } from "next/font/google";
import { Footer, Navbar } from "src/components/organizms";
import Head from "next/head";
import "../../styles/hero.css";
import "../../styles/globals.css";
import "swiper/css/navigation";
import "swiper/css";

const quicksand = Quicksand({
  subsets: ["latin"],
  variable: "--font-quicksand",
});

const courgette = Courgette({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-courgette",
});

const mansalva = Mansalva({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-mansalva",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate a delay for the loader
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // 3 seconds

    return () => clearTimeout(timer); // Cleanup the timer
  }, []);

  return (
<html lang="en">
      <Head>
        <link
          rel="stylesheet"
        />
      </Head>
      <body className={`min-h-screen overflow-auto ${quicksand.className} ${courgette.className} ${mansalva.className}`}>
        {isLoading ? (
          <div className="loader-container inset-0 flex justify-center items-center bg-yellow-400 z-50">
            <Image
              src={"/logo.png"}
              height={145}
              width={234}
              alt="Logo"
              className="logo"
            />
          </div>
        ) : (
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow">{children}</main>
            <Footer />
          </div>
        )}
      </body>
    </html>
  );
}
