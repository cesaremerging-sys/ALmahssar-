"use client";

import { useLang } from "@/context/LangContext";
import { Phone, DraftingCompass, FileText, Construction, ArrowRight } from "lucide-react";

const steps = [
  {
    num: "01",
    icon: Phone,
    fr: "Consultation",
    ar: "الاستشارة",
    descFr: "Prise de contact, analyse de votre besoin et cadrage du projet.",
    descAr: "التواصل الأولي وتحليل احتياجاتك وتحديد نطاق المشروع.",
  },
  {
    num: "02",
    icon: DraftingCompass,
    fr: "Étude technique",
    ar: "الدراسة التقنية",
    descFr: "Modélisation, simulation hydraulique et dimensionnement détaillé.",
    descAr: "النمذجة والمحاكاة الهيدروليكية والتصميم التفصيلي.",
  },
  {
    num: "03",
    icon: FileText,
    fr: "Rapport & Devis",
    ar: "التقرير والعرض",
    descFr: "Livraison d'un rapport complet et d'une offre de prix transparente.",
    descAr: "تسليم تقرير شامل وعرض أسعار شفاف.",
  },
  {
    num: "04",
    icon: Construction,
    fr: "Réalisation",
    ar: "التنفيذ",
    descFr: "Mise en œuvre, suivi de chantier et contrôle qualité.",
    descAr: "التنفيذ ومتابعة الورشة ومراقبة الجودة.",
  },
];

export default function Process() {
  const { t, lang } = useLang();

  return (
    <section id="process" className="relative py-32 bg-white overflow-hidden transition-colors duration-700">
      {/* Subtle Blueprint Grid Background */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#3b82f6 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

      <div className="container-xl relative z-10">
        {/* Header Section */}
        <div className="max-w-3xl mx-auto text-center mb-20 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/5 border border-primary/10 text-primary font-mono text-[10px] uppercase tracking-widest">
            <DraftingCompass size={12} />
            Execution Workflow
          </div>
          <h2 className="font-display text-4xl md:text-6xl font-black text-slate-900 tracking-tighterLEADING-[0.9]">
            {t("Notre processus", "منهجيتنا")} — <span className="text-primary italic font-serif font-light">{t("Comment nous travaillons", "كيف نعمل")}</span>
          </h2>
          <p className="text-slate-500 text-sm md:text-base max-w-xl mx-auto font-light leading-relaxed">
            {t(
              "Une méthodologie rigoureuse et transparente, de la conception à la réalisation, pour garantir l'excellence de vos infrastructures.",
              "منهجية صارمة وشفافة، من التصميم إلى التنفيذ، لضمان تميز بنيتكم التحتية."
            )}
          </p>
        </div>

        {/* Timeline Grid */}
        <div className="relative">
          {/* Connecting Line (Desktop Only) */}
          <div className="hidden lg:block absolute top-16 left-0 right-0 h-px bg-slate-100 z-0" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((s, i) => (
              <div key={s.num} className="group flex flex-col items-center text-center p-8 rounded-3xl border border-slate-50 bg-white hover:bg-slate-50 hover:shadow-xl transition-all duration-500">
                <div className="relative mb-10 flex-col items-center">
                  {/* Step Icon with Gradient Border */}
                  <div className="relative w-20 h-20 rounded-full border-[6px] border-slate-50 bg-white shadow-sm flex items-center justify-center text-primary group-hover:scale-110 group-hover:shadow-primary/20 group-hover:border-primary/5 transition-all duration-500">
                    <s.icon size={28} strokeWidth={1.5} />
                    <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent" />
                  </div>
                  {/* Step Number Badge */}
                  <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-slate-900 text-white font-mono text-[10px] font-bold uppercase tracking-wider rounded-md px-3 py-1 shadow-md">
                    {s.num}
                  </div>
                </div>

                <div className="space-y-3 flex-1 flex flex-col">
                  <h3 className="font-display text-lg font-bold text-slate-900 tracking-tight group-hover:text-primary transition-colors">
                    {t(s.fr, s.ar)}
                  </h3>
                  <p className="text-xs text-slate-500 font-light leading-relaxed flex-1">{t(s.descFr, s.descAr)}</p>
                </div>

                {/* Arrow between steps (Desktop) */}
                {i < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-[58px] -right-[1.75rem] text-slate-200 z-10">
                    <ArrowRight size={24} strokeWidth={1} className={lang === 'ar' ? 'rotate-180' : ''} />
                  </div>
                )}
                
                {/* Arrow between steps (Mobile) */}
                {i < steps.length - 1 && (
                  <div className="lg:hidden mt-10 text-slate-200 text-3xl font-light">↓</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}