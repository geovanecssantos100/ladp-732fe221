import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, User, Calendar } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { getArticleBySlug } from "@/data/articles";
import NotFound from "./NotFound";
import ladpLogo from "@/assets/ladp-logo.png";

const ArticlePage = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const article = slug ? getArticleBySlug(slug) : undefined;

  if (!article) return <NotFound />;

  const paragraphs = article.content.split("\n\n").filter(Boolean);

  const goToArticles = () => {
    navigate("/");
    setTimeout(() => {
      document.getElementById("artigos")?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    <div className="min-h-screen bg-background font-inter">
      {/* Header */}
      <header className="bg-gradient-hero text-white">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between max-w-4xl mx-auto">
            <button onClick={goToArticles} className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors font-inter">
              <ArrowLeft className="h-4 w-4" />
              Voltar
            </button>
            <button onClick={() => navigate("/")} >
              <img src={ladpLogo} alt="LADP" className="h-10 w-10" />
            </button>
          </div>
        </div>
      </header>

      {/* Article */}
      <article className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {article.tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="font-inter text-xs">
                {tag}
              </Badge>
            ))}
          </div>

          {/* Title */}
          <h1 className="font-playfair text-3xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
            {article.title}
          </h1>

          {/* Meta */}
          <div className="flex flex-wrap items-center gap-6 text-muted-foreground mb-10 pb-10 border-b border-border">
            <div className="flex items-center gap-2">
              <User className="h-4 w-4 text-primary" />
              <span>{article.authors.join(", ")}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4 text-primary" />
              <span>{article.date}</span>
            </div>
          </div>

          {/* Abstract */}
          <div className="bg-secondary/50 border-l-4 border-primary rounded-r-lg p-6 mb-10">
            <p className="font-inter text-foreground/80 italic leading-relaxed">
              {article.abstract}
            </p>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            {paragraphs.map((p, i) => (
              <p
                key={i}
                className="font-inter text-foreground/85 leading-relaxed mb-6 text-justify"
              >
                {p.trim()}
              </p>
            ))}
          </div>
        </div>
      </article>

      {/* Footer */}
      <footer className="border-t border-border py-8">
        <div className="container mx-auto px-4 text-center">
          <button
            onClick={goToArticles}
            className="inline-flex items-center gap-2 text-primary hover:underline font-inter font-medium"
          >
            <ArrowLeft className="h-4 w-4" />
            Ver todos os artigos
          </button>
        </div>
      </footer>
    </div>
  );
};

export default ArticlePage;
