"use client";
import { useState } from "react";

type A = "yes" | "no" | "unsure" | undefined;
const qs = [
  { id: "mm", t: "Minimal manipulation", d: "Does processing leave the cells' or tissue's relevant biological characteristics unchanged? Culture expansion, genetic modification, activation or enzymatic digestion to isolate cells usually go beyond minimal manipulation." },
  { id: "hu", t: "Homologous use only", d: "Will the cells perform the same basic function in the recipient as in the donor (for example, cord blood stem cells used to rebuild the blood system), as shown by the labeling and advertising?" },
  { id: "co", t: "No combination with another article", d: "Is the product made without combining it with another article, apart from water, crystalloids, or a sterilizing, preserving or storage agent that raises no new safety concern?" },
  { id: "sy", t: "Systemic effect and metabolic activity", d: "Either the product has no systemic effect and does not depend on living cells' metabolic activity for its main function, OR it is for autologous use, use in a first- or second-degree blood relative, or reproductive use. Answer Yes if one of these is true." },
];

export default function SelfCheck() {
  const [a, setA] = useState<Record<string, A>>({});
  const [ssp, setSsp] = useState<A>();
  const answered = qs.every(q => a[q.id]);
  const anyNo = qs.some(q => a[q.id] === "no");
  const anyUnsure = qs.some(q => a[q.id] === "unsure");

  return (
    <div>
      <div className="q">
        <h3>Step 0. Same surgical procedure exception (21 CFR 1271.15(b))</h3>
        <p className="muted">Are cells removed from a patient and put back into the same patient during the same surgical procedure, with no processing beyond rinsing, cleansing, sizing or shaping?</p>
        <div className="opts">
          {(["yes", "no", "unsure"] as const).map(v => (
            <button key={v} className={ssp === v ? "" : "secondary"} onClick={() => setSsp(v)}>{v[0].toUpperCase() + v.slice(1)}</button>
          ))}
        </div>
        {ssp === "yes" && <p className="good" style={{ marginBottom: 0 }}>This <strong>may</strong> fall outside Part 1271. Read it narrowly: in the stromal vascular fraction (SVF) case, courts held that isolating cells from fat went beyond this exception, and the Supreme Court declined review in October 2025.</p>}
      </div>
      {qs.map((q, i) => (
        <div className="q" key={q.id}>
          <h3>Criterion {i + 1}. {q.t}</h3>
          <p className="muted">{q.d}</p>
          <div className="opts">
            {(["yes", "no", "unsure"] as const).map(v => (
              <button key={v} className={a[q.id] === v ? "" : "secondary"} onClick={() => setA({ ...a, [q.id]: v })}>{v[0].toUpperCase() + v.slice(1)}</button>
            ))}
          </div>
        </div>
      ))}
      {answered && (anyNo ? (
        <div className="notice"><strong>Likely a 351 biologic (drug/biological product).</strong> You will need an IND to run clinical studies and an approved BLA before marketing. Most customized, culture-expanded or gene-modified stem cell therapies land here. See <a href="/pathways">Pathways</a>.</div>
      ) : anyUnsure ? (
        <div className="notice"><strong>Unclear.</strong> Ask FDA's Tissue Reference Group (TRG) for a recommendation, or send a Request for Designation (RFD) to FDA's Office of Combination Products, before you treat patients.</div>
      ) : (
        <div className="good"><strong>May qualify as a 361 HCT/P</strong>, regulated only under 21 CFR Part 1271: establishment registration, donor eligibility and Current Good Tissue Practice (CGTP). No premarket approval is required, but FDA can still act if the criteria are not truly met.</div>
      ))}
      <p className="count">This self-check is for education only and does not replace an FDA determination.</p>
    </div>
  );
}
