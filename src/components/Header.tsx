import { Search } from "lucide-react";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-background via-background/95 to-transparent backdrop-blur-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-8">
            <h1 className="text-2xl md:text-3xl font-bold text-primary">
              AUDIOBOOKS
            </h1>
            <nav className="hidden md:flex items-center gap-6">
              <a href="#inicio" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                Início
              </a>
              <a href="#categorias" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                Categorias
              </a>
              <a href="#oferta" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                Oferta
              </a>
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <button className="p-2 hover:bg-muted rounded-full transition-colors">
              <Search className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
