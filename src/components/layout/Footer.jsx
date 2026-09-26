import { Phone, Mail, MapPin } from 'lucide-react';
import Link from 'next/link';
import Logo from './Logo';

const Footer = () => {
  return (
    <footer className="bg-[var(--color-text-main)] text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">

          <div>
            <div className="flex items-center gap-2 mb-6">
              <Logo className="w-10 h-10 shadow-md rounded-xl" />
              <span className="font-heading font-bold text-xl">
                Radiografia <span className="text-[var(--color-primary)]">Portátil</span>
              </span>
            </div>
            <p className="text-gray-400 mb-6 font-sans">
              Servicio de radiología digital portátil a domicilio en Piura. Calidad diagnóstica en la comodidad de tu hogar o clínica.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-heading font-semibold mb-6">Servicios</h3>
            <ul className="space-y-4">
              <li>
                <Link href="/domicilio" className="text-gray-400 hover:text-white transition-colors">Radiografía a Domicilio</Link>
              </li>
              <li>
                <Link href="/quirofano" className="text-gray-400 hover:text-white transition-colors">Servicio para Quirófano </Link>
              </li>
              <li>
                <Link href="/medicina-ocupacional" className="text-gray-400 hover:text-white transition-colors">Medicina Ocupacional</Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-400 hover:text-white transition-colors">Blog</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-heading font-semibold mb-6">Contacto Directo</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-[var(--color-primary)] shrink-0 mt-0.5" />
                <div>
                  <p className="text-gray-400 text-sm">Urgencias </p>
                  <a href="tel:+51935248862" className="text-white hover:text-[var(--color-primary)] transition-colors">+51 935 248 862</a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-[var(--color-primary)] shrink-0 mt-0.5" />
                <div>
                  <p className="text-gray-400 text-sm">Email</p>
                  <a href="mailto:radiografiadigitalpiura@gmail.com" className="text-white hover:text-[var(--color-primary)] transition-colors">radiografiaportatilpiura@gmail.com</a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[var(--color-primary)] shrink-0 mt-0.5" />
                <div>
                  <p className="text-gray-400 text-sm">Cobertura</p>
                  <span className="text-white"> Piura, Veintiséis de Octubre, Castilla, Catacaos y zonas aledañas según disponibilidad.</span>
                </div>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Radiografia Digital Portatil. Todos los derechos reservados 2026.
          </p>
          <div className="flex gap-4">
            <Link href="/terminos" className="text-gray-400 hover:text-white text-sm transition-colors">Términos de Servicio</Link>
            <Link href="/privacidad" className="text-gray-400 hover:text-white text-sm transition-colors">Política de Privacidad</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
