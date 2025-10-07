import { Headphones } from "lucide-react";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border">
      <div className="container px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <Headphones className="w-8 h-8 text-primary" />
            <span className="text-xl font-bold">AudioBooks Premium</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
