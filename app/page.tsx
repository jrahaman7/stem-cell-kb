import Link from "next/link";
import { products } from "@/data/products";
import { cases } from "@/data/cases";

const sections = [
  ["/success-cases", "Successful cases", `${cases.length} successful cases, from CRISPR-edited stem cells to stem-cell-derived islets, with the outcome numbers and sources.`],
  ["/navigator", "Regulatory navigator", "How FDA regulates cell and tissue products, and a self-check for whether your product is a 361 HCT/P or a 351 biologic."],
  ["/pathways", "Pathways to patients", "Step by step from preclinical work to IND, expanded access, RMAT and BLA approval."],
  ["/products", "Approved products directory", `Search all ${products.length} FDA-approved cellular and gene therapy products, grouped for researchers.`],
  ["/verify-clinic", "Verify a clinic", "A checklist to tell an FDA-compliant program apart from an unproven stem cell clinic."],
  ["/roadmap-2030", "2030 care-delivery roadmap", "A scenario for how approved, customized cell therapies could reach urgent care and community settings."],
  ["/resources", "Researcher resources", "Primary sources: FDA, eCFR, ClinicalTrials.gov, ISSCR guidelines and more."],
  ["/advisory", "Advisory services", "Regulatory-science and clinical-AI support for research teams."],
];

export default function Home() {
  return (
    <>
      <p className="eyebrow">Cell therapy · FDA · US patients · 2030</p>
      <h1>Customized <em>stem cell therapy</em> for all US patients</h1>
      <p className="lead">
        A practical knowledge base for researchers building personalized stem cell and cell therapies. It covers how
        the FDA rules work today, the routes to approval, and what it would take to deliver these therapies widely by 2030.
      </p>
      <div className="notice">
        <strong>Where things stand (Nov 2026):</strong> FDA continues to enforce against clinics selling unapproved stem
        cell products, while offering more flexibility to sponsors in the formal IND and BLA pathways. No FDA policy
        today grants a whole class of facility, such as urgent care, blanket permission to make or give customized cell
        therapies. The <Link href="/roadmap-2030">2030 roadmap</Link> is a scenario, not FDA policy.
      </div>
      <div className="grid">
        {sections.map(([href, title, desc]) => (
          <Link key={href} href={href} className="card"><h3>{title}</h3><p>{desc}</p></Link>
        ))}
      </div>
    </>
  );
}
