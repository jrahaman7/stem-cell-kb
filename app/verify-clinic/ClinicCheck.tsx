"use client";
import Link from "next/link";
import { useState } from "react";

type Ans = "good" | "bad" | "unsure";
const qs: { id: string; q: string; good: string; bad: string; help: React.ReactNode }[] = [
  { id: "approved", q: "Is the product FDA-approved for your condition?", good: "Yes, it's on the label", bad: "No / they won't say",
    help: <>Check the <Link href="/products">approved products directory</Link> and make sure the condition matches the label.</> },
  { id: "ind", q: "If not approved, can they give you an IND and ClinicalTrials.gov (NCT) number?", good: "Yes, and I checked it", bad: "No",
    help: <>Look the NCT number up yourself on <a href="https://clinicaltrials.gov" target="_blank" rel="noreferrer">ClinicalTrials.gov</a>. A listing alone is not FDA endorsement.</> },
  { id: "irb", q: "Is there an ethics board (IRB) and a written consent form that says the treatment is experimental?", good: "Yes", bad: "No",
    help: "Legitimate studies always have IRB oversight and a consent form you can take home." },
  { id: "fees", q: "Are you asked to pay large fees, especially cash up front?", good: "No", bad: "Yes",
    help: "Pay-to-participate offers are a major red flag. Charging for investigational products needs FDA authorization." },
  { id: "exempt", q: "Does the clinic say its treatment is 'exempt' from FDA or 'same-day, your own cells, so no approval needed'?", good: "No", bad: "Yes",
    help: "Courts have rejected these claims, for example for fat-derived SVF products." },
  { id: "many", q: "Does the clinic treat many unrelated conditions with the same cells (arthritis, autism, Alzheimer's, COPD…)?", good: "No", bad: "Yes",
    help: "One product for many unrelated diseases is a hallmark of unproven clinics." },
  { id: "letters", q: "Has the clinic or its doctors received FDA warning letters?", good: "No, I searched", bad: "Yes",
    help: <>Search the <a href="https://www.fda.gov/inspections-compliance-enforcement-and-criminal-investigations/compliance-actions-and-activities/warning-letters" target="_blank" rel="noreferrer">FDA warning letter database</a> for the clinic and doctor names.</> },
];

export default function ClinicCheck() {
  const [a, setA] = useState<Record<string, Ans>>({});
  const done = qs.filter(q => a[q.id]).length;
  const bad = qs.filter(q => a[q.id] === "bad").length;
  const unsure = qs.filter(q => a[q.id] === "unsure").length;
  const set = (id: string, v: Ans) => setA({ ...a, [id]: v });

  return (
    <div>
      <p className="count" aria-live="polite">{done} of {qs.length} answered</p>
      <div className="progress"><span style={{ width: `${(done / qs.length) * 100}%` }} /></div>
      {qs.map((q, i) => (
        <fieldset className="q" key={q.id}>
          <legend><h3>{i + 1}. {q.q}</h3></legend>
          <p className="muted">{q.help}</p>
          <div className="opts">
            {([["good", q.good], ["bad", q.bad], ["unsure", "Not sure"]] as [Ans, string][]).map(([v, label]) => (
              <button key={v} type="button" aria-pressed={a[q.id] === v} className={a[q.id] === v ? (v === "bad" ? "sel-bad" : "") : "secondary"} onClick={() => set(q.id, v)}>{label}</button>
            ))}
          </div>
        </fieldset>
      ))}
      {done > 0 && (
        <div className={bad > 0 ? "notice" : unsure > 0 || done < qs.length ? "notice soft" : "good"} aria-live="polite">
          {bad > 0 ? (
            <><strong>{bad} red flag{bad > 1 ? "s" : ""} found.</strong> Do not pay or book a procedure yet. Share these answers with your own doctor, and consider reporting the clinic to FDA.</>
          ) : unsure > 0 || done < qs.length ? (
            <><strong>Not enough information yet.</strong> Get answers to every question in writing before you decide.</>
          ) : (
            <><strong>No red flags in your answers.</strong> This looks like a legitimate approved treatment or registered study. Confirm details with your doctor.</>
          )}
          <p style={{ margin: "10px 0 0" }}><button type="button" className="secondary" onClick={() => setA({})}>Start over</button></p>
        </div>
      )}
    </div>
  );
}
