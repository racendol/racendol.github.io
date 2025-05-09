import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true, // optional: ensures paths work as folders (good for static hosts)
};

export default nextConfig;
