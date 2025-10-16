import { Headphones } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border py-12">
      <div className="container px-4">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h3 className="text-2xl font-bold text-primary">RendaCast</h3>
          
          <p className="text-muted-foreground">
            Transforme sua vida através do conhecimento
          </p>
          
          <div className="flex justify-center gap-6 text-sm flex-wrap">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              Termos de Uso
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              Política de Privacidade
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              Contato
            </a>
          </div>
          
          <p className="text-sm text-muted-foreground">
            © 2024 RendaCast. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
