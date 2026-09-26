import React from 'react';

export const metadata = {
  title: 'Políticas de Privacidad | Radiografía Portátil Piura',
  description: 'Políticas de privacidad y protección de datos personales del servicio de radiografía digital a domicilio.',
};

export default function PrivacidadPage() {
  return (
    <div className="pt-32 pb-16 min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-heading font-bold text-[var(--color-text-main)] mb-8">
          Política de Privacidad
        </h1>
        
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-12 space-y-8 text-gray-700 font-sans">
          
          <section>
            <h2 className="text-2xl font-heading font-semibold text-[var(--color-text-main)] mb-4">1. Información que recopilamos</h2>
            <p className="mb-4">
              En <strong>Radiografía Digital Portátil Piura</strong> recopilamos información personal necesaria para brindar nuestros servicios de salud. Esto incluye:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Información de contacto (nombre, dirección, número de teléfono, correo electrónico).</li>
              <li>Información médica pertinente (orden médica, antecedentes relevantes para el estudio).</li>
              <li>Imágenes médicas (radiografías) generadas durante el servicio.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-heading font-semibold text-[var(--color-text-main)] mb-4">2. Uso de la información</h2>
            <p className="mb-4">
              La información recopilada se utiliza exclusivamente para:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Coordinar y realizar el servicio radiológico a domicilio.</li>
              <li>Generar y entregar los informes radiológicos correspondientes.</li>
              <li>Comunicarnos con el paciente o sus familiares sobre citas y resultados.</li>
              <li>Fines de facturación y cumplimiento de obligaciones legales y fiscales.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-heading font-semibold text-[var(--color-text-main)] mb-4">3. Protección de Datos Médicos (Confidencialidad)</h2>
            <p className="mb-4">
              Toda la información médica y resultados de estudios son tratados con estricta confidencialidad médica. Las imágenes digitales y los informes se almacenan en sistemas seguros y solo se comparten con:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>El paciente o la persona autorizada legalmente.</li>
              <li>El médico tratante especificado en la orden médica.</li>
              <li>El médico radiólogo encargado de realizar el informe.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-heading font-semibold text-[var(--color-text-main)] mb-4">4. Compartir Información con Terceros</h2>
            <p className="mb-4">
              No vendemos, alquilamos ni compartimos su información personal con terceros para fines comerciales. La información solo será revelada a autoridades competentes cuando la ley así lo exija.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-heading font-semibold text-[var(--color-text-main)] mb-4">5. Seguridad de los Datos</h2>
            <p className="mb-4">
              Implementamos medidas de seguridad técnicas y organizativas para proteger sus datos personales y médicos contra el acceso, alteración, divulgación o destrucción no autorizados. Sin embargo, ningún sistema de transmisión o almacenamiento electrónico es 100% seguro.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-heading font-semibold text-[var(--color-text-main)] mb-4">6. Derechos del Usuario (ARCO)</h2>
            <p className="mb-4">
              De acuerdo con la Ley de Protección de Datos Personales del Perú (Ley Nº 29733), usted tiene derecho a Acceder, Rectificar, Cancelar u Oponerse (Derechos ARCO) al tratamiento de sus datos personales. Para ejercer estos derechos, puede contactarnos a través de radiografiaportatilpiura@gmail.com o nuestro número de WhatsApp.
            </p>
          </section>

          <div className="pt-8 border-t border-gray-100 text-sm text-gray-500">
            Última actualización: {new Date().toLocaleDateString('es-PE')}
          </div>
        </div>
      </div>
    </div>
  );
}
