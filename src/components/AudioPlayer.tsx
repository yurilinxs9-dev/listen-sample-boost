import { useState, useEffect, useRef } from "react";
import { Play, Pause, X } from "lucide-react";
import { Audiobook } from "@/data/audiobooks";

interface AudioPlayerProps {
  audiobook: Audiobook;
  onClose: () => void;
  onAudioEnd: () => void;
}

const PREVIEW_DURATION = 5; // segundos

const AudioPlayer = ({ audiobook, onClose, onAudioEnd }: AudioPlayerProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [progress, setProgress] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handleTimeUpdate = () => {
      const time = audio.currentTime;
      setCurrentTime(time);
      setProgress((time / PREVIEW_DURATION) * 100);

      if (time >= PREVIEW_DURATION) {
        audio.pause();
        setIsPlaying(false);
        onAudioEnd();
      }
    };

    audio.addEventListener('timeupdate', handleTimeUpdate);
    return () => audio.removeEventListener('timeupdate', handleTimeUpdate);
  }, [onAudioEnd]);

  const togglePlay = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      if (currentTime >= PREVIEW_DURATION) {
        audioRef.current.currentTime = 0;
        setCurrentTime(0);
      }
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const formatTime = (time: number) => {
    const seconds = Math.floor(time);
    return `0:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-card border-2 border-primary/30 rounded-2xl shadow-2xl max-w-md w-full p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="text-center">
          <div className="mb-6">
            <img
              src={audiobook.cover_url}
              alt={`Capa do audiobook ${audiobook.title}`}
              className="w-48 h-72 object-cover rounded-lg mx-auto shadow-2xl"
            />
          </div>

          <h3 className="text-2xl font-bold mb-2 text-foreground">{audiobook.title}</h3>
          <p className="text-muted-foreground mb-1">{audiobook.author}</p>
          <p className="text-sm text-muted-foreground mb-6">Preview de 5 segundos</p>

          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <button
                onClick={togglePlay}
                className="w-14 h-14 bg-primary hover:bg-primary/90 text-primary-foreground rounded-full flex items-center justify-center transition-all hover:scale-110 mx-auto shadow-lg"
              >
                {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6 ml-1" />}
              </button>
            </div>

            <div className="space-y-2">
              <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                <div
                  className="bg-primary h-full transition-all duration-100"
                  style={{ width: `${progress}%` }}
                />
              </div>
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>{formatTime(currentTime)}</span>
                <span>{formatTime(PREVIEW_DURATION)}</span>
              </div>
            </div>
          </div>

          {currentTime >= PREVIEW_DURATION && (
            <div className="mt-6 p-4 bg-accent/10 border border-accent/30 rounded-lg">
              <p className="text-sm text-foreground">
                Preview finalizado! Continue ouvindo com acesso completo.
              </p>
            </div>
          )}
        </div>

        <audio
          ref={audioRef}
          src={audiobook.audio_url}
        />
      </div>
    </div>
  );
};

export default AudioPlayer;
