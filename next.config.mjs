/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "partagalimath.org" }
    ]
  }
};
export default nextConfig;
