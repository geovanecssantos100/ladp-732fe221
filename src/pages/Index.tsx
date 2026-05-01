import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Events } from "@/components/Events";
// import { Articles } from "@/components/Articles";
import { Justificativa } from "@/components/Justificativa";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

const Index = () => {
  return (
    <div className="min-h-screen font-inter">
      <Hero />
      <About />
      <Events />
      {/* <Articles /> */}
      <Justificativa />
      <Contact />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default Index;
