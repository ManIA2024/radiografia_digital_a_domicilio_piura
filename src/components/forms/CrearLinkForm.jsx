"use client";

import React, { useState } from 'react';

const CrearLinkForm = () => {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    nombreCompleto: '',
    dni: '',
    celular: '',
    email: '',
    tipoExamen: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const numeroWhatsApp = '51935248862';
    const mensaje = `Hola, me gustaría solicitar la creacion de un Link para mi(s) examen(es). Aquí están mis datos:
*Nombre Completo:* ${formData.nombreCompleto}
*DNI:* ${formData.dni}
*Número de Celular:* ${formData.celular}
*Email:* ${formData.email}
*Tipo de Examen:* ${formData.tipoExamen}`;

    const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensaje)}`;

    // Abrir WhatsApp en una nueva pestaña
    window.open(url, '_blank');
  };

  return (
    <div className="max-w-md mx-auto mt-10 mb-10 px-4">
      <div className="p-8 bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] mb-8">
        <h2 className="text-2xl font-bold text-slate-800 mb-2">Crear Link de Examen</h2>
        <p className="text-slate-500 text-sm mb-8">Completa el formulario para enviarnos tus datos.</p>

        <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label htmlFor="nombreCompleto" className="block text-sm font-medium text-slate-600 mb-1.5">Nombre Completo</label>
          <input
            type="text"
            id="nombreCompleto"
            name="nombreCompleto"
            value={formData.nombreCompleto}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-[#116A5B]/20 focus:border-[#116A5B] outline-none transition-all text-slate-700"
            placeholder="Ej: Juan Pérez"
          />
        </div>

        <div>
          <label htmlFor="dni" className="block text-sm font-medium text-slate-600 mb-1.5">DNI</label>
          <input
            type="text"
            id="dni"
            name="dni"
            value={formData.dni}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-[#116A5B]/20 focus:border-[#116A5B] outline-none transition-all text-slate-700"
            placeholder="Ej: 12345678"
          />
        </div>

        <div>
          <label htmlFor="celular" className="block text-sm font-medium text-slate-600 mb-1.5">Número de Celular (WhatsApp)</label>
          <input
            type="tel"
            id="celular"
            name="celular"
            value={formData.celular}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-[#116A5B]/20 focus:border-[#116A5B] outline-none transition-all text-slate-700"
            placeholder="Ej: 999 999 999"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-slate-600 mb-1.5">Correo Electrónico</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-[#116A5B]/20 focus:border-[#116A5B] outline-none transition-all text-slate-700"
            placeholder="Ej: correo@ejemplo.com"
          />
        </div>

        <div>
          <label htmlFor="tipoExamen" className="block text-sm font-medium text-slate-600 mb-1.5">Tipo de Examen</label>
          <select
            id="tipoExamen"
            name="tipoExamen"
            value={formData.tipoExamen}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-[#116A5B]/20 focus:border-[#116A5B] outline-none transition-all text-slate-700 appearance-none"
          >
            <option value="" disabled>Seleccione un examen</option>
            <option value="Radiografía">Radiografía</option>
            <option value="Resonancia Magnetica (RM)">Resonancia Magnetica (RM)</option>
            <option value="Tomografía (TAC)">Tomografía (TAC)</option>
            <option value="Mamografía">Mamografía</option>
            <option value="Otros">Otros</option>
          </select>
        </div>

        <div className="flex items-start mt-4">
          <div className="flex items-center h-5">
            <input
              id="terms"
              name="terms"
              type="checkbox"
              required
              className="w-4 h-4 text-[#116A5B] bg-slate-50 border-slate-300 rounded focus:ring-[#116A5B] focus:ring-2 cursor-pointer"
            />
          </div>
          <div className="ml-3 text-sm">
            <label htmlFor="terms" className="font-medium text-slate-700 cursor-pointer">
              He leído y acepto la{' '}
              <button
                type="button"
                onClick={() => setShowModal(true)}
                className="text-[#116A5B] hover:underline focus:outline-none"
              >
                Política de privacidad
              </button>
            </label>
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-[#116A5B] hover:bg-[#0e584b] text-white font-semibold py-3.5 px-4 rounded-xl transition-colors flex items-center justify-center gap-2 mt-8 shadow-sm"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
          </svg>
          Enviar a WhatsApp
        </button>
      </form>
      </div>

      {/* Footer personalizado del servicio */}
      <footer className="text-center text-sm text-slate-500 space-y-1">
        <p>© 2026 Todos los derechos reservados —</p>
        <p>
          radiografiadigitalportatil.pe ·{' '}
          <button 
            onClick={() => setShowModal(true)} 
            className="hover:text-slate-700 hover:underline transition-colors focus:outline-none"
          >
            Política de privacidad
          </button>
        </p>
      </footer>

      {/* Modal Política de Privacidad */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm transition-opacity">
          <div className="bg-white rounded-2xl shadow-xl max-w-lg w-full max-h-[80vh] overflow-y-auto p-6 relative">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 transition-colors focus:outline-none"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            <h3 className="text-xl font-bold text-slate-800 mb-4">Política de privacidad</h3>
            
            <div className="text-sm text-slate-600 space-y-4">
              <p><strong>Última actualización:</strong> 2026</p>
              
              <h4 className="font-semibold text-slate-700 mt-6">¿Qué datos guardamos?</h4>
              <p>Para brindarte acceso a tu estudio médico, este portal almacena:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Tu estudio de imágenes médicas (DICOM), asociado a tu historia clínica en el hospital.</li>
                <li>Tu número de documento de identidad, usado únicamente para verificar que sos vos quien accede.</li>
                <li>Un código de acceso temporal generado por el personal del hospital.</li>
                <li>Registros técnicos básicos (fecha de acceso, dirección IP) por motivos de seguridad.</li>
              </ul>

              <h4 className="font-semibold text-slate-700 mt-6">¿Para qué usamos estos datos?</h4>
              <p>Exclusivamente para permitirte visualizar tu propio estudio médico de forma segura, sin necesidad de retirar un CD físico. No usamos tus datos con fines comerciales, publicitarios, ni los compartimos con terceros ajenos al hospital.</p>

              <h4 className="font-semibold text-slate-700 mt-6">¿Cuánto tiempo se conservan?</h4>
              <p>El acceso a tu estudio vence automáticamente a los días indicados al momento de entregarte el código (normalmente 30 días). Una vez vencido, el estudio se elimina de este portal de forma automática. Esto no afecta la conservación de tu historia clínica, que el hospital mantiene según la normativa vigente.</p>

              <h4 className="font-semibold text-slate-700 mt-6">¿Con quién se comparte la información?</h4>
              <p>Tus datos no se comparten con terceros. Únicamente el personal autorizado del hospital puede generar accesos a estudios, y vos accedés a tu propio estudio mediante el código y tu documento de identidad.</p>

              <h4 className="font-semibold text-slate-700 mt-6">Tus derechos</h4>
              <p>De acuerdo con la Ley de Protección de Datos Personales del Perú (Ley N° 29733), podés solicitar en cualquier momento: acceso a tus datos, rectificación, cancelación u oposición a su tratamiento, contactando directamente al hospital.</p>

              <h4 className="font-semibold text-slate-700 mt-6">Contacto</h4>
              <p>Ante cualquier consulta sobre tus datos o este portal, podés escribirnos por WhatsApp desde el botón disponible en la página principal.</p>
            </div>
            
            <div className="mt-8 flex justify-end">
              <button
                onClick={() => setShowModal(false)}
                className="bg-[#116A5B] hover:bg-[#0e584b] text-white px-6 py-2 rounded-xl transition-colors font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#116A5B]"
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CrearLinkForm;
