'use client';

import { Coins } from 'lucide-react';

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-bg/80 backdrop-blur-lg border-b border-border">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center">
              <Coins className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-semibold">TokenDrop</span>
          </div>
          
          <nav className="hidden md:flex items-center gap-8">
            <a href="#" className="text-fg/80 hover:text-fg transition-colors duration-200">
              New mints
            </a>
            <a href="#" className="text-fg/80 hover:text-fg transition-colors duration-200">
              Active projects
            </a>
            <a href="#" className="text-fg/80 hover:text-fg transition-colors duration-200">
              Hainlings
            </a>
            <a href="#" className="text-fg/80 hover:text-fg transition-colors duration-200">
              Aalt creation
            </a>
          </nav>

          <button className="px-6 py-2 bg-[#c4f82a] text-[#0a1929] rounded-full font-medium hover:bg-[#b5e625] transition-colors duration-200">
            Start Now
          </button>
        </div>
      </div>
    </header>
  );
}
