"use client";

import { Phone, Menu, X } from 'lucide-react';
import { useState } from 'react';
import Link from 'next/link';
import Logo from './Logo';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full bg-white/80 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center gap-2">
              <Logo className="w-10 h-10 shadow-md rounded-xl" />
              <span className="font-heading font-bold text-xl text-[var(--color-text-main)] hidden sm:block">
                Radiografia <span className="text-[var(--color-primary)]">Portátil</span>
              </span>
            </Link>
          </div>

          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="text-[var(--color-text-main)] hover:text-[var(--color-primary)] transition-colors font-medium">Inicio</Link>
            <Link href="/domicilio" className="text-[var(--color-text-main)] hover:text-[var(--color-primary)] transition-colors font-medium">A Domicilio</Link>
            <Link href="/quirofano" className="text-[var(--color-text-main)] hover:text-[var(--color-primary)] transition-colors font-medium">Para Quirófano</Link>
            <Link href="/medicina-ocupacional" className="text-[var(--color-text-main)] hover:text-[var(--color-primary)] transition-colors font-medium">Med. Ocupacional</Link>
            <Link href="/blog" className="text-[var(--color-text-main)] hover:text-[var(--color-primary)] transition-colors font-medium">Blog</Link>
            <Link href="/contacto" className="text-[var(--color-text-main)] hover:text-[var(--color-primary)] transition-colors font-medium">Contacto</Link>
          </nav>

          <div className="hidden md:flex items-center">
            <a
              href="tel:+51935248862"
              className="flex items-center gap-2 bg-[var(--color-primary)] text-white px-5 py-2.5 rounded-lg hover:bg-[var(--color-primary-dark)] transition-colors shadow-sm font-medium"
            >
              <Phone className="w-5 h-5" />
              <span>Ugencias </span>
            </a>
          </div>

          <div className="flex md:hidden items-center gap-4">
            <a
              href="tel:+51935248862"
              className="flex items-center gap-2 bg-[var(--color-primary)] text-white px-3 py-2 rounded-lg hover:bg-[var(--color-primary-dark)] transition-colors shadow-sm"
              aria-label="Llamar emergencia"
            >
              <Phone className="w-5 h-5" />
            </a>
            <button
              className="text-[var(--color-text-main)] hover:text-[var(--color-primary)]"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Menú"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white border-b border-gray-100">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="/" className="block px-3 py-2 rounded-md text-base font-medium text-[var(--color-text-main)] hover:text-[var(--color-primary)] hover:bg-gray-50" onClick={() => setIsMenuOpen(false)}>Inicio</Link>
            <Link href="/domicilio" className="block px-3 py-2 rounded-md text-base font-medium text-[var(--color-text-main)] hover:text-[var(--color-primary)] hover:bg-gray-50" onClick={() => setIsMenuOpen(false)}>Servicio a Domicilio</Link>
            <Link href="/quirofano" className="block px-3 py-2 rounded-md text-base font-medium text-[var(--color-text-main)] hover:text-[var(--color-primary)] hover:bg-gray-50" onClick={() => setIsMenuOpen(false)}>Para Quirófano</Link>
            <Link href="/medicina-ocupacional" className="block px-3 py-2 rounded-md text-base font-medium text-[var(--color-text-main)] hover:text-[var(--color-primary)] hover:bg-gray-50" onClick={() => setIsMenuOpen(false)}>Medicina Ocupacional</Link>
            <Link href="/blog" className="block px-3 py-2 rounded-md text-base font-medium text-[var(--color-text-main)] hover:text-[var(--color-primary)] hover:bg-gray-50" onClick={() => setIsMenuOpen(false)}>Blog</Link>
            <Link href="/contacto" className="block px-3 py-2 rounded-md text-base font-medium text-[var(--color-text-main)] hover:text-[var(--color-primary)] hover:bg-gray-50" onClick={() => setIsMenuOpen(false)}>Contacto</Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
