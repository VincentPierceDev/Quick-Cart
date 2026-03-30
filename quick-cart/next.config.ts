import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'fakestoreapi.com',
      }
    ]
  },

  ...(process.env.NODE_ENV === 'development' && {
    allowedDevOrigins: ["192.168.10.2"],
  })
};

export default nextConfig;
