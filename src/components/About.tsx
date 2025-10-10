import { Scale, Users, Calendar, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: Scale,
    title: "Excelência Jurídica",
    description: "Aprofundamento teórico e prático em Direito Previdenciário com os melhores profissionais da área.",
  },
  {
    icon: Users,
    title: "Network Qualificado",
    description: "Conexão direta com advogados, magistrados e especialistas renomados no Direito Previdenciário.",
  },
  {
    icon: Calendar,
    title: "Eventos Regulares",
    description: "Palestras, workshops e debates mensais sobre temas atuais e relevantes da área.",
  },
  {
    icon: Award,
    title: "Desenvolvimento Acadêmico",
    description: "Formação complementar de qualidade para alunos da UNICAP e demais interessados.",
  },
];

export const About = () => {
  return (
    <section className="py-24 bg-background" id="sobre">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-4">
              Sobre a LADP
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto mb-6 rounded-full"></div>
            <p className="font-inter text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              A Liga Acadêmica de Direito Previdenciário da UNICAP é uma iniciativa 
              estudantil dedicada ao estudo e à difusão do conhecimento em Direito 
              Previdenciário no Recife.
            </p>
          </div>

          {/* Features grid */}
          <div className="grid md:grid-cols-2 gap-6 mb-16">
            {features.map((feature, index) => (
              <Card 
                key={index} 
                className="border-border hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 bg-card"
              >
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-gradient-primary rounded-lg shadow-md">
                      <feature.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-playfair text-xl font-semibold text-foreground mb-2">
                        {feature.title}
                      </h3>
                      <p className="font-inter text-muted-foreground leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Mission statement */}
          <div className="bg-gradient-secondary rounded-2xl p-8 md:p-12 shadow-elegant">
            <h3 className="font-playfair text-3xl font-bold text-foreground mb-4 text-center">
              Nossa Missão
            </h3>
            <p className="font-inter text-lg text-foreground/80 text-center leading-relaxed max-w-3xl mx-auto">
              Promover o conhecimento e a prática do Direito Previdenciário através da 
              organização de eventos acadêmicos de alta qualidade, reunindo estudantes e 
              profissionais para construir uma comunidade jurídica forte e atualizada em 
              Pernambuco.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
