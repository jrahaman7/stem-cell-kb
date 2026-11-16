import PageHeader, { Rows } from "@/components/PageHeader";
import ContactForm from "./ContactForm";
export const metadata = { title: "Advisory services | Cell Therapy Knowledge Base" };
const services = [
  ["Regulatory pathway mapping", "361 vs 351 assessment, INTERACT and pre-IND preparation, and RMAT readiness for customized stem cell products."],
  ["Clinical AI and real-world evidence", "Time-series and reinforcement-learning methods for dynamic treatment regimes, outcome prediction and long-term follow-up."],
  ["Data engineering for trials", "Registry, EHR and multi-site data pipelines that support distributed manufacturing and BLA evidence."],
  ["Public regulatory input", "Help preparing comments for open FDA dockets on cell therapy and AI in health."],
];
export default function Page() {
  return (
    <>
      <PageHeader eyebrow="Work with me · Advisory · Speaking" title="Advisory for" em="research teams"
        lead="Independent regulatory-science and clinical-AI advisory for researchers developing customized stem cell and cell therapies."
        cred="Dr. Javid Ur Rahaman · Founder & Head of Applied Intelligence, AAI Applied Agentic Intelligence Research Labs®"
        actions={[{ href: "#contact", label: "Start a conversation" }, { href: "https://drjavid.bio", label: "Visit drjavid.bio", secondary: true, external: true }]} />
      <div className="grid">{services.map(([t, d]) => <div key={t} className="card"><p className="label">Service</p><h3>{t}</h3><p>{d}</p></div>)}</div>
      <h2>About</h2>
      <p>Doctorate in Time Series RL from Golden Gate University, San Francisco, CA, USA. Two decades in enterprise architecture, followed by clinical AI research.</p>
      <Rows rows={[
        ["Since 2026", "Founder & Head of Applied Intelligence, AAI Applied Agentic Intelligence Research Labs®"],
        ["2023–2026", "VP of Research, Vyrex.BIO"],
        ["2003–2022", "Vice President of Engineering, later Senior Program Architect, Oracle"],
        ["2000–2002", "Senior Scientist, DRDL–DRDO"],
      ]} />
      <p className="small"><a href="https://www.linkedin.com/in/jrahaman7" target="_blank" rel="noreferrer">LinkedIn (profile of record)</a> · <a href="https://drjavid.bio" target="_blank" rel="noreferrer">drjavid.bio</a> · WhatsApp +1 469-520-6090</p>
      <h2 id="contact">Contact</h2>
      <ContactForm />
      <p className="count">Independent advisor. Not an FDA employee; views are not those of FDA.</p>
    </>
  );
}
