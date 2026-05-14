"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLang } from "@/context/LangContext";
import { ArrowUpRight, Plus } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=800",
    fr: "Réseau AEP Casablanca",
    ar: "شبكة مياه الشرب الدار البيضاء",
    catFr: "Solutions hydrauliques",
    catAr: "حلول هيدروليكية",
    year: "2024",
  },
  {
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19480c5?auto=format&fit=crop&q=80&w=800",
    fr: "Pont autoroutier N°12",
    ar: "جسر الطريق السريع رقم 12",
    catFr: "Génie civil",
    catAr: "هندسة مدنية",
    year: "2023",
  },
  {
    image: "https://images.unsplash.com/photo-1563214538-4b71a25ee821?auto=format&fit=crop&q=80&w=800",
    fr: "Périmètre irrigation Souss",
    ar: "منطقة ري سوس",
    catFr: "Systèmes d'irrigation",
    catAr: "أنظمة الري",
    year: "2024",
  },
  {
    image: "https://images.unsplash.com/photo-1578574526241-1122a65fe04d?auto=format&fit=crop&q=80&w=800",
    fr: "Terrassement zone industrielle",
    ar: "أعمال التسوية للمنطقة الصناعية",
    catFr: "Location d'engins",
    catAr: "تأجير المعدات",
    year: "2023",
  },
  {
    image: "https://images.unsplash.com/photo-1581094281212-d1993cc38c36?auto=format&fit=crop&q=80&w=800",
    fr: "Étude coup de bélier ONEE",
    ar: "دراسة ضربة الكبش للمكتب الوطني",
    catFr: "Études techniques",
    catAr: "دراسات تقنية",
    year: "2022",
  },
  {
    image: "https://images.unsplash.com/photo-1581093588401-a4ee745d81ab?auto=format&fit=crop&q=80&w=800",
    fr: "Infrastructure portuaire Tanger",
    ar: "البنية التحتية لميناء طنجة",
    catFr: "Génie civil",
    catAr: "هندسة مدنية",
    year: "2022",
  },
];

export default function Projects() {
  const { t } = useLang();
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".proj-header", {
        y: 40,
        opacity: 0,
        duration: 1,
        ease: "power4.out",
        scrollTrigger: { trigger: ".proj-header", start: "top 90%" }
      });

      gsap.utils.toArray<HTMLElement>(".proj-card").forEach((el, i) => {
        gsap.fromTo(el,
          { y: 60, opacity: 0 },
          { 
            y: 0, 
            opacity: 1, 
            duration: 1, 
            delay: i * 0.1, 
            ease: "power3.out",
            scrollTrigger: { trigger: el, start: "top 95%", once: true } 
          }
        );
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="projects" ref={sectionRef} className="relative py-32 bg-white overflow-hidden">
      {/* Structural Lines Decor */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl border-x border-slate-50 pointer-events-none" />

      <div className="container-xl relative z-10">
        {/* Header */}
        <div className="proj-header mb-20 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="w-12 h-[1px] bg-primary"></span>
              <span className="text-[10px] font-mono font-bold uppercase tracking-[0.3em] text-primary">
                {t("Portfolio", "المحفظة")}
              </span>
            </div>
            <h2 className="text-5xl md:text-7xl font-display font-black text-slate-900 tracking-tighter leading-[0.85]">
              {t("Réalisations", "مشاريعنا")} <br />
              <span className="text-primary italic font-serif font-light">{t("Marquantes", "المميزة")}</span>
            </h2>
          </div>
          <p className="text-slate-500 font-light max-w-xs text-sm leading-relaxed">
            {t(
              "Découvrez une sélection de nos interventions majeures à travers le Royaume.",
              "اكتشف مجموعة مختارة من تدخلاتنا الكبرى عبر أنحاء المملكة."
            )}
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((p, i) => (
            <article 
              key={p.fr} 
              className={`proj-card group relative bg-white rounded-[2rem] overflow-hidden border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-700 ${i % 2 !== 0 ? 'lg:translate-y-12' : ''}`}
            >
              {/* Image Container */}
              <div className="relative h-[400px] overflow-hidden">
                <img
                  src={p.image}
                  alt={p.fr}
                  className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 group-hover:scale-110 transition-transform duration-1000 ease-out"
                />
                {/* Float Badge */}
                <div className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center scale-0 group-hover:scale-100 transition-transform duration-500 shadow-xl">
                  <ArrowUpRight className="text-slate-900" size={20} />
                </div>
              </div>

              {/* Info Content */}
              <div className="p-8 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono font-bold text-primary uppercase tracking-widest">
                    {t(p.catFr, p.catAr)}
                  </span>
                  <span className="text-[10px] font-mono text-slate-300">{p.year}</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 leading-tight group-hover:text-primary transition-colors">
                  {t(p.fr, p.ar)}
                </h3>
                
                <div className="pt-4 flex items-center gap-2 text-slate-400 group-hover:text-slate-900 transition-colors">
                  <div className="w-6 h-6 rounded-full border border-slate-200 flex items-center justify-center">
                    <Plus size={12} />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-widest">{t("Détails", "التفاصيل")}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}