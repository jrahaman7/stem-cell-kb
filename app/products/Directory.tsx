"use client";
import Link from "next/link";
import { useMemo, useState } from "react";
import { products, categories, type Category } from "@/data/products";
import { cases } from "@/data/cases";

// Link each product to its evidence card when one exists.
const caseFor = (name: string, generic: string) => {
  if (generic === "HPC, Cord Blood") return "cordblood";
  return cases.find(c => c.status === "FDA-approved" && c.product.toUpperCase() === name.toUpperCase())?.id;
};

export default function Directory() {
  const [q, setQ] = useState("");
  const [cat, setCat] = useState<Category | "All">("All");
  const rows = useMemo(() => {
    const s = q.trim().toLowerCase();
    return products
      .filter(p => cat === "All" || p.category === cat)
      .filter(p => !s || `${p.name} ${p.generic} ${p.manufacturer}`.toLowerCase().includes(s))
      .sort((a, b) => a.name.localeCompare(b.name));
  }, [q, cat]);
  return (
    <>
      <div className="controls">
        <input type="search" placeholder="Search name or manufacturer" value={q} onChange={e => setQ(e.target.value)} aria-label="Search products" />
      </div>
      <div className="chips" role="group" aria-label="Filter by group">
        {(["All", ...categories] as const).map(c => (
          <button key={c} aria-pressed={cat === c} className={`chip ${cat === c ? "on" : ""}`} onClick={() => setCat(c)}>
            {c} ({c === "All" ? products.length : products.filter(p => p.category === c).length})
          </button>
        ))}
      </div>
      <p className="count" aria-live="polite">{rows.length} product{rows.length === 1 ? "" : "s"} shown</p>
      {rows.length === 0 && <div className="notice">No FDA-approved product matches “{q}”. If a clinic is offering it, use the <Link href="/verify-clinic">clinic checklist</Link>.</div>}
      <div className="table-wrap">
        <table className="stack">
          <thead><tr><th>Product</th><th>Proper / generic name</th><th>Manufacturer</th><th>Group</th><th>Evidence</th></tr></thead>
          <tbody>{rows.map(p => {
            const id = caseFor(p.name, p.generic);
            return (
              <tr key={p.name + p.manufacturer}>
                <td data-label="Product"><strong>{p.name}</strong></td>
                <td data-label="Generic name">{p.generic}</td>
                <td data-label="Manufacturer">{p.manufacturer}</td>
                <td data-label="Group"><span className="tag">{p.category}</span></td>
                <td data-label="Evidence">{id ? <Link href={`/success-cases#${id}`}>Outcomes →</Link> : <span className="muted">See FDA label</span>}</td>
              </tr>
            );
          })}</tbody>
        </table>
      </div>
    </>
  );
}
