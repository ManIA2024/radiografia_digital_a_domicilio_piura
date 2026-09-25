"use client";

import { Home as HomeIcon, Activity, Stethoscope, ArrowRight, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const ServicesGrid = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  // Schema.org GEO Optimization for specific MedicalProcedures
  const servicesSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalProcedure",
        "name": "Radiografía a Domicilio",
        "description": "Toma de imágenes radiográficas directamente en el hogar del paciente mediante equipos portátiles digitales.",
        "procedureType": "DiagnosticProcedure"
      },
      {
        "@type": "MedicalProcedure",
        "name": "Radiografía para Quirófanos",
        "description": "Servicio de radiografia digital en tiempo real para asistencia en cirugías de traumatología y especialidades afines en clínicas de Piura",
        "procedureType": "SurgicalProcedure"
      },
      {
        "@type": "MedicalProcedure",
        "name": "Radiografía para Medicina Ocupacional",
        "description": "Evaluaciones radiológicas in-company para empresas, lectura OIT y despistaje ocupacional.",
        "procedureType": "DiagnosticProcedure"
      }
    ]
  };

  return (
    <section className="py-20 bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">Nuestros Servicios Principales</h2>
          <p className="text-gray-600 text-lg">Llevamos la sala de rayos X a donde más la necesites: tu casa, tu empresa o tu quirófano en Piura.</p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {/* Service 1 */}
          <motion.div variants={itemVariants} className="bg-[var(--color-surface)] p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--color-primary)]/5 rounded-bl-full -z-10 group-hover:scale-110 transition-transform"></div>
            <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:-translate-y-2 transition-transform">
              <HomeIcon className="w-8 h-8 text-[var(--color-primary)]" />
            </div>
            <h3 className="text-xl font-bold font-heading mb-4">Rayos X a Domicilio</h3>
            <p className="text-gray-600 mb-6 text-sm">
              Sabemos que es complicado mover a un adulto mayor o alguien lesionado. Tomamos la radiografia en su propia cama para mayor comodidad y evitarles molestias innecesarias.
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-2 text-sm text-gray-700">
                <CheckCircle2 className="w-4 h-4 text-[#059669] shrink-0 mt-0.5" />
                <span>No hay necesidad de salir de casa</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-gray-700">
                <CheckCircle2 className="w-4 h-4 text-[#059669] shrink-0 mt-0.5" />
                <span>Resultados rápidos por WhatsApp</span>
              </li>
            </ul>
            <Link href="/domicilio" className="text-[var(--color-primary)] font-medium hover:text-[var(--color-primary-dark)] inline-flex items-center gap-2 group-hover:gap-3 transition-all focus:outline-none focus:underline rounded-sm">
              Saber más <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>

          {/* Service 2 */}
          <motion.div variants={itemVariants} className="bg-[var(--color-surface)] p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--color-primary)]/5 rounded-bl-full -z-10 group-hover:scale-110 transition-transform"></div>
            <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:-translate-y-2 transition-transform">
              <Activity className="w-8 h-8 text-[var(--color-primary)]" />
            </div>
            <h3 className="text-xl font-bold font-heading mb-4">Apoyo en Quirófano</h3>
            <p className="text-gray-600 mb-6 text-sm">
              Apoyo para clínicas locales. Llevamos el equipo portátil y a nuestro técnico justo cuando lo necesitas en sala de operaciones.
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-2 text-sm text-gray-700">
                <CheckCircle2 className="w-4 h-4 text-[#059669] shrink-0 mt-0.5" />
                <span>Imagenes radiográficas en alta resolución al instante</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-gray-700">
                <CheckCircle2 className="w-4 h-4 text-[#059669] shrink-0 mt-0.5" />
                <span>Técnicos de confianza</span>
              </li>
            </ul>
            <Link href="/quirofano" className="text-[var(--color-primary)] font-medium hover:text-[var(--color-primary-dark)] inline-flex items-center gap-2 group-hover:gap-3 transition-all focus:outline-none focus:underline rounded-sm">
              Saber más <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>

          {/* Service 3 */}
          <motion.div variants={itemVariants} className="bg-[var(--color-surface)] p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--color-primary)]/5 rounded-bl-full -z-10 group-hover:scale-110 transition-transform"></div>
            <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:-translate-y-2 transition-transform">
              <Stethoscope className="w-8 h-8 text-[var(--color-primary)]" />
            </div>
            <h3 className="text-xl font-bold font-heading mb-4">Exámenes para Empresas</h3>
            <p className="text-gray-600 mb-6 text-sm">
              Chequeos médicos para tus trabajadores sin que tengan que salir de la empresa. Hacemos las placas ahí mismo (ej. descartes de pulmón).
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-2 text-sm text-gray-700">
                <CheckCircle2 className="w-4 h-4 text-[#059669] shrink-0 mt-0.5" />
                <span>No pierden horas de trabajo</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-gray-700">
                <CheckCircle2 className="w-4 h-4 text-[#059669] shrink-0 mt-0.5" />
                <span>Todo ordenado en formato digital</span>
              </li>
            </ul>
            <Link href="/medicina-ocupacional" className="text-[var(--color-primary)] font-medium hover:text-[var(--color-primary-dark)] inline-flex items-center gap-2 group-hover:gap-3 transition-all focus:outline-none focus:underline rounded-sm">
              Saber más <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesGrid;
