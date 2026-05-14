"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLang } from "@/context/LangContext";
import Link from "next/link";
import { 
  BarChart3, 
  ShieldCheck, 
  Zap, 
  AlertTriangle, 
  FileText, 
  Settings, 
  ChevronRight 
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const prestations = [
  {
    icon: BarChart3,
    fr: "Simulation des coups de bélier",
    ar: "محاكاة ضربات الكبش",
    descFr: "Analyse des surpressions et dépressions dans vos conduites avec précision maximale.",
    descAr: "تحليل الضغوط الزائدة والمنخفضة في أنابيبك بأقصى دقة.",
  },
  {
    icon: ShieldCheck,
    fr: "Études de protection hydraulique",
    ar: "دراسات الحماية الهيدروليكية",
    descFr: "Dimensionnement de ballons anti-bélier, cheminées d'équilibre et soupapes.",
    descAr: "تصميم أوعية مانعة لضربة الكبش، مداخن التوازن والصمامات.",
  },
  {
    icon: Zap,
    fr: "Optimisation des réseaux",
    ar: "تحسين الشبكات",
    descFr: "Amélioration de la fiabilité et réduction des risques de rupture.",
    descAr: "تحسين الموثوقية وتقليل مخاطر الكسر.",
  },
  {
    icon: AlertTriangle,
    fr: "Analyse des scénarios critiques",
    ar: "تحليل السيناريوهات الحرجة",
    descFr: "Arrêt de pompes, fermeture de vannes, variations de consommation.",
    descAr: "توقف المضخات، إغلاق الصمامات، تغيرات الاستهلاك.",
  },
  {
    icon: FileText,
    fr: "Rapports techniques détaillés",
    ar: "تقارير تقنية مفصلة",
    descFr: "Résultats complets avec graphiques et recommandations.",
    descAr: "نتائج كاملة مع رسوم بيانية وتوصيات.",
  },
];

const techFeatures = [
  { fr: "Méthode des Caractéristiques (MOC) – haute précision", ar: "طريقة الخصائص (MOC) - دقة عالية" },
  { fr: "Résolution des équations de Saint-Venant", ar: "حل معادلات سانت فيران" },
  { fr: "Simulation dynamique en temps réel", ar: "محاكاة ديناميكية في الوقت الحقيقي" },
  { fr: "Logiciel robuste et multiplateforme (Windows / Linux / macOS)", ar: "برنامج قوي ومتعدد المنصات (ويندوز / لينكس / ماك)" },
  { fr: "Développé selon des standards académiques (EHTP)", ar: "مطوَّر وفق معايير أكاديمية (EHTP)" },
];

export default function CRTR() {
  const { t } = useLang();
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".header-reveal", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: { trigger: ".header-reveal", start: "top 85%", once: true }
      });

      gsap.from(".crtr-card", {
        y: 40,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: { trigger: ".crtr-card", start: "top 90%", once: true }
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="crtr" ref={sectionRef} className="relative py-32 overflow-hidden bg-white">
      {/* Blueprint Grid Background */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#3b82f6 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

      <div className="container-xl relative z-10">
        <div className="header-reveal text-center mb-20 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/5 border border-primary/10 text-primary font-mono text-[10px] uppercase tracking-widest">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            {t("Nos prestations", "خدماتنا")}
          </div>
          <h2 className="text-4xl md:text-6xl font-display font-black text-slate-900 tracking-tighter">
            CRTR 2.0 <span className="text-primary italic font-serif font-light">—</span> {t("Simulation Avancée des Régimes Transitoires Hydrauliques", "محاكاة متقدمة للأنظمة العابرة الهيدروليكية")}
          </h2>
          <p className="text-slate-500 text-sm max-w-xl mx-auto font-light leading-relaxed">
            {t(
              "CRTR 2.0 est une solution de modélisation hydraulique dédiée à l’analyse des phénomènes de coup de bélier et des régimes transitoires dans les réseaux d’eau potable et industriels.",
              "CRTR 2.0 هو حل نمذجة هيدروليكية مخصص لتحليل ظواهر ضربات الكبش والأنظمة العابرة في شبكات مياه الشرب والصناعية."
            )}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Main Services Column */}
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-4">
            {prestations.map((p, i) => (
              <div key={p.fr} className={`group p-8 rounded-[2rem] border border-slate-100 bg-white hover:bg-slate-50 transition-all duration-500 shadow-sm hover:shadow-xl ${i === 0 ? 'md:col-span-2' : ''}`}>
                <div className="flex flex-col h-full space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center group-hover:scale-110 group-hover:bg-primary transition-all duration-500">
                    <p.icon size={24} className="text-primary group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-slate-900 mb-2">{t(p.fr, p.ar)}</h4>
                    <p className="text-xs text-slate-500 leading-relaxed font-light">{t(p.descFr, p.descAr)}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Sidebar Info */}
          <div className="lg:col-span-4 space-y-6">
            {/* Tech Specs Panel */}
            <div className="p-8 rounded-[2rem] bg-slate-900 text-white shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10 text-6xl font-black">MOC</div>
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <Settings className="text-primary animate-spin-slow" size={20} />
                {t("Technologie et expertise", "التكنولوجيا والخبرة")}
              </h3>
              <ul className="space-y-4">
                {techFeatures.map((f) => (
                  <li key={f.fr} className="flex items-center gap-3 group">
                    <div className="h-px w-4 bg-primary group-hover:w-8 transition-all" />
                    <span className="text-[11px] font-mono tracking-tight text-slate-400 group-hover:text-white transition-colors">
                      {t(f.fr, f.ar)}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA Card */}
            <div className="crtr-card p-8 rounded-[2rem] border-2 border-dashed border-slate-200 flex flex-col items-center text-center space-y-6">
              <div className="space-y-2">
                <p className="text-xs font-bold text-primary uppercase tracking-widest">{t("Besoin d'expertise ?", "هل تحتاج خبرة؟")}</p>
                <p className="text-sm text-slate-600 leading-relaxed italic">
                  {t("Commandez une étude personnalisée pour sécuriser vos réseaux.", "اطلب دراسة مخصصة لتأمين شبكاتك.")}
                </p>
              </div>
              <Link href="#contact" className="group w-full py-4 rounded-2xl bg-primary text-white font-bold text-xs uppercase tracking-[0.2em] shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all flex items-center justify-center gap-2">
                {t("Demander un devis", "طلب عرض أسعار")}
                <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}