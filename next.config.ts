// import type { NextConfig } from "next";

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["example.com"],
  },
  eslint: {
    ignoreDuringBuilds: true,
},
};

export default nextConfig;
