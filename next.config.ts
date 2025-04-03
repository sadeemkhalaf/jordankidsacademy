import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // i18n: {
  //   locales: ["en", "ar"], // Supported languages
  //   defaultLocale: "en",
  //   localeDetection: false, // Disable auto-detection to avoid unwanted redirects
  // },
  // async redirects() {
  //   return [
  //     {
  //       source: "/",
  //       destination: "/en", // Redirect "/" to "/en"
  //       permanent: false, // Prevent browser cache issues
  //     },
  //     {
  //       source: "/:locale(en|ar)", // ✅ Prevents looping redirects for /en or /ar
  //       destination: "/:locale",
  //       permanent: false,
  //     },
  //   ];
  // },
  reactStrictMode: false,
};

export default nextConfig;
