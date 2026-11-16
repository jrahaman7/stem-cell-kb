import "@fontsource/newsreader/400.css";
import "@fontsource/newsreader/500.css";
import "@fontsource/newsreader/400-italic.css";
import "@fontsource/hanken-grotesk/400.css";
import "@fontsource/hanken-grotesk/600.css";
import "@fontsource/hanken-grotesk/700.css";
import "./globals.css";
import type { Metadata } from "next";
import Nav from "@/components/Nav";
import { Compass } from "@/components/Marks";

const desc = "What FDA has approved in stem cell and cell therapy, the trial results behind it, how to check a clinic, and the rules for customized therapies in the US. For patients, clinicians and researchers.";
export const metadata: Metadata = {
  metadataBase: new URL("https://www.stembio.life"),
  title: { default: "StemBio.life | Cell Therapy Knowledge Base", template: "%s" },
  openGraph: { type: "website", siteName: "StemBio.life", url: "https://www.stembio.life", title: "StemBio.life | Cell Therapy Knowledge Base", description: desc },
  twitter: { card: "summary", title: "StemBio.life | Cell Therapy Knowledge Base", description: desc },
  description: desc,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <a className="skip" href="#content">Skip to content</a>
        <div className="shell">
          <Nav />
          <div className="page">
            <Compass className="ornament" />
            <main id="content"><div className="wrap">{children}</div></main>
            <footer className="site">
              <Compass className="ornament-foot" />
              <div className="wrap">
                <p>
                  © 2026 Dr. Javid Ur Rahaman · AAI Applied Agentic Intelligence Research Labs® · Contact:{" "}
                  <a href="https://wa.me/14695206090" target="_blank" rel="noreferrer">WhatsApp +1 469-520-6090</a> or{" "}
                  <a href="https://x.com/JavidRShaik" target="_blank" rel="noreferrer">X</a> · Profile of record:{" "}
                  <a href="https://www.linkedin.com/in/jrahaman7" target="_blank" rel="noreferrer">LinkedIn</a> ·{" "}
                  <a href="https://drjavid.bio" target="_blank" rel="noreferrer">drjavid.bio</a>
                </p>
                <p className="fine">
                  Educational knowledge base for patients, clinicians and researchers. Not affiliated with or endorsed by
                  the U.S. Food and Drug Administration. Not medical or legal advice. Confirm current requirements with FDA
                  (CBER) and primary sources. Content reviewed November 16, 2026.
                </p>
              </div>
            </footer>
          </div>
        </div>
      </body>
    </html>
  );
}
