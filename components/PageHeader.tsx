import Link from "next/link";
import type { ReactNode } from "react";

// One header for every page, modelled on drjavid.bio: eyebrow line, serif title with a blue italic phrase,
// serif lead, an optional credential line and primary/secondary actions.
export default function PageHeader({
  eyebrow, title, em, after, lead, cred, actions,
}: {
  eyebrow: string;
  title?: string;
  em: string;
  after?: string;
  lead: ReactNode;
  cred?: ReactNode;
  actions?: { href: string; label: string; secondary?: boolean; external?: boolean }[];
}) {
  return (
    <header className="page-head">
      <p className="eyebrow">{eyebrow}</p>
      <h1>{title && <>{title} </>}<em>{em}</em>{after && <> {after}</>}</h1>
      <p className="lead">{lead}</p>
      {cred && <p className="cred">{cred}</p>}
      {actions && (
        <div className="hero-actions">
          {actions.map(a => a.external
            ? <a key={a.href} className={`btn${a.secondary ? " secondary" : ""}`} href={a.href} target="_blank" rel="noreferrer">{a.label}</a>
            : <Link key={a.href} className={`btn${a.secondary ? " secondary" : ""}`} href={a.href}>{a.label}</Link>)}
        </div>
      )}
    </header>
  );
}

// drjavid.bio-style list rows: violet label column + text column, thin rules between.
export function Rows({ rows }: { rows: [ReactNode, ReactNode][] }) {
  return (
    <div className="rows">
      {rows.map(([k, v], i) => <div className="row" key={i}><div className="rk">{k}</div><div className="rv">{v}</div></div>)}
    </div>
  );
}
