'use client';

import { TrendingUp, Users } from 'lucide-react';
import type { TokenProject } from '../types';

interface TokenGridProps {
  tokens: TokenProject[];
  onSelectToken: (token: TokenProject) => void;
}

export function TokenGrid({ tokens, onSelectToken }: TokenGridProps) {
  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured Token Launches
          </h2>
          <p className="text-fg/70 text-lg">
            Discover and mint the latest social tokens on Base
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tokens.map((token) => (
            <TokenCard
              key={token.projectId}
              token={token}
              onSelect={() => onSelectToken(token)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

interface TokenCardProps {
  token: TokenProject;
  onSelect: () => void;
}

function TokenCard({ token, onSelect }: TokenCardProps) {
  const mintedPercentage = token.minted
    ? Math.round((token.minted / token.totalSupply) * 100)
    : 0;

  return (
    <div
      onClick={onSelect}
      className="bg-surface rounded-lg p-6 border border-border hover:border-accent transition-all duration-200 cursor-pointer group hover:shadow-card"
    >
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <h3 className="text-xl font-semibold mb-2 group-hover:text-accent transition-colors duration-200">
            {token.projectName}
          </h3>
          <p className="text-fg/70 text-sm line-clamp-2">
            {token.projectDescription}
          </p>
        </div>
      </div>

      <div className="space-y-3 mb-4">
        <div className="flex items-center justify-between text-sm">
          <span className="text-fg/70">Price</span>
          <span className="font-semibold">{token.mintPrice} ETH</span>
        </div>
        
        <div className="flex items-center justify-between text-sm">
          <span className="text-fg/70 flex items-center gap-1">
            <Users className="w-4 h-4" />
            Minted
          </span>
          <span className="font-semibold">
            {token.minted?.toLocaleString()} / {token.totalSupply.toLocaleString()}
          </span>
        </div>

        <div className="w-full bg-bg rounded-full h-2 overflow-hidden">
          <div
            className="bg-accent h-full transition-all duration-300"
            style={{ width: `${mintedPercentage}%` }}
          ></div>
        </div>
      </div>

      <button className="w-full py-3 bg-accent text-white rounded-md font-medium hover:bg-accent-hover transition-colors duration-200 flex items-center justify-center gap-2">
        <TrendingUp className="w-4 h-4" />
        Mint Now
      </button>
    </div>
  );
}
