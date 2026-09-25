import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
  const phoneNumber = '51935248862';
  const defaultMessage = 'Hola, necesito información sobre el servicio de Radiografías a Domicilio.';
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(defaultMessage)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center p-4 bg-[#25D366] text-white rounded-full shadow-lg hover:bg-[#1EBE5D] transition-transform hover:scale-105"
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle className="w-8 h-8" />
    </a>
  );
};

export default WhatsAppButton;
