import PageHeader from "@/components/PageHeader";
import SelfCheck from "./SelfCheck";
export const metadata = { title: "Regulatory navigator | Cell Therapy Knowledge Base" };
export default function Page() {
  return (
    <>
      <PageHeader eyebrow="Regulation · 21 CFR 1271 · Researchers" title="Regulatory" em="navigator"
        lead="FDA regulates human cells, tissues, and cellular and tissue-based products (HCT/Ps) on two tiers. Which tier you are in decides almost everything else."
        actions={[{ href: "#self-check", label: "Take the 361 vs 351 self-check" }, { href: "/pathways", label: "See the pathways", secondary: true }]} />
      <div className="table-wrap"><table>
        <thead><tr><th></th><th>Section 361 HCT/P</th><th>Section 351 biologic</th></tr></thead>
        <tbody>
          <tr><td><strong>Legal basis</strong></td><td>PHS Act §361; 21 CFR Part 1271</td><td>PHS Act §351 and FD&amp;C Act; 21 CFR Parts 312, 600–680, plus 1271</td></tr>
          <tr><td><strong>Premarket review</strong></td><td>None</td><td>IND for clinical trials, then BLA approval</td></tr>
          <tr><td><strong>Typical examples</strong></td><td>Bone, skin, corneas, minimally manipulated cord blood for related-donor use</td><td>Culture-expanded MSCs, CAR-T, gene-modified HSCs, unrelated cord blood (licensed HPC products)</td></tr>
          <tr><td><strong>Where customized stem cell therapy usually lands</strong></td><td colSpan={1}>Rarely</td><td>Almost always</td></tr>
        </tbody>
      </table></div>
      <h2 id="self-check">Self-check: <em>361 or 351?</em></h2>
      <p>A product is a 361 HCT/P only if it meets <strong>all four</strong> criteria in 21 CFR 1271.10(a).</p>
      <SelfCheck />
      <h2>Key points for researchers</h2>
      <ul>
        <li>"Personalized" or "autologous" does not by itself make a product exempt. Manipulation and intended use decide the tier.</li>
        <li>Federal courts have repeatedly upheld FDA's authority over clinic-made stem cell products such as SVF.</li>
        <li>FDA's January 2026 statements on flexible CMC oversight for cell and gene therapies apply to sponsors working inside the IND/BLA system, not to unapproved clinic products.</li>
      </ul>
    </>
  );
}
