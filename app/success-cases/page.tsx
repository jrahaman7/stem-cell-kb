import PageHeader from "@/components/PageHeader";
import CaseBrowser from "./CaseBrowser";
import { cases } from "@/data/cases";

export const metadata = { title: "Successful cases | Cell Therapy Knowledge Base" };

export default function Page() {
  const approved = cases.filter(c => c.status === "FDA-approved").length;
  const randomized = cases.filter(c => c.evidence === "Randomized").length;
  return (
    <>
      <PageHeader eyebrow="Evidence · Outcomes · Precedents" title="Successful cases in" em="stem cell & cell therapy"
        lead="The therapies that worked, and the numbers that got them through FDA review. Use them as precedents when you design endpoints, choose a cell source or plan a customized product." />
      <div className="stats">
        <div className="stat"><b>{approved}</b><span>FDA-approved successes</span></div>
        <div className="stat"><b>{cases.length - approved}</b><span>investigational breakthroughs</span></div>
        <div className="stat"><b>{randomized}</b><span>backed by randomized trials</span></div>
        <div className="stat"><b>38</b><span>FDA licenses covered (incl. 9 cord blood banks)</span></div>
      </div>
      <div className="good"><strong>Patient or family member?</strong> Pick your condition below. If nothing matches, read the <a href="/patients">plain-language guide</a> before talking to any clinic.</div>
      <CaseBrowser />
      <div className="notice">
        <strong>Reading these figures:</strong> each number describes a trial population, not a promise for any single
        patient. Many approved products carry boxed warnings or restrictions, and investigational cases are not FDA
        approved (two are conditionally approved in Japan only). Every approved product is given in a transplant,
        oncology, surgical or specialty center. Figures were checked against FDA labels, FDA announcements or the
        primary publications on November 16, 2026; always confirm the current label on DailyMed before clinical use.
      </div>
    </>
  );
}
