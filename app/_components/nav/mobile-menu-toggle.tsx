'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

const navLinks = [
  { href: '#problema', label: 'Problema' },
  { href: '#soluciones', label: 'Soluciones' },
  { href: '#producto', label: 'Producto' },
  { href: '#faq', label: 'FAQ' },
];

export function MobileMenuToggle() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const navbar = document.getElementById('navbar');
    if (!navbar) return;

    const handleScroll = () => {
      if (window.scrollY > 20) {
        navbar.classList.add('shadow-md');
      } else {
        navbar.classList.remove('shadow-md');
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="md:hidden">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex h-10 w-10 items-center justify-center rounded-md text-on-surface transition-colors hover:bg-surface-container"
        aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
        aria-expanded={isOpen}
      >
        <span className="material-symbols-filled font-material-symbols text-headline-lg">
          {isOpen ? 'close' : 'menu'}
        </span>
      </button>

      {isOpen && (
        <div className="absolute left-0 right-0 top-16 z-50 border-b border-outline-variant bg-surface-container-lowest/95 p-margin-mobile shadow-ambient backdrop-blur-md">
          <nav className="flex flex-col gap-stack-sm">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="rounded-md px-stack-sm py-stack-sm text-body-md text-on-surface transition-colors hover:bg-surface-container"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="#contacto"
              onClick={() => setIsOpen(false)}
              className={cn(
                'rounded-md bg-primary px-stack-md py-stack-sm text-center text-body-md font-medium text-on-primary',
                'transition-colors hover:bg-primary-container',
              )}
            >
              Solicitar Demo
            </Link>
          </nav>
        </div>
      )}
    </div>
  );
}
