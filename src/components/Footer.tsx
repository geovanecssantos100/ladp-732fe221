import ladpLogo from "@/assets/ladp-logo.png";

export const Footer = () => {
  return (
    <footer className="bg-gradient-hero text-white py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Logo and description */}
            <div className="text-center md:text-left">
              <img 
                src={ladpLogo} 
                alt="LADP Logo" 
                className="w-24 h-24 mx-auto md:mx-0 mb-4"
              />
              <h3 className="font-playfair text-xl font-bold mb-2">LADP</h3>
              <p className="font-inter text-white/80 text-sm">
                Liga Acadêmica de Direito Previdenciário
              </p>
            </div>

            {/* Quick links */}
            <div className="text-center">
              <h4 className="font-playfair text-lg font-semibold mb-4">Links Rápidos</h4>
              <ul className="space-y-2 font-inter text-sm">
                <li>
                  <a href="#sobre" className="text-white/80 hover:text-white transition-colors">
                    Sobre
                  </a>
                </li>
                <li>
                  <a href="#eventos" className="text-white/80 hover:text-white transition-colors">
                    Eventos
                  </a>
                </li>
                <li>
                  <a href="#contato" className="text-white/80 hover:text-white transition-colors">
                    Contato
                  </a>
                </li>
              </ul>
            </div>

            {/* University info */}
            <div className="text-center md:text-right">
              <h4 className="font-playfair text-lg font-semibold mb-4">UNICAP</h4>
              <p className="font-inter text-white/80 text-sm">
                Universidade Católica de Pernambuco<br />
                Recife - PE<br />
                Brasil
              </p>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-white/20 pt-8 text-center">
            <p className="font-inter text-white/70 text-sm">
              © 2025 LADP - Liga Acadêmica de Direito Previdenciário. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
