import React, { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [focused, setFocused] = useState(null);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState(null); // "success" | "error" | "sending" | null

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    try {
      await fetch(
        "https://script.google.com/macros/s/AKfycby4b61tO1tH_UdOjphx5sspwGwLMZY0zhUCasd1butAGj_c46Ai1-ySUEFInryCcVvO/exec",
        {
          method: "POST",
          mode: "no-cors",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(form),
        }
      );

      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  return (
    <div className="contact-root">
      <div className="contact-shell">
        <div className="contact-form">
          <p className="form-title">Send a Message</p>
          <form onSubmit={handleSubmit}>
            <div className="field-row">
              <div className="field-group">
                <label className={`field-label ${focused === "name" ? "active" : ""}`}>Name</label>
                <input
                  className="field-input"
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                  value={form.name}
                  onChange={handleChange}
                  onFocus={() => setFocused("name")}
                  onBlur={() => setFocused(null)}
                />
              </div>
              <div className="field-group">
                <label className={`field-label ${focused === "email" ? "active" : ""}`}>Email</label>
                <input
                  className="field-input"
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  required
                  value={form.email}
                  onChange={handleChange}
                  onFocus={() => setFocused("email")}
                  onBlur={() => setFocused(null)}
                />
              </div>
            </div>
            <div className="field-group">
              <label className={`field-label ${focused === "message" ? "active" : ""}`}>Message</label>
              <textarea
                className="field-input"
                name="message"
                placeholder="Tell me about your project or idea..."
                rows="5"
                required
                value={form.message}
                onChange={handleChange}
                onFocus={() => setFocused("message")}
                onBlur={() => setFocused(null)}
              />
            </div>
            <button type="submit" className="submit-btn" disabled={status === "sending"}>
              {status === "sending" ? "Sending..." : "Send Message"}
              <svg viewBox="0 0 24 24"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
            </button>
            {status === "success" && (
              <p style={{ marginTop: 12, fontSize: "0.85rem", color: "#2e7d32" }}>
                Message sent successfully!
              </p>
            )}
            {status === "error" && (
              <p style={{ marginTop: 12, fontSize: "0.85rem", color: "#c62828" }}>
                Something went wrong. Please try again.
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;