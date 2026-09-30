const ContactWhatsapp = () => {
  const phoneNumber = '51935248862';
  const defaultMessage = 'Hola Radiografias Digital a Domicilio, estuve revisando su página web y deseo cotizar.';
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(defaultMessage)}`;

  return (
    <div className="fixed bottom-24 right-6 md:bottom-8 md:right-8 z-[9999] group">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="relative flex items-center justify-center p-4 bg-[#25D366] text-white rounded-full shadow-lg hover:bg-[#1EBE5D] hover:shadow-2xl active:scale-95 transition-all"
        aria-label="Contactar por WhatsApp"
      >

        {/* SVG of Official WhatsApp Logo */}
        <svg
          viewBox="0 0 24 24"
          width="32"
          height="32"
          fill="currentColor"
          className="relative z-10 w-8 h-8 shrink-0"
        >
          <path d="M12.031 0C5.385 0 0 5.385 0 12.03c0 2.115.549 4.185 1.595 6L.062 24l6.108-1.601A11.972 11.972 0 0012.03 24c6.643 0 12.03-5.385 12.03-12.03S18.674 0 12.031 0zM12.03 22c-1.815 0-3.593-.487-5.155-1.41l-.37-.218-3.834 1.006 1.026-3.738-.24-.38A9.972 9.972 0 012.032 12c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10zm5.433-7.291c-.297-.15-1.761-.871-2.034-.972-.272-.102-.472-.152-.67.151-.2.302-.77.971-.944 1.168-.175.197-.348.221-.645.074-.298-.15-1.259-.464-2.4-1.481-.884-.792-1.482-1.77-1.657-2.072-.174-.3-.018-.462.13-.61.133-.133.298-.348.447-.521.149-.176.199-.3.297-.497.1-.198.05-.371-.024-.522-.075-.15-.67-1.614-.92-2.212-.24-.582-.485-.502-.67-.512-.174-.01-.373-.01-.572-.01-.2 0-.522.075-.795.373-.274.298-1.042 1.018-1.042 2.482 0 1.464 1.066 2.88 1.214 3.078.15.198 2.099 3.203 5.083 4.49.71.307 1.264.492 1.696.63.714.227 1.362.195 1.875.118.573-.086 1.761-.72 2.01-1.415.248-.696.248-1.29.174-1.415-.075-.125-.273-.2-.57-.35z" />
        </svg>

        {/* Tooltip - Hides on touch devices where hover gets stuck */}
        <span className="hidden md:block absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-white text-[var(--color-text-main)] text-sm font-semibold px-4 py-2 rounded-xl shadow-lg border border-gray-100 whitespace-nowrap opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 pointer-events-none before:content-[''] before:absolute before:right-[-6px] before:top-1/2 before:-translate-y-1/2 before:border-l-[6px] before:border-l-white before:border-y-[6px] before:border-y-transparent">
          Solicitala en minutos ⚡
        </span>
      </a>
    </div>
  );
};

export default ContactWhatsapp;
