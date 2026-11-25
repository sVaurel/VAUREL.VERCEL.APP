import type { Metadata, Viewport } from "next";
import "./globals.css";

const siteUrl = "https://vaurel.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "VAUREL — Video Editor",
    template: "%s — VAUREL",
  },
  description: "VAUREL — Creative video editing and visual storytelling.",
  openGraph: {
    title: "VAUREL — Video Editor",
    description: "VAUREL — Creative video editing and visual storytelling.",
    url: siteUrl,
    siteName: "VAUREL",
    images: ["/vaurel-youtube.png"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "VAUREL — Video Editor",
    description: "VAUREL — Creative video editing and visual storytelling.",
    images: ["/vaurel-youtube.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff",
};

// Runs before first paint: uses the saved choice if there is one, otherwise dark
// unless the device prefers light. Avoids any flash of the wrong theme.
const themeInitScript = `(function(){var t;try{t=localStorage.getItem("vaurel-theme");}catch(e){}if(t!=="dark"&&t!=="light"){t=window.matchMedia&&window.matchMedia("(prefers-color-scheme: light)").matches?"light":"dark";}document.documentElement.dataset.theme=t;if(t==="dark"){var m=document.querySelector('meta[name="theme-color"]');if(m)m.setAttribute("content","#0b0b0c");}})();`;

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
