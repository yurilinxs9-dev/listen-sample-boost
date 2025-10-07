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
      <div className="bg-card border border-border rounded-lg p-4 space-y-3">
        <div className="flex items-center gap-3">
          <Button
            size="icon"
            onClick={togglePlay}
            className="rounded-full w-12 h-12 hover-glow"
          >
            {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5 ml-0.5" />}
          </Button>
          
          <div className="flex-1">
            <p className="text-sm font-medium">{title}</p>
            <p className="text-xs text-muted-foreground">{author}</p>
          </div>
          
          <div className="text-xs text-muted-foreground">
            {currentTime.toFixed(1)}s / {maxDuration}s
          </div>
        </div>

        <div className="space-y-1">
          <Progress value={progress} className="h-1" />
          <p className="text-xs text-muted-foreground text-center">
            Preview de {maxDuration} segundos
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
