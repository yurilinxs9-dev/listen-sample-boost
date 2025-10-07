import { Headphones } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container px-4">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="flex items-center justify-center gap-2">
            <Headphones className="w-8 h-8" />
            <span className="text-2xl font-bold">AudioBooks Premium</span>
          </div>
          
          <p className="text-sm opacity-80">
            © 2024 AudioBooks Premium. Todos os direitos reservados.
          </p>
          
          <div className="flex items-center justify-center gap-6 text-sm opacity-80">
            <a href="#" className="hover:opacity-100 transition-opacity">Termos de Uso</a>
            <span>•</span>
            <a href="#" className="hover:opacity-100 transition-opacity">Política de Privacidade</a>
            <span>•</span>
            <a href="#" className="hover:opacity-100 transition-opacity">Contato</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
