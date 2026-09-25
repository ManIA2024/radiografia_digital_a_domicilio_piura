"use client";

import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section className="relative bg-[var(--color-surface)] py-20 lg:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:w-2/3"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-[var(--color-primary)] font-medium text-sm mb-6 shadow-sm border border-blue-200 backdrop-blur-sm bg-opacity-80">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--color-primary)] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-[var(--color-primary)]"></span>
            </span>
            Servicio de Urgencias 24/7
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--color-text-main)] mb-6 leading-tight font-heading">
            ¿Tienes un familiar  recien operado o con movildad limitada y necesita una radiografía?
          </h1>

          <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl font-sans">
            Trasladar a un adulto mayor o a un familiar enfermo con movilidad limitada no solo es doloroso, sino que aumenta el riesgo de complicaciones. <strong>Llevamos el equipo de rayos X a tu casa en Piura</strong> para que no tengan que sufrir, dándote resultados rápidos y confiables.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="https://wa.me/51935248862?text=Hola%20Radiografias%20Digital%20a%20Domicilio,%20estuve%20revisando%20su%20página%20web%20y%20deseo%20cotizar."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex justify-center items-center gap-2 bg-[var(--color-primary)] text-white px-8 py-4 rounded-xl hover:bg-[var(--color-primary-dark)] transition-all shadow-lg hover:shadow-xl font-medium text-lg focus:ring-2 focus:ring-offset-2 focus:ring-[var(--color-primary)]"
              aria-label="Pedir Radiografía Ahora por WhatsApp"
            >
              Pedir Radiografía a Domicilio Ahora
              <ArrowRight className="w-5 h-5" />
            </a>
            <Link href="/domicilio" className="inline-flex justify-center items-center gap-2 bg-white/80 backdrop-blur-md text-[var(--color-text-main)] border-2 border-transparent shadow-sm px-8 py-4 rounded-xl hover:border-[var(--color-primary)] transition-all font-medium text-lg focus:ring-2 focus:ring-offset-2 focus:ring-[var(--color-primary)]">
              ¿Cómo funciona?
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Decorative Glassmorphism */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/3 lg:translate-x-1/4 opacity-30 lg:opacity-100 pointer-events-none"
      >
        <div className="w-[600px] h-[600px] bg-gradient-to-tr from-[var(--color-primary)] to-[var(--color-secondary)] rounded-full blur-3xl opacity-20 mix-blend-multiply"></div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
