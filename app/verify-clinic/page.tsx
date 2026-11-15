export const metadata = { title: "Verify a clinic | Cell Therapy Knowledge Base" };
const checks = [
  ["Is the product FDA-approved for this use?", "Look it up in the approved products directory and confirm that the indication matches the label."],
  ["If not approved, is there an IND?", "Ask for the IND number and the ClinicalTrials.gov NCT number, then check the study listing yourself. A listing alone does not mean FDA endorsement."],
  ["Is there IRB oversight and informed consent?", "Legitimate studies have an Institutional Review Board and a written consent form that explains the risks and that the therapy is experimental."],
  ["Are patients charged large fees?", "Pay-to-participate offers, especially cash-only, are a major red flag. Charging for investigational products needs FDA authorization."],
  ["Does the clinic claim to be 'exempt' from FDA?", "Treat claims that a same-day or autologous procedure needs no FDA oversight with caution. Courts have rejected these claims for SVF products."],
  ["Does it promise to treat many unrelated conditions?", "One cell product marketed for arthritis, autism, Alzheimer's and COPD is a hallmark of unproven clinics."],
  ["Has it received FDA warning or untitled letters?", "Search FDA's warning letter database for the clinic and its physicians."],
];
export default function Page() {
  return (
    <>
      <h1>Verify a clinic</h1>
      <p className="lead">A checklist researchers can share with patients and referring physicians to tell legitimate programs from unproven stem cell clinics.</p>
      <table><thead><tr><th>Question</th><th>What to look for</th></tr></thead>
        <tbody>{checks.map(([q, a]) => <tr key={q}><td><strong>{q}</strong></td><td>{a}</td></tr>)}</tbody></table>
      <div className="notice">FDA has issued more than 400 letters to manufacturers and health care providers that may be offering violative stem cell or related products. Report adverse events to <a href="https://www.fda.gov/safety/medwatch-fda-safety-information-and-adverse-event-reporting-program" target="_blank" rel="noreferrer">FDA MedWatch</a>.</div>
    </>
  );
}
