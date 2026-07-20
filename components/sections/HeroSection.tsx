"use client";

import { useState } from 'react';
import Image from 'next/image';
import { MessageCircle, CheckCircle2, MapPin, X, ExternalLink, Phone, Clock } from 'lucide-react';

export function HeroSection() {
  // Estado para controlar si el mapa está visible o no
  const [showMap, setShowMap] = useState(false);

  return (
    <section id="inicio" className="relative scroll-mt-24 bg-[#0B1E3B] pt-10 pb-36 sm:pt-12 sm:pb-32 lg:pt-20 lg:pb-32 overflow-hidden w-full">
      
      {/* Luz Industrial de Fondo */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 hidden sm:block w-[500px] md:w-[800px] h-[500px] md:h-[800px] bg-slate-400/5 rounded-full blur-[80px] md:blur-[120px] pointer-events-none"></div>

      <div className="w-full max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-10 sm:gap-16 lg:gap-8 items-center">
          
          {/* Left Content */}
          <div className="lg:col-span-7 space-y-7 sm:space-y-8 text-center lg:text-left text-white pr-0 lg:pr-8 scroll-reveal">

            {/* Título High-Impact */}
            <div className="space-y-4">
              <h1 className="font-montserrat text-[2rem] min-[360px]:text-[2.25rem] min-[420px]:text-[2.55rem] sm:text-5xl lg:text-[4rem] font-black leading-[1.04] sm:leading-[1.05] tracking-tight text-white uppercase drop-shadow-md">
                <span className="block">REPUESTOS</span>
                <span className="block">MERCEDES-BENZ</span>
                <span className="block">
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-gray-300 to-gray-500">EN RESISTENCIA,</span>
                  <span className="inline-flex items-center gap-1 sm:gap-1.5">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-300 to-gray-500">CHACO.</span>
                    <MapPin className="w-5 h-5 min-[420px]:w-6 min-[420px]:h-6 sm:w-7 sm:h-7 text-[#22D3EE] shrink-0" strokeWidth={2.5} />
                  </span>
                </span>
              </h1>

              {/* Badge Metálico */}
              <div className="inline-flex max-w-full items-center gap-2 bg-gradient-to-r from-slate-800 to-slate-900 border border-slate-700 px-3.5 sm:px-4 py-1.5 rounded-xl shadow-sm">
                <span className="w-2 h-2 rounded-full bg-[#22D3EE] animate-pulse"></span>
                <span className="text-[11px] lg:text-xs font-bold tracking-widest text-slate-300 uppercase">
                  Más de 35 años de experiencia
                </span>
              </div>

              <p className="text-base sm:text-lg lg:text-xl text-slate-400 leading-relaxed font-light max-w-2xl mx-auto lg:mx-0 mt-5 sm:mt-6">
                Especialistas en líneas pesadas y utilitarios, contamos con repuestos originales y alternativos de primeras marcas. Contamos con stock permanente para mantener sus unidades en movimiento.
              </p>
            </div>

            {/* Key Points */}
            <div className="space-y-3 sm:space-y-4 pt-2 sm:pt-4 flex flex-col items-stretch sm:items-center lg:items-start">
              <div className="flex items-center gap-3 bg-white/5 border border-white/10 px-4 py-3 rounded-xl w-full sm:w-fit text-left">
                <CheckCircle2 className="w-5 h-5 text-[#22D3EE] flex-shrink-0" />
                <span className="text-sm font-medium tracking-wide text-slate-200">Disponemos de catálogos de piezas originales y alternativas</span>
              </div>
              <div className="flex items-center gap-3 bg-white/5 border border-white/10 px-4 py-3 rounded-xl w-full sm:w-fit text-left">
                <CheckCircle2 className="w-5 h-5 text-[#22D3EE] flex-shrink-0" />
                <span className="text-sm font-medium tracking-wide text-slate-200">Atención técnica directa en mostrador o chat</span>
              </div>
            </div>

            {/* CTA High-Ticket */}
            <div className="pt-4 lg:pt-8 space-y-3">
              <a
                href="https://wa.me/5493624540740"
                target="_blank"
                rel="noopener noreferrer"
                className="group w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-white text-[#102C57] px-6 py-3.5 rounded-xl font-bold text-[14px] sm:text-[15px] tracking-wide shadow-xl hover:bg-gray-100 active:bg-gray-100 hover:shadow-2xl active:shadow-2xl transition-all duration-300 border border-transparent hover:border-gray-300 active:border-gray-300 font-montserrat uppercase"
                aria-label="Consultar por WhatsApp"
              >
                <MessageCircle className="w-5 h-5 transition-transform group-hover:scale-110 group-active:scale-110" />
                Consultar por WhatsApp
              </a>

              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-x-4 gap-y-1 text-[13px] text-slate-300 font-medium">
                <span className="inline-flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-[#22D3EE]" strokeWidth={2} />
                  Cel: +54 9 362 454-0740
                </span>
                <span className="text-slate-600 hidden sm:inline">|</span>
                <span className="inline-flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-[#22D3EE]" strokeWidth={2} />
                  Fijo: 362 4462894
                </span>
              </div>

              <div className="flex items-center justify-center lg:justify-start gap-1.5 text-[12px] text-slate-400">
                <Clock className="w-3.5 h-3.5 text-[#22D3EE] shrink-0" strokeWidth={2} />
                <span>Lun-Vie 8:00-12:30 / 15:30-19:30 · Sáb 8:00-12:30</span>
              </div>
            </div>

          </div>

          {/* Right Image Container */}
          <div className="lg:col-span-5 relative mt-2 sm:mt-8 lg:mt-0 scroll-reveal">
            {/* Marco Industrial Asimétrico */}
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] border-t border-l border-white/20 h-[310px] min-[380px]:h-[350px] sm:h-[450px] lg:h-[600px] w-full">
              {/* Overlay oscuro */}
              <div className="absolute inset-0 bg-[#102C57]/20 mix-blend-multiply z-10 pointer-events-none"></div>
              
              <Image
                src="https://res.cloudinary.com/dcasnymut/image/upload/v1784584108/camion_gdzdmn.png" 
                alt="Camión Mercedes-Benz clásico y repuestos pesados en Resistencia"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover scale-105 hover:scale-100 active:scale-100 transition-transform duration-700 ease-in-out"
              />
            </div>

            {/* Floating Map Widget Interactiva */}
            <div 
              className={`absolute -bottom-12 left-4 right-4 sm:left-auto sm:right-auto sm:-bottom-8 sm:-left-8 lg:-left-12 z-30 bg-gradient-to-b from-gray-50 to-gray-200 border border-white/80 text-[#102C57] rounded-xl shadow-2xl transition-all duration-300 flex flex-col ${
                showMap 
                  ? 'sm:w-[360px] p-2 hover:scale-100 active:scale-100' // Estado Expandido
                  : 'px-5 sm:px-6 lg:px-8 py-4 lg:py-5 hover:scale-105 active:scale-105 cursor-pointer' // Estado Contraído (Botón)
              }`}
            >
              
              {!showMap ? (
                // --- VISTA CERRADA (Botón Inicial) ---
                <div onClick={() => setShowMap(true)} className="flex flex-col items-center sm:items-start w-full">
                  <span className="text-[10px] font-black tracking-widest text-slate-500 uppercase mb-1.5 flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-[#22D3EE]" />
                    Nuestra Ubicación
                  </span>
                  <span className="text-lg sm:text-xl lg:text-2xl font-black leading-none font-montserrat tracking-tight text-[#0B1E3B]">
                    Ver en Google Maps
                  </span>
                </div>
              ) : (
                // --- VISTA ABIERTA (Mini Mapa) ---
                <div className="flex flex-col w-full animate-in fade-in zoom-in-95 duration-200">
                  
                  {/* Header del Mapa */}
                  <div className="flex items-center justify-between px-3 py-2 border-b border-gray-300/60 mb-2">
                    <span className="text-[10px] sm:text-[11px] font-black tracking-widest text-[#0B1E3B] uppercase font-montserrat flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-[#22D3EE]" /> 
                      Av. 25 de Mayo 1975
                    </span>
                    <button 
                      onClick={() => setShowMap(false)} 
                      className="p-1.5 hover:bg-black/5 active:bg-black/5 rounded-md transition-colors" 
                      aria-label="Cerrar mapa"
                    >
                      <X className="w-4 h-4 text-slate-600" />
                    </button>
                  </div>
                  
                  {/* Iframe Nativo de Google Maps */}
                  <div className="w-full h-[180px] sm:h-[220px] rounded-lg overflow-hidden relative bg-slate-300">
                    <iframe
                      src="https://maps.google.com/maps?q=Av.+25+de+Mayo+1975,+Resistencia,+Chaco&t=&z=15&ie=UTF8&iwloc=&output=embed"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen={false}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Ubicación de Kiszcka Repuestos en mapa"
                    ></iframe>
                  </div>
                  
                  {/* Botón para salir a la app nativa (Corregido con URL Universal) */}
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=Av.+25+de+Mayo+1975,+Resistencia,+Chaco"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2.5 flex items-center justify-center gap-2 w-full py-3 bg-[#0B1E3B] text-white text-[11px] sm:text-xs font-bold uppercase font-montserrat tracking-wider rounded-lg hover:bg-[#1a3d6f] active:bg-[#1a3d6f] transition-colors shadow-md"
                  >
                    Abrir en la aplicación <ExternalLink className="w-3.5 h-3.5" />
                  </a>

                </div>
              )}

            </div>
            
            {/* Deco Lines */}
            <div className="absolute -top-4 -right-4 w-16 h-16 md:w-24 md:h-24 border-t-2 border-r-2 border-gray-600/30 rounded-tr-xl z-0 pointer-events-none"></div>
            <div className="absolute -bottom-4 -right-4 w-16 h-16 md:w-24 md:h-24 border-b-2 border-r-2 border-gray-600/30 rounded-br-xl z-0 pointer-events-none"></div>
          </div>

        </div>
      </div>
    </section>
  );
}
