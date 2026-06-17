import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

export function CatalogSection() {
  const categories = [
    {
      name: "Filtros Especializados",
      image: "https://images.unsplash.com/photo-1505635374747-431af16edaf2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
      description: "Filtros de aire, combustible, aceite y habitáculo para máximo rendimiento."
    },
    {
      name: "Sistema de Frenos",
      image: "https://images.unsplash.com/photo-1674564852576-0452bade2508?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
      description: "Pastillas, discos, tambores y componentes."
    },
    {
      name: "Motor y Componentes",
      image: "https://images.unsplash.com/photo-1429772011165-0c2e054367b8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
      description: "Pistones, bielas, cojinetes y juntas."
    },
    {
      name: "Transmisión y Embrague",
      image: "https://images.unsplash.com/photo-1567093322102-6bdd32fba67d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
      description: "Placas, discos, sincronizados y accesorios."
    },
    {
      name: "Suspensión y Dirección",
      image: "https://images.unsplash.com/photo-1632074251537-0c33a9f728cc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
      description: "Amortiguadores, resortes, bujes y extremos."
    },
    {
      name: "Sistema Eléctrico",
      image: "https://images.unsplash.com/photo-1663642775693-6628f65358be?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
      description: "Alternadores, arranques y sensores."
    }
  ];

  return (
    <section
      id="catalogo"
      className="mobile-performance-saver relative scroll-mt-24 py-14 md:py-24 bg-slate-50 border-t border-slate-200 w-full"
      aria-labelledby="catalog-heading"
    >
      <div className="w-full max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-10 md:mb-16 w-full max-w-4xl mx-auto scroll-reveal">
          <span className="text-[10px] md:text-xs font-bold tracking-[0.25em] text-[#22D3EE] uppercase mb-4 block font-montserrat">
            Stock Disponible
          </span>
          <h2
            id="catalog-heading"
            className="text-[2rem] min-[380px]:text-3xl md:text-4xl lg:text-[2.5rem] font-black text-[#0B1E3B] mb-5 font-montserrat tracking-tight leading-tight md:leading-none"
          >
            Catálogo de Repuestos Especializados.
          </h2>
          <p className="text-base md:text-lg text-slate-500 font-light leading-relaxed max-w-2xl mx-auto">
            Amplio stock físico de repuestos originales y alternativos certificados para mantener tu unidad trabajando sin interrupciones.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-12 md:mb-24 scroll-reveal">
          {categories.map((category, index) => (
            <article
              key={index}
              data-tap-card
              className="tap-card group bg-white rounded-xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-xl active:shadow-xl transition-all duration-300 flex flex-col h-full hover:-translate-y-1 active:-translate-y-1"
            >
              <div className="aspect-[4/3] w-full overflow-hidden bg-slate-200 relative">
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="tap-image object-cover group-hover:scale-110 group-active:scale-110 transition-transform duration-700 ease-in-out"
                />
                <div className="tap-overlay absolute inset-0 bg-gradient-to-t from-[#0B1E3B]/80 via-[#0B1E3B]/20 to-transparent opacity-60 group-hover:opacity-40 group-active:opacity-40 transition-opacity duration-300 pointer-events-none"></div>
              </div>

              <div className="p-5 sm:p-6 md:p-8 flex flex-col flex-grow relative bg-white">
                <div className="absolute top-0 left-6 md:left-8 w-12 h-1 bg-[#22D3EE] -translate-y-1/2"></div>

                <h3 className="tap-title text-lg md:text-xl font-bold text-[#0B1E3B] mb-3 font-montserrat tracking-tight leading-tight">
                  {category.name}
                </h3>
                <p className="text-[14px] md:text-[15px] text-slate-500 font-light mb-6 flex-grow leading-relaxed">
                  {category.description}
                </p>

                <a
                  href="https://wa.me/5493624540740"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="tap-link inline-flex items-center gap-2 text-[#0B1E3B] font-bold text-sm uppercase tracking-wide group-hover:text-[#22D3EE] group-active:text-[#22D3EE] transition-colors mt-auto w-fit font-montserrat"
                  aria-label={`Consultar stock de ${category.name}`}
                >
                  Consultar Stock
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 group-active:translate-x-1 transition-transform" />
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="relative bg-[#0B1E3B] rounded-2xl p-6 min-[380px]:p-8 md:p-14 lg:p-16 text-center overflow-hidden shadow-2xl scroll-reveal">
          <div className="absolute top-0 right-0 w-64 h-64 bg-slate-500/10 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#22D3EE]/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="relative z-10 flex flex-col items-center">
            <h3 className="text-[1.65rem] min-[380px]:text-2xl md:text-3xl lg:text-4xl font-black text-white mb-4 font-montserrat tracking-tight leading-tight">
              ¿No Encontrás la Pieza que Buscás?
            </h3>
            <p className="text-base md:text-lg text-slate-300 font-light mb-8 max-w-2xl mx-auto leading-relaxed">
              Contactanos ahora mismo. Contamos con acceso directo a la red nacional y más de 7.000 artículos para la venta.
            </p>
            <a
              href="https://wa.me/5493624540740"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 bg-white text-[#102C57] px-6 md:px-8 py-3.5 md:py-4 rounded-xl font-montserrat font-bold text-sm md:text-[15px] tracking-wide shadow-lg hover:bg-gray-100 active:bg-gray-100 hover:shadow-xl active:shadow-xl transition-all duration-300 uppercase border border-transparent hover:border-gray-200 active:border-gray-200 w-full sm:w-auto"
            >
              Consultar a un Especialista
              <ArrowRight className="w-5 h-5" strokeWidth={2.5} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
