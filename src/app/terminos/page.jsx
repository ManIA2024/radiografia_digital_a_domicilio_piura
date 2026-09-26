import React from 'react';

export const metadata = {
  title: 'Términos de Servicio | Radiografía Portátil Piura',
  description: 'Términos y condiciones del servicio de radiografía digital portátil a domicilio en Piura, Perú.',
};

export default function TerminosPage() {
  return (
    <div className="pt-32 pb-16 min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-heading font-bold text-[var(--color-text-main)] mb-8">
          Términos de Servicio
        </h1>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-12 space-y-8 text-gray-700 font-sans">

          <section>
            <h2 className="text-2xl font-heading font-semibold text-[var(--color-text-main)] mb-4">1. Aceptación de los Términos</h2>
            <p className="mb-4">
              Al acceder y utilizar los servicios de <strong>Radiografía Digital Portátil Piura</strong>, usted acepta estar sujeto a estos Términos de Servicio. Si no está de acuerdo con alguna parte de los términos, no podrá acceder al servicio.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-heading font-semibold text-[var(--color-text-main)] mb-4">2. Descripción del Servicio</h2>
            <p className="mb-4">
              Proporcionamos servicios de radiología digital portátil a domicilio, clínicas y quirófanos en la ciudad de Piura y alrededores (Castilla, Veintiséis de Octubre, Catacaos). Los servicios son realizados por técnicos radiólogos con experiencia en el área privada y pública.
            </p>
            <p className="mb-4">
              El servicio incluye la toma de la imagen radiográfica y su entrega en formato digital, así como el informe radiológico por parte de un médico radiólogo si ha sido solicitado.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-heading font-semibold text-[var(--color-text-main)] mb-4">3. Programación y Cancelación</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Las citas están sujetas a disponibilidad y a las distancias de traslado dentro de nuestra zona de cobertura.</li>
              <li>Requerimos un preaviso mínimo para cancelaciones. Las cancelaciones en el momento de la llegada de la unidad móvil pueden estar sujetas a cargos por traslado.</li>
              <li>En caso de emergencias médicas que impidan la toma del examen al momento de la llegada, nos reservamos el derecho de reprogramar.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-heading font-semibold text-[var(--color-text-main)] mb-4">4. Requisitos para el Servicio</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Es indispensable contar con la orden médica para la realización de cualquier estudio radiológico.</li>
              <li>El entorno donde se realizará la toma radiográfica debe contar con un tomacorriente estándar funcional.</li>
              <li>El paciente o un familiar responsable debe estar presente durante todo el procedimiento.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-heading font-semibold text-[var(--color-text-main)] mb-4">5. Responsabilidad Médica</h2>
            <p className="mb-4">
              Las imágenes e informes generados son herramientas de apoyo diagnóstico. La responsabilidad del diagnóstico final y tratamiento recae en el médico tratante del paciente. No reemplazamos la consulta médica.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-heading font-semibold text-[var(--color-text-main)] mb-4">6. Modificaciones de los Términos</h2>
            <p className="mb-4">
              Nos reservamos el derecho, a nuestra sola discreción, de modificar o reemplazar estos Términos en cualquier momento. Al continuar accediendo o utilizando nuestro servicio después de que esas revisiones se hagan efectivas, usted acepta estar sujeto a los términos revisados.
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
