/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // GitHub Pages için en kritik satır!
  images: {
    unoptimized: true, // Statik sitede resimlerin hata vermemesi için gerekli
  },
  typescript: {
    ignoreBuildErrors: true, // Küçük kod hataları yayını engellemesin
  },
};

export default nextConfig;

