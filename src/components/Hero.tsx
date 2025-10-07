import { Info, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import AudioPlayer from "./AudioPlayer";
import { audiobooks } from "@/data/audiobooks";

const Hero = () => {
  const featuredBook = audiobooks[0];

  return (
    <section className="relative h-[85vh] min-h-[600px] flex items-end">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={featuredBook.cover_url}
          alt={featuredBook.title}
          className="w-full h-full object-cover blur-sm scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/20" />
      </div>

      {/* Content */}
      <div className="container relative z-10 pb-16 px-4">
        <div className="max-w-2xl space-y-6">
          <div className="space-y-2">
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              {featuredBook.title}
            </h1>
            <p className="text-xl text-muted-foreground">
              por {featuredBook.author}
            </p>
            <p className="text-lg">
              {featuredBook.description}
            </p>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-sm text-muted-foreground">{featuredBook.duration}</span>
            <span className="text-sm text-muted-foreground">•</span>
            <span className="text-sm text-muted-foreground">{featuredBook.category}</span>
          </div>

          <div className="max-w-md">
            <AudioPlayer
              audioUrl={featuredBook.audio_url}
              title={featuredBook.title}
              author={featuredBook.author}
            />
          </div>

          <div className="flex flex-wrap gap-3">
            <Button variant="secondary" size="lg">
              <Info className="w-5 h-5 mr-2" />
              Mais Informações
            </Button>
            <Button variant="outline" size="lg">
              <Plus className="w-5 h-5 mr-2" />
              Adicionar à Lista
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
