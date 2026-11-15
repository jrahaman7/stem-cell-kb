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
      <h1>Advisory services for research teams</h1>
      <p className="lead">Independent regulatory-science and clinical-AI advisory for researchers developing customized stem cell and cell therapies.</p>
      <div className="grid">{services.map(([t, d]) => <div key={t} className="card"><h3>{t}</h3><p>{d}</p></div>)}</div>
      <h2>About</h2>
      <div className="card">
        <h3>Dr. Javid Ur Rahaman</h3>
        <p>Founder &amp; Head of Applied Intelligence, AAI Applied Agentic Intelligence Research Labs®. Doctorate in Time Series RL from Golden Gate University, San Francisco, CA, USA. Former VP at Oracle, with two decades in enterprise architecture, followed by clinical AI research at Vyrex BIO.</p>
        <p style={{ marginTop: 10 }}><a href="https://www.linkedin.com/in/jrahaman7" target="_blank" rel="noreferrer">LinkedIn</a> · <a href="https://drjavid.bio" target="_blank" rel="noreferrer">drjavid.bio</a> · WhatsApp +1 469-520-6090</p>
      </div>
      <h2>Contact</h2>
      <ContactForm />
      <p className="count">Independent advisor. Not an FDA employee; views are not those of FDA.</p>
    </>
  );
}
