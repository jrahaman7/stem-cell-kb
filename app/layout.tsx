import "./globals.css";
import type { Metadata } from "next";
import Nav from "@/components/Nav";

export const metadata: Metadata = {
  title: "Cell Therapy Knowledge Base | Customized Stem Cell Therapy for US Patients",
  description:
    "A knowledge base portal for researchers working on customized stem cell and cell therapies in the US: FDA rules, approval pathways, approved products and a 2030 care-delivery roadmap.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Nav />
        <main><div className="wrap">{children}</div></main>
        <footer className="site">
          <div className="wrap">
            <p>
              Educational knowledge base for researchers. Not affiliated with or endorsed by the U.S. Food and Drug
              Administration. Not medical or legal advice. Always confirm current requirements with FDA (CBER) and
              primary sources. Content reviewed November 15, 2026.
            </p>
            <p>© 2026 AAI Applied Agentic Intelligence Research Labs®</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
