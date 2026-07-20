import Link from 'next/link';
import Image from 'next/image';
import { Phone, MapPin, Clock } from 'lucide-react';

// URL actualizada con tu versión en PNG transparente
const logoUrl = 'https://res.cloudinary.com/dcasnymut/image/upload/v1781913298/logoalepng_a0cdei.png';

// Enlaces corregidos con la barra "/" para evitar el bug de Next.js
const navigationItems = [
  { label: 'Inicio', href: '/#inicio' },
  { label: 'Sobre Nosotros', href: '/#nosotros' },
  { label: 'Catálogo', href: '/#catalogo' },
  { label: 'Contacto', href: '/#contacto' },
];

export function Header() {
  return (
    <header className="bg-[#102C57] text-white sticky top-0 z-50 shadow-xl w-full">
      
      {/* Top Bar */}
      <div className="bg-[#0B1E3B] border-b border-white/5 hidden md:block">
        <div className="w-full max-w-[1400px] mx-auto px-4 md:px-8">
          <div className="flex flex-row items-center justify-between py-2 text-[13px] font-light tracking-wide text-gray-300">
            
            {/* Ubicación Exacta */}
            <a 
              href="https://maps.google.com/?q=Av+25+de+Mayo+1975,+Resistencia" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-2 hover:text-white active:text-white transition-colors cursor-pointer group"
              aria-label="Ver ubicación en Av. 25 de Mayo 1975"
            >
              <MapPin className="w-4 h-4 text-gray-400 group-hover:text-[#22D3EE] group-active:text-[#22D3EE] transition-colors" strokeWidth={1.5} />
              <span className="underline decoration-gray-500 underline-offset-4">
                Av. 25 de Mayo 1975
              </span>
            </a>
            
            {/* Horarios y Teléfono */}
            <div className="flex items-center gap-8">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-gray-400" strokeWidth={1.5} />
                <span>Lun-Vie: 8:00 - 12:30 | 15:30 - 19:30</span>
              </div>
              <a 
                href="tel:+5493624540740" 
                className="flex items-center gap-2 hover:text-white active:text-white transition-colors font-medium"
                aria-label="Llamar al teléfono"
              >
                <Phone className="w-4 h-4" strokeWidth={1.5} />
                <span>4462894</span>
              </a>
            </div>
            
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="w-full max-w-[1400px] mx-auto px-4 md:px-8">
        <div className="flex flex-row items-center justify-between gap-3 py-3.5 md:py-4">
          
          {/* Brand Logo Area */}
          <Link 
            href="/#inicio" 
            className="flex min-w-0 items-center group focus:outline-none focus:ring-2 focus:ring-[#22D3EE]/50 rounded-lg"
            aria-label="Volver al inicio - Kiszcka Repuestos"
          >
            <div className="relative h-[70px] w-[230px] sm:h-[75px] sm:w-[250px] md:h-[82px] md:w-[270px] lg:h-[90px] lg:w-[300px] shrink-0 transition-transform duration-300 group-hover:scale-105 group-active:scale-95">
              <Image
                src={logoUrl}
                alt="Logo Kiszcka Repuestos"
                fill
                sizes="(min-width: 1024px) 300px, (min-width: 768px) 270px, 230px"
                className="object-contain brightness-0 invert drop-shadow-md" 
                priority
              />
            </div>
          </Link>

          <nav
            className="hidden xl:flex items-center gap-1 rounded-xl border border-white/10 bg-white/5 px-1.5 py-1"
            aria-label="Navegación principal"
          >
            {navigationItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-lg px-3.5 py-2 text-[12px] font-bold uppercase tracking-wide text-slate-300 transition-colors hover:bg-white/10 active:bg-white/10 hover:text-white active:text-white font-montserrat"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* High-Ticket CTA Button - Instagram */}
          <a
            href="https://instagram.com/kiszckarepuestos"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-white text-[#102C57] p-3 sm:px-5 md:px-6 sm:py-2.5 md:py-3 rounded-lg font-montserrat font-bold text-sm md:text-[15px] tracking-wide shadow-md hover:bg-gray-100 active:bg-gray-100 hover:shadow-lg active:shadow-lg transition-all duration-200 shrink-0 group uppercase"
            aria-label="Visitar nuestro Instagram"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              className="w-4 h-4 md:w-5 md:h-5 transition-transform group-hover:scale-110 group-active:scale-110"
            >
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
            </svg>
            
            <span className="hidden sm:inline">Nuestro Instagram</span>
          </a>

        </div>

        <nav
          className="xl:hidden -mx-4 border-t border-white/10 bg-[#0B1E3B]/45 px-4"
          aria-label="Navegación principal móvil"
        >
          <div className="flex items-center gap-1 overflow-x-auto py-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {navigationItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="shrink-0 rounded-lg px-3 py-2 text-[11px] font-bold uppercase tracking-wide text-slate-300 transition-colors hover:bg-white/10 active:bg-white/10 hover:text-white active:text-white font-montserrat"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </nav>
      </div>
      
    </header>
  );
}