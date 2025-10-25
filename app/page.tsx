'use client';

import { useEffect, useState } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { TokenGrid } from './components/TokenGrid';
import { MintModal } from './components/MintModal';
import type { TokenProject } from './types';

export default function Home() {
  const [selectedToken, setSelectedToken] = useState<TokenProject | null>(null);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    // Signal to Farcaster that the frame is ready
    if (typeof window !== 'undefined') {
      setIsReady(true);
    }
  }, []);

  // Mock token data - in production, fetch from API
  const tokens: TokenProject[] = [
    {
      projectId: 1,
      tokenAddress: '0x1234567890123456789012345678901234567890',
      projectName: 'FAME Token',
      projectDescription: 'The first social token launched on TokenDrop',
      mintPrice: 0.001,
      totalSupply: 10000,
      maxMintPerUser: 10,
      imageUrl: '/token-1.png',
      minted: 3420,
    },
    {
      projectId: 2,
      tokenAddress: '0x2345678901234567890123456789012345678901',
      projectName: 'SOCIAL Token',
      projectDescription: 'Community-driven token for creators',
      mintPrice: 0.002,
      totalSupply: 5000,
      maxMintPerUser: 5,
      imageUrl: '/token-2.png',
      minted: 1250,
    },
    {
      projectId: 3,
      tokenAddress: '0x3456789012345678901234567890123456789012',
      projectName: 'VIBE Token',
      projectDescription: 'Exclusive token for early adopters',
      mintPrice: 0.0015,
      totalSupply: 8000,
      maxMintPerUser: 8,
      imageUrl: '/token-3.png',
      minted: 5600,
    },
  ];

  if (!isReady) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-accent"></div>
      </div>
    );
  }

  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection onMintClick={() => setSelectedToken(tokens[0])} />
      <TokenGrid tokens={tokens} onSelectToken={setSelectedToken} />
      {selectedToken && (
        <MintModal
          token={selectedToken}
          onClose={() => setSelectedToken(null)}
        />
      )}
    </main>
  );
}
