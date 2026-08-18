import path from "node:path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // Pin the workspace root — a stray package-lock.json in the home directory
  // otherwise makes Turbopack infer it as the project root.
  turbopack: { root: path.resolve(".") },
};

export default nextConfig;
