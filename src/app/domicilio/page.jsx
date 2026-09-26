import Link from 'next/link';
import { Bed, Zap, ShieldCheck, Star } from 'lucide-react';
import FadeIn from '../../components/animations/FadeIn';

export const metadata = {
  title: 'Radiografías a Domicilio en Piura | Sin Mover a tu Familiar',
  description: 'Servicio de rayos X portátil a domicilio en Piura, Castilla y Catacaos. Evita traslados dolorosos para adultos mayores. Resultados inmediatos.',
  openGraph: {
    title: 'Radiografía a Domicilio Rápida y Segura | Piura',
    description: 'Atención urgente de rayos X en casa. Ideal para personas de la tercera edad o con movilidad reducida. ¡Llámanos ahora!',
  }
};

export default function DomicilioPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "¿Tengo que mover a mi familiar para la radiografía?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No. Nuestro equipo portátil de rayos X se adapta a la cama o silla del paciente, evitando cualquier movimiento brusco o doloroso. Ideal para adultos mayores."
        }
      },
      {
        "@type": "Question",
        "name": "¿En cuánto tiempo me entregan los resultados?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Los resultados son inmediatos. Al ser tecnología digital, obtenemos imágenes de alta resolución en minutos que puedes compartir directamente con tu médico tratante."
        }
      },
      {
        "@type": "Question",
        "name": "¿A qué zonas de Piura llegan con el servicio a domicilio?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Cubrimos todo Piura, Castilla, Catacaos y zonas aledañas. Contamos con atención rápida para urgencias médicas."
        }
      }
    ]
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Radiografía a Domicilio",
    "provider": {
      "@type": "MedicalBusiness",
      "name": "Radiografías Digitales a Domicilio - Radiografia Portatil"
    },
    "areaServed": {
      "@type": "City",
      "name": "Piura"
    },
    "description": "Exámenes de Rayos X portátiles realizados directamente en el domicilio del paciente, sin necesidad de traslados."
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      <div className="w-full flex-grow flex flex-col">
        {/* Hero Section */}
        <FadeIn direction="up">
          <section className="bg-blue-50 py-16 px-4 md:py-24">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold font-heading text-[var(--color-text-main)] mb-6">
                Radiografías a Domicilio sin Mover a tu Familiar
              </h1>
              <p className="text-xl text-gray-700 leading-relaxed mb-8 max-w-3xl mx-auto">
                Sabemos lo preocupante que es trasladar a un adulto mayor con dolor. Llevamos nuestro equipo de rayos X digital directamente a su cama en Piura y alrededores.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="https://wa.me/51935248862?text=Hola%20Radiografias%20Digital%20a%20Domicilio,%20necesito%20una%20radiografia%20urgente%20deseo%20cotizar." target="_blank" rel="noopener noreferrer" className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-lg text-lg transition-colors shadow-lg">
                  Solicitar una Radiografía Urgente!
                </a>
                <Link href="/contacto" className="bg-white hover:bg-gray-50 text-[var(--color-primary)] font-semibold border-2 border-[var(--color-primary)] py-3 px-8 rounded-lg text-lg transition-colors">
                  Agendar Cita
                </Link>
              </div>
            </div>
          </section>
        </FadeIn>

        {/* Beneficios - Pain points */}
        <FadeIn direction="up" delay={0.2}>
          <section className="py-16 px-4 max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-[var(--color-text-main)] mb-12">
              Tranquilidad para ti, comodidad para ellos
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 text-[var(--color-primary)]">
                  <Bed size={32} />
                </div>
                <h3 className="text-xl font-bold mb-3 text-[var(--color-text-main)]">Evita movimientos dolorosos</h3>
                <p className="text-gray-600">
                  Tomamos la placa radiográfica en la posición en la que se encuentre el paciente, ya sea en su cama o silla de ruedas.
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 text-[var(--color-primary)]">
                  <Zap size={32} />
                </div>
                <h3 className="text-xl font-bold mb-3 text-[var(--color-text-main)]">Resultados Inmediatos</h3>
                <p className="text-gray-600">
                  Imágenes digitales de alta resolución listas en minutos, permitiendo que el médico tratante actúe rápidamente.
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 text-[var(--color-primary)]">
                  <ShieldCheck size={32} />
                </div>
                <h3 className="text-xl font-bold mb-3 text-[var(--color-text-main)]">100% Seguro</h3>
                <p className="text-gray-600">
                  Tecnología moderna con mínima radiación, operada por tecnicos radiólogos especializados.
                </p>
              </div>
            </div>
          </section>
        </FadeIn>

        {/* Testimonios */}
        <FadeIn direction="up" delay={0.2}>
          <section className="bg-white py-16 px-4 max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text-main)] mb-4">
                Lo que dicen las familias que confiaron en nosotros
              </h2>
              <p className="text-gray-600 text-lg">
                Más de 200 pacientes atendidos en la comodidad de su hogar en Piura y alrededores.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Testimonio 1 */}
              <div className="bg-blue-50 p-8 rounded-2xl border border-blue-100 shadow-sm relative">
                <div className="flex text-yellow-400 mb-4">
                  <Star size={20} fill="currentColor" className="mr-1" />
                  <Star size={20} fill="currentColor" className="mr-1" />
                  <Star size={20} fill="currentColor" className="mr-1" />
                  <Star size={20} fill="currentColor" className="mr-1" />
                  <Star size={20} fill="currentColor" />
                </div>
                <p className="text-gray-700 italic mb-6">
                  "Excelente servicio. Mi abuelo no podía moverse por un dolor fuerte en la cadera. Llegaron rápido a la casa y lo trataron con muchísima paciencia. Los resultados se los enviaron directo a nuestro traumatólogo."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[var(--color-primary)] text-white rounded-full flex items-center justify-center font-bold">
                    M
                  </div>
                  <div>
                    <div className="font-bold text-[var(--color-text-main)]">María F.</div>
                    <div className="text-sm text-gray-500">Piura</div>
                  </div>
                </div>
              </div>

              {/* Testimonio 2 */}
              <div className="bg-blue-50 p-8 rounded-2xl border border-blue-100 shadow-sm relative">
                <div className="flex text-yellow-400 mb-4">
                  <Star size={20} fill="currentColor" className="mr-1" />
                  <Star size={20} fill="currentColor" className="mr-1" />
                  <Star size={20} fill="currentColor" className="mr-1" />
                  <Star size={20} fill="currentColor" className="mr-1" />
                  <Star size={20} fill="currentColor" />
                </div>
                <p className="text-gray-700 italic mb-6">
                  "Muy profesionales. Nos salvó de tener que ir a emergencias y hacer que mi mamá de 82 años esperara horas. Tomaron la radiografía directamente en su cama sin causarle ningún dolor."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[var(--color-primary)] text-white rounded-full flex items-center justify-center font-bold">
                    C
                  </div>
                  <div>
                    <div className="font-bold text-[var(--color-text-main)]">Carlos M.</div>
                    <div className="text-sm text-gray-500">Castilla</div>
                  </div>
                </div>
              </div>

              {/* Testimonio 3 */}
              <div className="bg-blue-50 p-8 rounded-2xl border border-blue-100 shadow-sm relative">
                <div className="flex text-yellow-400 mb-4">
                  <Star size={20} fill="currentColor" className="mr-1" />
                  <Star size={20} fill="currentColor" className="mr-1" />
                  <Star size={20} fill="currentColor" className="mr-1" />
                  <Star size={20} fill="currentColor" className="mr-1" />
                  <Star size={20} fill="currentColor" />
                </div>
                <p className="text-gray-700 italic mb-6">
                  "Totalmente recomendados. El equipo portátil se ve moderno y el técnico nos explicó todo el proceso con amabilidad. Fueron muy cuidadosos y nos entregaron los resultados en el momento."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[var(--color-primary)] text-white rounded-full flex items-center justify-center font-bold">
                    L
                  </div>
                  <div>
                    <div className="font-bold text-[var(--color-text-main)]">Lucía T.</div>
                    <div className="text-sm text-gray-500">Catacaos</div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        {/* FAQs */}
        <FadeIn direction="up" delay={0.2}>
          <section className="bg-gray-50 py-16 px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-center text-[var(--color-text-main)] mb-10">
                Preguntas Frecuentes
              </h2>
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h3 className="text-lg font-bold text-[var(--color-primary)] mb-2">¿Qué necesito para solicitar la radiografía a domicilio?</h3>
                  <p className="text-gray-700">Solo necesitas tener una orden médica y proporcionarnos tu ubicación. Nuestro equipo llegará a tu domicilio con todo lo necesario para realizar la radiografía de manera rápida y segura.</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h3 className="text-lg font-bold text-[var(--color-primary)] mb-2">¿Cuales son los medios de pago que aceptan?</h3>
                  <p className="text-gray-700">Aceptamos pagos en efectivo, Plin o Yape y transferencia bancaria.</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h3 className="text-lg font-bold text-[var(--color-primary)] mb-2">¿En cuánto tiempo me entregan los resultados?</h3>
                  <p className="text-gray-700">Los resultados son inmediatos. Al ser tecnología digital, obtenemos imágenes de alta resolución en minutos que puedes compartir directamente con tu médico tratante.</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h3 className="text-lg font-bold text-[var(--color-primary)] mb-2">¿A qué zonas de Piura llegan con el servicio a domicilio?</h3>
                  <p className="text-gray-700">Cubrimos todo Piura, Castilla, Catacaos y zonas aledañas segun disponibilidad. Contamos con atención rápida para urgencias médicas. Solo comunícate a nuestro WhatsApp para coordinar.</p>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>
      </div>
    </>
  );
}
