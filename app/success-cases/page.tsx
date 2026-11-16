import CaseBrowser from "./CaseBrowser";
import { cases } from "@/data/cases";

export const metadata = { title: "Successful cases | Cell Therapy Knowledge Base" };

export default function Page() {
  const approved = cases.filter(c => c.status === "FDA-approved").length;
  const autologous = cases.filter(c => c.source.startsWith("Autologous")).length;
  return (
    <>
      <p className="eyebrow">Evidence · Outcomes · Precedents</p>
      <h1>Successful cases in <em>stem cell &amp; cell therapy</em></h1>
      <p className="lead">
        The therapies that worked, and the numbers that got them through FDA review. Use these as precedents when you
        design endpoints, choose a cell source or plan a customized product.
      </p>
      <div className="stats">
        <div className="stat"><b>{approved}</b><span>FDA-approved successes</span></div>
        <div className="stat"><b>{cases.length - approved}</b><span>investigational breakthroughs</span></div>
        <div className="stat"><b>{autologous}</b><span>made from the patient&rsquo;s own cells</span></div>
        <div className="stat"><b>2017–2025</b><span>approval and readout window</span></div>
      </div>
      <CaseBrowser />
      <div className="notice">
        <strong>Reading these figures:</strong> each number describes a trial population, not a promise for any single
        patient. Most approved products carry boxed warnings or restrictions, and investigational cases are not FDA
        approved. Confirm the current label and the linked source before citing a figure.
      </div>
    </>
  );
}
