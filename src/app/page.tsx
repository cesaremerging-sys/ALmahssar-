import { LangProvider } from "@/context/LangContext";
import Navbar from "@/components/navbar/Navbar";
import Hero from "@/components/home/Hero";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import CRTR from "@/components/sections/CRTR";
import WhyUs from "@/components/sections/WhyUs";
import Projects from "@/components/sections/Projects";
import Process from "@/components/sections/Process";
import Testimonials from "@/components/sections/Testimonials";
import CtaBanner from "@/components/sections/CtaBanner";
import ContactForm from "@/components/sections/ContactForm";
import Footer from "@/components/footer/Footer";

export default function Home() {
  return (
    <LangProvider>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <CRTR />
      <WhyUs />
      <Projects />
      <Process />
      <Testimonials />
      <CtaBanner />
      <ContactForm />
      <Footer />
    </LangProvider>
  );
}
