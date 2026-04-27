import { FileText, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSeKJzaySgMdPA22QDkfz2e__u8JA5aH3pZlbiC-jwiIqMfKDQ/viewform?usp=header";

export const Justificativa = () => {
  return (
    <section id="justificativa" className="py-24 bg-gradient-hero relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 right-10 w-72 h-72 bg-secondary rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-72 h-72 bg-accent rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center animate-fade-in">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-secondary/20 backdrop-blur-sm mb-6">
            <FileText className="w-10 h-10 text-secondary" />
          </div>

          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-white mb-4">
            Justificativa de Falta
          </h2>

          <p className="font-inter text-lg text-white/90 mb-10 leading-relaxed">
            Precisou faltar a um evento ou reunião? Preencha o formulário abaixo
            para enviar sua justificativa à diretoria da LADP.
          </p>

          <Button
            asChild
            size="lg"
            variant="secondary"
            className="font-semibold shadow-lg hover:scale-105 transition-transform"
          >
            <a href={FORM_URL} target="_blank" rel="noopener noreferrer">
              Acessar formulário
              <ExternalLink className="ml-2 w-5 h-5" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Justificativa;
