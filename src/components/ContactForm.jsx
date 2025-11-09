import React, { useState } from "react";

const API_URL = "https://vernanbackend.ezlab.in/api/contact-us/";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({ loading: false, success: false, error: "" });

  function validate() {
    const e = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.email.trim()) e.email = "Email is required";
    else {
      // digit-by-digit-safe email regex check (simple)
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!re.test(form.email)) e.email = "Enter a valid email";
    }
    if (!form.message.trim()) e.message = "Message is required";
    // phone optional but if given ensure digits
    if (form.phone && !/^\d{7,15}$/.test(form.phone)) e.phone = "Enter valid phone (7-15 digits)";
    return e;
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus({ loading: false, success: false, error: "" });
    const eObj = validate();
    setErrors(eObj);
    if (Object.keys(eObj).length) return;

    setStatus(s => ({ ...s, loading: true }));
    try {
      const res = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) {
        const text = await res.text();
        throw new Error(`Server error: ${res.status} ${text}`);
      }
      // successful
      setStatus({ loading: false, success: true, error: "" });
      setForm({ name: "", email: "", phone: "", message: "" });
    } catch (err) {
      setStatus({ loading: false, success: false, error: "Failed to submit. Try again." });
      console.error(err);
    }
  }

  return (
    <section id="contact" className="contact container">
      <div className="contact-grid">
        <div className="contact-left">
          <h2 className="section-title">Join the Story</h2>
          <p>Whether you have an idea, a question, or simply want to explore how V can work together — V're just a message away.</p>
        </div>

        <form className="contact-form" onSubmit={handleSubmit} noValidate>
          <input
            className={`field ${errors.name ? "invalid" : ""}`}
            placeholder="Your name*"
            value={form.name}
            onChange={(e) => setForm(f => ({ ...f, name: e.target.value }))}
          />
          {errors.name && <small className="err">{errors.name}</small>}

          <input
            className={`field ${errors.email ? "invalid" : ""}`}
            placeholder="Your email*"
            value={form.email}
            onChange={(e) => setForm(f => ({ ...f, email: e.target.value }))}
          />
          {errors.email && <small className="err">{errors.email}</small>}

          <input
            className={`field ${errors.phone ? "invalid" : ""}`}
            placeholder="Phone"
            value={form.phone}
            onChange={(e) => setForm(f => ({ ...f, phone: e.target.value }))}
          />
          {errors.phone && <small className="err">{errors.phone}</small>}

          <textarea
            className={`field textarea ${errors.message ? "invalid" : ""}`}
            placeholder="Your message*"
            rows="6"
            value={form.message}
            onChange={(e) => setForm(f => ({ ...f, message: e.target.value }))}
          />
          {errors.message && <small className="err">{errors.message}</small>}

          <div className="form-actions">
            <button className="btn submit" type="submit" disabled={status.loading}>
              {status.loading ? "Submitting..." : "Submit"}
            </button>
            {status.success && <div className="success-msg">Form Submitted</div>}
            {status.error && <div className="err">{status.error}</div>}
          </div>
        </form>
      </div>
    </section>
  );
}
