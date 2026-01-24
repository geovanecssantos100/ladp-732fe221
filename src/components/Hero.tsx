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
            Conectando acadêmicos e profissionais através de eventos de excelência 
            em Direito Previdenciário
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in delay-500">
            <Button 
              size="lg" 
              className="bg-secondary text-primary hover:bg-white hover:text-primary font-inter font-semibold text-lg px-8 py-6 shadow-elegant hover:shadow-glow transition-all duration-300 hover:scale-105"
            >
              Conheça a LADP
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="lg" 
              className="bg-white/20 backdrop-blur-sm border-2 border-white text-white hover:bg-white hover:text-primary font-inter font-semibold text-lg px-8 py-6 transition-all duration-300 hover:scale-105"
            >
              Próximos Eventos
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white/50 rounded-full"></div>
        </div>
      </div>
    </section>
  );
};
