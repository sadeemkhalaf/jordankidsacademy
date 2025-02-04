"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Footer, Navbar } from "src/components/organizms";
import Head from "next/head";
import "./../styles/hero.css";
import "./../styles/globals.css";

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
      <body className="min-h-screen overflow-auto">
        {isLoading ? (
          <div className="loader-container inset-0 flex justify-center items-center bg-yellow-400 z-50">
            <Image
              className="logo"
              src={"/logo.png"}
              height={145}
              width={234}
              alt="Logo"
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
