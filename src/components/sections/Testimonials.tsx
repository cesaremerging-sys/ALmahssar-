"use client";

import { useLang } from "@/context/LangContext";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Mehdi Bouazza",
    role: "Directeur technique – ONEE",
    avatar: "MB",
    fr: "CRTR 2.0 nous a permis d'identifier des zones critiques dans notre réseau AEP et de les sécuriser avant tout incident. Une expertise indispensable.",
    ar: "مكّننا CRTR 2.0 من تحديد المناطق الحرجة في شبكتنا وتأمينها قبل أي حادث. خبرة لا غنى عنها.",
    stars: 5,
  },
  {
    name: "Fatima El Mansouri",
    role: "Chef de projet – Ministère de l'Équipement",
    avatar: "FM",
    fr: "Équipe sérieuse et compétente. Les rapports techniques sont d'une qualité remarquable avec des recommandations claires et applicables.",
    ar: "فريق جاد وكفء. التقارير التقنية ذات جودة رائعة مع توصيات واضحة وقابلة للتطبيق.",
    stars: 5,
  },
  {
    name: "Ahmed Rharbi",
    role: "Ingénieur – Bureau d'études privé",
    avatar: "AR",
    fr: "La simulation hydraulique a complètement transformé notre approche des projets AEP. Résultats fiables et délais respectés.",
    ar: "غيّرت المحاكاة الهيدروليكية نهجنا تماماً في مشاريع مياه الشرب. نتائج موثوقة ومواعيد محترمة.",
    stars: 5,
  },
];

export default function Testimonials() {
  const { t } = useLang();

  return (
    <section id="testimonials" className="relative py-32 bg-white overflow-hidden">
      {/* Subtle Technical Grid Background */}
      <div className="absolute inset-0 z-0 opacity-[0.02] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

      <div className="container-xl relative z-10">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-24 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-50 border border-slate-100 text-slate-400 font-mono text-[10px] uppercase tracking-widest">
            {t("Retours d'expérience", "آراء عملائنا")}
          </div>
          <h2 className="text-4xl md:text-6xl font-display font-black text-slate-900 tracking-tighter leading-tight">
            {t("Ils nous font", "يثقون")}{" "}
            <span className="text-primary italic font-serif font-light">{t("confiance", "بنا")}</span>
          </h2>
          <div className="w-20 h-1 bg-primary/20 mx-auto rounded-full mt-6" />
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((te, i) => (
            <div
              key={te.name}
              className={`group relative p-10 rounded-[2.5rem] bg-white border border-slate-100 hover:border-primary/20 hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.08)] transition-all duration-500 flex flex-col ${
                i === 1 ? 'md:-translate-y-6' : ''
              }`}
            >
              {/* Giant Quote Watermark */}
              <Quote className="absolute top-8 right-8 text-slate-50 group-hover:text-primary/5 transition-colors duration-500" size={60} strokeWidth={1} />

              {/* Stars */}
              <div className="flex gap-1 mb-6 relative z-10">
                {Array.from({ length: te.stars }).map((_, i) => (
                  <Star key={i} size={14} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Quote Content */}
              <p className="text-base md:text-lg text-slate-600 leading-relaxed font-light italic flex-1 relative z-10">
                &quot;{t(te.fr, te.ar)}&quot;
              </p>

              {/* Author Info */}
              <div className="flex items-center gap-4 pt-8 mt-8 border-t border-slate-50 relative z-10">
                <div className="w-12 h-12 rounded-2xl bg-slate-900 flex items-center justify-center text-sm font-bold text-white shadow-lg group-hover:bg-primary transition-colors duration-500">
                  {te.avatar}
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-900 group-hover:text-primary transition-colors">
                    {te.name}
                  </p>
                  <p className="text-[10px] font-mono text-slate-400 uppercase tracking-wider mt-1">
                    {te.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}