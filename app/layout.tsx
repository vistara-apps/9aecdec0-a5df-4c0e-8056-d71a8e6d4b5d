import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";

export const metadata: Metadata = {
  title: "TokenDrop - Social Token Launches on Base",
  description: "Mint tokens directly from Farcaster Frames with seamless onchain experience",
  openGraph: {
    title: "TokenDrop - Social Token Launches on Base",
    description: "Mint tokens directly from Farcaster Frames with seamless onchain experience",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
