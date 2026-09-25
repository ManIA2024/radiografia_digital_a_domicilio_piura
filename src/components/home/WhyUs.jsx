import { CheckCircle2, Clock, Shield } from 'lucide-react';

const WhyUs = () => {
  return (
    <section className="py-20 bg-[var(--color-primary)] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6">
              Tu salud no debería esperar en salas de emergencias.
            </h2>
            <p className="text-lg text-blue-100 mb-8 font-sans">
              Traemos el centro de imágenes directamente a tu sala. Olvídate del estrés del tráfico, las esperas interminables y la exposición a virus. Recibe tu diagnóstico de forma cómoda, con tecnología digital de punta avalada por especialistas.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center shrink-0 backdrop-blur-sm">
                  <CheckCircle2 className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-heading font-semibold text-xl mb-1">Cero Traslados</h4>
                  <p className="text-blue-100">Evita el dolor y el riesgo de mover a tu familiar. Hacemos la toma directamente en su cama.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center shrink-0 backdrop-blur-sm">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-heading font-semibold text-xl mb-1">Resultados en Minutos</h4>
                  <p className="text-blue-100">La imagen digital se procesa al instante para que tu médico tratante la revise sin demoras.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center shrink-0 backdrop-blur-sm">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-heading font-semibold text-xl mb-1">Calidad Diagnóstica</h4>
                  <p className="text-blue-100">Equipos con tecnoligia de Flat panel digital, con una resolución de imagen profesional.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-[var(--color-primary-dark)] to-transparent rounded-2xl transform rotate-3 scale-105 opacity-50"></div>
            <div className="bg-white p-8 rounded-2xl relative shadow-2xl">
              <h3 className="text-2xl font-bold text-[var(--color-text-main)] font-heading mb-6 text-center">
                Agenda tu visita
              </h3>
              <p className="text-gray-600 text-center mb-8">
                Contamos con personal tecnico con experiencia y listo para atenderte.
              </p>
              <a
                href="https://wa.me/51935248862?text=Hola%20Radiografias%20Digital%20a%20Domicilio,%20estuve%20revisando%20su%20página%20web%20y%20deseo%20cotizar."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex justify-center py-4 px-4 border border-transparent rounded-xl shadow-sm text-lg font-medium text-white bg-[#25D366] hover:bg-[#1EBE5D] transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#25D366]"
              >
                Contactar por WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
