/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // prefer modern formats and allow your remote hosts
    remotePatterns: [
      { protocol: "https", hostname: "go-skill-icons.vercel.app" },
      { protocol: "https", hostname: "skillicons.dev" },
    ],
    formats: ["image/avif", "image/webp"],
  },
  output: "standalone",
  // ... your other config options ...
};

module.exports = nextConfig;
