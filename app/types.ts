export interface TokenProject {
  projectId: number;
  tokenAddress: string;
  projectName: string;
  projectDescription: string;
  mintPrice: number;
  totalSupply: number;
  maxMintPerUser: number;
  imageUrl?: string;
  minted?: number;
}

export interface TokenMint {
  mintId: number;
  projectId: number;
  farcasterUserFid: number;
  minterAddress: string;
  mintAmount: number;
  timestamp: number;
  transactionHash: string;
  isGasSponsored: boolean;
}

export interface FarcasterUserContext {
  fid: number;
  username: string;
  displayName: string;
  pfpUrl: string;
  custodyAddress: string;
  followerCount?: number;
}
