# TokenDrop - Socialized Token Launch on Base

A production-ready Base Mini App for launching and minting tokens directly within Farcaster Frames.

## Features

- 🎯 **Frame-Native Minting** - Mint tokens directly from Farcaster feeds
- 👥 **Community-Driven Distribution** - Leverage Farcaster social graph for targeted launches
- ⛽ **Gasless Transactions** - Coinbase Paymaster integration for seamless UX
- 🔔 **Push Notifications** - Real-time mint confirmations via Farcaster
- 🎨 **Coinbase Theme** - Professional dark navy design with Coinbase blue accents

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Blockchain**: Base (L2)
- **Wallet**: OnchainKit + Wagmi
- **Social**: Farcaster Frame SDK (MiniKit)
- **Styling**: Tailwind CSS with Coinbase theme
- **TypeScript**: Full type safety

## Getting Started

1. **Install dependencies**:
```bash
npm install
```

2. **Set up environment variables**:
```bash
cp .env.local.example .env.local
```

Edit `.env.local` and add your OnchainKit API key from [Coinbase Developer Platform](https://portal.cdp.coinbase.com/).

3. **Run development server**:
```bash
npm run dev
```

4. **Open** [http://localhost:3000](http://localhost:3000)

## Project Structure

```
app/
├── components/          # React components
│   ├── Header.tsx      # Navigation header
│   ├── HeroSection.tsx # Landing hero
│   ├── TokenGrid.tsx   # Token listings
│   └── MintModal.tsx   # Minting interface
├── types.ts            # TypeScript types
├── providers.tsx       # OnchainKit provider
├── layout.tsx          # Root layout
├── page.tsx            # Home page
└── globals.css         # Global styles with Coinbase theme

public/
└── .well-known/
    └── farcaster.json  # Frame manifest
```

## Key Components

### OnchainKit Integration
- `OnchainKitProvider` wraps the app with Base chain config
- Transaction component handles gasless minting
- Identity components show user Basenames

### Farcaster Integration
- Frame manifest at `/.well-known/farcaster.json`
- MiniKit hooks for user context and notifications
- Social sharing via `composeCast`

### Theming
- Coinbase theme with dark navy background (#0a1929)
- Coinbase blue accents (#0052ff)
- CSS variables for easy customization
- Mobile-first responsive design

## Deployment

1. **Build for production**:
```bash
npm run build
```

2. **Deploy to Vercel** (recommended):
```bash
vercel deploy
```

3. **Update manifest**: Edit `public/.well-known/farcaster.json` with your production URL

## Environment Variables

- `NEXT_PUBLIC_ONCHAINKIT_API_KEY` - OnchainKit API key (required)
- `NEXT_PUBLIC_APP_URL` - Your app URL (required for Frame)
- `NEXT_PUBLIC_BASE_RPC_URL` - Base RPC endpoint (optional)
- `NEXT_PUBLIC_PAYMASTER_URL` - Paymaster URL (optional)

## Resources

- [Base Mini Apps Docs](https://docs.base.org/base-app/build-with-minikit/quickstart)
- [OnchainKit Docs](https://onchainkit.xyz)
- [Farcaster Frame SDK](https://miniapps.farcaster.xyz/docs/getting-started)
- [Base Network](https://base.org)

## License

MIT
