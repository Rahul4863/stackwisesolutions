"use client";

import { useState } from "react";
import { SITE_INFO } from "@/data/constants";
import Reveal from "./Reveal";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData((f) => ({ ...f, [e.target.name]: e.target.value }));
    setErrors((prev) => ({ ...prev, [e.target.name]: "" }));
  };

  const validate = () => {
    let err = {};
    if (!formData.name) err.name = "Name is required";
    if (!formData.email) err.email = "Email is required";
    if (!formData.subject) err.subject = "Subject is required";
    if (!formData.message) err.message = "Message is required";
    setErrors(err);
    return Object.keys(err).length === 0;
  };

  const handleSubmit = async () => {
    if (!validate()) return;
    try {
      setLoading(true);
      const res = await fetch(
        "https://deltawebservice.com/deltaview-lms/controller/email.php",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );
      if (!res.ok) throw new Error("Network error");
      const data = await res.json();
      if (data.success) {
        alert("✅ Message sent successfully!");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        alert("❌ " + (data.message || "Something went wrong"));
      }
    } catch (error) {
      console.error(error);
      alert("🚨 Server error, please try again");
    } finally {
      setLoading(false);
    }
  };

  const inputClass =
    "w-full bg-panel2 border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder-muted/60 focus:outline-none focus:border-gold transition";

  return (
    <section id="contact" className="py-24 px-6 sm:px-10 lg:px-16 2xl:px-24">
      <Reveal className="mb-12">
        <div className="text-gold text-sm font-medium mb-2">// 06. contact</div>
        <h2 className="text-3xl sm:text-4xl font-display font-bold">Get In Touch</h2>
        <p className="text-muted mt-3 max-w-xl">
          Have a project in mind? Let's build something production-ready together.
        </p>
      </Reveal>

      <div className="grid md:grid-cols-[300px_1fr] gap-12">
        <Reveal direction="left" className="space-y-6">
          {[
            ["📍", "Address", SITE_INFO.address],
            ["📞", "Call Us", SITE_INFO.altPhone],
            ["✉️", "Email Us", SITE_INFO.email],
          ].map(([icon, title, val]) => (
            <div key={title} className="flex gap-4">
              <div className="w-11 h-11 rounded-full bg-gold/10 text-gold flex items-center justify-center text-lg shrink-0">
                {icon}
              </div>
              <div>
                <h3 className="text-white font-medium">{title}</h3>
                <p className="text-muted text-sm">{val}</p>
              </div>
            </div>
          ))}
        </Reveal>

        <Reveal direction="right" delay={100} className="space-y-5">
          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <label className="text-sm text-muted mb-1.5 block">Your Name</label>
              <input
                type="text"
                name="name"
                placeholder="Enter Name"
                value={formData.name}
                onChange={handleChange}
                className={inputClass}
              />
              {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
            </div>
            <div>
              <label className="text-sm text-muted mb-1.5 block">Your Email</label>
              <input
                type="email"
                name="email"
                placeholder="Enter Email"
                value={formData.email}
                onChange={handleChange}
                className={inputClass}
              />
              {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
            </div>
          </div>

          <div>
            <label className="text-sm text-muted mb-1.5 block">Subject</label>
            <input
              type="text"
              name="subject"
              placeholder="Project Inquiry"
              value={formData.subject}
              onChange={handleChange}
              className={inputClass}
            />
            {errors.subject && <p className="text-red-400 text-xs mt-1">{errors.subject}</p>}
          </div>

          <div>
            <label className="text-sm text-muted mb-1.5 block">Message</label>
            <textarea
              name="message"
              rows={5}
              placeholder="Tell me about your project..."
              value={formData.message}
              onChange={handleChange}
              className={inputClass}
            />
            {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message}</p>}
          </div>

          <button
            onClick={handleSubmit}
            disabled={loading}
            className="px-6 py-3 rounded-full bg-gold text-ink font-semibold hover:bg-goldlight transition disabled:opacity-60"
          >
            {loading ? "Sending..." : "Send Message →"}
          </button>
        </Reveal>
      </div>
    </section>
  );
}
