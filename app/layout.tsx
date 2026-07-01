import type { Metadata, Viewport } from 'next';
import { Hanken_Grotesk, Inter } from 'next/font/google';
import './globals.css';
import { Nav } from './_components/nav/nav';
import { Footer } from './_components/footer/footer';

const hankenGrotesk = Hanken_Grotesk({
  variable: '--font-hanken-grotesk',
  subsets: ['latin'],
  weight: ['400', '600', '700', '800'],
});

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  weight: ['400', '500', '600'],
});

export const metadata: Metadata = {
  title: 'Axil - Digitalización de Alquileres en República Dominicana',
  description:
    'Axil digitaliza la gestión de alquileres en República Dominicana para propietarios, inquilinos y administradores de propiedades.',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${hankenGrotesk.variable} ${inter.variable} scroll-smooth`}>
      {/* eslint-disable-next-line @next/next/no-page-custom-font */}
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,0&display=swap"
      />
      <body className="min-h-screen font-inter text-on-surface antialiased">
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
