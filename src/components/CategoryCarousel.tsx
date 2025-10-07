import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import AudiobookCard from "./AudiobookCard";
import { Audiobook } from "@/data/audiobooks";
import { useRef } from "react";

interface CategoryCarouselProps {
  title: string;
  audiobooks: Audiobook[];
}

const CategoryCarousel = ({ title, audiobooks }: CategoryCarouselProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -400 : 400;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">{title}</h2>
      
      <div className="relative group">
        <Button
          size="icon"
          variant="secondary"
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 opacity-0 group-hover:opacity-100 transition-opacity rounded-full"
          onClick={() => scroll('left')}
        >
          <ChevronLeft className="w-5 h-5" />
        </Button>

        <div 
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto scrollbar-hide scroll-smooth pb-4"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {audiobooks.map((audiobook) => (
            <div key={audiobook.id} className="flex-shrink-0 w-44">
              <AudiobookCard audiobook={audiobook} />
            </div>
          ))}
        </div>

        <Button
          size="icon"
          variant="secondary"
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 opacity-0 group-hover:opacity-100 transition-opacity rounded-full"
          onClick={() => scroll('right')}
        >
          <ChevronRight className="w-5 h-5" />
        </Button>
      </div>
    </div>
  );
};

export default CategoryCarousel;
