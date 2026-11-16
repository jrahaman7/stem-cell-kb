export const metadata = { title: "Pathways to patients | Cell Therapy Knowledge Base" };
export default function Page() {
  return (
    <>
      <h1>Pathways to patients</h1>
      <p className="lead">How a customized stem cell therapy (a 351 biologic) moves from the lab to US patients.</p>
      <ol className="steps">
        <li><strong>Preclinical and CMC foundation.</strong> Define the product: cell source, manufacturing process, potency assay, release specifications, and safety studies (tumorigenicity, biodistribution, as relevant).</li>
        <li><strong>Early FDA engagement.</strong> CBER's Office of Therapeutic Products (OTP) offers INTERACT meetings for early, informal advice, and pre-IND meetings before you file.</li>
        <li><strong>Investigational New Drug application (IND).</strong> Required before any human use. Academic investigators can hold their own INDs. FDA has 30 days to respond before a study may begin.</li>
        <li><strong>Clinical trials (Phase 1 to 3).</strong> FDA's 2025 draft guidances encourage innovative designs for small populations and multi-site trials that pool data to support a BLA.</li>
        <li><strong>Expedited programs.</strong> Regenerative Medicine Advanced Therapy (RMAT) designation is for cell and tissue therapies intended for serious or life-threatening conditions with preliminary clinical evidence. It sits alongside Fast Track, Breakthrough Therapy, Priority Review and Accelerated Approval.</li>
        <li><strong>Biologics License Application (BLA).</strong> Approval covers the product and its manufacturing process and facilities.</li>
        <li><strong>Post-approval.</strong> Long-term follow-up (especially for gene-modified cells), REMS where required, and post-approval manufacturing changes.</li>
      </ol>
      <h2>Access before approval</h2>
      <div className="table-wrap"><table>
        <thead><tr><th>Route</th><th>Who it serves</th><th>Key condition</th></tr></thead>
        <tbody>
          <tr><td>Clinical trial (IND)</td><td>Eligible enrolled patients</td><td>FDA-cleared protocol and IRB approval</td></tr>
          <tr><td>Expanded access (single patient, intermediate-size, treatment IND)</td><td>Patients with serious conditions and no comparable alternative</td><td>FDA authorization, IRB approval and the sponsor's agreement</td></tr>
          <tr><td>Right to Try (federal law, 2018)</td><td>Eligible patients with life-threatening conditions</td><td>Investigational product has completed Phase 1, and the manufacturer agrees</td></tr>
        </tbody>
      </table></div>
      <h2>Customized and point-of-care manufacturing</h2>
      <p>Truly individualized therapies (autologous, patient-specific or N-of-1) raise particular CMC questions: making the product at several sites, comparability between batches, and release testing on short timelines. FDA has discussed distributed and point-of-care manufacturing models publicly. Any such model still runs under an IND or a BLA, with quality controls at every site. There is no stand-alone "clinic license" route.</p>
      <div className="good">Tip: put manufacturing-site strategy (central, hub-and-spoke or point-of-care) on the table at your first INTERACT or pre-IND meeting. Changing it later is costly.</div>
    </>
  );
}
