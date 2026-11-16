import "./globals.css";
import type { Metadata } from "next";
import Nav from "@/components/Nav";

export const metadata: Metadata = {
  title: "Cell Therapy Knowledge Base | Customized Stem Cell Therapy for US Patients",
  description:
    "A knowledge base portal for researchers working on customized stem cell and cell therapies in the US: successful cases, FDA rules, approval pathways, approved products and a 2030 care-delivery roadmap.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <a className="skip" href="#content">Skip to content</a>
        <div className="shell">
          <Nav />
          <div className="page">
            <svg className="ornament" viewBox="0 0 200 200" aria-hidden="true">
              <g fill="none" stroke="currentColor" strokeWidth="1">
                <circle cx="100" cy="100" r="96" /><circle cx="100" cy="100" r="64" /><circle cx="100" cy="100" r="32" />
                <ellipse cx="100" cy="100" rx="96" ry="40" /><ellipse cx="100" cy="100" rx="40" ry="96" />
                <line x1="4" y1="100" x2="196" y2="100" /><line x1="100" y1="4" x2="100" y2="196" />
              </g>
            </svg>
            <main id="content"><div className="wrap">{children}</div></main>
            <footer className="site">
              <div className="wrap">
                <p>
                  Educational knowledge base for researchers. Not affiliated with or endorsed by the U.S. Food and Drug
                  Administration. Not medical or legal advice. Always confirm current requirements with FDA (CBER) and
                  primary sources. Content reviewed November 16, 2026.
                </p>
                <p>
                  © 2026 AAI Applied Agentic Intelligence Research Labs® ·{" "}
                  <a href="https://drjavid.bio" target="_blank" rel="noreferrer">drjavid.bio</a> ·{" "}
                  <a href="https://www.linkedin.com/in/jrahaman7" target="_blank" rel="noreferrer">Profile of record</a>
                </p>
              </div>
            </footer>
          </div>
        </div>
      </body>
    </html>
  );
}
