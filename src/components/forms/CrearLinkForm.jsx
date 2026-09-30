"use client";

import React, { useState } from 'react';

const CrearLinkForm = () => {
  const [showModal, setShowModal] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    nombreCompleto: '',
    dni: '',
    celular: '',
    email: '',
    tipoExamen: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    // Validación DNI: Solo números y máximo 8 dígitos
    if (name === 'dni') {
      const onlyNums = value.replace(/[^0-9]/g, '');
      if (onlyNums.length <= 8) {
        setFormData(prev => ({ ...prev, [name]: onlyNums }));
      }
      return;
    }
    
    // Validación Celular: Permite números, espacios y +, máximo 15 caracteres
    if (name === 'celular') {
      const formatted = value.replace(/[^0-9\s+]/g, '');
      if (formatted.length <= 15) {
        setFormData(prev => ({ ...prev, [name]: formatted }));
      }
      return;
    }

    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Pequeño delay para UX
    setTimeout(() => {
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
      setIsSubmitting(false);
    }, 800);
  };

  return (
    <div className="max-w-xl mx-auto w-full relative z-10">
      {/* Decorative background elements */}
      <div className="absolute -top-10 -left-10 w-40 h-40 bg-[#116A5B] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-teal-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      
      <div className="relative p-8 sm:p-10 bg-white/80 backdrop-blur-xl border border-white/50 rounded-[2rem] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] mb-8 transition-all hover:shadow-[0_30px_70px_-15px_rgba(17,106,91,0.15)] overflow-hidden group">
        
        {/* Subtle shine effect */}
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000 ease-in-out pointer-events-none"></div>

        <div className="relative z-10 text-center mb-10">
          <h2 className="text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-slate-800 to-[#116A5B] mb-3">
            Crear Link de Examen
          </h2>
          <p className="text-slate-500 text-sm font-medium">
            Ingresa tus datos y obtén tu enlace seguro al instante
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
          <div className="space-y-6">
            
            {/* Nombre Completo */}
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none text-slate-400">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <input
                type="text"
                id="nombreCompleto"
                name="nombreCompleto"
                value={formData.nombreCompleto}
                onChange={handleChange}
                required
                className="peer w-full pl-12 pr-5 py-4 bg-white/50 border border-slate-200 rounded-2xl focus:bg-white focus:ring-4 focus:ring-[#116A5B]/10 focus:border-[#116A5B] outline-none transition-all text-slate-700 placeholder-transparent"
                placeholder="Nombre Completo"
              />
              <label 
                htmlFor="nombreCompleto" 
                className="absolute left-11 -top-2.5 bg-white/90 backdrop-blur-sm px-1.5 text-xs font-semibold text-[#116A5B] transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-slate-400 peer-placeholder-shown:top-4 peer-focus:-top-2.5 peer-focus:text-xs peer-focus:text-[#116A5B] rounded"
              >
                Nombre Completo <span className="text-red-500">*</span>
              </label>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* DNI */}
              <div>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none text-slate-400">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" />
                    </svg>
                  </div>
                  <input
                    type="text"
                    id="dni"
                    name="dni"
                    value={formData.dni}
                    onChange={handleChange}
                    required
                    minLength={8}
                    maxLength={8}
                    className="peer w-full pl-12 pr-5 py-4 bg-white/50 border border-slate-200 rounded-2xl focus:bg-white focus:ring-4 focus:ring-[#116A5B]/10 focus:border-[#116A5B] outline-none transition-all text-slate-700 placeholder-transparent"
                    placeholder="DNI"
                  />
                  <label 
                    htmlFor="dni" 
                    className="absolute left-11 -top-2.5 bg-white/90 backdrop-blur-sm px-1.5 text-xs font-semibold text-[#116A5B] transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-slate-400 peer-placeholder-shown:top-4 peer-focus:-top-2.5 peer-focus:text-xs peer-focus:text-[#116A5B] rounded"
                  >
                    DNI <span className="text-red-500">*</span>
                  </label>
                </div>
                <p className="text-xs text-slate-400 mt-1.5 ml-1">Para verificar tu identidad</p>
              </div>

              {/* Celular */}
              <div>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none text-slate-400">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <input
                    type="tel"
                    id="celular"
                    name="celular"
                    value={formData.celular}
                    onChange={handleChange}
                    required
                    className="peer w-full pl-12 pr-5 py-4 bg-white/50 border border-slate-200 rounded-2xl focus:bg-white focus:ring-4 focus:ring-[#116A5B]/10 focus:border-[#116A5B] outline-none transition-all text-slate-700 placeholder-transparent"
                    placeholder="Celular (WhatsApp)"
                  />
                  <label 
                    htmlFor="celular" 
                    className="absolute left-11 -top-2.5 bg-white/90 backdrop-blur-sm px-1.5 text-xs font-semibold text-[#116A5B] transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-slate-400 peer-placeholder-shown:top-4 peer-focus:-top-2.5 peer-focus:text-xs peer-focus:text-[#116A5B] rounded"
                  >
                    Celular <span className="text-red-500">*</span>
                  </label>
                </div>
                <p className="text-xs text-slate-400 mt-1.5 ml-1">Contacto vía WhatsApp</p>
              </div>
            </div>

            {/* Email */}
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none text-slate-400">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="peer w-full pl-12 pr-5 py-4 bg-white/50 border border-slate-200 rounded-2xl focus:bg-white focus:ring-4 focus:ring-[#116A5B]/10 focus:border-[#116A5B] outline-none transition-all text-slate-700 placeholder-transparent"
                placeholder="Correo Electrónico"
              />
              <label 
                htmlFor="email" 
                className="absolute left-11 -top-2.5 bg-white/90 backdrop-blur-sm px-1.5 text-xs font-semibold text-[#116A5B] transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-slate-400 peer-placeholder-shown:top-4 peer-focus:-top-2.5 peer-focus:text-xs peer-focus:text-[#116A5B] rounded"
              >
                Correo Electrónico <span className="text-red-500">*</span>
              </label>
            </div>

            {/* Tipo de Examen */}
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none text-slate-400">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <select
                id="tipoExamen"
                name="tipoExamen"
                value={formData.tipoExamen}
                onChange={handleChange}
                required
                className="w-full pl-12 pr-10 py-4 bg-white/50 border border-slate-200 rounded-2xl focus:bg-white focus:ring-4 focus:ring-[#116A5B]/10 focus:border-[#116A5B] outline-none transition-all text-slate-700 appearance-none font-medium cursor-pointer"
              >
                <option value="" disabled>Seleccione un examen *</option>
                <option value="Radiografía">Radiografía Digital</option>
                <option value="Resonancia Magnetica (RM)">Resonancia Magnética Nuclear (RMN)</option>
                <option value="Tomografía (TAC)">Tomografía Espiral Multicorte (TEM)</option>
                <option value="Mamografía">Mamografía Digital</option>
                <option value="Otros">Otros</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-5 text-slate-500">
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
              </div>
            </div>
          </div>

          <div className="flex items-center mt-6 p-4 bg-slate-50/50 rounded-xl border border-slate-100">
            <div className="flex items-center h-5">
              <input
                id="terms"
                name="terms"
                type="checkbox"
                required
                className="w-5 h-5 text-[#116A5B] bg-white border-slate-300 rounded focus:ring-[#116A5B] focus:ring-2 focus:ring-offset-1 cursor-pointer transition-colors"
              />
            </div>
            <div className="ml-3 text-sm">
              <label htmlFor="terms" className="font-medium text-slate-600 cursor-pointer select-none">
                He leído y acepto la{' '}
                <button
                  type="button"
                  onClick={() => setShowModal(true)}
                  className="text-[#116A5B] hover:text-[#0e584b] hover:underline font-bold focus:outline-none transition-colors"
                >
                  Política de privacidad
                </button>
              </label>
            </div>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className={`group relative w-full bg-gradient-to-r from-[#116A5B] to-teal-600 hover:from-[#0e584b] hover:to-[#116A5B] text-white font-bold py-4 px-6 rounded-2xl transition-all duration-300 overflow-hidden flex items-center justify-center gap-3 mt-8 ${
              isSubmitting ? 'opacity-90 cursor-wait' : 'transform hover:-translate-y-1 hover:shadow-[0_15px_30px_-10px_rgba(17,106,91,0.5)]'
            }`}
          >
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out"></div>
            
            {isSubmitting ? (
              <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white relative z-10" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 shrink-0 relative z-10 group-hover:translate-x-1.5 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            )}
            <span className="relative z-10 text-lg tracking-wide">
              {isSubmitting ? 'Redirigiendo...' : 'Solicitar Link Seguro'}
            </span>
          </button>
        </form>
      </div>

      {/* Footer personalizado del servicio */}
      <footer className="text-center text-sm text-slate-500 font-medium">
        <p>Convertimos tus estudios en CD/DVD a <span className="text-[#116A5B] font-bold">links digitales seguros</span>.</p>
      </footer>

      {/* Modal Política de Privacidad */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md transition-opacity">
          <div className="bg-white rounded-3xl shadow-2xl max-w-lg w-full max-h-[85vh] overflow-hidden flex flex-col relative animate-fade-in-up">
            <div className="p-6 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
              <h3 className="text-xl font-bold text-slate-800">Política de Privacidad</h3>
              <button
                onClick={() => setShowModal(false)}
                className="text-slate-400 hover:text-rose-500 bg-white hover:bg-rose-50 rounded-full p-2 transition-colors focus:outline-none shadow-sm"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="p-6 overflow-y-auto text-sm text-slate-600 space-y-5 custom-scrollbar">
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Última actualización: 2026</p>

              <div>
                <h4 className="text-base font-bold text-slate-800 mb-2 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#116A5B]"></span>
                  ¿Qué datos guardamos?
                </h4>
                <p className="mb-2">Para brindarte acceso a tu estudio médico, este portal almacena:</p>
                <ul className="list-disc pl-5 space-y-1.5 text-slate-500">
                  <li>Tu estudio de imágenes médicas (DICOM), asociado a tu historia clínica en el hospital.</li>
                  <li>Tu número de documento de identidad, usado únicamente para verificar que sos vos quien accede.</li>
                  <li>Un código de acceso temporal generado por el personal del hospital.</li>
                  <li>Registros técnicos básicos (fecha de acceso, dirección IP) por motivos de seguridad.</li>
                </ul>
              </div>

              <div>
                <h4 className="text-base font-bold text-slate-800 mb-2 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#116A5B]"></span>
                  ¿Para qué usamos estos datos?
                </h4>
                <p className="text-slate-500">Exclusivamente para permitirte visualizar tu propio estudio médico de forma segura, sin necesidad de retirar un CD físico. No usamos tus datos con fines comerciales, publicitarios, ni los compartimos con terceros ajenos al hospital.</p>
              </div>

              <div>
                <h4 className="text-base font-bold text-slate-800 mb-2 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#116A5B]"></span>
                  ¿Cuánto tiempo se conservan?
                </h4>
                <p className="text-slate-500">El acceso a tu estudio vence automáticamente a los días indicados al momento de entregarte el código (normalmente 30 días). Una vez vencido, el estudio se elimina de este portal de forma automática. Esto no afecta la conservación de tu historia clínica, que el hospital mantiene según la normativa vigente.</p>
              </div>

              <div>
                <h4 className="text-base font-bold text-slate-800 mb-2 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#116A5B]"></span>
                  ¿Con quién se comparte la información?
                </h4>
                <p className="text-slate-500">Tus datos no se comparten con terceros. Únicamente el personal autorizado del hospital puede generar accesos a estudios, y vos accedés a tu propio estudio mediante el código y tu documento de identidad.</p>
              </div>

              <div>
                <h4 className="text-base font-bold text-slate-800 mb-2 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#116A5B]"></span>
                  Tus derechos
                </h4>
                <p className="text-slate-500">De acuerdo con la Ley de Protección de Datos Personales del Perú (Ley N° 29733), podés solicitar en cualquier momento: acceso a tus datos, rectificación, cancelación u oposición a su tratamiento, contactando directamente al hospital.</p>
              </div>
            </div>

            <div className="p-5 border-t border-slate-100 bg-slate-50/50 flex justify-end">
              <button
                onClick={() => setShowModal(false)}
                className="bg-[#116A5B] hover:bg-[#0e584b] text-white px-8 py-2.5 rounded-xl transition-all shadow-sm hover:shadow-md font-bold focus:outline-none focus:ring-4 focus:ring-[#116A5B]/20"
              >
                Entendido
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CrearLinkForm;
