import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { CheckCircle2 } from "lucide-react";

interface PurchaseModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const PurchaseModal = ({ isOpen, onClose }: PurchaseModalProps) => {
  const scrollToOffer = () => {
    document.getElementById('oferta')?.scrollIntoView({ behavior: 'smooth' });
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md bg-card border-2 border-primary/30">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center text-foreground">
            Gostou do Preview? 🎧
          </DialogTitle>
          <DialogDescription className="text-center text-lg pt-4 text-muted-foreground">
            Continue sua jornada e tenha acesso completo a este e mais 199 audiobooks transformadores!
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-6 py-6">
          <div className="space-y-4">
            <div className="flex items-center gap-3 p-4 bg-accent/10 rounded-lg border border-accent/30">
              <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0" />
              <span className="text-foreground">200+ Audiobooks Best-Sellers</span>
            </div>
            
            <div className="flex items-center gap-3 p-4 bg-accent/10 rounded-lg border border-accent/30">
              <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0" />
              <span className="text-foreground">3500+ Livros em PDF de Bônus</span>
            </div>
            
            <div className="flex items-center gap-3 p-4 bg-accent/10 rounded-lg border border-accent/30">
              <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0" />
              <span className="text-foreground">Acesso Vitalício</span>
            </div>
            
            <div className="flex items-center gap-3 p-4 bg-accent/10 rounded-lg border border-accent/30">
              <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0" />
              <span className="text-foreground">Atualizações Futuras Grátis</span>
            </div>
          </div>

          <div className="text-center bg-gradient-to-r from-primary/10 to-accent/10 p-6 rounded-xl border border-primary/30">
            <p className="text-muted-foreground line-through text-lg mb-1">De R$ 497,00</p>
            <p className="text-4xl font-bold text-primary mb-2">R$ 19,90</p>
            <p className="text-accent font-semibold">Oferta por tempo limitado!</p>
          </div>

          <button 
            onClick={scrollToOffer}
            className="btn-cta w-full py-4 rounded-lg font-bold text-lg uppercase"
          >
            Quero Acesso Completo Agora
          </button>

          <p className="text-center text-sm text-muted-foreground">
            🛡️ Garantia de 7 dias - 100% do seu dinheiro de volta
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PurchaseModal;
