import type { Metadata } from "next";
import { Montserrat, Playfair_Display } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "CRTR 2.0 | Simulation Avancée des Régimes Transitoires Hydrauliques",
  description:
    "Optimisez la sécurité et la performance de vos réseaux sous pression avec CRTR 2.0, une solution de modélisation hydraulique dédiée aux coups de bélier et aux régimes transitoires.",
  keywords: "CRTR 2.0, simulation hydraulique, coup de bélier, régimes transitoires, irrigation, Maroc",
  openGraph: {
    title: "CRTR 2.0 | Simulation Avancée des Régimes Transitoires Hydrauliques",
    description: "Solution hydraulique de pointe pour l'analyse des coups de bélier et la protection des réseaux d'eau potable et industriels.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" className={`${montserrat.variable} ${playfair.variable}`}>
      <head>
        {/* Cairo for Arabic */}
        <link
          href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
