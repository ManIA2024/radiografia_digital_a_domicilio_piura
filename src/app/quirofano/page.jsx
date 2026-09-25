import Link from 'next/link';
import { Crosshair, Timer, Stethoscope } from 'lucide-react';
import FadeIn from '../../components/animations/FadeIn';

export const metadata = {
  title: 'Radiografía Intraoperatoria en Piura | Soporte Quirúrgico',
  description: 'Servicio de radiografía digital intraoperatoria para quirófanos en Piura. Imágenes en tiempo real para cirugías traumatológicas y complejas con máxima precisión.',
  openGraph: {
    title: 'Radiografía Digital Intraoperatoria| Piura',
    description: 'Imágenes radiológicas en tiempo real para procedimientos quirúrgicos. Equipos modernos y técnicos en radiología especializados.',
  }
};

export default function QuirofanoPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "¿Qué especialidades quirúrgicas atienden?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Brindamos soporte radiológico principalmente a traumatología, ortopedia, neurocirugía, cirugía general y urología."
        }
      },
      {
        "@type": "Question",
        "name": "¿Proporcionan el equipo de rayos X o solo personal?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Proveemos tanto el equipo portátil (Rayos X digital) como el técnico en radiología para operarlo durante toda la intervención."
        }
      },
      {
        "@type": "Question",
        "name": "¿Cómo coordino el servicio para una cirugía programada?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Puede contactarnos vía WhatsApp o llamada para agendar la fecha, hora y clínica. Llegamos con anticipación para la preparación del equipo en sala."
        }
      }
    ]
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Radiografía Intraoperatoria",
    "provider": {
      "@type": "MedicalBusiness",
      "name": "Radiografías Digitales a Domicilio - RadioPortátil"
    },
    "areaServed": {
      "@type": "City",
      "name": "Piura"
    },
    "description": "Servicio de imágenes radiológicas en tiempo real durante intervenciones quirúrgicas para clínicas y cirujanos."
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
          <section className="bg-slate-50 py-16 px-4 md:py-24 border-b border-gray-100">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block px-4 py-2 bg-blue-100 text-[var(--color-primary)] font-semibold rounded-full mb-6 text-sm shadow-sm">
              Servicio Especializado para Clínicas y Cirujanos
            </div>
            <h1 className="text-4xl md:text-5xl font-bold font-heading text-[var(--color-text-main)] mb-6">
              Precisión Quirúrgica con Radiografía Intraoperatoria
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed mb-8 max-w-3xl mx-auto">
              Brindamos soporte de imágenes en tiempo real durante procedimientos complejos. Asegura el éxito de tus cirugías con nuestros equipos y tecnólogos médicos en Piura.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://wa.me/51935248862" target="_blank" rel="noopener noreferrer" className="bg-[var(--color-primary)] hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg text-lg transition-colors shadow-lg">
                Coordinar Soporte en Quirófano
              </a>
              <Link href="/contacto" className="bg-white hover:bg-gray-50 text-[var(--color-primary)] font-semibold border-2 border-[var(--color-primary)] py-3 px-8 rounded-lg text-lg transition-colors">
                Solicitar Información
              </Link>
            </div>
            </div>
          </section>
        </FadeIn>

        {/* Beneficios */}
        <FadeIn direction="up" delay={0.2}>
          <section className="py-16 px-4 max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[var(--color-text-main)] mb-12">
            La importancia del control por imágenes
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-6 text-[var(--color-primary)]">
                <Crosshair size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-[var(--color-text-main)]">Máxima Precisión</h3>
              <p className="text-gray-600">
                Visualización instantánea para la correcta colocación de implantes, tornillos o guías, reduciendo el margen de error y complicaciones postoperatorias.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-6 text-[var(--color-primary)]">
                <Timer size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-[var(--color-text-main)]">Optimización del Tiempo</h3>
              <p className="text-gray-600">
                Toma de decisiones rápidas y seguras durante la cirugía sin tener que esperar revelados, reduciendo el tiempo de anestesia del paciente.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-6 text-[var(--color-primary)]">
                <Stethoscope size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-[var(--color-text-main)]">Personal Calificado</h3>
              <p className="text-gray-600">
                Tecnico radiologo entrenado para actuar con rapidez y en estricta coordinación con el cirujano y el equipo, manteniendo los estándares de asepsia.
              </p>
            </div>
            </div>
          </section>
        </FadeIn>

        {/* FAQs */}
        <FadeIn direction="up" delay={0.2}>
          <section className="bg-slate-50 py-16 px-4 border-t border-gray-100">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-[var(--color-text-main)] mb-10">
              Preguntas Frecuentes
            </h2>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-lg font-bold text-[var(--color-primary)] mb-2">¿Qué especialidades quirúrgicas atienden?</h3>
                <p className="text-gray-700">Brindamos soporte radiológico principalmente a traumatología, ortopedia, neurocirugía, cirugía general y urología, donde la precisión guiada por imagen es crítica y fundamental para el éxito de la intervención.</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-lg font-bold text-[var(--color-primary)] mb-2">¿Proporcionan el equipo o solo personal?</h3>
                <p className="text-gray-700">Proveemos el servicio completo: el equipo de rayos X digital portátil y el técnico radiólogo para operarlo durante todo el desarrollo de la cirugía.</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-lg font-bold text-[var(--color-primary)] mb-2">¿Cómo coordino el servicio para una cirugía programada?</h3>
                <p className="text-gray-700">Puede contactarnos vía WhatsApp o por llamada para agendar la fecha, hora y el nombre de la clínica donde se realizará la cirugía. Nuestro equipo llegará con la debida anticipación para preparar y esterilizar todo en la sala de operaciones.</p>
              </div>
            </div>
            </div>
          </section>
        </FadeIn>
      </div>
    </>
  );
}
