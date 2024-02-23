/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    // domains: ["lh3.googleusercontent.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};
//was blank added all that stuff to load the image from google
// reactStrictMode: true,
//   swcMinify: true,
//   images: {
//     domains: ["lh3.googleusercontent.com"],
//   },
export default nextConfig;
