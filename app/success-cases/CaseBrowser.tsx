"use client";
import { useState } from "react";
import { cases, groups, type CaseGroup } from "@/data/cases";

export default function CaseBrowser() {
  const [g, setG] = useState<CaseGroup | "All">("All");
  const shown = cases.filter(c => g === "All" || c.group === g);
  return (
    <>
      <div className="chips" role="group" aria-label="Filter cases">
        {(["All", ...groups] as const).map(x => (
          <button key={x} className={`chip ${g === x ? "on" : ""}`} onClick={() => setG(x)}>
            {x} ({x === "All" ? cases.length : cases.filter(c => c.group === x).length})
          </button>
        ))}
      </div>
      <div className="cases">
        {shown.map(c => (
          <article key={c.id} className="case">
            <div className="case-top">
              <span className="label">{c.group}</span>
              <span className={`badge ${c.status === "FDA-approved" ? "ok" : "inv"}`}>{c.status}</span>
            </div>
            <h3>{c.product}</h3>
            <p className="generic">{c.generic}</p>
            <p className="cond">{c.condition}</p>
            <div className="big"><b>{c.stat}</b><span>{c.statLabel}</span></div>
            <p>{c.outcome}</p>
            <p className="lesson"><strong>Why it matters:</strong> {c.lesson}</p>
            <dl>
              <dt>{c.status === "FDA-approved" ? "Approved" : "Published"}</dt><dd>{c.approved}</dd>
              <dt>Cell source</dt><dd>{c.source}</dd>
            </dl>
            <a className="src" href={c.ref.url} target="_blank" rel="noreferrer">{c.ref.title} ↗</a>
          </article>
        ))}
      </div>
    </>
  );
}
