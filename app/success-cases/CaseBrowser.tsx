"use client";
import { useMemo, useState } from "react";
import { cases, groups, evidenceLevels, type CaseGroup, type Evidence } from "@/data/cases";

export default function CaseBrowser() {
  const [g, setG] = useState<CaseGroup | "All">("All");
  const [ev, setEv] = useState<Evidence | "Any">("Any");
  const [q, setQ] = useState("");
  const shown = useMemo(() => {
    const s = q.trim().toLowerCase();
    return cases
      .filter(c => g === "All" || c.group === g)
      .filter(c => ev === "Any" || c.evidence === ev)
      .filter(c => !s || `${c.product} ${c.generic} ${c.condition}`.toLowerCase().includes(s));
  }, [g, ev, q]);
  return (
    <>
      <div className="controls">
        <input type="search" placeholder="Search product, disease or cell type" value={q} onChange={e => setQ(e.target.value)} aria-label="Search cases" />
        <select value={ev} onChange={e => setEv(e.target.value as Evidence | "Any")} aria-label="Evidence type">
          <option value="Any">Any evidence type</option>
          {evidenceLevels.map(x => <option key={x} value={x}>{x}</option>)}
        </select>
      </div>
      <div className="chips" role="group" aria-label="Filter by group">
        {(["All", ...groups] as const).map(x => (
          <button key={x} className={`chip ${g === x ? "on" : ""}`} onClick={() => setG(x)}>
            {x} ({x === "All" ? cases.length : cases.filter(c => c.group === x).length})
          </button>
        ))}
      </div>
      <p className="count">{shown.length} case{shown.length === 1 ? "" : "s"} shown</p>
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
              <dt>{c.status === "FDA-approved" ? "Approved" : "Data"}</dt><dd>{c.approved}</dd>
              <dt>Evidence</dt><dd><span className={`ev ev-${c.evidence === "Randomized" ? "r" : "o"}`}>{c.evidence}</span></dd>
              <dt>Cell source</dt><dd>{c.source}</dd>
              <dt>Safety</dt><dd>{c.safety}</dd>
            </dl>
            {c.check && <p className="checknote">Some figures from secondary sources — confirm on the FDA label.</p>}
            <a className="src" href={c.ref.url} target="_blank" rel="noreferrer">{c.ref.title} ↗</a>
          </article>
        ))}
      </div>
    </>
  );
}
