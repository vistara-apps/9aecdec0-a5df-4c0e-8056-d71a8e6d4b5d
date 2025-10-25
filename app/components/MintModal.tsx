'use client';

import { useState } from 'react';
import { X, Wallet, CheckCircle, AlertCircle, Loader2, Share2 } from 'lucide-react';
import type { TokenProject } from '../types';

interface MintModalProps {
  token: TokenProject;
  onClose: () => void;
}

export function MintModal({ token, onClose }: MintModalProps) {
  const [amount, setAmount] = useState(1);
  const [status, setStatus] = useState<'idle' | 'connecting' | 'minting' | 'success' | 'error'>('idle');
  const [txHash, setTxHash] = useState<string>('');

  const handleMint = async () => {
    try {
      setStatus('connecting');
      // Simulate wallet connection
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setStatus('minting');
      // Simulate minting transaction
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setTxHash('0x1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef');
      setStatus('success');
    } catch (error) {
      console.error('Mint error:', error);
      setStatus('error');
    }
  };

  const handleShare = () => {
    // In production, this would use sdk.actions.composeCast()
    const message = `Just minted ${amount} ${token.projectName} on @TokenDrop! 🎉`;
    console.log('Sharing:', message);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
      <div className="bg-surface rounded-lg max-w-md w-full border border-border shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-border">
          <h2 className="text-2xl font-bold">{token.projectName}</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-bg rounded-md transition-colors duration-200"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {status === 'success' ? (
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle className="w-10 h-10 text-green-500" />
              </div>
              <h3 className="text-xl font-semibold">Mint Successful!</h3>
              <p className="text-fg/70">
                You've successfully minted {amount} {token.projectName}
              </p>
              {txHash && (
                <a
                  href={`https://basescan.org/tx/${txHash}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:text-accent-hover text-sm inline-block"
                >
                  View on BaseScan →
                </a>
              )}
              <button
                onClick={handleShare}
                className="w-full py-3 bg-accent text-white rounded-md font-medium hover:bg-accent-hover transition-colors duration-200 flex items-center justify-center gap-2"
              >
                <Share2 className="w-4 h-4" />
                Share Your Mint
              </button>
            </div>
          ) : status === 'error' ? (
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto">
                <AlertCircle className="w-10 h-10 text-red-500" />
              </div>
              <h3 className="text-xl font-semibold">Mint Failed</h3>
              <p className="text-fg/70">
                Something went wrong. Please try again.
              </p>
              <button
                onClick={() => setStatus('idle')}
                className="w-full py-3 bg-accent text-white rounded-md font-medium hover:bg-accent-hover transition-colors duration-200"
              >
                Try Again
              </button>
            </div>
          ) : (
            <>
              <div className="space-y-2">
                <p className="text-fg/70">{token.projectDescription}</p>
              </div>

              <div className="bg-bg rounded-md p-4 space-y-3">
                <div className="flex justify-between">
                  <span className="text-fg/70">Price per token</span>
                  <span className="font-semibold">{token.mintPrice} ETH</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-fg/70">Max per wallet</span>
                  <span className="font-semibold">{token.maxMintPerUser}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-fg/70">Available</span>
                  <span className="font-semibold">
                    {(token.totalSupply - (token.minted || 0)).toLocaleString()}
                  </span>
                </div>
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium">Amount to mint</label>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setAmount(Math.max(1, amount - 1))}
                    disabled={amount <= 1}
                    className="w-10 h-10 bg-bg rounded-md hover:bg-accent/20 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    -
                  </button>
                  <input
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(Math.min(token.maxMintPerUser, Math.max(1, parseInt(e.target.value) || 1)))}
                    className="flex-1 bg-bg border border-border rounded-md px-4 py-2 text-center font-semibold focus:outline-none focus:border-accent"
                    min="1"
                    max={token.maxMintPerUser}
                  />
                  <button
                    onClick={() => setAmount(Math.min(token.maxMintPerUser, amount + 1))}
                    disabled={amount >= token.maxMintPerUser}
                    className="w-10 h-10 bg-bg rounded-md hover:bg-accent/20 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="bg-accent/10 rounded-md p-4 border border-accent/20">
                <div className="flex justify-between items-center">
                  <span className="font-medium">Total</span>
                  <span className="text-2xl font-bold text-accent">
                    {(token.mintPrice * amount).toFixed(4)} ETH
                  </span>
                </div>
              </div>

              <button
                onClick={handleMint}
                disabled={status !== 'idle'}
                className="w-full py-4 bg-accent text-white rounded-md font-semibold hover:bg-accent-hover transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {status === 'connecting' && (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Connecting Wallet...
                  </>
                )}
                {status === 'minting' && (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Minting...
                  </>
                )}
                {status === 'idle' && (
                  <>
                    <Wallet className="w-5 h-5" />
                    Mint {amount} Token{amount > 1 ? 's' : ''}
                  </>
                )}
              </button>

              <p className="text-xs text-fg/50 text-center">
                Gas fees sponsored by Coinbase Paymaster
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
