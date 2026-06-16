import { Award, Users, TrendingUp } from 'lucide-react';

export function AboutSection() {
  return (
    <section id="nosotros" className="relative scroll-mt-24 py-14 md:py-24 bg-white overflow-hidden w-full">
      
      {/* Detalle visual de fondo (Patrón de ingeniería difuminado) */}
      <div 
        className="absolute inset-y-0 left-0 w-full lg:w-1/2 opacity-30 pointer-events-none hidden md:block" 
        style={{ 
          backgroundImage: 'radial-gradient(circle at 2px 2px, #94a3b8 1px, transparent 0)', 
          backgroundSize: '24px 24px',
          WebkitMaskImage: 'linear-gradient(to right, black, transparent)',
          maskImage: 'linear-gradient(to right, black, transparent)'
        }}
      ></div>

      <div className="w-full max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          
          {/* Left Content - Historia & Storytelling */}
          <div className="pr-0 lg:pr-8 scroll-reveal">
            <span className="text-[10px] md:text-xs font-bold tracking-[0.25em] text-[#22D3EE] uppercase mb-4 block font-montserrat">
              Trayectoria Kiszcka
            </span>
            <h2 className="text-[2rem] min-[380px]:text-3xl md:text-4xl lg:text-[2.75rem] font-black text-[#0B1E3B] mb-5 sm:mb-6 font-montserrat tracking-tight leading-tight md:leading-none">
              Más de Tres Décadas Impulsando el Transporte Pesado.
            </h2>
            
            <div className="space-y-5 sm:space-y-6 text-slate-500 font-light text-base md:text-lg leading-relaxed">
              <p>
                Kiszcka Repuestos nació hace más de 35 años con una visión clara: convertirse en el Aliado Estratégico de los transportistas de la región. Lo que comenzó como un mostrador local en Resistencia, hoy se ha consolidado como un Nodo Logístico referente para camiones Mercedes-Benz.
              </p>
              <p>
                No somos simples vendedores de repuestos. A lo largo de los años, nos especializamos en conocer la mecánica pesada de cada chasis, motor y transmisión. Esta dedicación técnica es lo que nos permite construir relaciones de confianza duraderas con flotas, cooperativas y talleres de todo el país.
              </p>
              <p className="font-medium text-[#0B1E3B] pl-5 border-l-[3px] border-[#22D3EE] py-1">
                Nuestro compromiso sigue intacto: ofrecer piezas certificadas, asesoramiento preciso y la tranquilidad de que, con nosotros, el camión vuelve a la ruta.
              </p>
            </div>
          </div>

          {/* Right Content - Stats de Alto Impacto Alineados */}
          <div className="space-y-4 sm:space-y-5 scroll-reveal">
            
            {/* Stat 1 */}
            <div className="group bg-slate-50 p-5 sm:p-6 md:p-8 rounded-xl border border-slate-100 hover:border-slate-300 active:border-slate-300 hover:shadow-lg active:shadow-lg transition-all duration-300 flex items-start sm:items-center gap-4 sm:gap-6">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white shadow-sm border border-slate-100 flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-active:scale-110 group-hover:border-[#22D3EE]/30 group-active:border-[#22D3EE]/30 transition-transform duration-300">
                <Award className="w-8 h-8 text-[#102C57]" strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="text-2xl md:text-3xl font-black text-[#0B1E3B] font-montserrat tracking-tight mb-1">
                  +35 Años
                </h3>
                <p className="text-slate-500 text-[14px] md:text-[15px] font-medium leading-snug">
                  De experiencia en el mercado automotor pesado.
                </p>
              </div>
            </div>

            {/* Stat 2 */}
            <div className="group bg-slate-50 p-5 sm:p-6 md:p-8 rounded-xl border border-slate-100 hover:border-slate-300 active:border-slate-300 hover:shadow-lg active:shadow-lg transition-all duration-300 flex items-start sm:items-center gap-4 sm:gap-6">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white shadow-sm border border-slate-100 flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-active:scale-110 group-hover:border-[#22D3EE]/30 group-active:border-[#22D3EE]/30 transition-transform duration-300">
                <Users className="w-8 h-8 text-[#102C57]" strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="text-2xl md:text-3xl font-black text-[#0B1E3B] font-montserrat tracking-tight mb-1">
                  Confianza Total
                </h3>
                <p className="text-slate-500 text-[14px] md:text-[15px] font-medium leading-snug">
                  Elegidos por talleres, transportistas y flotas activas.
                </p>
              </div>
            </div>

            {/* Stat 3 */}
            <div className="group bg-slate-50 p-5 sm:p-6 md:p-8 rounded-xl border border-slate-100 hover:border-slate-300 active:border-slate-300 hover:shadow-lg active:shadow-lg transition-all duration-300 flex items-start sm:items-center gap-4 sm:gap-6">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white shadow-sm border border-slate-100 flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-active:scale-110 group-hover:border-[#22D3EE]/30 group-active:border-[#22D3EE]/30 transition-transform duration-300">
                <TrendingUp className="w-8 h-8 text-[#102C57]" strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="text-2xl md:text-3xl font-black text-[#0B1E3B] font-montserrat tracking-tight mb-1">
                  Stock Nacional
                </h3>
                <p className="text-slate-500 text-[14px] md:text-[15px] font-medium leading-snug">
                  Logística y envíos garantizados a todo el país.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
