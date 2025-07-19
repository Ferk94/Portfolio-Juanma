import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: false,
  output: "export", // 👈 Esto es lo que habilita el modo estático
  experimental: {
    serverActions: {
      bodySizeLimit: '2mb',
      allowedOrigins: ['*'],
    },
  },
};

export default nextConfig;
