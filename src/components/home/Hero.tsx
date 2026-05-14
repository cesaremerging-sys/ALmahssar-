"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { useLang } from "@/context/LangContext";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  const { t } = useLang();
  const containerRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLSpanElement>(null);
  const h1Ref = useRef<HTMLHeadingElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power4.out" } });
    tl.fromTo(badgeRef.current,  { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8 }, 1)
      .fromTo(h1Ref.current,   { y: 60, opacity: 0 }, { y: 0, opacity: 1, duration: 1 },   "-=0.4")
      .fromTo(subRef.current,  { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 0.9 }, "-=0.5")
      .fromTo(ctaRef.current,  { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8 }, "-=0.4")
      .fromTo(statsRef.current,{ y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8 }, "-=0.3");
  }, []);

  const stats = [
    { value: "150+", labelFr: "Projets réalisés",    labelAr: "مشاريع منجزة" },
    { value: "15+",  labelFr: "Années d'expertise",  labelAr: "سنة خبرة" },
    { value: "98%",  labelFr: "Clients satisfaits",  labelAr: "رضا العملاء" },
    { value: "5",    labelFr: "Domaines d'expertise", labelAr: "مجالات خبرة" },
  ];

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative min-h-screen flex items-center overflow-hidden bg-dark"
    >
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=1920"
          alt="Engineering background"
          className="w-full h-full object-cover opacity-20"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-dark via-dark/80 to-dark/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-transparent" />
        {/* Animated glow orb */}
        <div className="absolute top-1/4 right-1/3 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-primary/8 rounded-full blur-[100px]" />
      </div>

      {/* Grid pattern */}
      <div
        className="absolute inset-0 z-0 opacity-5"
        style={{
          backgroundImage: "linear-gradient(rgba(33,171,224,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(33,171,224,0.3) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      <div className="container-xl relative z-10 px-6">
        <div className="max-w-5xl mx-auto flex flex-col items-center text-center">
          
          {/* Badge */}
          <span 
            ref={badgeRef} 
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-50 border border-slate-100 text-slate-400 font-mono text-[10px] uppercase tracking-[0.3em] mb-10 shadow-sm"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            {t("Ingénierie & Simulation", "الهندسة والمحاكاة")}
          </span>

          {/* Main Title */}
          <h1
            ref={h1Ref}
            className="text-5xl md:text-8xl lg:text-[7rem] font-display font-black text-white mb-8 tracking-tighter leading-[0.85]"
          >
            {t("Simulation", "محاكاة")}<br />
            <span className="text-primary italic font-serif font-light lowercase">
              {t("Avancée 2.0", "متقدمة 2.0")}
            </span>
          </h1>

          {/* Subtext */}
          <p
            ref={subRef}
            className="text-lg md:text-xl text-slate-500 max-w-2xl mb-12 leading-relaxed font-light"
          >
            {t(
              "Optimisez la sécurité de vos réseaux sous pression grâce à l’analyse experte des phénomènes de coup de bélier et régimes transitoires.",
              "حسّن أمان شبكاتك بفضل التحليل الخبير لظواهر ضربات الكبش والأنظمة الهيدروليكية العابرة."
            )}
          </p>

          {/* CTAs */}
          <div ref={ctaRef} className="flex flex-col sm:flex-row gap-5 items-center justify-center mb-24">
            <Link 
              href="#contact" 
              className="px-10 py-5 bg-slate-900 text-white rounded-2xl font-bold text-sm hover:bg-primary transition-all duration-500  flex items-center gap-3 group"
            >
              {t("Démarrer une étude", "ابدأ دراسة")}
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              href="#services" 
              className="px-10 py-5 bg-white text-slate-900 border border-slate-200 rounded-2xl font-bold text-sm hover:bg-slate-50 transition-all duration-300"
            >
              {t("Voir nos solutions", "حلولنا التقنية")}
            </Link>
          </div>

        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 opacity-40">
        <span className="text-[9px] uppercase tracking-[0.3em] text-primary">{t("Défiler", "تمرير")}</span>
        <div className="w-px h-10 bg-gradient-to-b from-primary to-transparent" />
      </div>
    </section>
  );
}
