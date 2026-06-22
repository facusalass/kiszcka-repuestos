import Link from 'next/link';
import Image from 'next/image';
import { MapPin, Clock, ChevronRight, MessageCircle } from 'lucide-react';

const logoUrl = 'https://res.cloudinary.com/dcasnymut/image/upload/v1781913298/logoalejpg.jpg_zfj6yj.jpg';

export function Footer() {
  return (
    <footer className="bg-[#0B1E3B] text-white pt-8 md:pt-10 pb-5 md:pb-7 border-t-[4px] border-[#22D3EE] w-full">
      <div className="w-full max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-12 gap-6 lg:gap-10 mb-6 md:mb-8 scroll-reveal">
          
          {/* Logo & Brand (Toma 4 columnas) */}
          <div className="md:col-span-4 lg:col-span-5">
            <div className="flex items-center gap-3 mb-3 md:mb-4">
              {/* Isologo */}
              <div className="relative h-14 w-14 shrink-0 md:h-16 md:w-16">
                <Image
                  src={logoUrl}
                  alt="Logo Kiszcka Repuestos"
                  fill
                  sizes="(min-width: 768px) 64px, 56px"
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col justify-center">
                <h3 className="text-xl font-bold uppercase tracking-tight leading-none flex items-baseline gap-1 font-montserrat">
                  Kiszcka <span className="font-medium text-gray-300">Repuestos</span>
                </h3>
                <p className="text-[10px] text-[#22D3EE] font-montserrat font-bold tracking-[0.2em] uppercase mt-1">
                  Especialistas Mercedes-Benz
                </p>
              </div>
            </div>
            <p className="text-slate-400 text-[13px] md:text-[15px] font-light leading-relaxed pr-0 md:pr-4">
              Más de 35 años brindando soluciones integrales en repuestos para camiones Mercedes-Benz. Tu socio logístico en Chaco con envíos a todo el país.
            </p>
          </div>

          {/* Enlaces Rápidos (Toma 3 columnas) */}
          <div className="md:col-span-4 lg:col-span-3">
            <h4 className="text-base font-bold mb-3 md:mb-4 text-white uppercase tracking-wider font-montserrat">Navegación</h4>
            <ul className="space-y-2 md:space-y-3">
              <li>
                <Link href="#inicio" className="text-slate-400 font-light hover:text-[#22D3EE] active:text-[#22D3EE] transition-colors flex items-center gap-2 text-[14px] md:text-[15px]">
                  <ChevronRight className="w-4 h-4" /> Inicio
                </Link>
              </li>
              <li>
                <Link href="#catalogo" className="text-slate-400 font-light hover:text-[#22D3EE] active:text-[#22D3EE] transition-colors flex items-center gap-2 text-[14px] md:text-[15px]">
                  <ChevronRight className="w-4 h-4" /> Nuestro Catálogo
                </Link>
              </li>
              <li>
                <Link href="#nosotros" className="text-slate-400 font-light hover:text-[#22D3EE] active:text-[#22D3EE] transition-colors flex items-center gap-2 text-[14px] md:text-[15px]">
                  <ChevronRight className="w-4 h-4" /> Sobre Nosotros
                </Link>
              </li>
              <li>
                <Link href="#contacto" className="text-slate-400 font-light hover:text-[#22D3EE] active:text-[#22D3EE] transition-colors flex items-center gap-2 text-[14px] md:text-[15px]">
                  <ChevronRight className="w-4 h-4" /> Contacto
                </Link>
              </li>
              <li>
                <a href="https://instagram.com/kiszckarepuestos" target="_blank" rel="noopener noreferrer" className="text-slate-400 font-light hover:text-[#22D3EE] active:text-[#22D3EE] transition-colors flex items-center gap-2 text-[14px] md:text-[15px] group">
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
                    className="w-4 h-4 group-hover:scale-110 group-active:scale-110 transition-transform"
                  >
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                  </svg>
                  Instagram Oficial
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info (Toma 5 columnas) */}
          <div className="md:col-span-4 lg:col-span-4">
            <h4 className="text-base font-bold mb-3 md:mb-4 text-white uppercase tracking-wider font-montserrat">Contacto Directo</h4>
            <div className="space-y-3 md:space-y-4">
              
              <a href="https://www.google.com/maps/search/?api=1&query=Av.+25+de+Mayo+1975,+Resistencia,+Chaco" target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 group hover:opacity-80 active:opacity-80 transition-opacity">
                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center flex-shrink-0 group-hover:bg-[#22D3EE]/20 group-active:bg-[#22D3EE]/20 transition-colors">
                  <MapPin className="w-4 h-4 text-[#22D3EE]" strokeWidth={2} />
                </div>
                <div className="pt-1">
                  <p className="text-slate-300 text-[14px] md:text-[15px] leading-tight underline decoration-slate-600 underline-offset-4 mb-1">Av. 25 de Mayo 1975</p>
                  <p className="text-slate-400 text-xs font-light">Resistencia, Chaco</p>
                </div>
              </a>
              
              <div className="flex items-center gap-3 group">
                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center flex-shrink-0 group-hover:bg-[#25D366]/20 transition-colors">
                  <MessageCircle className="w-4 h-4 text-[#25D366]" strokeWidth={2} />
                </div>
                <a href="https://wa.me/5493624540740" target="_blank" rel="noopener noreferrer" className="text-slate-300 text-[14px] md:text-[15px] hover:text-white active:text-white transition-colors">
                  WhatsApp: +54 9 362 454-0740
                </a>
              </div>

              <div className="flex items-start gap-3 group pt-1">
                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center flex-shrink-0 group-hover:bg-[#22D3EE]/20 group-active:bg-[#22D3EE]/20 transition-colors">
                  <Clock className="w-4 h-4 text-[#22D3EE]" strokeWidth={2} />
                </div>
                <div className="pt-1">
                  <p className="text-slate-300 text-[14px] md:text-[15px] leading-tight mb-1">Lun a Vie: 08:00 - 12:30 | 15:30 - 19:30</p>
                  <p className="text-slate-400 text-xs font-light">Sáb: 08:00 - 12:30</p>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Bottom Bar & Créditos Agencia */}
        <div className="border-t border-white/10 pt-4 md:pt-5 flex flex-col md:flex-row justify-between items-center gap-2 md:gap-4 text-xs text-center md:text-left">
          <p className="text-slate-400 font-light">
            © {new Date().getFullYear()} Kiszcka Repuestos. Todos los derechos reservados.
          </p>
          
          <div className="flex flex-wrap items-center justify-center gap-1.5 text-slate-400 group font-light">
            <span>Desarrollado con precisión por</span>
            <a 
              href="#" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white font-bold tracking-wide flex items-center gap-1.5 hover:text-[#22D3EE] active:text-[#22D3EE] transition-colors font-montserrat ml-1"
            >
              AFdevelopers
              <div className="w-1.5 h-1.5 rounded-full bg-[#22D3EE] animate-pulse"></div>
            </a>
          </div>
        </div>
        
      </div>
    </footer>
  );
}
