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

// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   experimental: {
//     appDir: true,
//     serverComponentsExternalPackages: ["mongoose"],
//   },
//   images: {
//     domains: ["lh3.googleusercontent.com"],
//   },
//   webpack(config) {
//     config.experiments = {
//       ...config.experiments,
//       topLevelAwait: true,
//     };
//     return config;
//   },
// };

// export default nextConfig;
