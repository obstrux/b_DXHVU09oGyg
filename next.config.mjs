/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // 重新开启静态导出
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
