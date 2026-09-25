"use client";

import FadeIn from '../../components/animations/FadeIn';

export default function ContactoPage() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const name = formData.get('name');
    const phone = formData.get('phone');
    const email = formData.get('email');
    const service = formData.get('service');
    const message = formData.get('message');

    let text = `Hola, me comunico desde la web. Mi nombre es *${name}*.\n`;
    text += `Teléfono: ${phone}\n`;
    if (email) text += `Correo: ${email}\n`;
    if (service) text += `Servicio de interés: ${service}\n`;
    text += `\nMensaje:\n${message}`;

    const encodedText = encodeURIComponent(text);
    const whatsappNumber = "51935248862";
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedText}`, "_blank");
  };

  return (
    <div className="flex-grow w-full max-w-6xl mx-auto px-4 py-12">
      <FadeIn direction="up">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold font-heading text-[var(--color-text-main)] mb-4">
            Contacto y Urgencias
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            ¿Necesitas un estudio de rayos X a domicilio? Estamos disponibles para atenderte.
            Contáctanos por WhatsApp para respuesta inmediata.
          </p>
        </div>
      </FadeIn>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Contact Information */}
        <FadeIn direction="up" delay={0.2}>
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
            <h2 className="text-2xl font-bold font-heading text-[var(--color-text-main)] mb-6">
              Información de Contacto
            </h2>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-blue-50 p-3 rounded-full text-blue-600">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-[var(--color-text-main)]">Teléfono</h3>
                  <p className="text-gray-600">Llámanos para urgencias médicas.</p>
                  <a href="tel:+51935248862" className="text-blue-600 font-medium hover:underline block mt-1">+51 935 248 862</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-green-50 p-3 rounded-full text-green-600">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-[var(--color-text-main)]">WhatsApp</h3>
                  <p className="text-gray-600">Respuesta inmediata para urgencias.</p>
                  <a href="https://wa.me/51935248862?text=Hola%20Radiografias%20Digital%20a%20Domicilio,%20quisiera%20cotizar%20una%20radiografia." target="_blank" rel="noopener noreferrer" className="text-green-600 font-medium hover:underline block mt-1">Enviar mensaje ahora</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-orange-50 p-3 rounded-full text-orange-600">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-[var(--color-text-main)]">Área de Cobertura</h3>
                  <p className="text-gray-600">Servicio a domicilio en Piura,Castilla y alrededores,consultar disponibilidad.</p>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-gray-100">
              <h3 className="font-semibold text-lg text-[var(--color-text-main)] mb-4">Horario de Atención</h3>
              <div className="flex justify-between items-center py-2 border-b border-gray-50">
                <span className="text-gray-600">Urgencias a Domicilio</span>
                <span className="font-medium text-green-600">Disponible</span>
              </div>
              <div className="flex justify-between items-center py-2">
                <span className="text-gray-600">Estudios Programados</span>
                <span className="font-medium">Lunes a Domingo</span>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* Contact Form */}
        <FadeIn direction="up" delay={0.4}>
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
            <h2 className="text-2xl font-bold font-heading text-[var(--color-text-main)] mb-2">
              Envíanos un mensaje
            </h2>
            <p className="text-gray-600 mb-6">Si no es una urgencia, puedes dejarnos tus datos y nos comunicaremos contigo.</p>

            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Nombre completo *</label>
                <input type="text" id="name" name="name" required className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all" placeholder="Ej. Juan Pérez" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Teléfono *</label>
                  <input type="tel" id="phone" name="phone" required className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all" placeholder="Tu número de contacto" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Correo electrónico</label>
                  <input type="email" id="email" name="email" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all" placeholder="correo@ejemplo.com" />
                </div>
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">Servicio de interés</label>
                <select id="service" name="service" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all bg-white">
                  <option value="">Selecciona un servicio</option>
                  <option value="rayos-x-domicilio">Rayos X a Domicilio</option>
                  <option value="rayos-x-quirofano">Rayos X en Quirófano</option>
                  <option value="medicina-ocupacional">Medicina Ocupacional</option>
                  <option value="otro">Otro</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Mensaje *</label>
                <textarea id="message" name="message" rows="4" required className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all resize-none" placeholder="¿Cómo podemos ayudarte?"></textarea>
              </div>

              <button type="submit" className="w-full bg-[var(--color-primary)] hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200">
                Enviar Mensaje
              </button>
            </form>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
