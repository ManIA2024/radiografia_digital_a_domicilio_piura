'use client';

import { usePathname } from 'next/navigation';

const ContactWhatsapp = () => {
  const pathname = usePathname();

  // No renderizar en la ruta /crear_link
  if (pathname === '/crear_link') {
    return null;
  }

  const phoneNumber = '51935248862';
  const defaultMessage = 'Hola Radiografias Digital a Domicilio, estuve revisando su página web y deseo cotizar.';
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(defaultMessage)}`;

  return (
    <div className="fixed bottom-6 right-4 md:bottom-8 md:right-8 z-[9999] group">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="relative flex items-center justify-center w-14 h-14 md:w-16 md:h-16 bg-[#25D366] text-white rounded-full shadow-lg hover:bg-[#1EBE5D] hover:shadow-2xl active:scale-95 transition-all"
        aria-label="Contactar por WhatsApp"
      >

        {/* Official WhatsApp Logo from CDN to bypass mobile inline SVG bugs */}
        <img 
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" 
          alt="WhatsApp Logo" 
          className="relative z-10 w-8 h-8 md:w-10 md:h-10 shrink-0" 
        />

        {/* Tooltip - Hides on touch devices where hover gets stuck */}
        <span className="hidden md:block absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-white text-[var(--color-text-main)] text-sm font-semibold px-4 py-2 rounded-xl shadow-lg border border-gray-100 whitespace-nowrap opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 pointer-events-none before:content-[''] before:absolute before:right-[-6px] before:top-1/2 before:-translate-y-1/2 before:border-l-[6px] before:border-l-white before:border-y-[6px] before:border-y-transparent">
          Solicitala en minutos ⚡
        </span>
      </a>
    </div>
  );
};

export default ContactWhatsapp;
