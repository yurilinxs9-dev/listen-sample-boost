import { useState } from "react";
import { Play, Plus, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Audiobook } from "@/data/audiobooks";
import PurchaseModal from "./PurchaseModal";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface AudiobookCardProps {
  audiobook: Audiobook;
}

const AudiobookCard = ({ audiobook }: AudiobookCardProps) => {
  const [showPurchaseModal, setShowPurchaseModal] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handlePreview = () => {
    // Simulate playing 5 seconds then show modal
    setTimeout(() => {
      setShowPurchaseModal(true);
    }, 5000);
  };

  return (
    <>
      <Card 
        className="group relative overflow-hidden bg-card border-border hover-scale cursor-pointer transition-all duration-300"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="aspect-[2/3] relative">
          <img 
            src={audiobook.cover_url} 
            alt={audiobook.title}
            className="w-full h-full object-cover"
          />
          
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          {/* Hover actions */}
          <div className={`absolute inset-0 flex flex-col items-center justify-center gap-2 transition-all duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
            <Button 
              size="icon" 
              className="rounded-full w-14 h-14 hover-glow"
              onClick={handlePreview}
            >
              <Play className="w-6 h-6 ml-0.5" />
            </Button>
            
            <div className="flex gap-2">
              <Button size="icon" variant="secondary" className="rounded-full">
                <Plus className="w-5 h-5" />
              </Button>
              
              <Dialog>
                <DialogTrigger asChild>
                  <Button size="icon" variant="secondary" className="rounded-full">
                    <Info className="w-5 h-5" />
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>{audiobook.title}</DialogTitle>
                    <DialogDescription className="space-y-2">
                      <p><strong>Autor:</strong> {audiobook.author}</p>
                      <p><strong>Duração:</strong> {audiobook.duration}</p>
                      <p><strong>Categoria:</strong> {audiobook.category}</p>
                      <p className="pt-2">{audiobook.description}</p>
                    </DialogDescription>
                  </DialogHeader>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </div>

        <div className="p-3">
          <h3 className="font-semibold text-sm line-clamp-1">{audiobook.title}</h3>
          <p className="text-xs text-muted-foreground line-clamp-1">{audiobook.author}</p>
          <p className="text-xs text-muted-foreground mt-1">{audiobook.duration}</p>
        </div>
      </Card>

      <PurchaseModal
        open={showPurchaseModal}
        onOpenChange={setShowPurchaseModal}
        bookTitle={audiobook.title}
      />
    </>
  );
};

export default AudiobookCard;
