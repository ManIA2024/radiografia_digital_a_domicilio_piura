import React from 'react';
import CrearLinkForm from '../../components/forms/CrearLinkForm';

export const metadata = {
  title: 'Crear Link | Radiografía Digital Portátil',
  description: 'Completa tus datos para solictar Creacion de Link por WhatsApp.',
};

export default function CrearLinkPage() {
  return (
    <main className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <CrearLinkForm />
      </div>
    </main>
  );
}
