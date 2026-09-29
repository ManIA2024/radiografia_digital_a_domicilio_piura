"use client";

import { useState, useEffect } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight, Home, Activity, Briefcase } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const slides = [
  {
    id: 1,
    tag: "Servicio de Urgencias 24/7",
    title: "Evita traslados dolorosos para tus seres queridos",
    description: "Mover a un familiar postrado o recién operado hacia una clínica puede empeorar su estado. Llevamos nuestra unidad de Rayos X digital directamente a tu casa en Piura, entregando imágenes nítidas en minutos.",
    ctaWhatsApp: "Pedir Radiografía a Domicilio",
    linkInfo: "/domicilio",
    whatsappMessage: "Hola Radiografias Digital a Domicilio, estuve revisando su página web y deseo cotizar una radiografía a domicilio.",
    icon: Home,
    gradient: "from-blue-500 to-cyan-400",
    shadowColor: "shadow-blue-500/20",
    blobColor: "bg-blue-400/20",
    image: "/images/hero/domicilio.jpg"
  },
  {
    id: 2,
    tag: "Servicio para Clínicas",
    title: "Imágenes intraoperatorias al instante",
    description: "No retrases tus cirugías traumatológicas por falta de equipos. Te brindamos apoyo radiológico digital portátil directo en tu quirófano, asegurando precisión milimétrica en tiempo real.",
    ctaWhatsApp: "Cotizar Quirófano",
    linkInfo: "/quirofano",
    whatsappMessage: "Hola Radiografias Digital a Domicilio, deseo cotizar el servicio de apoyo radiológico en quirófano.",
    icon: Activity,
    gradient: "from-indigo-500 to-purple-500",
    shadowColor: "shadow-indigo-500/20",
    blobColor: "bg-purple-400/20",
    image: "/images/hero/quirofano.jpg"
  },
  {
    id: 3,
    tag: "Salud Ocupacional",
    title: "Cero ausentismo en exámenes ocupacionales",
    description: "Que tus trabajadores no pierdan todo el día en clínicas. Instalamos nuestra unidad de Rayos X en tu empresa para realizar placas de tórax y lecturas OIT de forma masiva, rápida y sin afectar la producción.",
    ctaWhatsApp: "Solicitar In House",
    linkInfo: "/medicina-ocupacional",
    whatsappMessage: "Hola Radiografias Digital a Domicilio, deseo información sobre radiografías ocupacionales para mi empresa.",
    icon: Briefcase,
    gradient: "from-emerald-500 to-teal-400",
    shadowColor: "shadow-emerald-500/20",
    blobColor: "bg-emerald-400/20",
    image: "/images/hero/ocupacional.jpg"
  }
];

