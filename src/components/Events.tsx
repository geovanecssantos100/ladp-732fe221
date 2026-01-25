import { Calendar, MapPin, Users } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const events = [
  {
    title: "Nomeação dos novos membros",
    date: "20/01/2026",
    location: "Auditório Fernando Santa Cruz - OAB/PE",
    attendees: "120+ participantes",
    status: "Encerrado",
    description: "Iremos nomear os novos integrantes da LADP. Além disso, teremos palestras com grandes advogados e algumas palavras de convidados especiais, além da oportunidade de construir um networking no coffee break.",
  },
];

export const Events = () => {
  return (
    <section className="py-24 bg-gradient-secondary" id="eventos">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-4">
              Eventos & Atividades
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto mb-6 rounded-full"></div>
            <p className="font-inter text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Participe dos nossos eventos e amplie seu conhecimento em Direito Previdenciário 
              com os melhores profissionais do mercado.
            </p>
          </div>

          {/* Events grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {events.map((event, index) => (
              <Card 
                key={index}
                className="border-border hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 bg-card overflow-hidden group"
              >
                <div className="h-2 bg-gradient-primary"></div>
                <CardHeader className="pb-4">
                  <div className="flex justify-between items-start mb-2">
                    <Badge 
                      variant={event.status === "Próximo" ? "default" : "secondary"}
                      className="font-inter"
                    >
                      {event.status}
                    </Badge>
                  </div>
                  <CardTitle className="font-playfair text-xl group-hover:text-primary transition-colors">
                    {event.title}
                  </CardTitle>
                  <CardDescription className="font-inter text-muted-foreground">
                    {event.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4 text-primary" />
                    <span className="font-inter">{event.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4 text-primary" />
                    <span className="font-inter">{event.location}</span>
                  </div>
                  {/* <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Users className="h-4 w-4 text-primary" />
                  </div> */}
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTA box */}
          <div className="mt-12 text-center bg-card rounded-2xl p-8 shadow-elegant border border-border">
            <h3 className="font-playfair text-2xl font-bold text-foreground mb-3">
              Quer organizar um evento conosco?
            </h3>
            <p className="font-inter text-muted-foreground mb-6">
              Entre em contato para propor palestras, workshops ou parcerias.
            </p>
            <a 
              href="#contato"
              className="inline-flex items-center gap-2 bg-gradient-primary text-white font-inter font-semibold px-6 py-3 rounded-lg hover:shadow-glow transition-all duration-300 hover:scale-105"
            >
              Fale Conosco
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
