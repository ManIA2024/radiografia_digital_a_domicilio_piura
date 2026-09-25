import '../index.css';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import ContactWhatsapp from '../components/layout/ContactWhatsapp';

export const metadata = {
  title: 'Radiografías Digitales a Domicilio - Radiografía Portátil -Piura',
  description: 'Servicio de radiografía portátil a domicilio en Piura. Resultados de calidad diagnóstica en minutos sin mover al paciente.',
  openGraph: {
    title: 'Radiografías Digitales a Domicilio',
    description: 'Evita traslados dolorosos. Resultados en minutos, imágenes con calidad diagnóstica.',
    url: 'https://www.radiografiadigitalportatil.pe',
    siteName: 'Radiografia Portátil',
    images: [
      {
        url: 'https://www.radiografiadigitalportatil.pe/og-image-whatsapp.jpg',
        width: 1200,
        height: 630,
        alt: 'Equipo de Radiografía Portátil a Domicilio',
      },
    ],
    locale: 'es_PE',
    type: 'website',
  },
  verification: {
    google: 'FflvA0qVOxaS4rGjAmsY5aaTqTHryqHnNvLsTd1Gx5U',
  },
};

export default function RootLayout({ children }) {
  // GEO Structured Data / JSON-LD
  const geoSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "name": "Radiografías Digitales a Domicilio - RadioPortátil",
    "image": "https://www.radiografiadigitalportatil.pe/og-image-whatsapp.jpg",
    "telephone": "+51935248862",
    "url": "https://www.radiografiadigitalportatil.pe/",
    "description": "Servicio de radiografía y rayos X portátil a domicilio en Piura. Resultados de calidad diagnóstica sin mover al paciente.",
    "medicalSpecialty": "Radiography",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Piura",
      "addressRegion": "Piura",
      "addressCountry": "PE"
    },
    "areaServed": ["Piura,Castilla,26 de Octubre,Catacaos"],
    "priceRange": "$$"
  };

  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Outfit:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(geoSchema) }}
        />
      </head>
      <body className="flex flex-col min-h-screen antialiased">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
        <ContactWhatsapp />
      </body>
    </html>
  );
}
