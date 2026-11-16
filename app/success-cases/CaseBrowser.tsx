"use client";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { cases, groups, evidenceLevels, type CaseGroup, type Evidence } from "@/data/cases";

// Plain-language condition shortcuts; each maps to words found in the case text.
const conditions: [string, string[]][] = [
  ["Blood cancers", ["leukemia", "lymphoma", "myeloma", "blood cancers", "blood cancer"]],
  ["Sickle cell & thalassemia", ["sickle", "thalassemia"]],
  ["Type 1 diabetes", ["diabetes"]],
  ["Brain & nerves", ["parkinson", "epilepsy", "leukodystrophy", "adrenoleukodystrophy"]],
  ["Immune & rare genetic", ["athymia", "wiskott", "leukocyte adhesion", "gvhd", "graft-versus-host", "lupus", "hiv"]],
  ["Skin, burns & wounds", ["burn", "wound", "epidermolysis", "wrinkle", "gum"]],
  ["Eye", ["macular", "geographic atrophy", "telangiectasia"]],
  ["Joints & vessels", ["cartilage", "knee", "arterial"]],
  ["Solid tumors", ["melanoma", "sarcoma", "prostate"]],
];

const text = (c: (typeof cases)[number]) => `${c.product} ${c.generic} ${c.condition} ${c.outcome}`.toLowerCase();

export default function CaseBrowser() {
  const [g, setG] = useState<CaseGroup | "All">("All");
  const [ev, setEv] = useState<Evidence | "Any">("Any");
  const [q, setQ] = useState("");
  const [cond, setCond] = useState<string | null>(null);

  useEffect(() => {
    const p = new URLSearchParams(window.location.search).get("q");
    if (p) setQ(p);
    const h = window.location.hash.slice(1);
    if (h) setTimeout(() => document.getElementById(h)?.scrollIntoView({ behavior: "smooth" }), 50);
  }, []);

  const shown = useMemo(() => {
    const s = q.trim().toLowerCase();
    const words = cond ? conditions.find(c => c[0] === cond)?.[1] ?? [] : [];
    return cases
      .filter(c => g === "All" || c.group === g)
      .filter(c => ev === "Any" || c.evidence === ev)
      .filter(c => !words.length || words.some(w => new RegExp(`\\b${w}`).test(text(c))))
      .filter(c => !s || s.split(/\s+/).some(w => w.length > 2 && text(c).includes(w)) || text(c).includes(s));
  }, [g, ev, q, cond]);

  const reset = () => { setG("All"); setEv("Any"); setQ(""); setCond(null); };
  const filtered = g !== "All" || ev !== "Any" || q || cond;

  return (
    <>
      <h2 className="sm">Find by condition</h2>
      <div className="chips" role="group" aria-label="Filter by condition">
        {conditions.map(([label]) => (
          <button key={label} aria-pressed={cond === label} className={`chip ${cond === label ? "on" : ""}`} onClick={() => setCond(cond === label ? null : label)}>{label}</button>
        ))}
      </div>
      <div className="controls">
        <input type="search" placeholder="Search a disease or product" value={q} onChange={e => setQ(e.target.value)} aria-label="Search cases" />
        <select value={ev} onChange={e => setEv(e.target.value as Evidence | "Any")} aria-label="Evidence type">
          <option value="Any">Any evidence type</option>
          {evidenceLevels.map(x => <option key={x} value={x}>{x}</option>)}
        </select>
        <select value={g} onChange={e => setG(e.target.value as CaseGroup | "All")} aria-label="Therapy group">
          <option value="All">All therapy groups</option>
          {groups.map(x => <option key={x} value={x}>{x}</option>)}
        </select>
      </div>
      <p className="count" aria-live="polite">
        {shown.length} of {cases.length} cases shown{filtered && <> · <button className="linkbtn" onClick={reset}>Clear filters</button></>}
      </p>

      {shown.length === 0 && (
        <div className="notice">
          <strong>No approved therapy or major trial result matches “{q || cond}”.</strong> That usually means no stem cell
          product is FDA-approved for this condition. Be very careful with clinics that offer one: use the{" "}
          <Link href="/verify-clinic">clinic checklist</Link>, search <a href="https://clinicaltrials.gov" target="_blank" rel="noreferrer">ClinicalTrials.gov</a>{" "}
          for real studies, and talk to your doctor.
        </div>
      )}

      <div className="cases">
        {shown.map(c => (
          <article key={c.id} id={c.id} className="case">
            <div className="case-top">
              <span className="label">{c.group}</span>
              <span className={`badge ${c.status === "FDA-approved" ? "ok" : "inv"}`}>{c.status}</span>
            </div>
            <h3><a className="anchor" href={`#${c.id}`}>{c.product}</a></h3>
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
            {c.check && <p className="checknote">Some figures come from secondary sources. Confirm on the FDA label.</p>}
            <a className="src" href={c.ref.url} target="_blank" rel="noreferrer">{c.ref.title} ↗</a>
          </article>
        ))}
      </div>
    </>
  );
}
