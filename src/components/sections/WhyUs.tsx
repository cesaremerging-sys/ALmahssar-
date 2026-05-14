"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLang } from "@/context/LangContext";
import { ShieldCheck, Zap, Microscope, Globe2, BarChart3, Handshake } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const advantages = [
  { icon: ShieldCheck, fr: "Réduction des risques de rupture de conduites", ar: "تخفيض مخاطر كسر الأنابيب", descFr: "Des études et audits ciblés pour limiter les défaillances des réseaux.", descAr: "دراسات دقيقة لمراقبة وتقليل أعطال شبكات المياه." },
  { icon: Globe2, fr: "Sécurisation des installations hydrauliques", ar: "تأمين المنشآت الهيدروليكية", descFr: "Solutions adaptées pour protéger les ouvrages et garantir leur durabilité.", descAr: "حلول حماية للمحطات والأنظمة لضمان استمرار التشغيل بأمان." },
  { icon: BarChart3, fr: "Optimisation des coûts d’exploitation", ar: "تحسين تكلفة التشغيل", descFr: "Approches rentables pour réduire les dépenses et maximiser la performance.", descAr: "خطط فعالة لتخفيض التكاليف وتحسين كفاءة التشغيل." },
  { icon: Microscope, fr: "Expertise technique pointue et fiable", ar: "خبرة فنية دقيقة وموثوقة", descFr: "Une équipe qualifiée avec une expérience approfondie en hydraulique.", descAr: "فريق متخصص بخبرة واسعة في الدراسات والهندسة الهيدروليكية." },
  { icon: Zap, fr: "Solutions adaptées aux projets d’eau potable et industriels", ar: "حلول متكاملة لمشاريع مياه الشرب والصناعية", descFr: "Des réponses sur mesure pour chaque besoin potable, industriel ou urbain.", descAr: "حلول مصممة خصيصاً لكل مشروع مياه شرب أو صناعي أو حضري." },
];

export default function WhyUs() {
  const { t } = useLang();
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".why-header", {
        y: 30,
        opacity: 0,
        duration: 1,
        scrollTrigger: { trigger: ".why-header", start: "top 90%" }
      });

      gsap.utils.toArray<HTMLElement>(".why-card").forEach((el, i) => {
        gsap.fromTo(el,
          { y: 50, opacity: 0 },
          { 
            y: 0, 
            opacity: 1, 
            duration: 0.8, 
            delay: i * 0.1, 
            ease: "power3.out",
            scrollTrigger: { trigger: el, start: "top 92%", once: true } 
          }
        );
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="why-us" ref={sectionRef} className="relative py-32 bg-white overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50/50 -skew-x-12 translate-x-1/2 pointer-events-none" />
      
      <div className="container-xl relative z-10">
        {/* Header */}
        <div className="why-header max-w-3xl mb-20">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-10 h-[1px] bg-primary" />
            <span className="text-[10px] font-mono font-bold uppercase tracking-[0.3em] text-primary">
              {t("Nos atouts", "مزايانا")}
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-display font-black text-slate-900 tracking-tighter leading-none">
            {t("Pourquoi choisir nos services ?", "لماذا تختار خدماتنا؟")}
          </h2>
        </div>

        {/* Advantages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantages.map((a, i) => (
            <div
              key={a.fr}
              className="why-card group relative p-10 rounded-[2.5rem] bg-white border border-slate-100 hover:border-primary/20 hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.08)] transition-all duration-500"
            >
              {/* Icon Container */}
              <div className="w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center text-primary mb-8 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                <a.icon size={30} strokeWidth={1.5} />
              </div>

              {/* Text Content */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-primary transition-colors">
                  {t(a.fr, a.ar)}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed font-light">
                  {t(a.descFr, a.descAr)}
                </p>
              </div>

              {/* Decorative Number */}
              <span className="absolute top-10 right-10 font-mono text-sm font-bold text-slate-50 group-hover:text-primary/5 transition-colors">
                0{i + 1}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}