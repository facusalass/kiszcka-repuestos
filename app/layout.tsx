import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/Footer"; // <-- Agregamos el import del Footer
import { ScrollReveal } from "@/components/ScrollReveal";

// Fuente para cuerpo de texto
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

// Fuente para títulos (Premium/Industrial)
const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kiszcka Repuestos | Especialistas Mercedes-Benz",
  description: "Repuestos originales y alternativos Mercedes-Benz en Resistencia. Más de 35 años de experiencia manteniendo tu flota en movimiento.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      // Inyectamos las variables de las dos fuentes en el HTML
      className={`${inter.variable} ${montserrat.variable} h-full antialiased`}
    >
      {/* Aplicamos la fuente Inter por defecto a todo el body */}
      <body className="min-h-full flex flex-col font-sans">
        <ScrollReveal />
        <Header />
        
        {/* flex-grow hace que el contenido empuje al Footer hacia abajo siempre */}
        <main className="flex-grow flex flex-col">
          {children}
        </main>

        <Footer /> {/* <-- Renderizamos el Footer al final */}
      </body>
    </html>
  );
}
