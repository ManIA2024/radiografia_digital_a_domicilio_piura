import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex-grow flex flex-col items-center justify-center min-h-[60vh] px-4 text-center">
      <h2 className="text-4xl font-bold text-[var(--color-primary)] font-heading mb-4">404 - Página no encontrada</h2>
      <p className="text-gray-600 mb-8 max-w-md">Lo sentimos, la página que estás buscando no existe o ha sido movida.</p>
      <Link 
        href="/" 
        className="bg-[var(--color-primary)] text-white px-6 py-3 rounded-lg hover:bg-[var(--color-primary-dark)] transition-colors focus:ring-2 focus:ring-[var(--color-primary)] focus:ring-offset-2"
        aria-label="Volver al inicio"
      >
        Volver al inicio
      </Link>
    </div>
  );
}
