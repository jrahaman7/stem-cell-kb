export const metadata = { title: "2030 care-delivery roadmap | Cell Therapy Knowledge Base" };
const items = [
  ["2026–2027", "Build the evidence base", "More cell and gene therapy approvals under FDA's flexible CMC approach and expedited programs. Academic and industry sponsors file INDs for customized stem cell products."],
  ["2027–2028", "Prove distributed manufacturing", "Sponsors show that hub-and-spoke or point-of-care manufacturing gives comparable product quality across sites, inside their INDs and BLAs."],
  ["2028–2029", "Qualified treatment networks", "Approved products reach networks of certified centers (as CAR-T did through qualified treatment centers), with standard training, data capture and long-term follow-up."],
  ["2029–2030", "Community and urgent care roles", "Urgent care and community clinics act as access points: screening and referral, sample collection where a label allows, follow-up visits, and real-world data. Administering a product would depend on each product's label and any REMS."],
];
export default function Page() {
  return (
    <>
      <span className="tag">Scenario, not FDA policy</span>
      <h1>2030 roadmap: customized cell therapy for all US patients</h1>
      <p className="lead">One plausible path for approved, customized stem cell therapies to move beyond specialist centers by 2030, and the conditions it depends on.</p>
      <div className="notice">This is a forward-looking scenario prepared for discussion. FDA has not announced any policy that would let urgent care centers, as a class, make or give customized cell therapies.</div>
      <div className="timeline">{items.map(([y, t, d]) => (
        <div className="item" key={y}><div className="yr">{y}</div><h3>{t}</h3><p className="muted">{d}</p></div>
      ))}</div>
      <h2>What has to be true</h2>
      <ul>
        <li>Products approved by BLA, with labels that allow administration outside specialist centers</li>
        <li>Validated, automated closed-system manufacturing with reliable potency assays</li>
        <li>Payer coverage and reimbursement models for one-time, high-cost therapies</li>
        <li>Trained staff, cold-chain logistics and adverse-event management at community sites</li>
        <li>Interoperable registries and AI-assisted real-world evidence for long-term safety follow-up</li>
      </ul>
    </>
  );
}
