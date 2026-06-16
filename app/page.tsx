import { HeroSection } from "@/components/sections/HeroSection";
import { TrustSection } from "@/components/sections/TrustSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { CatalogSection } from "@/components/sections/CatalogSection";
import { ContactSection } from "@/components/sections/ContactSection";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col w-full">
      <HeroSection />
      <TrustSection />
      <AboutSection />
      <CatalogSection />
      <ContactSection />
      {/* Aquí seguiremos agregando las próximas secciones */}
    </main>
  );
}