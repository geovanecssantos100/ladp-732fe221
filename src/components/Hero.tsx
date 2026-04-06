import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import ladpLogo from "@/assets/ladp-logo.png";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero pt-16">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent rounded-full blur-3xl animate-pulse delay-700"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Logo */}
          <div className="mb-8 animate-fade-in">
            <img 
              src={ladpLogo} 
              alt="LADP Logo" 
              className="w-48 h-48 mx-auto drop-shadow-2xl hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* Main heading */}
          <h1 className="font-playfair text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in delay-100">
            Liga Acadêmica de<br />
            <span className="text-secondary">Direito Previdenciário</span>
          </h1>

          {/* Subtitle */}
          <p className="font-inter text-xl md:text-2xl text-secondary mb-4 max-w-3xl mx-auto animate-fade-in delay-200">
            UNICAP Recife
          </p>

          {/* Description */}
          <p className="font-inter text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed animate-fade-in delay-300">
            onectando acadêmicos e profissionais através de eventos de excelência 
            em Direito Previdenciário
          </p>
        </div>
      </div>
    </section>
  );
};
