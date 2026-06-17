import { MessageCircle, Phone, Clock, CalendarDays, Send } from 'lucide-react';

export function ContactSection() {
  return (
    <section id="contacto" className="mobile-performance-saver relative scroll-mt-24 py-14 md:py-24 bg-white w-full">
      <div className="w-full max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-10 md:mb-16 w-full max-w-3xl mx-auto scroll-reveal">
          <span className="text-[10px] md:text-xs font-bold tracking-[0.25em] text-[#22D3EE] uppercase mb-4 block font-montserrat">
            Línea Directa y Redes
          </span>
          <h2 className="text-[2rem] min-[380px]:text-3xl md:text-4xl lg:text-[2.75rem] font-black text-[#0B1E3B] mb-5 font-montserrat tracking-tight leading-tight md:leading-none">
            Contactanos Ahora.
          </h2>
          <p className="text-base md:text-lg text-slate-500 font-light leading-relaxed">
            Atención personalizada, asesoramiento técnico y novedades para que tu unidad no pierda tiempo de trabajo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-6xl mx-auto mb-12 md:mb-24 scroll-reveal">
          <div className="tap-card group relative bg-white rounded-xl shadow-sm border border-slate-100 hover:shadow-xl active:shadow-xl transition-all duration-300 p-6 sm:p-8 lg:p-10 text-center overflow-hidden flex flex-col hover:-translate-y-1 active:-translate-y-1">
            <div className="absolute top-0 left-0 w-full h-1 bg-[#25D366] scale-x-0 group-hover:scale-x-100 group-active:scale-x-100 transition-transform origin-left duration-300 pointer-events-none"></div>

            <div className="tap-icon w-16 h-16 rounded-full bg-green-50 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-active:scale-110 transition-transform duration-300 shrink-0">
              <MessageCircle className="w-8 h-8 text-[#25D366]" strokeWidth={1.5} />
            </div>

            <h3 className="tap-title text-xl md:text-2xl font-bold text-[#0B1E3B] mb-3 font-montserrat tracking-tight">
              WhatsApp
            </h3>
            <p className="text-[14px] md:text-[15px] text-slate-500 font-light mb-8 flex-grow leading-relaxed">
              Consultá stock, precios o pedí cotizaciones. Te respondemos con rapidez en horario comercial.
            </p>

            <div className="mt-auto">
              <a
                href="https://wa.me/5493624540740"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#0B1E3B] text-white px-6 py-3.5 rounded-lg font-bold text-[13px] md:text-[14px] font-montserrat uppercase tracking-wide shadow-md hover:bg-[#1a3d6f] active:bg-[#1a3d6f] hover:shadow-lg active:shadow-lg transition-all w-full"
                aria-label="Iniciar chat por WhatsApp"
              >
                Iniciar Chat
                <Send className="w-4 h-4 ml-1" />
              </a>
            </div>
          </div>

          <div className="tap-card group relative bg-white rounded-xl shadow-sm border border-slate-100 hover:shadow-xl active:shadow-xl transition-all duration-300 p-6 sm:p-8 lg:p-10 text-center overflow-hidden flex flex-col hover:-translate-y-1 active:-translate-y-1">
            <div className="absolute top-0 left-0 w-full h-1 bg-[#0B1E3B] scale-x-0 group-hover:scale-x-100 group-active:scale-x-100 transition-transform origin-left duration-300 pointer-events-none"></div>

            <div className="tap-icon w-16 h-16 rounded-full bg-slate-50 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-active:scale-110 transition-transform duration-300 shrink-0">
              <Phone className="w-8 h-8 text-[#0B1E3B]" strokeWidth={1.5} />
            </div>

            <h3 className="tap-title text-xl md:text-2xl font-bold text-[#0B1E3B] mb-3 font-montserrat tracking-tight">
              Línea Telefónica
            </h3>
            <p className="text-[14px] md:text-[15px] text-slate-500 font-light mb-8 flex-grow leading-relaxed">
              Llamanos directamente para consultas urgentes o asesoramiento específico en mostrador.
            </p>

            <div className="mt-auto flex items-center justify-center h-[52px]">
              <a
                className="inline-block text-2xl lg:text-3xl font-black text-[#0B1E3B] hover:text-[#22D3EE] active:text-[#22D3EE] transition-colors font-montserrat tracking-tighter"
                aria-label="Llamar a la línea telefónica"
              >
                4462894
              </a>
            </div>
          </div>

          <div className="tap-card group relative bg-white rounded-xl shadow-sm border border-slate-100 hover:shadow-xl active:shadow-xl transition-all duration-300 p-6 sm:p-8 lg:p-10 text-center overflow-hidden flex flex-col hover:-translate-y-1 active:-translate-y-1">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#FCAF45] scale-x-0 group-hover:scale-x-100 group-active:scale-x-100 transition-transform origin-left duration-300 pointer-events-none"></div>

            <div className="tap-icon w-16 h-16 rounded-full bg-pink-50 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-active:scale-110 transition-transform duration-300 shrink-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-8 h-8 text-[#E1306C]"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
              </svg>
            </div>

            <h3 className="tap-title text-xl md:text-2xl font-bold text-[#0B1E3B] mb-3 font-montserrat tracking-tight">
              Instagram
            </h3>
            <p className="text-[14px] md:text-[15px] text-slate-500 font-light mb-8 flex-grow leading-relaxed">
              Seguinos para enterarte de los nuevos ingresos de stock, novedades y el día a día en nuestro local.
            </p>

            <div className="mt-auto">
              <a
                href="https://instagram.com/kiszckarepuestos"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#0B1E3B] text-white px-6 py-3.5 rounded-lg font-bold text-[13px] md:text-[14px] font-montserrat uppercase tracking-wide shadow-md hover:bg-[#1a3d6f] active:bg-[#1a3d6f] hover:shadow-lg active:shadow-lg transition-all w-full"
                aria-label="Ir a nuestro perfil de Instagram"
              >
                @kiszckarepuestos
              </a>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto bg-slate-50 border border-slate-200 rounded-xl p-5 min-[380px]:p-6 sm:p-8 lg:p-12 shadow-sm scroll-reveal">
          <div className="flex items-center gap-3 justify-center mb-8">
            <Clock className="w-6 h-6 text-[#22D3EE]" strokeWidth={2} />
            <h4 className="text-lg min-[380px]:text-xl md:text-2xl font-bold text-[#0B1E3B] font-montserrat tracking-tight uppercase">Horarios de Mostrador</h4>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-slate-200">
            <div className="pt-4 md:pt-0">
              <div className="flex items-center justify-center gap-2 mb-2 text-[#0B1E3B]">
                <CalendarDays className="w-4 h-4" />
                <p className="font-bold text-[14px] md:text-[15px] font-montserrat uppercase tracking-wider">Lunes a Viernes</p>
              </div>
              <p className="text-slate-600 font-medium">08:00 a 12:30 hs</p>
              <p className="text-slate-600 font-medium">15:30 a 19:30 hs</p>
            </div>

            <div className="pt-6 md:pt-0">
              <div className="flex items-center justify-center gap-2 mb-2 text-[#0B1E3B]">
                <CalendarDays className="w-4 h-4" />
                <p className="font-bold text-[14px] md:text-[15px] font-montserrat uppercase tracking-wider">Sábados</p>
              </div>
              <p className="text-slate-600 font-medium">08:00 a 12:30 hs</p>
              <p className="text-slate-400 text-sm mt-1">Tarde cerrado</p>
            </div>

            <div className="pt-6 md:pt-0">
              <div className="flex items-center justify-center gap-2 mb-2 text-slate-400">
                <CalendarDays className="w-4 h-4" />
                <p className="font-bold text-[14px] md:text-[15px] font-montserrat uppercase tracking-wider">Domingos</p>
              </div>
              <p className="text-slate-400 font-medium italic">Cerrado</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
