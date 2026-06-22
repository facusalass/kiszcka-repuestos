import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/Footer";
import { ScrollReveal } from "@/components/ScrollReveal";
import { TouchInteractions } from "@/components/TouchInteractions";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://kiszcka-repuestos.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Kiszcka Repuestos | Especialistas Mercedes-Benz",
  description:
    "Repuestos originales y alternativos Mercedes-Benz en Resistencia. Más de 35 años de experiencia manteniendo tu flota en movimiento.",
  keywords: [
    "repuestos mercedes benz", 
    "camiones mercedes benz", 
    "repuestos resistencia", 
    "chaco", 
    "repuestos pesados"
  ],
  
  // Le damos luz verde total a los robots de Google
  robots: {
    index: true,
    follow: true,
  },
  
  // Definimos la URL principal para evitar contenido duplicado
  alternates: {
    canonical: "/",
  },

  // OpenGraph: Para WhatsApp, Facebook, LinkedIn
  openGraph: {
    title: "Kiszcka Repuestos | Especialistas Mercedes-Benz",
    description: "Repuestos originales y alternativos Mercedes-Benz en Resistencia. Envíos a todo el país.",
    url: siteUrl,
    siteName: "Kiszcka Repuestos",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Kiszcka Repuestos - Especialistas Mercedes-Benz",
      },
    ],
    locale: "es_AR",
    type: "website",
  },

  // Twitter: Soporte extra para que las tarjetas se vean grandes en todos los chats
  twitter: {
    card: "summary_large_image",
    title: "Kiszcka Repuestos | Especialistas Mercedes-Benz",
    description: "Repuestos originales y alternativos Mercedes-Benz en Resistencia. Envíos a todo el país.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="h-full antialiased">
      <body className="min-h-full flex flex-col font-sans">
        <ScrollReveal />
        <TouchInteractions />
        <Header />
        <main className="flex-grow flex flex-col">{children}</main>
        <Footer />
      </body>
    </html>
  );
}