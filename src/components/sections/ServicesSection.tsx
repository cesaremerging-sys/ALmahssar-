"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, HardHat, Droplets, Ruler, Truck, Sprout } from "lucide-react";

const serviceList = [
  {
    id: 1,
    icon: HardHat,
    title: "Génie Civil & Infrastructure",
    description: "Conception et réalisation d'ouvrages d'art, infrastructures routières et réseaux divers.",
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19480c5?auto=format&fit=crop&q=80&w=1000",
  },
  {
    id: 2,
    icon: Droplets,
    title: "Solutions Hydrauliques (CRTR 2.0)",
    description: "Simulation avancée des régimes transitoires et analyse des coups de bélier (MOC).",
    image: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&q=80&w=1000",
  },
  {
    id: 3,
    icon: Ruler,
    title: "Expertise Technique",
    description: "Études de protection, dimensionnement de ballons anti-bélier et diagnostics réseaux.",
    image: "https://images.unsplash.com/photo-1581094281212-d1993cc38c36?auto=format&fit=crop&q=80&w=1000",
  },
  {
    id: 4,
    icon: Truck,
    title: "Location d'Engins",
    description: "Mise à disposition d'un parc d'engins modernes pour vos chantiers de construction.",
    image: "https://images.unsplash.com/photo-1578574526241-1122a65fe04d?auto=format&fit=crop&q=80&w=1000",
  },
  {
    id: 5,
    icon: Sprout,
    title: "Systèmes d'Irrigation",
    description: "Étude et installation de réseaux d'irrigation agricoles et industriels optimisés.",
    image: "https://images.unsplash.com/photo-1563214538-4b71a25ee821?auto=format&fit=crop&q=80&w=1000",
  },
];

export default function ServicesSection() {
  return (
    <section className="py-32 px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col items-center text-center mb-24 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-50 border border-slate-100 text-slate-400 font-mono text-[10px] uppercase tracking-widest">
            <span className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse" />
            Nos Expertises Techniques
          </div>
          <h2 className="text-5xl md:text-7xl font-display font-black text-slate-900 tracking-tighter leading-none">
            Domaines <br /> 
            <span className="italic font-serif font-light text-cyan-600">d&apos;Intervention</span>
          </h2>
          <div className="w-24 h-1 bg-cyan-500 rounded-full mt-4" />
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceList.map((service, index) => (
            <div 
              key={service.id} 
              className={`group relative bg-white rounded-[2.5rem] border border-slate-100 overflow-hidden hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.1)] transition-all duration-700 flex flex-col ${
                index === 1 ? 'lg:translate-y-12' : index === 4 ? 'lg:-translate-y-12' : ''
              }`}
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover grayscale-[30%] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent opacity-60" />
                
                {/* Float Icon Badge */}
                <div className="absolute bottom-6 left-8 w-14 h-14 rounded-2xl bg-white shadow-xl flex items-center justify-center text-cyan-600 group-hover:bg-cyan-600 group-hover:text-white transition-all duration-500">
                  <service.icon size={24} strokeWidth={1.5} />
                </div>
              </div>

              {/* Content Section */}
              <div className="p-10 pt-4 space-y-4 flex-1 flex flex-col">
                <h3 className="text-2xl font-bold text-slate-900 leading-tight group-hover:text-cyan-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed font-light flex-1">
                  {service.description}
                </p>
                
                <div className="pt-6 border-t border-slate-50">
                  <Link 
                    href={`/services/${service.id}`} 
                    className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 group-hover:text-cyan-600 transition-all"
                  >
                    Détails du service
                    <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          ))}

          {/* Special "Contact Us" Card to fill the grid if needed */}
          <div className="lg:col-span-1 p-10 rounded-[2.5rem] bg-slate-900 flex flex-col justify-center items-center text-center space-y-6 lg:translate-y-12">
            <h4 className="text-white text-2xl font-bold">Un projet spécifique en tête ?</h4>
            <Link 
              href="/contact" 
              className="px-8 py-4 bg-cyan-500 text-white rounded-2xl font-bold text-xs uppercase tracking-widest hover:bg-white hover:text-slate-900 transition-all"
            >
              Discutons-en
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}