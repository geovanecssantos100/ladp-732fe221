import { Mail, Instagram, MapPin, Phone } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    content: "lacademicaprev@gmail.com",
    link: "mailto:lacademicaprev@gmail.com",
  },
  {
    icon: Instagram,
    title: "Instagram",
    content: "@ladprev.unicap",
    link: "https://www.instagram.com/ladprev.unicap/",
  },
  {
    icon: MapPin,
    title: "Localização",
    content: "UNICAP - Recife, PE",
    link: "#",
  },
  {
    icon: Phone,
    title: "Telefone",
    content: "(81) 99831-2877",
    link: "tel:+5581998312877",
  },
];

export const Contact = () => {
  return (
    <section className="py-24 bg-background" id="contato">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-4">
              Entre em Contato
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto mb-6 rounded-full"></div>
            <p className="font-inter text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Tem dúvidas ou quer participar da LADP? Entre em contato conosco!
            </p>
          </div>

          {/* Contact cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {contactInfo.map((item, index) => (
              <Card 
                key={index}
                className="border-border hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 bg-card group"
              >
                <CardContent className="p-6 text-center">
                  <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-primary rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                    <item.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-playfair text-lg font-semibold text-foreground mb-2">
                    {item.title}
                  </h3>
                  <a 
                    href={item.link}
                    className="font-inter text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item.content}
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTA section */}
          <div className="bg-gradient-hero rounded-2xl p-12 text-center shadow-glow">
            <h3 className="font-playfair text-3xl md:text-4xl font-bold text-white mb-4">
              Faça Parte da LADP
            </h3>
            <p className="font-inter text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              Junte-se a nós e desenvolva sua carreira no Direito Previdenciário 
              ao lado dos melhores profissionais e acadêmicos de Pernambuco.
            </p>
            <a
              href="mailto:contato@ladp.unicap.br"
              className="inline-flex items-center gap-2 bg-white text-primary font-inter font-semibold px-8 py-4 rounded-lg hover:bg-secondary hover:text-primary transition-all duration-300 hover:scale-105 shadow-elegant"
            >
              <Mail className="h-5 w-5" />
              Candidate-se Agora
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
