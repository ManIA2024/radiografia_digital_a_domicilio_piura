import React from 'react';
import CrearLinkForm from '../../components/forms/CrearLinkForm';

export const metadata = {
  title: '¿Tienes tus estudios en CD, pero necesitas un link para visualizarlos?',
  description: 'Completa tus datos para solictar Creacion de Link por WhatsApp.',
};

export default function CrearLinkPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-slate-100 to-[#116A5B]/10 py-16 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
      <div className="w-full max-w-7xl mx-auto">
        <CrearLinkForm />
      </div>
    </main>
  );
}
