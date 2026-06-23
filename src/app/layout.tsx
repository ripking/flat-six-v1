import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Flat Six Media",
  description: "Executive Caliber. On Demand.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Design-system fonts. The token CSS holds the custom properties and the
            .material-symbols-rounded class; the actual font files are linked here
            because Lightning CSS strips @import url() during static export. */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Spectral:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,400;1,600&family=Hanken+Grotesk:wght@300;400;500;600;700;800&family=IBM+Plex+Mono:wght@400;500;600&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap"
        />
      </head>
      <body
        style={{
          margin: 0,
          fontFamily: "var(--font-sans)",
          background: "var(--color-bg)",
          color: "var(--color-text)",
        }}
      >
        {children}
      </body>
    </html>
  );
}
