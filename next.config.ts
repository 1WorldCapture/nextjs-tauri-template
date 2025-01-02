import type { NextConfig } from "next";

const isProduction = process.env.NODE_ENV === "production";
const internalHost = process.env.TAURI_DEV_HOST || "localhost";
const internalPort = process.env.TAURI_DEV_PORT || "3000";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",
  images: {
    unoptimized: true,
  },
  assetPrefix: isProduction
    ? undefined
    : `http://${internalHost}:${internalPort}/`,
};

export default nextConfig;
