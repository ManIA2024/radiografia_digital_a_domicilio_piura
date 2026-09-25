"use client";

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: "¿Es necesario mover a mi familiar de su cama para tomarle la radiografía?",
    answer: "No, en absoluto. Sabemos lo difícil y doloroso que es trasladar a un paciente de la tercera edad con limitaciones motoras. Nuestro equipo portátil está diseñado para adaptarse al entorno del paciente; podemos realizar la toma de imágenes radiográficas mientras su ser querido permanece cómodamente en su cama o silla, garantizando su total tranquilidad y seguridad durante el proceso."
  },
  {
    question: "¿La calidad de una radiografía en casa es igual a la de un hospital?",
    answer: "Sí, y esa es nuestra mayor garantía. Trabajar a domicilio no significa sacrificar nitidez. Utilizamos equipos de radiología de última generación que nos permiten obtener imágenes digitales con calidad diagnóstica. Estas imágenes son exactamente las mismas que su médico traumatólogo o geriatra requiere para un diagnóstico preciso, sin necesidad de pisar un centro médico."
  },
  {
    question: "¿Cuánto tiempo tendré que esperar para recibir los resultados de la placa?",
    answer: "Entendemos que frente a una posible fractura o dolencia, la angustia familiar es grande. Por eso, nuestro sistema entrega resultados en minutos directamente en formato digital. No tendrá que esperar días hábiles ni realizar trámites adicionales; el médico tratante podrá visualizar las imágenes casi de inmediato para decidir el tratamiento a seguir."
  },
  {
    question: "Mi abuelo sufre de mucho dolor y se asusta fácilmente. ¿El procedimiento es ruidoso o incómodo?",
    answer: "Es un proceso rápido, silencioso y sin estrés. Para evitar los traslados de los pacientes de la tercera edad con limitaciones motoras, llevamos a cabo un protocolo sumamente empático. El equipo no emite ruidos fuertes, y nuestros tecnólogos están capacitados para tratar con adultos mayores, explicando cada paso con paciencia. Todo dura solo unos minutos, y su familiar apenas notará la intervención."
  },
  {
    question: "¿Las imágenes pueden ser enviadas directamente al médico tratante?",
    answer: "Por supuesto. Como generamos imágenes digitales con calidad diagnóstica, se las enviamos a usted de inmediato (vía WhatsApp o correo electrónico) y, si lo desea, podemos compartirlas en paralelo y de forma segura con el médico especialista que esté a cargo del caso. Esto acelera dramáticamente el tiempo de respuesta médica, resolviendo emergencias el mismo día."
  }
];

const FaqAccordion = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Schema.org JSON-LD structured data for FAQs
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <section className="py-20 bg-white">
      {/* Inject GEO Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4 text-[var(--color-text-main)]">
            Preguntas Frecuentes
          </h2>
          <p className="text-gray-600 text-lg">
            Resolvemos tus dudas para que tomes la mejor decisión para la salud de tu familiar.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`border rounded-2xl transition-all duration-300 ${
                openIndex === index ? 'border-[var(--color-primary)] shadow-md bg-white' : 'border-gray-200 bg-[var(--color-surface)] hover:border-gray-300'
              }`}
            >
              <button
                className="w-full text-left px-6 py-5 flex justify-between items-center focus:outline-none"
                onClick={() => toggleFAQ(index)}
                aria-expanded={openIndex === index}
              >
                <span className="font-heading font-semibold text-lg text-[var(--color-text-main)] pr-8">
                  {faq.question}
                </span>
                <ChevronDown 
                  className={`w-5 h-5 text-[var(--color-primary)] transition-transform duration-300 shrink-0 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`} 
                />
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <p className="px-6 pb-6 text-gray-600 font-sans leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqAccordion;
