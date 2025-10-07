import { useState } from "react";
import AudioPlayer from "./AudioPlayer";
import { audiobooks } from "@/data/audiobooks";

const FeaturedBooks = () => {
  const [selectedBook, setSelectedBook] = useState<typeof audiobooks[0] | null>(null);
  const featured = audiobooks.slice(0, 4);

  return (
    <section className="py-16 bg-white">
      <div className="container px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featured.map((book) => (
              <div 
                key={book.id}
                className="group cursor-pointer"
                onClick={() => setSelectedBook(book)}
              >
                <div className="relative overflow-hidden rounded-lg shadow-card hover-lift">
                  <img 
                    src={book.cover_url}
                    alt={book.title}
                    className="w-full aspect-[2/3] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <div className="text-white">
                      <p className="text-xs uppercase tracking-wide mb-1">{book.category}</p>
                      <p className="font-semibold text-sm">Ouvir Preview</p>
                    </div>
                  </div>
                </div>
                <div className="mt-3 text-center">
                  <h3 className="font-bold text-sm mb-1">{book.title}</h3>
                  <p className="text-xs text-muted-foreground">{book.author}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Audio Player Modal */}
      {selectedBook && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl p-6 max-w-md w-full shadow-elevated">
            <div className="flex items-start gap-4 mb-6">
              <img 
                src={selectedBook.cover_url}
                alt={selectedBook.title}
                className="w-24 h-32 object-cover rounded-lg shadow-card"
              />
              <div className="flex-1">
                <h3 className="font-bold text-lg mb-1">{selectedBook.title}</h3>
                <p className="text-sm text-muted-foreground mb-2">{selectedBook.author}</p>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <span>{selectedBook.duration}</span>
                  <span>•</span>
                  <span>{selectedBook.category}</span>
                </div>
              </div>
            </div>
            
            <AudioPlayer
              audioUrl={selectedBook.audio_url}
              title={selectedBook.title}
              author={selectedBook.author}
              maxDuration={5}
            />
            
            <button
              onClick={() => setSelectedBook(null)}
              className="mt-4 text-sm text-muted-foreground hover:text-foreground transition-colors w-full text-center"
            >
              Fechar
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default FeaturedBooks;
