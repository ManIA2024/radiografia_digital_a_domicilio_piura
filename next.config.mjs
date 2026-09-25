/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/radiografias-a-domicilio-en-piura',
        destination: '/', // Redirige a la página principal
        permanent: true, // Redirección 301 (buena para el SEO)
      },
      {
        source: '/blogg/radiograf%C3%ADa-en-casa-piura-rayos-x-sin-salir-de-casa-para-ti',
        destination: '/domicilio',
        permanent: true,
      },
      {
        source: '/contactanos',
        destination: '/contacto',
        permanent: true,
      },
      {
        source: '/blogg',
        destination: '/blog',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
