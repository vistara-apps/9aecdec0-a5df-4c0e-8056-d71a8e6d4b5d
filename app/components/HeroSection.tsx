'use client';

interface HeroSectionProps {
  onMintClick: () => void;
}

export function HeroSection({ onMintClick }: HeroSectionProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 pt-20">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-2 h-2 bg-accent rounded-full animate-pulse" style={{ animationDelay: '0s' }}></div>
        <div className="absolute top-40 right-20 w-3 h-3 bg-muted rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-40 left-1/4 w-2 h-2 bg-accent rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-60 right-1/3 w-3 h-3 bg-muted rounded-full animate-pulse" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute top-1/3 left-1/2 w-2 h-2 bg-accent rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10 animate-fade-in">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Mint your <span className="text-accent">FAME WHY</span> token.
        </h1>
        
        <p className="text-xl md:text-2xl text-fg/90 mb-4">
          mint your token on base using x402
        </p>
        
        <p className="text-base md:text-lg text-fg/70 mb-12">
          Foil apicket wity your tokens boom mear protocol.
        </p>

        <button
          onClick={onMintClick}
          className="px-12 py-4 bg-[#c4f82a] text-[#0a1929] rounded-full text-lg font-semibold hover:bg-[#b5e625] transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
        >
          MINT
        </button>
      </div>
    </section>
  );
}
