/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Habilita la exportación estática
  distDir: 'out', // Directorio de salida para los archivos estáticos
  images: {
    unoptimized: true, // Obligatorio para exportación estática
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  // Opciones adicionales para resolver errores comunes
  trailingSlash: true, // Añade trailing slash a las URLs
  experimental: {
    missingSuspenseWithCSRBailout: false,
  },
};

module.exports = nextConfig;
