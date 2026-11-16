import Link from "next/link";
import { products } from "@/data/products";
import { cases } from "@/data/cases";

const audiences: { who: string; intro: string; links: [string, string][] }[] = [
  {
    who: "Patients & families",
    intro: "Find out what is proven, what is not, and how to spot an unsafe clinic.",
    links: [
      ["/patients", "Start with the plain-language guide"],
      ["/verify-clinic", "Check a clinic before you pay"],
      ["/success-cases", "See which conditions have approved therapies"],
    ],
  },
  {
    who: "Clinicians",
    intro: "Look up approved products by condition, the evidence behind them, and where to refer.",
    links: [
      ["/success-cases", "Outcomes and evidence by condition"],
      ["/products", "All FDA-approved cell and gene products"],
      ["/pathways", "Trials, expanded access and Right to Try"],
    ],
  },
  {
    who: "Researchers & sponsors",
    intro: "Work out your regulatory tier and plan the route to an approved product.",
    links: [
      ["/navigator", "361 vs 351 self-check"],
      ["/pathways", "IND, RMAT and BLA step by step"],
      ["/roadmap-2030", "2030 care-delivery scenario"],
    ],
  },
];

const sections = [
  ["/success-cases", "Successful cases", `${cases.length} successful cases, from CRISPR-edited stem cells to stem-cell-derived islets, with outcome numbers and sources.`],
  ["/products", "Approved products directory", `Search all ${products.length} FDA-approved cellular and gene therapy products.`],
  ["/navigator", "Regulatory navigator", "How FDA regulates cell and tissue products, with a 361 vs 351 self-check."],
  ["/verify-clinic", "Verify a clinic", "An interactive checklist to tell an FDA-compliant program from an unproven clinic."],
  ["/pathways", "Pathways to patients", "From preclinical work to IND, expanded access, RMAT and BLA approval."],
  ["/roadmap-2030", "2030 care-delivery roadmap", "A scenario for how approved, customized therapies could reach community settings."],
];

export default function Home() {
  return (
    <>
      <p className="eyebrow">Cell therapy · FDA · US patients · 2030</p>
      <h1>Customized <em>stem cell therapy</em> for all US patients</h1>
      <p className="lead">
        Evidence first, for <em>patients, clinicians and researchers</em>: what FDA has approved, the trial results behind
        it, and how to tell real therapy from an unproven clinic.
      </p>
      <p className="cred">Curated by Dr. Javid Ur Rahaman, Head of Applied Intelligence, AAI Applied Agentic Intelligence Research Labs®</p>
      <div className="hero-actions">
        <Link className="btn" href="/success-cases">See successful cases</Link>
        <Link className="btn secondary" href="/verify-clinic">Check a clinic</Link>
      </div>
      <div className="credline">
        <span>{cases.filter(c => c.status === "FDA-approved").length} FDA-approved successes, sourced</span>
        <span>{products.length} FDA-licensed products</span>
        <span>Figures checked against FDA labels, Nov 2026</span>
        <a href="https://drjavid.bio" target="_blank" rel="noreferrer">drjavid.bio</a>
      </div>
      <h2>Who are you?</h2>
      <div className="aud">
        {audiences.map(a => (
          <div key={a.who} className="card">
            <p className="label">I am one of the</p>
            <h3>{a.who}</h3>
            <p>{a.intro}</p>
            <ul className="links">{a.links.map(([h, t]) => <li key={h + t}><Link href={h}>{t} →</Link></li>)}</ul>
          </div>
        ))}
      </div>
      <div className="notice">
        <strong>Where things stand (Nov 2026):</strong> FDA continues to act against clinics selling unapproved stem cell
        products. No FDA policy today lets a whole class of facility, such as urgent care, make or give customized cell
        therapies. The <Link href="/roadmap-2030">2030 roadmap</Link> is a scenario, not FDA policy.
      </div>
      <h2>Explore</h2>
      <div className="grid">
        {sections.map(([href, title, desc]) => (
          <Link key={href} href={href} className="card"><h3>{title}</h3><p>{desc}</p></Link>
        ))}
      </div>
    </>
  );
}
