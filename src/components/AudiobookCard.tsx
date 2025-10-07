import { Play } from "lucide-react";
import { Audiobook } from "@/data/audiobooks";

interface AudiobookCardProps {
  audiobook: Audiobook;
  onPlay: () => void;
}

const AudiobookCard = ({ audiobook, onPlay }: AudiobookCardProps) => {
  return (
    <div className="group relative netflix-card">
      <div className="aspect-[2/3] bg-muted rounded-md overflow-hidden shadow-lg">
        <img
          src={audiobook.cover_url}
          alt={`Capa do audiobook ${audiobook.title}`}
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="mt-3">
        <h3 className="font-semibold text-sm line-clamp-2 mb-1 text-foreground">{audiobook.title}</h3>
        <p className="text-xs text-muted-foreground mb-2">{audiobook.author}</p>
        
        <button
          onClick={onPlay}
          className="w-full bg-primary hover:bg-primary/90 text-primary-foreground text-xs py-2 px-3 rounded-md transition-all flex items-center justify-center gap-2 font-medium"
        >
          <Play className="w-3 h-3" />
          Preview 5s
        </button>
      </div>
    </div>
  );
};

export default AudiobookCard;
