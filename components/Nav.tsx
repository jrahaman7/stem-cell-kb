import Link from "next/link";
const links = [
  ["/navigator", "Regulatory navigator"],
  ["/pathways", "Pathways"],
  ["/products", "Approved products"],
  ["/verify-clinic", "Verify a clinic"],
  ["/roadmap-2030", "2030 roadmap"],
  ["/resources", "Resources"],
  ["/advisory", "Advisory"],
];
export default function Nav() {
  return (
    <header className="site">
      <div className="wrap">
        <Link href="/" className="brand">Cell Therapy <span>Knowledge Base</span></Link>
        <nav className="main">{links.map(([h, l]) => <Link key={h} href={h}>{l}</Link>)}</nav>
      </div>
    </header>
  );
}
