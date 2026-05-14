"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLang } from "@/context/LangContext";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const { t } = useLang();
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero image parallax
      gsap.to(".parallax-img", {
        y: -30,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true
        }
      });

      // Stagger reveal for expertise cards
      gsap.from(".expertise-card", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".expertise-grid",
          start: "top 85%",
          once: true
        }
      });

      // Simple reveal for text
      gsap.from(".reveal-content > *", {
        y: 30,
        opacity: 0,
        duration: 1,
        stagger: 0.1,
        ease: "expo.out",
        scrollTrigger: {
          trigger: ".reveal-content",
          start: "top 80%",
          once: true
        }
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const expertise = [
    { icon: "🏗️", fr: "Ouvrages d'art & Infrastructure", ar: "المنشآت الفنية والبنية التحتية" },
    { icon: "💧", fr: "Réseaux hydrauliques sous pression", ar: "شبكات الضغط الهيدروليكي" },
    { icon: "📐", fr: "Études et modélisation hydraulique", ar: "الدراسات والنمذجة الهيدروليكية" },
    { icon: "⚙️", fr: "Location d'engins de chantier", ar: "تأجير معدات البناء" },
  ];

  return (
    <section id="about" ref={sectionRef} className="relative py-32 overflow-hidden bg-white">
      {/* Background Decorative Text - Now in Light Grey */}
      <div className="absolute top-20 left-0 text-[15vw] font-black text-slate-100 leading-none pointer-events-none select-none uppercase">
        Expertise
      </div>

      <div className="container-xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          {/* Image Side: High-End Architectural Feel */}
          <div className="relative">
            <div className="relative h-[600px] rounded-[2rem] overflow-hidden group shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1581093588401-a4ee745d81ab?auto=format&fit=crop&q=80&w=900"
                alt="Engineering expertise"
                className="parallax-img w-full h-[100%] object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-40" />
            </div>

            {/* Experience Badge: Clean Glass on White */}
            <div className="absolute -bottom-10 -right-4 md:-right-10 bg-white/80 backdrop-blur-xl border border-slate-200 p-8 rounded-[2rem] shadow-[0_20px_50px_-15px_rgba(0,0,0,0.1)]">
              <div className="flex flex-col items-center">
                <span className="text-5xl font-display font-black text-primary italic">5+</span>
                <span className="text-[10px] text-slate-400 uppercase tracking-[0.4em] mt-2 whitespace-nowrap">
                  {t("Années d'expertise", "سنة من الخبرة")}
                </span>
              </div>
            </div>

            {/* Technical Detail: Architectural scale line */}
            <div className="absolute top-10 -left-10 hidden xl:block">
              <div className="flex items-center gap-4 rotate-90 origin-left">
                <div className="w-24 h-px bg-slate-200" />
                <span className="font-mono text-[10px] text-slate-300 uppercase tracking-widest italic">Scale_1:50</span>
              </div>
            </div>
          </div>

          {/* Text Side: Clean & Authoritative */}
          <div className="reveal-content space-y-8">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-[2px] bg-primary" />
                <span className="font-mono text-xs font-bold uppercase tracking-[0.3em] text-primary">
                   {t("Qui sommes-nous", "من نحن")}
                </span>
              </div>
              <h2 className="text-4xl md:text-6xl font-display font-bold text-slate-900 uppercase tracking-tighter leading-[0.95]">
                {t("Une expertise technique", "خبرة تقنية")} <br />
                <span className="text-slate-300 italic font-serif font-light lowercase"> {t("au service de l'excellence", "في خدمة التميز")}</span>
              </h2>
            </div>

            <div className="space-y-6 text-slate-600 font-light leading-relaxed max-w-xl">
              <p className="text-lg">
                {t(
                  "Optimisez la sécurité et la performance de vos réseaux sous pression grâce à une expertise scientifique de haut niveau.",
                  "حسّن أمان وأداء شبكاتك تحت الضغط بفضل خبرة علمية عالية المستوى."
                )}
              </p>
              <div className="p-6 bg-slate-50 border-l-4 border-primary rounded-r-2xl italic text-sm text-slate-500">
                 {t(
                  "CRTR 2.0 est une solution de modélisation hydraulique dédiée à l’analyse des phénomènes de coup de bélier et des régimes transitoires dans les réseaux d’eau potable et industriels.",
                  "CRTR 2.0 هو حل نمذجة هيدروليكية مخصص لتحليل ظواهر ضربات الكبش والأنظمة العابرة في شبكات مياه الشرب والصناعية."
                )}
              </div>
            </div>

            {/* Expertise Grid */}
            <div className="expertise-grid grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              {expertise.map((e) => (
                <div 
                  key={e.fr} 
                  className="expertise-card group relative p-5 rounded-2xl border border-slate-100 bg-white hover:bg-slate-50 hover:border-primary/20 transition-all duration-500 shadow-sm hover:shadow-md"
                >
                  <div className="flex items-center gap-4">
                    <span className="text-2xl filter group-hover:drop-shadow-md transition-all duration-500">{e.icon}</span>
                    <p className="text-[11px] font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-900 transition-colors">
                      {t(e.fr, e.ar)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}