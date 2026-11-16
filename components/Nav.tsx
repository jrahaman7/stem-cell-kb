"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const groups: [string, [string, string][]][] = [
  ["Start here", [["/", "About this portal"]]],
  ["Evidence", [["/success-cases", "Successful cases"], ["/products", "Approved products"]]],
  ["Regulation", [["/navigator", "Regulatory navigator"], ["/pathways", "Pathways"], ["/verify-clinic", "Verify a clinic"]]],
  ["Future & help", [["/roadmap-2030", "2030 roadmap"], ["/resources", "Resources"], ["/advisory", "Advisory"]]],
];

export default function Nav() {
  const path = usePathname();
  return (
    <aside className="side">
      <Link href="/" className="brand">
        <span className="mono" aria-hidden="true">JR</span>
        <span>
          <span className="brand-name">Cell Therapy Knowledge Base</span>
          <span className="brand-sub">Applied Intelligence</span>
        </span>
      </Link>
      <nav aria-label="Main">
        {groups.map(([label, links]) => (
          <div key={label}>
            <p className="nav-label">{label}</p>
            {links.map(([h, l]) => (
              <Link key={h} href={h} className={`tab ${path === h ? "on" : ""}`}>{l}</Link>
            ))}
          </div>
        ))}
      </nav>
      <a className="btn side-cta" href="https://drjavid.bio" target="_blank" rel="noreferrer">Visit drjavid.bio</a>
    </aside>
  );
}
