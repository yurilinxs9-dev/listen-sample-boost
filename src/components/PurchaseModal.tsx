import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Sparkles } from "lucide-react";

interface PurchaseModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  bookTitle: string;
}

const PurchaseModal = ({ open, onOpenChange, bookTitle }: PurchaseModalProps) => {
  const handlePurchase = () => {
    document.getElementById('oferta')?.scrollIntoView({ behavior: 'smooth' });
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md bg-white">
        <DialogHeader>
          <div className="flex items-center justify-center mb-4">
            <Sparkles className="w-16 h-16 text-primary animate-pulse" />
          </div>
          <DialogTitle className="text-center text-3xl font-bold">Gostou? 🎧</DialogTitle>
          <DialogDescription className="text-center text-lg">
            Continue ouvindo <span className="font-bold text-primary">{bookTitle}</span> e tenha acesso ilimitado a <span className="font-bold">200+ audiobooks</span>!
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-3 py-6 bg-secondary/50 rounded-lg p-4">
          <div className="flex items-center gap-3">
            <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0" />
            <span className="text-sm font-medium">Acesso vitalício a 200+ áudios</span>
          </div>
          <div className="flex items-center gap-3">
            <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0" />
            <span className="text-sm font-medium">Download ilimitado</span>
          </div>
          <div className="flex items-center gap-3">
            <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0" />
            <span className="text-sm font-medium">+ Bônus 3500 livros em PDF</span>
          </div>
          <div className="flex items-center gap-3">
            <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0" />
            <span className="text-sm font-medium">Atualizações futuras grátis</span>
          </div>
        </div>

        <div className="text-center py-4">
          <p className="text-sm text-muted-foreground line-through">de R$ 397,00</p>
          <p className="text-4xl font-bold text-primary">R$ 19,90</p>
          <p className="text-sm text-muted-foreground">pagamento único</p>
        </div>

        <DialogFooter className="flex-col sm:flex-col gap-3">
          <Button onClick={handlePurchase} className="w-full btn-cta text-lg py-6 h-auto">
            QUERO ACESSO COMPLETO AGORA!
          </Button>
          <Button variant="ghost" onClick={() => onOpenChange(false)} className="w-full text-muted-foreground hover:text-foreground">
            Continuar navegando
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default PurchaseModal;
