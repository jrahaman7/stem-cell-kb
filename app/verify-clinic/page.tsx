import PageHeader from "@/components/PageHeader";
import ClinicCheck from "./ClinicCheck";
export const metadata = { title: "Verify a clinic | Cell Therapy Knowledge Base" };
export default function Page() {
  return (
    <>
      <PageHeader eyebrow="Patients · Families · Referring clinicians" title="Verify a" em="stem cell clinic"
        lead="Answer seven quick questions about the clinic or offer you are looking at. You will get a plain result and next steps. Nothing you enter is stored." />
      <ClinicCheck />
      <div className="notice">FDA enforcement is ongoing: after more than 400 letters to stem cell product makers and providers in 2018–2019, FDA issued warning letters to clinics in Nevada (Feb 2026), New Jersey (May 2026) and Arizona (Aug 2026) for unapproved stem cell, cord and exosome products. Report harm to <a href="https://www.fda.gov/safety/medwatch-fda-safety-information-and-adverse-event-reporting-program" target="_blank" rel="noreferrer">FDA MedWatch</a> (1-800-FDA-1088).</div>
    </>
  );
}
