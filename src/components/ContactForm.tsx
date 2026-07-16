"use client";

import { useState } from "react";

type ContactFormProps = {
  thanks: string;
  rtl?: boolean;
};

export default function ContactForm({ thanks, rtl }: ContactFormProps) {
  const [sent, setSent] = useState(false);

  return (
    <form
      className="contact-form"
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
    >
      <label>
        {rtl ? "שם" : "Name"}
        <input name="name" required />
      </label>
      <label>
        {rtl ? "אימייל" : "Email"}
        <input type="email" name="email" required />
      </label>
      <label>
        {rtl ? "טלפון" : "Phone"}
        <input name="phone" />
      </label>
      <label>
        {rtl ? "הודעה" : "Message"}
        <textarea name="message" rows={5} required />
      </label>
      <p className="form-note">{sent ? thanks : ""}</p>
      <button className="btn btn-solar" type="submit">
        {rtl ? "שלח" : "Send"}
      </button>
    </form>
  );
}
