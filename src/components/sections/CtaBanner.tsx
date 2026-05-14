"use client";

import { useLang } from "@/context/LangContext";
import { Send, MessageSquare, ArrowRight } from "lucide-react";

export default function CtaBanner() {
  const { t } = useLang();

  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-white">
      {/* Decorative Blueprint Lines */}
      <div className="absolute inset-0 z-0 opacity-[0.02] pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-px bg-slate-900" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-slate-900" />
        <div className="absolute top-0 left-1/4 w-px h-full bg-slate-900" />
        <div className="absolute top-0 right-1/4 w-px h-full bg-slate-900" />
      </div>

      {/* Soft Background Glow */}
      <div className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container-xl relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          
          <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full border border-slate-100 bg-slate-50/50">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            <span className="text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-slate-500">
              {t("Consultation Gratuite", "استشارة مجانية")}
            </span>
          </div>

          <h2 className="text-4xl md:text-6xl font-display font-black text-slate-900 tracking-tighter leading-[0.95]">
            {t("Prêt à concrétiser", "هل أنت مستعد لتجسيد")} <br />
            <span className="text-primary italic font-serif font-light">
              {t("votre vision ?", "رؤيتك؟")}
            </span>
          </h2>

          <p className="text-slate-500 text-sm md:text-base font-light max-w-xl mx-auto leading-relaxed">
            {t(
              "Expertise technique, rigueur et innovation. Nous accompagnons vos projets de la conception à la réalisation.",
              "خبرة تقنية، دقة وابتكار. نحن نرافق مشاريعكم من التصميم إلى التنفيذ."
            )}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
            <a 
              href="#contact" 
              className="group w-full sm:w-auto px-10 py-5 rounded-2xl bg-slate-900 text-white font-bold text-xs uppercase tracking-widest shadow-2xl hover:bg-primary transition-all duration-500 flex items-center justify-center gap-3"
            >
              <Send size={16} />
              {t("Demander un devis", "اطلب عرض أسعار")}
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </a>

            <a 
              href={`https://wa.me/212631739379`} 
              target="_blank" 
              rel="noreferrer" 
              className="group w-full sm:w-auto px-10 py-5 rounded-2xl border border-slate-200 bg-white text-slate-900 font-bold text-xs uppercase tracking-widest hover:bg-slate-50 transition-all duration-500 flex items-center justify-center gap-3"
            >
              <MessageSquare size={16} className="text-green-500" />
              {t("WhatsApp Direct", "واتساب مباشر")}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}