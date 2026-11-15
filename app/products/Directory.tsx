"use client";
import { useMemo, useState } from "react";
import { products, categories, type Category } from "@/data/products";

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
        <input type="search" placeholder="Search name, generic name or manufacturer" value={q} onChange={e => setQ(e.target.value)} aria-label="Search products" />
      </div>
      <div className="chips">
        {(["All", ...categories] as const).map(c => (
          <button key={c} className={`chip ${cat === c ? "on" : ""}`} onClick={() => setCat(c)}>
            {c} ({c === "All" ? products.length : products.filter(p => p.category === c).length})
          </button>
        ))}
      </div>
      <p className="count">{rows.length} product{rows.length === 1 ? "" : "s"} shown</p>
      <table>
        <thead><tr><th>Product</th><th>Proper / generic name</th><th>Manufacturer</th><th>Group</th></tr></thead>
        <tbody>{rows.map(p => (
          <tr key={p.name + p.manufacturer}><td><strong>{p.name}</strong></td><td>{p.generic}</td><td>{p.manufacturer}</td><td><span className="tag">{p.category}</span></td></tr>
        ))}</tbody>
      </table>
    </>
  );
}
