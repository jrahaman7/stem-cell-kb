import PageHeader, { Rows } from "@/components/PageHeader";
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
      <PageHeader eyebrow="Scenario · Not FDA policy · 2026–2030" title="2030 roadmap:" em="customized cell therapy" after="for all US patients"
        lead="One plausible path for approved, customized stem cell therapies to move beyond specialist centers by 2030, and the conditions it depends on." />
      <div className="notice">This is a forward-looking scenario prepared for discussion. FDA has not announced any policy that would let urgent care centers, as a class, make or give customized cell therapies.</div>
      <Rows rows={items.map(([y, t, d]) => [y, <><strong>{t}.</strong> {d}</>])} />
      <h2>What has to be <em>true</em></h2>
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
