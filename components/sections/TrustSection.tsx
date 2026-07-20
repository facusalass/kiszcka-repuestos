import { Wrench, Truck, MapPin, Shield } from 'lucide-react';

export function TrustSection() {
  const trustPoints = [
    {
      icon: Wrench,
      title: "Especialistas Mercedes-Benz",
      description: "Más de 35 años de experiencia. Conocemos cada componente de tu unidad y te asesoramos técnicamente al instante."
    },
    {
      icon: Truck,
      title: "Stock Permanente",
      description: "Inventario físico de repuestos originales y alternativos certificados. Disponibilidad inmediata para que tu camión no pare."
    },
    {
      icon: MapPin,
      title: "Local y Envíos Nacionales",
      description: "Retirá en nuestro mostrador en Resistencia o recibí tu repuesto en cualquier punto del país con despacho rápido y seguro."
    },
    {
      icon: Shield,
      title: "Garantía de Calidad",
      description: "Respaldo total. Trabajamos con importadores directos, proveedores certificados y marcas de primera línea."
    }
  ];

  return (
    <section
      className="mobile-performance-saver relative py-14 md:py-24 bg-slate-50 border-b border-slate-200 w-full"
      aria-labelledby="trust-heading"
    >
      <div className="w-full max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-10 md:mb-16 w-full max-w-5xl mx-auto scroll-reveal">
          <span className="text-[10px] md:text-xs font-bold tracking-[0.25em] text-[#0B1E3B] uppercase mb-4 block font-montserrat">
            Validación y Respaldo
          </span>
          <h2
            id="trust-heading"
            className="text-[2rem] min-[380px]:text-3xl md:text-4xl lg:text-[2.5rem] xl:text-[2.75rem] font-black text-[#0B1E3B] mb-5 font-montserrat tracking-tight leading-tight md:leading-none"
          >
            El Taller no Espera. Nosotros tampoco
          </h2>
          <p className="text-base md:text-lg text-slate-500 font-light leading-relaxed max-w-2xl mx-auto">
            Entendemos la logística pesada. Nuestro objetivo es entregarte la pieza correcta en el menor tiempo posible, estés donde estés.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 scroll-reveal">
          {trustPoints.map((point, index) => {
            const Icon = point.icon;
            return (
              <article
                key={index}
                data-tap-card
                className="tap-card group relative bg-surface p-5 sm:p-6 md:p-8 rounded-xl shadow-sm border border-slate-100 hover:shadow-xl active:shadow-xl transition-all duration-300 hover:-translate-y-1 active:-translate-y-1 overflow-hidden flex flex-col items-start"
              >
                <div className="tap-accent absolute top-0 left-0 w-full h-1 bg-[#22D3EE] scale-x-0 group-hover:scale-x-100 group-active:scale-x-100 transition-transform origin-left duration-300 pointer-events-none"></div>

                <div className="tap-icon w-12 h-12 bg-slate-50 group-hover:bg-[#102C57] group-active:bg-[#102C57] rounded-lg flex items-center justify-center mb-6 transition-colors duration-300 shrink-0">
                  <Icon className="w-6 h-6 text-[#102C57] group-hover:text-white group-active:text-white transition-colors" strokeWidth={1.5} />
                </div>

                <h3 className="tap-title text-lg md:text-xl font-bold text-[#0B1E3B] mb-3 font-montserrat leading-tight">
                  {point.title}
                </h3>
                <p className="text-slate-600 text-[14px] md:text-[15px] leading-relaxed">
                  {point.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
