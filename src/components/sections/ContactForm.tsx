"use client";

import { useState } from "react";
import { useLang } from "@/context/LangContext";
import { Phone, MapPin, Clock, Send, MessageSquare } from "lucide-react";

const WA_NUMBER = "212631739379";

const buildWhatsApp = (data: Record<string, string>) => {
  const msg = encodeURIComponent(
    `*Demande de Devis – Nouveau Projet*\n\n` +
    ` *Nom:* ${data.nom}\n` +
    ` *Tél:* ${data.tel}\n` +
    ` *Email:* ${data.email}\n` +
    ` *Service:* ${data.service}\n\n` +
    ` *Détails du projet:* \n${data.message}`
  );
  return `https://wa.me/${WA_NUMBER}?text=${msg}`;
};

const services = [
  { fr: "Simulation des coups de bélier", ar: "محاكاة ضربات الكبش" },
  { fr: "Études de protection hydraulique", ar: "دراسات الحماية الهيدروليكية" },
  { fr: "Optimisation des réseaux", ar: "تحسين الشبكات" },
  { fr: "Location d'engins", ar: "تأجير المعدات" },
  { fr: "Systèmes d'irrigation", ar: "أنظمة الري" },
];

export default function ContactForm() {
  const { t } = useLang();
  const [form, setForm] = useState({ nom: "", tel: "", email: "", service: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.open(buildWhatsApp(form), "_blank");
  };

  return (
    <section id="contact" className="relative py-32 bg-white overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50/50 -skew-x-12 translate-x-1/2 pointer-events-none" />

      <div className="container-xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Side: Info */}
          <div className="lg:col-span-5 space-y-10">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-px bg-primary" />
                <span className="font-mono text-xs font-bold uppercase tracking-[0.3em] text-primary">
                   {t("Contactez-nous", "تواصل معنا")}
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-display font-black text-slate-900 leading-[0.9] tracking-tighter">
                {t("Besoin d’une étude ou d’un accompagnement ?", "هل تحتاج إلى دراسة أو دعم؟")}
              </h2>
              <p className="text-slate-500 font-light leading-relaxed max-w-sm">
                {t(
                  "Notre équipe vous accompagne dans vos projets hydrauliques.",
                  "فريقنا يرافقك في مشاريعك الهيدروليكية."
                )}
              </p>
              <p className="text-primary font-bold text-sm uppercase tracking-[0.2em]">
                {t("👉 Demandez un devis dès maintenant", "👉 اطلب عرض أسعار الآن")}
              </p>
            </div>

            {/* Quick Contact Cards */}
            <div className="grid grid-cols-1 gap-4">
              {[
                { icon: Phone, label: "WhatsApp", val: "+212 631 739 379", color: "text-green-500" },
                { icon: MapPin, label: t("Siège", "المقر"), val: "Maroc", color: "text-blue-500" },
                { icon: Clock, label: t("Horaire", "التوقيت"), val: "08:00 - 18:00", color: "text-orange-500" },
                { icon: Send, label: t("Paiement sécurisé", "دفع آمن"), val: t("Plugin de paiement bientôt disponible", "إضافة الدفع متاحة قريباً"), color: "text-sky-500" },
              ].map((c, i) => (
                <div key={i} className="flex items-center gap-5 p-6 rounded-[2rem] border border-slate-100 bg-slate-50/50 hover:bg-white hover:shadow-xl transition-all duration-500">
                  <div className={`w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center ${c.color}`}>
                    <c.icon size={20} />
                  </div>
                  <div>
                    <p className="text-[10px] text-slate-400 uppercase tracking-widest font-bold">{c.label}</p>
                    <p className="text-sm text-slate-900 font-bold">{c.val}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side: Form */}
          <div className="lg:col-span-7">
            <form
              onSubmit={handleSubmit}
              className="bg-white p-8 md:p-12 rounded-[3rem] shadow-[0_30px_100px_-20px_rgba(0,0,0,0.08)] border border-slate-100 space-y-6"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] text-slate-400 uppercase tracking-widest font-bold ml-2">
                    {t("Nom complet", "الاسم الكامل")}
                  </label>
                  <input
                    name="nom"
                    required
                    value={form.nom}
                    onChange={handleChange}
                    className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-none focus:ring-2 focus:ring-primary/20 transition-all text-slate-900 placeholder:text-slate-300"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] text-slate-400 uppercase tracking-widest font-bold ml-2">
                    {t("Téléphone", "الهاتف")}
                  </label>
                  <input
                    name="tel"
                    type="tel"
                    required
                    value={form.tel}
                    onChange={handleChange}
                    className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-none focus:ring-2 focus:ring-primary/20 transition-all text-slate-900 placeholder:text-slate-300"
                    placeholder="+212 6..."
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] text-slate-400 uppercase tracking-widest font-bold ml-2">
                  {t("Service souhaité", "الخدمة المطلوبة")}
                </label>
                <select
                  name="service"
                  required
                  value={form.service}
                  onChange={handleChange}
                  className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-none focus:ring-2 focus:ring-primary/20 transition-all text-slate-900 appearance-none cursor-pointer"
                >
                  <option value="">{t("Sélectionnez un service", "اختر خدمة")}</option>
                  {services.map((s) => (
                    <option key={s.fr} value={s.fr}>
                      {t(s.fr, s.ar)}
                    </option>
                  ))}
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] text-slate-400 uppercase tracking-widest font-bold ml-2">
                   {t("Détails du projet", "تفاصيل المشروع")}
                </label>
                <textarea
                  name="message"
                  required
                  rows={4}
                  value={form.message}
                  onChange={handleChange}
                  className="w-full px-6 py-4 rounded-3xl bg-slate-50 border-none focus:ring-2 focus:ring-primary/20 transition-all text-slate-900 placeholder:text-slate-300 resize-none"
                  placeholder={t("Décrivez brièvement vos besoins...", "صف باختصار احتياجاتك...")}
                />
              </div>

              <button 
                type="submit" 
                className="group w-full py-5 rounded-2xl bg-slate-900 text-white font-bold text-sm uppercase tracking-[0.2em] shadow-2xl hover:bg-primary transition-all duration-500 flex items-center justify-center gap-3"
              >
                <MessageSquare size={18} className="group-hover:animate-bounce" />
                {t("Envoyer via WhatsApp", "إرسال عبر واتساب")}
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}