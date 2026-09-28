"use client";

import { useState } from 'react';
import { FileText, Send, AlertCircle, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

export default function LibroReclamaciones() {
  const [formData, setFormData] = useState({
    nombres: '',
    apellidos: '',
    tipoDoc: 'DNI',
    numeroDoc: '',
    telefono: '',
    email: '',
    direccion: '',
    tipoBien: 'Servicio',
    montoReclamado: '',
    descripcionBien: '',
    tipoReclamo: 'Reclamo',
    detalleReclamo: '',
    pedidoReclamo: '',
    aceptaVeracidad: false
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí iría la lógica para enviar el reclamo a un backend o servicio de correo
    console.log("Datos del reclamo:", formData);
    setIsSubmitted(true);
    // Simular un envío y luego reiniciar o mostrar mensaje
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full bg-white p-8 rounded-2xl shadow-xl text-center space-y-6 border border-gray-100">
          <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle2 className="w-10 h-10" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900">Reclamo Registrado</h2>
          <p className="text-gray-600">
            Hemos recibido su reclamo/queja de manera exitosa. Nos pondremos en contacto con usted en el plazo establecido por la ley para darle una respuesta.
          </p>
          <div className="pt-4">
            <Link href="/" className="inline-block bg-blue-600 text-white px-8 py-3 rounded-xl font-medium hover:bg-blue-700 transition-colors">
              Volver al Inicio
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-20 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-4xl mx-auto">
        
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 text-blue-600 rounded-2xl mb-6">
            <FileText className="w-8 h-8" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-heading">
            Libro de Reclamaciones Virtual
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Conforme a lo establecido en el Código de Protección y Defensa del Consumidor, esta institución cuenta con un Libro de Reclamaciones a su disposición.
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
          <div className="bg-gray-900 p-6 sm:p-8 text-white">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-sm font-medium text-gray-400 mb-1">Razón Social</h3>
                <p className="font-semibold text-lg">Radiografías Digital a Domicilio S.A.C.</p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-400 mb-1">RUC</h3>
                <p className="font-semibold text-lg">20000000000 <span className="text-sm text-yellow-400 font-normal ml-2">(Actualizar con tu RUC real)</span></p>
              </div>
              <div className="md:col-span-2">
                <h3 className="text-sm font-medium text-gray-400 mb-1">Dirección</h3>
                <p className="font-semibold text-lg">Piura, Perú</p>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="p-6 sm:p-10 space-y-12">
            
            {/* 1. Identificación del Consumidor */}
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2 border-b pb-2 border-gray-100">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 text-blue-600 text-sm">1</span>
                Identificación del Consumidor
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Nombres</label>
                  <input type="text" name="nombres" value={formData.nombres} onChange={handleChange} required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all outline-none bg-gray-50 focus:bg-white" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Apellidos</label>
                  <input type="text" name="apellidos" value={formData.apellidos} onChange={handleChange} required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all outline-none bg-gray-50 focus:bg-white" />
                </div>
                
                <div className="flex gap-4">
                  <div className="w-1/3">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Documento</label>
                    <select name="tipoDoc" value={formData.tipoDoc} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all outline-none bg-gray-50 focus:bg-white">
                      <option value="DNI">DNI</option>
                      <option value="CE">CE</option>
                      <option value="Pasaporte">Pasaporte</option>
                    </select>
                  </div>
                  <div className="w-2/3">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Número</label>
                    <input type="text" name="numeroDoc" value={formData.numeroDoc} onChange={handleChange} required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all outline-none bg-gray-50 focus:bg-white" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Teléfono / Celular</label>
                  <input type="tel" name="telefono" value={formData.telefono} onChange={handleChange} required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all outline-none bg-gray-50 focus:bg-white" />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Correo Electrónico</label>
                  <input type="email" name="email" value={formData.email} onChange={handleChange} required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all outline-none bg-gray-50 focus:bg-white" />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Dirección Completa</label>
                  <input type="text" name="direccion" value={formData.direccion} onChange={handleChange} required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all outline-none bg-gray-50 focus:bg-white" />
                </div>
              </div>
            </section>

            {/* 2. Identificación del Bien Contratado */}
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2 border-b pb-2 border-gray-100">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 text-blue-600 text-sm">2</span>
                Identificación del Bien Contratado
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Tipo de Bien</label>
                  <select name="tipoBien" value={formData.tipoBien} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all outline-none bg-gray-50 focus:bg-white">
                    <option value="Servicio">Servicio</option>
                    <option value="Producto">Producto</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Monto Reclamado (S/)</label>
                  <input type="number" step="0.01" name="montoReclamado" value={formData.montoReclamado} onChange={handleChange} placeholder="Opcional" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all outline-none bg-gray-50 focus:bg-white" />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Descripción del Servicio / Producto</label>
                  <input type="text" name="descripcionBien" value={formData.descripcionBien} onChange={handleChange} required placeholder="Ej: Radiografía de tórax a domicilio" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all outline-none bg-gray-50 focus:bg-white" />
                </div>
              </div>
            </section>

            {/* 3. Detalle de la Reclamación */}
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2 border-b pb-2 border-gray-100">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 text-blue-600 text-sm">3</span>
                Detalle de la Reclamación y Pedido del Consumidor
              </h2>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-4">Tipo (Seleccione uno)</label>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <label className={`flex-1 flex flex-col p-4 border rounded-xl cursor-pointer transition-all ${formData.tipoReclamo === 'Reclamo' ? 'border-blue-500 bg-blue-50/50' : 'border-gray-200 hover:border-blue-300 hover:bg-gray-50'}`}>
                      <div className="flex items-center gap-2 mb-2">
                        <input type="radio" name="tipoReclamo" value="Reclamo" checked={formData.tipoReclamo === 'Reclamo'} onChange={handleChange} className="w-4 h-4 text-blue-600" />
                        <span className="font-semibold text-gray-900">Reclamo</span>
                      </div>
                      <p className="text-xs text-gray-500 ml-6">Disconformidad relacionada a los productos o servicios.</p>
                    </label>
                    <label className={`flex-1 flex flex-col p-4 border rounded-xl cursor-pointer transition-all ${formData.tipoReclamo === 'Queja' ? 'border-blue-500 bg-blue-50/50' : 'border-gray-200 hover:border-blue-300 hover:bg-gray-50'}`}>
                      <div className="flex items-center gap-2 mb-2">
                        <input type="radio" name="tipoReclamo" value="Queja" checked={formData.tipoReclamo === 'Queja'} onChange={handleChange} className="w-4 h-4 text-blue-600" />
                        <span className="font-semibold text-gray-900">Queja</span>
                      </div>
                      <p className="text-xs text-gray-500 ml-6">Disconformidad no relacionada a los productos o servicios; o malestar respecto a la atención al público.</p>
                    </label>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Detalle</label>
                  <textarea name="detalleReclamo" value={formData.detalleReclamo} onChange={handleChange} required rows={4} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all outline-none bg-gray-50 focus:bg-white resize-none" placeholder="Explique claramente el suceso..."></textarea>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Pedido</label>
                  <textarea name="pedidoReclamo" value={formData.pedidoReclamo} onChange={handleChange} required rows={3} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all outline-none bg-gray-50 focus:bg-white resize-none" placeholder="Qué solicita para resolver el problema..."></textarea>
                </div>
              </div>
            </section>

            {/* Declaración */}
            <div className="bg-blue-50/50 p-6 rounded-2xl border border-blue-100 flex gap-4 items-start">
              <input type="checkbox" id="aceptaVeracidad" name="aceptaVeracidad" checked={formData.aceptaVeracidad} onChange={handleChange} required className="w-5 h-5 text-blue-600 rounded mt-1" />
              <label htmlFor="aceptaVeracidad" className="text-sm text-gray-700">
                Declaro bajo juramento que los datos consignados son ciertos y me responsabilizo por la veracidad de los mismos. Asimismo, acepto las <Link href="/privacidad" className="text-blue-600 hover:underline">Políticas de Privacidad</Link> para el tratamiento de mis datos personales en la atención de esta solicitud.
              </label>
            </div>

            <div className="flex justify-end">
              <button type="submit" className="flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-xl font-medium hover:bg-blue-700 transition-all shadow-lg hover:shadow-blue-500/30">
                <Send className="w-5 h-5" />
                Enviar Reclamación
              </button>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}
