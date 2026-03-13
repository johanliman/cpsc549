import React, { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [focused, setFocused] = useState(null);

  return (
    <div className="contact-root">
      <div className="contact-shell">
        <div className="contact-form">
          <p className="form-title">Send a Message</p>
          <form
            action="https://formsubmit.co/johanliman@gmail.com"
            method="POST"
          >
            <div className="field-row">
              <div className="field-group">
                <label className={`field-label ${focused === "name" ? "active" : ""}`}>Name</label>
                <input
                  className="field-input"
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
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
                onFocus={() => setFocused("message")}
                onBlur={() => setFocused(null)}
              />
            </div>
            <button type="submit" className="submit-btn">
              Send Message
              <svg viewBox="0 0 24 24"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;