"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { useLang } from "@/context/LangContext";
import gsap from "gsap";
import { cn } from "@/lib/utils"; // Assumes you have a cn helper, if not use template literals

const navLinks = [
  { fr: "Accueil", ar: "الرئيسية", href: "#hero" },
  { fr: "À propos", ar: "من نحن", href: "#about" },
  { fr: "Services", ar: "الخدمات", href: "#services" },
  { fr: "Expertise", ar: "خبرتنا", href: "#crtr" },
  { fr: "Projets", ar: "مشاريعنا", href: "#projects" },
  { fr: "Contact", ar: "تواصل معنا", href: "#contact" },
];
import Image from "next/image";

export default function Navbar() {
  const { lang, setLang, t } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const mobileRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.fromTo(
      navRef.current,
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.2, ease: "expo.out" }
    );
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      ref={navRef}
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-700 ease-in-out px-4",
        scrolled ? "py-4" : "py-8"
      )}
    >
      <div
        className={cn(
          "mx-auto max-w-7xl transition-all duration-700 rounded-[2rem] px-6 py-3 flex items-center justify-between gap-4 border border-transparent",
          scrolled && "bg-dark/40 backdrop-blur-2xl border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.3)] ring-1 ring-white/5"
        )}
      >
        {/* Logo */}
        <Link href="#hero" className="flex items-center gap-3 group relative z-10">
          <Image src="/logos/2_ALmahssar_Export_couleur_horiz.png" alt="CRTR 2.0 Logo" width={100} height={90} />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center bg-white/5 rounded-full px-2 border border-white/5 backdrop-blur-md">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="relative px-5 py-2.5 text-[10px] uppercase tracking-[0.2em] text-white/60 hover:text-white transition-all font-bold group"
            >
              {t(l.fr, l.ar)}
              <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-1/3 shadow-[0_0_8px_#primary]" />
            </Link>
          ))}
        </div>

        {/* Desktop Actions */}
        <div className="hidden lg:flex items-center gap-6">
          <div className="flex items-center gap-1 bg-black/20 p-1 rounded-xl border border-white/5">
            {(["fr", "ar"] as const).map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                className={cn(
                  "px-3 py-1.5 rounded-lg text-[9px] font-black uppercase tracking-widest transition-all duration-300",
                  lang === l
                    ? "bg-primary text-white shadow-lg shadow-primary/20"
                    : "text-white/30 hover:text-white hover:bg-white/5"
                )}
              >
                {l}
              </button>
            ))}
          </div>

          <Link
            href="#contact"
            className="group relative px-6 py-3 overflow-hidden rounded-xl bg-white text-dark font-display font-bold text-[10px] uppercase tracking-widest transition-all hover:scale-105 active:scale-95"
          >
            <span className="relative z-10">{t("Devis gratuit", "طلب عرض")}</span>
            <div className="absolute inset-0 bg-primary translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden relative z-10 w-10 h-10 flex items-center justify-center rounded-xl bg-white/5 border border-white/10"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <div className="w-5 flex flex-col items-end gap-1.5">
            <span className={cn("h-0.5 bg-primary transition-all duration-300", menuOpen ? "w-5 rotate-45 translate-y-2" : "w-5")} />
            <span className={cn("h-0.5 bg-primary transition-all duration-300", menuOpen ? "opacity-0" : "w-3")} />
            <span className={cn("h-0.5 bg-primary transition-all duration-300", menuOpen ? "w-5 -rotate-45 -translate-y-2" : "w-4")} />
          </div>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={cn(
          "fixed inset-0 bg-dark/60 backdrop-blur-3xl lg:hidden transition-all duration-500",
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
        onClick={() => setMenuOpen(false)}
      >
        <div
          className={cn(
            "absolute top-24 right-4 left-4 bg-dark-2/90 border border-white/10 rounded-[2rem] p-8 transition-all duration-500 transform",
            menuOpen ? "translate-y-0 opacity-100" : "-translate-y-10 opacity-0"
          )}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex flex-col gap-6 text-center">
            {navLinks.map((l, i) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setMenuOpen(false)}
                className="text-xl uppercase tracking-[0.2em] text-white/50 hover:text-primary font-display font-light transition-colors"
              >
                {t(l.fr, l.ar)}
              </Link>
            ))}
            <div className="h-px bg-white/5 my-4" />
            <div className="flex justify-center gap-4">
              {(["fr", "ar"] as const).map((l) => (
                <button
                  key={l}
                  onClick={() => setLang(l)}
                  className={cn(
                    "w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-[10px] font-bold uppercase",
                    lang === l ? "bg-primary text-white border-primary" : "text-white/40"
                  )}
                >
                  {l}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}