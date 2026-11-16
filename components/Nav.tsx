"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const groups: [string, [string, string][]][] = [
  ["Start here", [["/", "Home"], ["/patients", "For patients & families"]]],
  ["Evidence", [["/success-cases", "Successful cases"], ["/products", "Approved products"]]],
  ["Regulation", [["/navigator", "Regulatory navigator"], ["/pathways", "Pathways"], ["/verify-clinic", "Verify a clinic"]]],
  ["Future & help", [["/roadmap-2030", "2030 roadmap"], ["/resources", "Resources"], ["/advisory", "Advisory"]]],
];

export default function Nav() {
  const path = usePathname();
  const [open, setOpen] = useState(false);
  useEffect(() => setOpen(false), [path]);
  return (
    <aside className="side">
      <div className="side-head">
        <Link href="/" className="brand">
          <span className="mono" aria-hidden="true">JR</span>
          <span>
            <span className="brand-name">Cell Therapy Knowledge Base</span>
            <span className="brand-sub">Applied Intelligence</span>
          </span>
        </Link>
        <button className="menu-btn secondary" aria-expanded={open} aria-controls="mainnav" onClick={() => setOpen(o => !o)}>
          {open ? "Close" : "Menu"}
        </button>
      </div>
      <nav id="mainnav" aria-label="Main" className={open ? "open" : ""}>
        {groups.map(([label, links]) => (
          <div key={label}>
            <p className="nav-label">{label}</p>
            {links.map(([h, l]) => (
              <Link key={h} href={h} className={`tab ${path === h ? "on" : ""}`} aria-current={path === h ? "page" : undefined}>{l}</Link>
            ))}
          </div>
        ))}
      </nav>
      <a className="btn side-cta" href="https://drjavid.bio" target="_blank" rel="noreferrer">Visit drjavid.bio</a>
    </aside>
  );
}
