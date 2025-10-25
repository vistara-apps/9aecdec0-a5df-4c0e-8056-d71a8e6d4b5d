import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";

export const metadata: Metadata = {
  title: "TokenDrop - Socialized Token Launch on Base",
  description: "Mint tokens directly from Farcaster Frames with seamless onchain experience",
  openGraph: {
    title: "TokenDrop - Socialized Token Launch on Base",
    description: "Mint tokens directly from Farcaster Frames with seamless onchain experience",
    images: ["/og-image.png"],
  },
  other: {
    "fc:frame": "vNext",
    "fc:frame:image": "/splash.png",
    "fc:frame:button:1": "Launch TokenDrop",
    "fc:frame:button:1:action": "link",
    "fc:frame:button:1:target": process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
