import Link from "next/link";

export const metadata = { title: "For patients & families | Cell Therapy Knowledge Base" };

const conditions: [string, string][] = [
  ["Sickle cell disease", "sickle"],
  ["Beta-thalassemia", "thalassemia"],
  ["Leukemia & lymphoma", "lymphoma"],
  ["Multiple myeloma", "myeloma"],
  ["Type 1 diabetes", "diabetes"],
  ["Knee cartilage", "cartilage"],
  ["Burns & skin wounds", "wound"],
  ["Parkinson's", "parkinson"],
];

const ask: string[] = [
  "Is this product approved by FDA for my condition? Can I see the label?",
  "If it is not approved, what is the IND number and the ClinicalTrials.gov (NCT) number?",
  "Which ethics board (IRB) oversees it, and can I have the consent form to read at home?",
  "What will I pay, and why? Am I being charged to take part in research?",
  "What are the known risks, and who handles complications?",
  "What results have been published, and in which journal?",
];

export default function Page() {
  return (
    <>
      <p className="eyebrow">Plain-language guide</p>
      <h1>For <em>patients & families</em></h1>
      <p className="lead">
        Stem cell therapy is real medicine for some conditions, and an expensive risk for many others. This page helps
        you tell the difference and talk it through with your doctor.
      </p>

      <div className="facts">
        <div className="card"><h3>What is proven</h3><p>FDA has approved cell therapies for certain blood cancers, sickle cell disease, thalassemia, some rare genetic and immune conditions, type 1 diabetes with severe low blood sugar, knee cartilage defects, burns and some eye and skin conditions. They are given in hospitals and specialist centers.</p></div>
        <div className="card"><h3>What is not</h3><p>No stem cell product is FDA-approved for arthritis pain, back pain, autism, Alzheimer&rsquo;s, ALS, COPD, anti-aging or general &ldquo;wellness&rdquo;. Clinics selling these are usually operating outside FDA rules.</p></div>
        <div className="card"><h3>Real risks</h3><p>People have been blinded, infected or harmed by unapproved stem cell injections. Treatments are often cash-only, cost thousands of dollars and are not covered by insurance.</p></div>
      </div>

      <h2>Is there an approved therapy for my condition?</h2>
      <p>Tap a condition to see approved therapies and research breakthroughs, with the results from their trials.</p>
      <div className="chips">
        {conditions.map(([label, q]) => (
          <Link key={q} className="chip" href={`/success-cases?q=${encodeURIComponent(q)}`}>{label}</Link>
        ))}
      </div>

      <h2>Questions to ask before any stem cell treatment</h2>
      <ol className="steps">{ask.map(q => <li key={q}>{q}</li>)}</ol>
      <p><Link className="btn" href="/verify-clinic">Check a clinic with our checklist</Link></p>

      <h2>Want to join a study?</h2>
      <p>
        Real clinical trials are listed on <a href="https://clinicaltrials.gov" target="_blank" rel="noreferrer">ClinicalTrials.gov</a>.
        Legitimate trials rarely charge you to take part. Your doctor can help you judge whether a study fits, and explain
        options such as <Link href="/pathways">expanded access</Link> if you have a serious condition with no other choice.
      </p>

      <div className="notice">
        This site is for education only and is not medical advice. Always talk to your own doctor before any treatment.
        If you were harmed by a stem cell product, report it to <a href="https://www.fda.gov/safety/medwatch-fda-safety-information-and-adverse-event-reporting-program" target="_blank" rel="noreferrer">FDA MedWatch</a> or call 1-800-FDA-1088.
      </div>
    </>
  );
}
