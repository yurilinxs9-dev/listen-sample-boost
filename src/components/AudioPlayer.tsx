import { useState, useEffect, useRef } from "react";
import { Play, Pause } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import PurchaseModal from "./PurchaseModal";

interface AudioPlayerProps {
  audioUrl: string;
  title: string;
  author: string;
  maxDuration?: number; // in seconds, default 5
}

const AudioPlayer = ({ audioUrl, title, author, maxDuration = 5 }: AudioPlayerProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);
  const intervalRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    if (isPlaying) {
      intervalRef.current = setInterval(() => {
        setCurrentTime((prev) => {
          if (prev >= maxDuration) {
            setIsPlaying(false);
            setShowModal(true);
            if (audioRef.current) {
              audioRef.current.pause();
              audioRef.current.currentTime = 0;
            }
            return 0;
          }
          return prev + 0.1;
        });
      }, 100);
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isPlaying, maxDuration]);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        // Reset if at the end
        if (currentTime >= maxDuration) {
          setCurrentTime(0);
          audioRef.current.currentTime = 0;
        }
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const progress = (currentTime / maxDuration) * 100;

  return (
    <>
      <div className="bg-secondary/50 rounded-xl p-4 space-y-3 border border-border">
        <div className="flex items-center gap-3">
          <Button
            size="icon"
            onClick={togglePlay}
            className="rounded-full w-14 h-14 bg-primary hover:bg-primary/90"
          >
            {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6 ml-0.5" />}
          </Button>
          
          <div className="flex-1 min-w-0">
            <p className="text-sm font-semibold truncate">{title}</p>
            <p className="text-xs text-muted-foreground truncate">{author}</p>
          </div>
          
          <div className="text-xs font-medium tabular-nums">
            {currentTime.toFixed(1)}s
          </div>
        </div>

        <div className="space-y-2">
          <Progress value={progress} className="h-2" />
          <p className="text-xs text-muted-foreground text-center">
            🎧 Preview gratuito de {maxDuration} segundos
          </p>
        </div>

        <audio ref={audioRef} src={audioUrl} />
      </div>

      <PurchaseModal
        open={showModal}
        onOpenChange={setShowModal}
        bookTitle={title}
      />
    </>
  );
};

export default AudioPlayer;
