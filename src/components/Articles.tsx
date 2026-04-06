import { FileText, User, Calendar } from "lucide-react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { articles } from "@/data/articles";

export const Articles = () => {
  return (
    <section className="py-24 bg-background" id="artigos">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-4">
              Artigos Científicos
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto mb-6 rounded-full"></div>
            <p className="font-inter text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Produções acadêmicas dos membros da LADP sobre temas relevantes
              do Direito Previdenciário.
            </p>
          </div>

          {/* Articles list */}
          <div className="grid gap-6">
            {articles.map((article) => (
              <Card
                key={article.slug}
                className="border-border hover:shadow-elegant transition-all duration-300 bg-card overflow-hidden group"
              >
                <div className="flex flex-col md:flex-row">
                  <div className="w-full md:w-1.5 h-1.5 md:h-auto bg-gradient-primary shrink-0"></div>

                  <div className="flex-1">
                    <CardHeader className="pb-3">
                      <div className="flex flex-wrap gap-2 mb-2">
                        {article.tags.map((tag) => (
                          <Badge key={tag} variant="secondary" className="font-inter text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      <CardTitle className="font-playfair text-xl group-hover:text-primary transition-colors leading-snug">
                        {article.title}
                      </CardTitle>
                    </CardHeader>

                    <CardContent className="space-y-3">
                      <p className="font-inter text-muted-foreground text-sm leading-relaxed">
                        {article.abstract}
                      </p>

                      <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground pt-2">
                        <div className="flex items-center gap-1.5">
                          <User className="h-4 w-4 text-primary" />
                          <span className="font-inter">{article.authors.join(", ")}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <Calendar className="h-4 w-4 text-primary" />
                          <span className="font-inter">{article.date}</span>
                        </div>
                        <Link
                          to={`/artigos/${article.slug}`}
                          className="inline-flex items-center gap-1.5 text-primary hover:underline font-inter font-medium ml-auto"
                        >
                          <FileText className="h-4 w-4" />
                          Ler artigo
                        </Link>
                      </div>
                    </CardContent>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
