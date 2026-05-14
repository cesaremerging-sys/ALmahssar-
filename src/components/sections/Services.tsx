"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLang } from "@/context/LangContext";
import Link from "next/link";
import { HardHat, Droplets, Ruler, Truck, Sprout, ArrowRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    num: "01",
    icon: HardHat,
    fr: "Simulation des coups de bélier",
    ar: "محاكاة ضربات الكبش",
    descFr: "Analyse des surpressions et dépressions dans vos conduites.",
    descAr: "تحليل الضغوط الزائدة والمنخفضة في أنابيبك.",
  },
  {
    num: "02",
    icon: Droplets,
    fr: "Études de protection hydraulique",
    ar: "دراسات الحماية الهيدروليكية",
    descFr: "Dimensionnement de ballons anti-bélier, cheminées d’équilibre, soupapes, etc.",
    descAr: "تصميم أوعية مانعة لضربة الكبش، مداخن التوازن، صمامات، وغيرها.",
    isFeatured: true,
  },
  {
    num: "03",
    icon: Ruler,
    fr: "Optimisation des réseaux",
    ar: "تحسين الشبكات",
    descFr: "Amélioration de la fiabilité et réduction des risques de rupture.",
    descAr: "تحسين الموثوقية وتقليل مخاطر الكسر.",
  },
  {
    num: "04",
    icon: Truck,
    fr: "Location d'engins",
    ar: "تأجير المعدات",
    descFr: "Parc moderne d'engins de chantier : pelles, bulldozers, grues et compacteurs.",
    descAr: "أسطول حديث من معدات البناء: حفارات وجرافات ورافعات.",
  },
  {
    num: "05",
    icon: Sprout,
    fr: "Systèmes d'irrigation",
    ar: "أنظمة الري",
    descFr: "Étude, conception et installation de réseaux d'irrigation agricoles et industriels.",
    descAr: "دراسة وتصميم وتركيب شبكات الري الزراعي والصناعي.",
  },
];

export default function Services() {
  const { t } = useLang();
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(".service-card").forEach((card, i) => {
        gsap.fromTo(card,
          { y: 30, opacity: 0 },
          {
            y: 0, opacity: 1, duration: 0.8, ease: "power2.out",
            scrollTrigger: { trigger: card, start: "top 90%", once: true },
            delay: i * 0.1,
          }
        );
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="services" ref={sectionRef} className="relative py-32 bg-white overflow-hidden">
      {/* Decorative Technical Grid */}
      <div className="absolute inset-0 opacity-[0.015] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '30px 30px' }} />

      <div className="container-xl relative z-10">
        {/* Header */}
        <div className="max-w-4xl mb-24 space-y-6">
          <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full border border-slate-100 bg-slate-50/50">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-slate-500">
              {t("🚀 Nos prestations", "🚀 خدماتنا")}
            </span>
          </div>
          <h2 className="text-5xl md:text-7xl font-display font-black text-slate-900 tracking-tighter leading-none">
            {t("Nos prestations", "خدماتنا")}
          </h2>
        </div>

        {/* Minimal Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <article
              key={s.fr}
              className={`service-card group relative p-10 rounded-[2.5rem] border transition-all duration-500 flex flex-col justify-between min-h-[380px] ${
                s.isFeatured 
                ? "bg-slate-900 border-slate-900 text-white shadow-2xl" 
                : "bg-white border-slate-100 hover:border-primary/30 hover:shadow-xl"
              }`}
            >
              <div className="space-y-8">
                {/* Top Row: Icon & Step Number */}
                <div className="flex items-start justify-between">
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center transition-transform duration-500 group-hover:scale-110 ${
                    s.isFeatured ? "bg-primary text-white" : "bg-slate-50 text-primary group-hover:bg-primary/5"
                  }`}>
                    <s.icon size={32} strokeWidth={1.2} />
                  </div>
                  <span className={`font-mono text-sm font-bold opacity-20 ${s.isFeatured ? "text-white" : "text-slate-900"}`}>
                    {s.num}
                  </span>
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <h3 className={`text-2xl font-bold leading-tight ${s.isFeatured ? "text-white" : "text-slate-900"}`}>
                    {t(s.fr, s.ar)}
                  </h3>
                  <p className={`text-sm leading-relaxed font-light ${s.isFeatured ? "text-slate-300" : "text-slate-500"}`}>
                    {t(s.descFr, s.descAr)}
                  </p>
                </div>
              </div>

              {/* Action */}
              <div className="pt-10">
                <Link
                  href="#contact"
                  className={`inline-flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.2em] transition-all ${
                    s.isFeatured 
                    ? "text-primary hover:text-white" 
                    : "text-slate-400 group-hover:text-primary"
                  }`}
                >
                  {t("Consulter l'offre", "راجع العرض")}
                  <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}