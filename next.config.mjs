/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "image.tmdb.org",
        port: "",
        pathname: "/t/p/**",
      },
      {
        protocol: "https",
        hostname: "links.papareact.com",
        port: "",
        pathname: "/o8z/**",
      },
    ],
  },
};

export default nextConfig;
