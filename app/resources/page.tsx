import PageHeader from "@/components/PageHeader";
export const metadata = { title: "Researcher resources | Cell Therapy Knowledge Base" };
const res = [
  ["FDA: Approved Cellular and Gene Therapy Products", "https://www.fda.gov/vaccines-blood-biologics/cellular-gene-therapy-products/approved-cellular-and-gene-therapy-products", "Official list of licensed products."],
  ["FDA: Cellular & Gene Therapy Products (CBER)", "https://www.fda.gov/vaccines-blood-biologics/cellular-gene-therapy-products", "Guidances, approvals and OTP resources."],
  ["eCFR: 21 CFR Part 1271 (HCT/Ps)", "https://www.ecfr.gov/current/title-21/chapter-I/subchapter-L/part-1271", "The 361 criteria, registration, donor eligibility and CGTP."],
  ["FDA: Expanded Access", "https://www.fda.gov/news-events/public-health-focus/expanded-access", "Single-patient and treatment-IND access."],
  ["FDA: Warning Letters", "https://www.fda.gov/inspections-compliance-enforcement-and-criminal-investigations/compliance-actions-and-activities/warning-letters", "Search enforcement history."],
  ["ClinicalTrials.gov", "https://clinicaltrials.gov", "Find and register cell therapy studies."],
  ["ISSCR Guidelines for Stem Cell Research and Clinical Translation", "https://www.isscr.org/guidelines", "International professional standards."],
  ["Regulations.gov", "https://www.regulations.gov", "Comment on open FDA dockets."],
];
export default function Page() {
  return (
    <>
      <PageHeader eyebrow="Primary sources · FDA · eCFR · ISSCR" title="Researcher" em="resources"
        lead="Primary sources to check before relying on any summary, including this one." />
      <div className="grid">{res.map(([t, u, d]) => (
        <a key={u} className="card" href={u} target="_blank" rel="noreferrer"><p className="label">{new URL(u).hostname.replace("www.", "")}</p><h3>{t}</h3><p>{d}</p></a>
      ))}</div>
    </>
  );
}
