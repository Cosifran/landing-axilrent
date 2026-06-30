import Link from 'next/link';
import { MobileMenuToggle } from './mobile-menu-toggle';
import { cn } from '@/lib/utils';

// TODO: nav labels are placeholders pending section confirmation
const navLinks = [
  { href: '#problema', label: 'Problema' },
  { href: '#soluciones', label: 'Soluciones' },
  { href: '#producto', label: 'Producto' },
  { href: '#faq', label: 'FAQ' },
];

export function Nav() {
  return (
    <nav
      id="navbar"
      className={cn(
        'fixed top-0 z-50 w-full bg-surface-container-lowest/80 shadow-sm backdrop-blur-md',
        'transition-shadow',
      )}
    >
      <div className="mx-auto flex h-16 max-w-container items-center justify-between px-margin-mobile md:px-stack-md">
        <Link href="/" className="flex items-center gap-stack-sm">
          <span className="material-symbols-filled font-material-symbols text-headline-lg text-primary">
            apartment
          </span>
          <span className="font-hanken text-headline-lg-mobile font-bold text-on-surface">
            Axil
          </span>
        </Link>

        <div className="hidden items-center gap-stack-md md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-body-md text-on-surface transition-colors hover:text-primary"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="#contacto"
            className={cn(
              'rounded-md bg-primary px-stack-md py-stack-sm text-body-md font-medium text-on-primary',
              'transition-colors hover:bg-primary-container',
            )}
          >
            Demo
          </Link>
        </div>

        <MobileMenuToggle />
      </div>
    </nav>
  );
}