const SLIDE_DURATION = 8000;

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, SLIDE_DURATION);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  const prevSlide = () => setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

  const CurrentIcon = slides[currentSlide].icon;

  return (
    <section className="relative bg-[var(--color-surface)] pt-24 pb-20 lg:pt-32 lg:pb-32 overflow-hidden lg:min-h-[750px] flex items-center">

      {/* Background Animated Blobs (Subtle) */}
      <AnimatePresence mode="popLayout">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/4 opacity-30 pointer-events-none"
        >
          <div className={`w-[800px] h-[800px] ${slides[currentSlide].blobColor} rounded-full blur-[100px] mix-blend-multiply`}></div>
        </motion.div>
      </AnimatePresence>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

          {/* Text Content */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center min-h-[420px] lg:min-h-[460px]">
            <div className="relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  className="flex flex-col items-start"
                >
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white text-gray-800 font-semibold text-sm mb-6 shadow-sm border border-gray-100"
                  >
                    <span className="relative flex h-2.5 w-2.5">
                      <span className={`animate-ping absolute inline-flex h-full w-full rounded-full bg-gradient-to-r ${slides[currentSlide].gradient} opacity-75`}></span>
                      <span className={`relative inline-flex rounded-full h-2.5 w-2.5 bg-gradient-to-r ${slides[currentSlide].gradient}`}></span>
                    </span>
                    {slides[currentSlide].tag}
                  </motion.div>

                  <motion.h1
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
                    className="text-3xl md:text-5xl lg:text-[3.5rem] font-bold text-[var(--color-text-main)] mb-6 leading-tight font-heading tracking-tight max-w-xl"
                  >
                    {slides[currentSlide].title}
                  </motion.h1>

                  <motion.p
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
                    className="text-lg text-gray-600 mb-8 max-w-xl font-sans leading-relaxed"
                  >
                    {slides[currentSlide].description}
                  </motion.p>

                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
                    className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
                  >
                    <a
                      href={`https://wa.me/51935248862?text=${encodeURIComponent(slides[currentSlide].whatsappMessage)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex justify-center items-center gap-2 bg-gradient-to-r ${slides[currentSlide].gradient} text-white px-7 py-3.5 rounded-xl transition-all shadow-md ${slides[currentSlide].shadowColor} hover:shadow-lg hover:-translate-y-0.5 font-medium text-[1.05rem]`}
                      aria-label="Pedir Radiografía Ahora por WhatsApp"
                    >
                      {slides[currentSlide].ctaWhatsApp}
                      <ArrowRight className="w-5 h-5" />
                    </a>
                    <Link href={slides[currentSlide].linkInfo} className="inline-flex justify-center items-center gap-2 bg-white text-gray-700 border border-gray-200 shadow-sm px-7 py-3.5 rounded-xl hover:bg-gray-50 hover:border-gray-300 transition-all font-medium text-[1.05rem] group">
                      ¿Cómo funciona?
                    </Link>
                  </motion.div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation Controls */}
            <div className="flex justify-center w-full gap-5 items-center mt-12 lg:mt-16">
              <div className="flex gap-2">
                <button
                  onClick={prevSlide}
                  className="p-2.5 rounded-full border border-gray-200 bg-white shadow-sm hover:bg-gray-50 text-gray-600 hover:text-gray-900 transition-all active:scale-95"
                  aria-label="Anterior"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={nextSlide}
                  className="p-2.5 rounded-full border border-gray-200 bg-white shadow-sm hover:bg-gray-50 text-gray-600 hover:text-gray-900 transition-all active:scale-95"
                  aria-label="Siguiente"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
              <div className="flex gap-3">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className="relative h-2 rounded-full overflow-hidden transition-all duration-300 ease-out bg-gray-200"
                    style={{ width: currentSlide === index ? '48px' : '16px' }}
                    aria-label={`Ir a slide ${index + 1}`}
                  >
                    {currentSlide === index && (
                      <motion.div
                        initial={{ width: "0%" }}
                        animate={{ width: "100%" }}
                        transition={{ duration: SLIDE_DURATION / 1000, ease: "linear" }}
                        className={`absolute inset-0 h-full bg-gradient-to-r ${slides[currentSlide].gradient}`}
                      />
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Visual Content (Right Side) */}
          <div className="w-full lg:w-1/2 relative group perspective mt-8 lg:mt-0">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.05 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="relative w-full aspect-[4/3] sm:aspect-video lg:aspect-[4/3] max-w-[560px] mx-auto transition-transform duration-700 ease-out group-hover:-translate-y-2 z-10"
              >
                {/* Image and Background Container */}
                <div className="absolute inset-0 rounded-[2rem] overflow-hidden shadow-2xl transition-shadow duration-700 ease-out group-hover:shadow-[0_20px_50px_rgba(0,0,0,0.15)] z-0">
                  {/* Ken Burns Effect Wrapper */}
                  <motion.div
                    initial={{ scale: 1 }}
                    animate={{ scale: 1.05 }}
                    transition={{ duration: SLIDE_DURATION / 1000, ease: "linear" }}
                    className="absolute inset-0 w-full h-full"
                  >
                    <Image
                      src={slides[currentSlide].image}
                      alt={slides[currentSlide].title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                      priority
                    />
                  </motion.div>

                  {/* Gradient Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-tr ${slides[currentSlide].gradient} opacity-20 mix-blend-overlay transition-opacity duration-500 group-hover:opacity-10`}></div>
                </div>

                <div className="absolute inset-0 border-[4px] border-white/20 rounded-[2rem] z-10 pointer-events-none"></div>

                {/* Floating Icon Badge */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.5, ease: "easeOut" }}
                  className={`absolute -bottom-6 -left-6 w-24 h-24 rounded-2xl bg-gradient-to-tr ${slides[currentSlide].gradient} shadow-[0_10px_30px_rgba(0,0,0,0.2)] flex items-center justify-center text-white z-20 group-hover:scale-110 transition-transform duration-500`}
                >
                  <CurrentIcon className="w-10 h-10" strokeWidth={2} />
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
