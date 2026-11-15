"use client";
import { useState } from "react";
export default function ContactForm() {
  const [f, setF] = useState({ name: "", org: "", topic: "Regulatory pathway (361 vs 351, IND, RMAT)", msg: "" });
  const text = `Hello Dr. Javid, I'm ${f.name || "[name]"}${f.org ? ` from ${f.org}` : ""}. Topic: ${f.topic}. ${f.msg}`;
  const href = `https://wa.me/14695206090?text=${encodeURIComponent(text)}`;
  return (
    <form className="card" onSubmit={e => { e.preventDefault(); window.open(href, "_blank", "noopener"); }}>
      <label htmlFor="n">Name</label><input id="n" type="text" required value={f.name} onChange={e => setF({ ...f, name: e.target.value })} />
      <label htmlFor="o">Institution or company</label><input id="o" type="text" value={f.org} onChange={e => setF({ ...f, org: e.target.value })} />
      <label htmlFor="t">Topic</label>
      <select id="t" value={f.topic} onChange={e => setF({ ...f, topic: e.target.value })}>
        <option>Regulatory pathway (361 vs 351, IND, RMAT)</option>
        <option>Clinical AI and real-world evidence</option>
        <option>Research collaboration or grant</option>
        <option>Other</option>
      </select>
      <label htmlFor="m">Message</label><textarea id="m" required value={f.msg} onChange={e => setF({ ...f, msg: e.target.value })} />
      <p><button type="submit">Send via WhatsApp</button></p>
      <p className="count">Opens WhatsApp with your message filled in. Nothing is stored on this site.</p>
    </form>
  );
}
