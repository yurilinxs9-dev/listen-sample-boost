import { Search, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <h1 className="text-2xl font-bold text-gradient">AudioBooks</h1>
          
          <nav className="hidden md:flex items-center gap-6">
            <a href="#inicio" className="text-sm text-foreground hover:text-primary transition-colors">
              Início
            </a>
            <a href="#categorias" className="text-sm text-foreground hover:text-primary transition-colors">
              Categorias
            </a>
            <a href="#biblioteca" className="text-sm text-foreground hover:text-primary transition-colors">
              Minha Biblioteca
            </a>
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden sm:flex items-center gap-2 bg-secondary px-3 py-2 rounded-md">
            <Search className="w-4 h-4 text-muted-foreground" />
            <Input 
              placeholder="Buscar audiobooks..." 
              className="border-0 bg-transparent focus-visible:ring-0 w-48 lg:w-64"
            />
          </div>

          <Button variant="outline" size="sm">
            Login
          </Button>

          <Button size="icon" variant="ghost" className="md:hidden">
            <Menu className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
