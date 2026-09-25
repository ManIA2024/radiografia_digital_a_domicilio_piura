import Link from 'next/link';
import { Briefcase, Clock, FileText, CheckCircle2, ShieldCheck } from 'lucide-react';
import FadeIn from '../../components/animations/FadeIn';

export const metadata = {
  title: 'Radiografía para Medicina Ocupacional en Piura | Evaluaciones in-company',
  description: 'Exámenes radiológicos ocupacionales directo en tu empresa. Evita el ausentismo laboral con nuestras placas de tórax y lecturas OIT en Piura.',
  openGraph: {
    title: 'Radiografía Ocupacional | Evaluaciones en la Empresa',
    description: 'Realizamos campañas de radiología ocupacional en tus instalaciones. Resultados digitales inmediatos.',
  }
};

export default function MedicinaOcupacionalPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "¿Cuántos trabajadores pueden atender por día?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Nuestra capacidad depende de las horas contratadas, pero podemos realizar en promedio entre 30 a 50 radiografías por jornada, optimizando el tiempo de su empresa."
        }
      },
      {
        "@type": "Question",
        "name": "¿Realizan lecturas con formato OIT?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sí, nuestras imágenes digitales de alta resolución cumplen con los estándares para realizar lecturas de placa de tórax bajo la clasificación de la OIT (Organización Internacional del Trabajo)."
        }
      },
      {
        "@type": "Question",
        "name": "¿Qué requisitos físicos necesita el espacio en mi empresa?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Solo requerimos un ambiente cerrado con toma de corriente estándar y espacio suficiente para colocar la camilla o el soporte de tórax, asegurando la privacidad del trabajador."
        }
      }
    ]
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Radiología Ocupacional In-Company",
    "provider": {
      "@type": "MedicalBusiness",
      "name": "Radiografías Digitales a Domicilio - RadioPortátil"
    },
    "areaServed": {
      "@type": "City",
      "name": "Piura"
    },
    "description": "Exámenes radiológicos ocupacionales realizados directamente en las instalaciones de la empresa para evitar el ausentismo laboral."
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
          <section className="bg-indigo-50 py-16 px-4 md:py-24">
            <div className="max-w-5xl mx-auto text-center">
              <div className="inline-block px-4 py-2 bg-indigo-100 text-indigo-800 font-semibold rounded-full mb-6 text-sm shadow-sm">
                Salud Ocupacional para Empresas
              </div>
              <h1 className="text-4xl md:text-5xl font-bold font-heading text-[var(--color-text-main)] mb-6">
                Evaluaciones Radiológicas sin salir de tu Empresa
              </h1>
              <p className="text-xl text-gray-700 leading-relaxed mb-8 max-w-3xl mx-auto">
                Realizamos campañas de rayos X in-company. Evita que tus colaboradores pierdan horas de trabajo en traslados a clínicas. Resultados digitales inmediatos para tu médico ocupacional.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="https://wa.me/51935248862?text=Hola%20Radiografias%20Digital%20Portatil,%20deseo%20cotizar%20una%20campa%C3%B1a%20de%20medicina%20ocupacional%20para%20mi%20empresa." 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-8 rounded-lg text-lg transition-colors shadow-lg"
                >
                  Cotizar Campaña por WhatsApp
                </a>
                <Link href="/contacto" className="bg-white hover:bg-gray-50 text-indigo-700 font-semibold border-2 border-indigo-200 hover:border-indigo-600 py-3 px-8 rounded-lg text-lg transition-colors">
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
              ¿Por qué elegir nuestro servicio In-Company?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:border-indigo-100 hover:shadow-md transition-all">
                <div className="w-16 h-16 bg-indigo-50 rounded-full flex items-center justify-center mb-6 text-indigo-600">
                  <Clock size={32} />
                </div>
                <h3 className="text-xl font-bold mb-3 text-[var(--color-text-main)]">Cero Ausentismo</h3>
                <p className="text-gray-600">
                  Reduce las horas perdidas por traslados y tiempos de espera en clínicas convencionales. Atendemos a tus trabajadores en sus propios turnos.
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:border-indigo-100 hover:shadow-md transition-all">
                <div className="w-16 h-16 bg-indigo-50 rounded-full flex items-center justify-center mb-6 text-indigo-600">
                  <FileText size={32} />
                </div>
                <h3 className="text-xl font-bold mb-3 text-[var(--color-text-main)]">Lecturas OIT</h3>
                <p className="text-gray-600">
                  Imágenes nítidas y digitales, ideales para el descarte de neumoconiosis y listas para lectura neumológica bajo estándares de la OIT.
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:border-indigo-100 hover:shadow-md transition-all">
                <div className="w-16 h-16 bg-indigo-50 rounded-full flex items-center justify-center mb-6 text-indigo-600">
                  <Briefcase size={32} />
                </div>
                <h3 className="text-xl font-bold mb-3 text-[var(--color-text-main)]">Flexibilidad Total</h3>
                <p className="text-gray-600">
                  Nos adaptamos al cronograma de tu área de Recursos Humanos o Seguridad y Salud en el Trabajo, organizando campañas ordenadas.
                </p>
              </div>
            </div>
          </section>
        </FadeIn>

        {/* Tipos de examenes */}
        <FadeIn direction="up" delay={0.2}>
          <section className="bg-slate-50 py-16 px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl font-bold font-heading text-[var(--color-text-main)] mb-6">
                    Estudios más solicitados por el Médico Ocupacional
                  </h2>
                  <p className="text-gray-600 text-lg mb-8">
                    Contamos con equipos que garantizan la calidad de imagen necesaria para los protocolos médicos de pre-empleo y exámenes periódicos.
                  </p>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-indigo-600 shrink-0" />
                      <div>
                        <h4 className="font-bold text-[var(--color-text-main)]">Radiografía de Tórax P-A</h4>
                        <p className="text-sm text-gray-600">Fundamental para evaluación pulmonar y descarte de enfermedades respiratorias ocupacionales.</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-indigo-600 shrink-0" />
                      <div>
                        <h4 className="font-bold text-[var(--color-text-main)]">Columna Lumbo-Sacra</h4>
                        <p className="text-sm text-gray-600">Vital para puestos de esfuerzo físico, evaluando riesgos ergonómicos y lesiones preexistentes.</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-indigo-600 shrink-0" />
                      <div>
                        <h4 className="font-bold text-[var(--color-text-main)]">Articulaciones Específicas</h4>
                        <p className="text-sm text-gray-600">Hombros, rodillas o muñecas según los riesgos específicos del puesto de trabajo.</p>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="bg-white p-8 rounded-2xl shadow-sm border border-indigo-50 relative">
                  <div className="absolute top-0 right-0 p-4">
                    <ShieldCheck className="w-12 h-12 text-indigo-100" />
                  </div>
                  <h3 className="text-2xl font-bold text-[var(--color-text-main)] mb-4">¿Cómo trabajamos?</h3>
                  <ol className="relative border-l border-gray-200 ml-3 space-y-6">
                    <li className="pl-6 relative">
                      <div className="absolute w-3 h-3 bg-indigo-600 rounded-full -left-[6.5px] top-2"></div>
                      <h4 className="font-bold text-gray-900">Coordinación</h4>
                      <p className="text-sm text-gray-600">Agendamos fecha y evaluamos el espacio disponible en sus instalaciones.</p>
                    </li>
                    <li className="pl-6 relative">
                      <div className="absolute w-3 h-3 bg-indigo-600 rounded-full -left-[6.5px] top-2"></div>
                      <h4 className="font-bold text-gray-900">Despliegue</h4>
                      <p className="text-sm text-gray-600">Instalación del equipo portátil con biombo plomado de protección.</p>
                    </li>
                    <li className="pl-6 relative">
                      <div className="absolute w-3 h-3 bg-indigo-600 rounded-full -left-[6.5px] top-2"></div>
                      <h4 className="font-bold text-gray-900">Toma y Entrega</h4>
                      <p className="text-sm text-gray-600">Realización fluida de los exámenes y entrega de carpeta digital inmediata al área médica.</p>
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        {/* FAQs */}
        <FadeIn direction="up" delay={0.2}>
          <section className="py-16 px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-center text-[var(--color-text-main)] mb-10">
                Preguntas Frecuentes - RRHH y SST
              </h2>
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <h3 className="text-lg font-bold text-[var(--color-primary)] mb-2">¿Cuántos trabajadores pueden atender por día?</h3>
                  <p className="text-gray-700">Nuestra capacidad depende de las horas contratadas, pero podemos realizar en promedio entre 30 a 50 radiografías por jornada, organizados en bloques para no detener la operación de su empresa.</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <h3 className="text-lg font-bold text-[var(--color-primary)] mb-2">¿Entregan placas físicas o solo digitales?</h3>
                  <p className="text-gray-700">Para medicina ocupacional, trabajamos 100% en digital. Entregamos un consolidado o acceso a nuestra plataforma donde el médico ocupacional puede visualizar y descargar todas las imágenes DICOM de alta resolución de cada trabajador.</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <h3 className="text-lg font-bold text-[var(--color-primary)] mb-2">¿Qué requisitos físicos necesita el espacio en mi empresa?</h3>
                  <p className="text-gray-700">Solo requerimos un ambiente cerrado con toma de corriente estándar y espacio suficiente (al menos 3x3 metros) para colocar la camilla o el soporte de tórax, asegurando la privacidad del trabajador durante el procedimiento.</p>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>
      </div>
    </>
  );
}
