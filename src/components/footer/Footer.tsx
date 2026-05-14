"use client";

import Link from "next/link";
import { Phone, MapPin, MessageCircle } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  const links = {
    services: [
      { label: "Génie civil", href: "#services" },
      { label: "Solutions hydrauliques", href: "#crtr" },
      { label: "Études techniques", href: "#services" },
      { label: "Location d'engins", href: "#services" },
      { label: "Systèmes d'irrigation", href: "#services" },
    ],
    company: [
      { label: "À propos", href: "#about" },
      { label: "Projets", href: "#projects" },
      { label: "Processus", href: "#process" },
      { label: "Témoignages", href: "#testimonials" },
    ],
  };

  return (
    <footer className="bg-white border-t border-slate-100 pt-24 pb-12 overflow-hidden relative">
      {/* Decorative Grid Pattern */}
      <div
        className="absolute inset-0 z-0 opacity-[0.015] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="container-xl relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          {/* Brand & Identity */}
          <div className="space-y-8">
            <Link
              href="#hero"
              className="flex items-center gap-3 group relative z-10"
            >
              <Image
                src="/logos/2_ALmahssar_Export_couleur_horiz.png"
                alt="CRTR 2.0 Logo"
                width={100}
                height={90}
              />
            </Link>

            <p className="text-slate-500 text-sm leading-relaxed max-w-xs font-light">
              CRTR 2.0 – Simulation Avancée des Régimes Transitoires Hydrauliques pour les réseaux d&apos;eau potable et industriels.
            </p>

            <a
              href="https://wa.me/212631739379"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-500 hover:bg-emerald-600 text-white rounded-2xl text-[11px] font-bold uppercase tracking-widest transition-all shadow-lg shadow-emerald-200 group"
            >
              <MessageCircle
                size={16}
                className="group-hover:rotate-12 transition-transform"
              />
              Contact WhatsApp
            </a>
          </div>

          {/* Quick Links: Services */}
          <div>
            <h4 className="text-slate-900 font-mono text-[10px] font-black uppercase tracking-[0.3em] mb-8 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              Services
            </h4>
            <ul className="space-y-4">
              {links.services.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="text-slate-500 text-sm hover:text-primary hover:translate-x-1 transition-all inline-block font-light"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links: Company */}
          <div>
            <h4 className="text-slate-900 font-mono text-[10px] font-black uppercase tracking-[0.3em] mb-8 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              Entreprise
            </h4>
            <ul className="space-y-4">
              {links.company.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="text-slate-500 text-sm hover:text-primary hover:translate-x-1 transition-all inline-block font-light"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div className="space-y-10">
            <div className="space-y-5">
              <h4 className="text-slate-900 font-mono text-[10px] font-black uppercase tracking-[0.3em] mb-8 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                Contact
              </h4>
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-slate-500 group cursor-pointer">
                  <div className="w-8 h-8 rounded-lg bg-slate-50 flex items-center justify-center group-hover:bg-primary/10 group-hover:text-primary transition-colors">
                    <Phone size={14} />
                  </div>
                  <span className="text-sm font-medium group-hover:text-slate-900 transition-colors">
                    +212 631 739 379
                  </span>
                </div>
                <div className="flex items-center gap-3 text-slate-500 group cursor-pointer">
                  <div className="w-8 h-8 rounded-lg bg-slate-50 flex items-center justify-center group-hover:bg-primary/10 group-hover:text-primary transition-colors">
                    <MapPin size={14} />
                  </div>
                  <span className="text-sm font-medium group-hover:text-slate-900 transition-colors">
                    Marrakech, Maroc
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-slate-100 flex flex-col sm:flex-row justify-between items-center gap-6">
          <p className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest">
            © {new Date().getFullYear()} CRTR 2.0 — Engineering Excellence
          </p>

          <div className="flex items-center gap-8">
            <Link
              href="#"
              className="text-[10px] font-mono font-bold text-slate-400 hover:text-primary uppercase tracking-widest transition-colors"
            >
              Confidentialité
            </Link>
            <Link
              href="#"
              className="text-[10px] font-mono font-bold text-slate-400 hover:text-primary uppercase tracking-widest transition-colors"
            >
              Mentions
            </Link>
            <div className="flex items-center gap-2 ml-4 px-3 py-1 bg-slate-50 rounded-full border border-slate-100">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-[9px] font-bold text-slate-500 uppercase tracking-tighter">
                System Online
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
