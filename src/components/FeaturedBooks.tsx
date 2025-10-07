import { useState } from "react";
import AudiobookCard from "./AudiobookCard";
import AudioPlayer from "./AudioPlayer";
import PurchaseModal from "./PurchaseModal";
import { audiobooks } from "@/data/audiobooks";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "./ui/button";

const categories = [
  { name: "Finanças", books: audiobooks.filter(b => ["Pai Rico, Pai Pobre", "O Poder do Hábito", "Quem Pensa Enriquece"].includes(b.title)) },
  { name: "Investimentos", books: audiobooks.filter(b => ["A Psicologia Financeira", "Os Segredos da Mente Milionária"].includes(b.title)) },
  { name: "Autoajuda", books: audiobooks.filter(b => ["A Cabana", "As 5 Linguagens do Amor"].includes(b.title)) },
  { name: "Carreira & Negócios", books: audiobooks.filter(b => ["Como Convencer Alguém em 90 Segundos", "Mais Esperto que o Diabo"].includes(b.title)) },
  { name: "Mentalidade", books: audiobooks.filter(b => ["A Tríade do Tempo", "A Rola de Neve"].includes(b.title)) },
];

const FeaturedBooks = () => {
  const [selectedAudiobook, setSelectedAudiobook] = useState<typeof audiobooks[0] | null>(null);
  const [showPurchaseModal, setShowPurchaseModal] = useState(false);

  const handleAudioEnd = () => {
    setShowPurchaseModal(true);
  };

  const scrollCarousel = (category: string, direction: 'left' | 'right') => {
    const carousel = document.getElementById(`carousel-${category}`);
    if (carousel) {
      const scrollAmount = direction === 'left' ? -400 : 400;
      carousel.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section id="categorias" className="py-16 bg-gradient-to-b from-card to-background">
      <div className="container px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-foreground">
          Categorias em Destaque
        </h2>
        
        {categories.map((category) => (
          <div key={category.name} className="mb-12">
            <h3 className="text-2xl font-bold mb-6 text-foreground">{category.name}</h3>
            
            <div className="relative group">
              <Button
                variant="ghost"
                size="icon"
                className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-background/80 hover:bg-background opacity-0 group-hover:opacity-100 transition-opacity"
                onClick={() => scrollCarousel(category.name, 'left')}
              >
                <ChevronLeft className="w-8 h-8" />
              </Button>
              
              <div
                id={`carousel-${category.name}`}
                className="flex gap-4 overflow-x-auto scrollbar-hide scroll-smooth pb-4"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
              >
                {category.books.map((book) => (
                  <div key={book.id} className="flex-shrink-0 w-[180px] md:w-[200px]">
                    <AudiobookCard
                      audiobook={book}
                      onPlay={() => setSelectedAudiobook(book)}
                    />
                  </div>
                ))}
              </div>
              
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-background/80 hover:bg-background opacity-0 group-hover:opacity-100 transition-opacity"
                onClick={() => scrollCarousel(category.name, 'right')}
              >
                <ChevronRight className="w-8 h-8" />
              </Button>
            </div>
          </div>
        ))}

        {selectedAudiobook && (
          <AudioPlayer
            audiobook={selectedAudiobook}
            onClose={() => setSelectedAudiobook(null)}
            onAudioEnd={handleAudioEnd}
          />
        )}

        <PurchaseModal
          isOpen={showPurchaseModal}
          onClose={() => setShowPurchaseModal(false)}
        />
      </div>
    </section>
  );
};

export default FeaturedBooks;
