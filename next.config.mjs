/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/radiografias-a-domicilio-en-piura',
        destination: '/', // Redirige a la página principal
        permanent: true, // Redirección 301 (buena para el SEO)
      },
    ];
  },
};

export default nextConfig;
