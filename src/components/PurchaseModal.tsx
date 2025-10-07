import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Sparkles } from "lucide-react";

interface PurchaseModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  bookTitle: string;
}

const PurchaseModal = ({ open, onOpenChange, bookTitle }: PurchaseModalProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <div className="flex items-center justify-center mb-4">
            <Sparkles className="w-12 h-12 text-primary animate-pulse" />
          </div>
          <DialogTitle className="text-center text-2xl">Gostou?</DialogTitle>
          <DialogDescription className="text-center text-base">
            Continue ouvindo <span className="font-semibold text-foreground">{bookTitle}</span> e tenha acesso ilimitado a todo nosso catálogo!
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-3 py-4">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-accent" />
            <span className="text-sm">Acesso vitalício</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-accent" />
            <span className="text-sm">Download ilimitado</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-accent" />
            <span className="text-sm">Bônus PDFs inclusos</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-accent" />
            <span className="text-sm">Atualizações futuras grátis</span>
          </div>
        </div>

        <DialogFooter className="flex-col sm:flex-col gap-2">
          <Button className="w-full hover-glow" size="lg">
            Eu Quero Agora!
          </Button>
          <Button variant="ghost" onClick={() => onOpenChange(false)} className="w-full">
            Continuar navegando
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default PurchaseModal;
