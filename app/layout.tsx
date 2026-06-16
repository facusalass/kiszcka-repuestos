import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/Footer"; // <-- Agregamos el import del Footer
import { ScrollReveal } from "@/components/ScrollReveal";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://kiszcka-repuestos.vercel.app";

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
  metadataBase: new URL(siteUrl),
  title: "Kiszcka Repuestos | Especialistas Mercedes-Benz",
  description: "Repuestos originales y alternativos Mercedes-Benz en Resistencia. Más de 35 años de experiencia manteniendo tu flota en movimiento.",
  keywords: ["repuestos mercedes benz", "camiones mercedes benz", "repuestos resistencia", "chaco", "repuestos pesados"],
  openGraph: {
    title: "Kiszcka Repuestos | Especialistas Mercedes-Benz",
    description: "Repuestos originales y alternativos Mercedes-Benz en Resistencia. Envíos a todo el país.",
    url: siteUrl,
    siteName: "Kiszcka Repuestos",
    images: [
      {
        url: "/og-image.jpg", // Tienes que crear una imagen de 1200x630px y ponerla en la carpeta /public
        width: 1200,
        height: 630,
        alt: "Kiszcka Repuestos - Mercedes-Benz",
      },
    ],
    locale: "es_AR",
    type: "website",
  },
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
