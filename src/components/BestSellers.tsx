import { audiobooks } from "@/data/audiobooks";

const BestSellers = () => {
  return (
    <section id="best-sellers" className="py-20 bg-background">
      <div className="container px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-foreground">
            Os livros mais vendidos do mundo em um só lugar
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6">
            {audiobooks.map((book) => (
              <a
                key={book.id}
                href={`#audiobook-${book.id}`}
                className="group relative block aspect-[2/3] rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(229,9,20,0.6)] hover:z-10"
              >
                <img
                  src={book.cover_url}
                  alt={`Capa do audiobook ${book.title}`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BestSellers;