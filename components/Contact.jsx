"use client";
import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle2,
  Clock,
  Sparkles,
  Copy,
  Check,
  MessageSquare,
  User,
  ShieldCheck,
  Zap,
  Loader2,
  ArrowRight,
  MessageCircle,
  ExternalLink,
  RefreshCw,
} from "lucide-react";
import { SITE_INFO } from "@/data/constants";
import Reveal from "./Reveal";
const SERVICE_OPTIONS = [
  "Web Development",
  "Mobile Apps",
  "UI/UX Design",
  "Backend & APIs",
  "Cloud & DevOps",
  "Digital Marketing",
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "Web Development",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleCopy = (text, type) => {
    navigator.clipboard.writeText(text);
    if (type === "email") {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2200);
    } else if (type === "phone") {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2200);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((f) => ({ ...f, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleServiceSelect = (serviceName) => {
    setFormData((f) => ({
      ...f,
      service: serviceName,
      subject: f.subject ? f.subject : `Inquiry regarding ${serviceName}`,
    }));
  };

  const validate = () => {
    let err = {};
    if (!formData.name.trim()) err.name = "Your name is required";
    if (!formData.email.trim()) {
      err.email = "Email address is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      err.email = "Please enter a valid email address";
    }
    if (!formData.subject.trim()) err.subject = "Subject is required";
    if (!formData.message.trim()) err.message = "Message details are required";
    setErrors(err);
    return Object.keys(err).length === 0;
  };
  const handleSubmit = async (e) => {
    if (e) e.preventDefault();
    if (!validate()) return;

    try {
      setLoading(true);
      const res = await fetch(
        "https://deltawebservice.com/deltaview-lms/controller/email.php",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            phone: formData.phone || "Not Provided",
            subject: formData.subject || `Inquiry for ${formData.service}`,
            message: `[Interested Service: ${formData.service}]\n[Phone: ${formData.phone || "N/A"}]\n\nMessage:\n${formData.message}`,
          }),
        }
      );

      if (!res.ok) throw new Error("Network response was not ok");
      const data = await res.json();

      if (data.success) {
        setSubmitted(true);
      } else {
        alert("❌ " + (data.message || "Could not send message. Please try again."));
      }
    } catch (error) {
      console.error("Submission error:", error);
      alert(
        "🚨 Server error while sending message. Please email us directly at " +
          SITE_INFO.email
      );
    } finally {
      setLoading(false);
    }
  };

  const resetForm = () => {
    setSubmitted(false);
    setFormData({
      name: "",
      email: "",
      phone: "",
      service: "Web Development",
      subject: "",
      message: "",
    });
    setErrors({});
  };

  const inputContainerClass =
    "relative flex items-center rounded-xl bg-base/60 border border-amber-900/15 focus-within:border-gold focus-within:ring-2 focus-within:ring-gold/20 transition-all duration-200";

  return (
    <section id="contact" className="relative py-24 px-6 sm:px-10 lg:px-16 2xl:px-24 overflow-hidden">
      {/* Decorative Warm Ambient Glows */}
      <div className="pointer-events-none absolute -top-40 right-10 w-96 h-96 bg-gold/10 rounded-full blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 -left-20 w-80 h-80 bg-teal-900/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <Reveal className="mb-14 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold/10 border border-gold/20 text-gold text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>06. Contact Us</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-[#1a1611] tracking-tight leading-tight">
            Let's Build Something <span className="text-gold shimmer-text">Production-Ready</span> Together
          </h2>
          <p className="text-muted text-base sm:text-lg mt-4 leading-relaxed">
            Have a project in mind, need technical architecture advice, or want a custom quotation? Send us a message and our lead team will reach out.
          </p>

          {/* Quick SLA Badges */}
          <div className="flex flex-wrap items-center justify-center gap-3 mt-6 text-xs sm:text-sm font-medium text-muted">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-panel border border-amber-900/10 shadow-sm">
              <Zap className="w-3.5 h-3.5 text-gold" /> &lt; 2h Response SLA
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-panel border border-amber-900/10 shadow-sm">
              <ShieldCheck className="w-3.5 h-3.5 text-gold" /> NDA & Confidentiality Guaranteed
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-panel border border-amber-900/10 shadow-sm">
              <Clock className="w-3.5 h-3.5 text-gold" /> Free 30-Min Discovery Call
            </span>
          </div>
        </Reveal>

        {/* Content Layout */}
        <div className="grid lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Direct Contact Info */}
          <div className="lg:col-span-5 space-y-6">
            {/* Primary Contact Details Card */}
            <Reveal direction="left">
              <div className="bg-panel border border-amber-900/15 rounded-3xl p-6 sm:p-8 shadow-xl shadow-amber-950/5 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gold/5 rounded-bl-full pointer-events-none transition-transform duration-500 group-hover:scale-110" />

                <h3 className="text-xl font-display font-bold text-[#1a1611] mb-6 flex items-center gap-2">
                  <span>Direct Communication</span>
                  <span className="h-1.5 w-1.5 rounded-full bg-gold inline-block" />
                </h3>

                <div className="space-y-6">
                  {/* Email Box */}
                  <div className="p-4 rounded-2xl bg-base/50 border border-amber-900/10 hover:border-gold/30 transition duration-200">
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-gold/15 text-gold flex items-center justify-center shrink-0">
                          <Mail className="w-5 h-5" />
                        </div>
                        <div>
                          <p className="text-xs font-semibold uppercase tracking-wider text-muted">Email Us</p>
                          <a
                            href={`mailto:${SITE_INFO.email}`}
                            className="text-sm sm:text-base font-medium hover:text-gold transition break-all"
                          >
                            <span className="text-[#1a1611]">{SITE_INFO.email}</span>
                          </a>
                        </div>
                      </div>
                      <button
                        onClick={() => handleCopy(SITE_INFO.email, "email")}
                        title="Copy Email"
                        className="p-2 rounded-lg bg-panel border border-amber-900/10 hover:border-gold text-muted hover:text-gold transition shrink-0"
                      >
                        {copiedEmail ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                      </button>
                    </div>
                  </div>

                  {/* Phone / Call Box */}
                  <div className="p-4 rounded-2xl bg-base/50 border border-amber-900/10 hover:border-gold/30 transition duration-200">
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-gold/15 text-gold flex items-center justify-center shrink-0">
                          <Phone className="w-5 h-5" />
                        </div>
                        <div>
                          <p className="text-xs font-semibold uppercase tracking-wider text-muted">Call / WhatsApp</p>
                          <a
                            href={`tel:${SITE_INFO.phone}`}
                            className="text-sm sm:text-base font-semibold hover:text-gold transition block"
                          >
                            <span className="text-[#1a1611]">{SITE_INFO.phone}</span>
                          </a>
                        </div>
                      </div>
                      <div className="flex gap-1.5 shrink-0">
                        <a
                          href="https://wa.me/917982972151"
                          target="_blank"
                          rel="noopener noreferrer"
                          title="Chat on WhatsApp"
                          className="p-2 rounded-lg bg-emerald-500/10 text-emerald-700 hover:bg-emerald-500 hover:text-emerald-950 transition"
                        >
                          <MessageCircle className="w-4 h-4" />
                        </a>
                        <button
                          onClick={() => handleCopy(SITE_INFO.phone, "phone")}
                          title="Copy Phone Number"
                          className="p-2 rounded-lg bg-panel border border-amber-900/10 text-[#1a1611] hover:border-gold text-muted hover:text-gold transition"
                        >
                          {copiedPhone ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Location Box */}
                  <div className="p-4 rounded-2xl bg-base/50 border border-amber-900/10 hover:border-gold/30 transition duration-200">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-xl bg-gold/15 text-gold flex items-center justify-center shrink-0">
                        <MapPin className="w-5 h-5" />
                      </div>
                      <div className="flex-1">
                        <p className="text-xs font-semibold uppercase tracking-wider text-muted">Studio HQ</p>
                        <p className="text-sm font-medium text-[#1a1611] mt-0.5">{SITE_INFO.address}</p>
                        <a
                          href={`https://maps.google.com/?q=${encodeURIComponent(SITE_INFO.address)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-xs font-semibold text-gold hover:underline mt-2"
                        >
                          Get Directions <ExternalLink className="w-3 h-3" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Dynamic Project Inquiry Form */}
          <div className="lg:col-span-7">
            <Reveal direction="right" delay={100}>
              <div className="bg-panel border border-amber-900/15 rounded-3xl p-6 sm:p-10 shadow-2xl shadow-amber-950/5 relative">
                {submitted ? (
                  /* Success State Display */
                  <div className="py-12 px-4 text-center space-y-6 animate-fadeIn">
                    <div className="w-20 h-20 rounded-full bg-emerald-500/10 text-emerald-600 border border-emerald-500/20 flex items-center justify-center mx-auto shadow-inner">
                      <CheckCircle2 className="w-10 h-10" />
                    </div>
                    <div className="max-w-md mx-auto space-y-2">
                      <h3 className="text-2xl font-display font-bold text-[#1a1611]">
                        Thank You, {formData.name || "Friend"}!
                      </h3>
                      <p className="text-muted text-sm sm:text-base leading-relaxed">
                        Your message regarding <span className="font-semibold text-gold">{formData.service}</span> has been received. Our team will review your inquiry and get back to you within 2 hours.
                      </p>
                    </div>

                    <div className="p-4 rounded-2xl bg-base/60 border border-amber-900/10 max-w-sm mx-auto text-xs text-muted text-left space-y-1">
                      <p className="font-semibold text-[#1a1611]">Submission Summary:</p>
                      <p>• Email: {formData.email}</p>
                      <p>• Subject: {formData.subject}</p>
                    </div>

                    <button
                      onClick={resetForm}
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gold text-ink font-bold hover:bg-goldlight transition btn-pop"
                    >
                      <RefreshCw className="w-4 h-4" />
                      <span>Send Another Message</span>
                    </button>
                  </div>
                ) : (
                  /* Standard Interactive Form */
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <h3 className="text-2xl font-display font-bold text-[#1a1611]">Send Us A Message</h3>
                      <p className="text-muted text-sm mt-1">Tell us about your project requirements & timeline.</p>
                    </div>

                    {/* Service Category Pills */}
                    <div>
                      <label className="text-xs font-semibold uppercase tracking-wider text-muted mb-2.5 block">
                        What Service Do You Need?
                      </label>
                      <div className="flex flex-wrap gap-2">
                        {SERVICE_OPTIONS.map((srv) => (
                          <button
                            key={srv}
                            type="button"
                            onClick={() => handleServiceSelect(srv)}
                            className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                              formData.service === srv
                                ? "bg-gold text-ink font-bold shadow-md shadow-gold/20 scale-105"
                                : "bg-base/80 border border-amber-900/15 text-[#1a1611] hover:border-gold/50 hover:bg-base"
                            }`}
                          >
                            {srv}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Input Grid */}
                    <div className="grid sm:grid-cols-2 gap-4">
                      {/* Name */}
                      <div>
                        <label className="text-xs font-semibold uppercase tracking-wider text-muted mb-1.5 block">
                          Your Name <span className="text-gold">*</span>
                        </label>
                        <div className={inputContainerClass}>
                          <User className="w-4 h-4 text-muted ml-3.5 shrink-0" />
                          <input
                            type="text"
                            name="name"
                            placeholder="e.g. Rahul Soni"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full bg-transparent px-3 py-3 text-sm text-[#1a1611] placeholder-muted/50 focus:outline-none"
                          />
                        </div>
                        {errors.name && <p className="text-rose-500 text-xs mt-1.5 font-medium">{errors.name}</p>}
                      </div>

                      {/* Email */}
                      <div>
                        <label className="text-xs font-semibold uppercase tracking-wider text-muted mb-1.5 block">
                          Email Address <span className="text-gold">*</span>
                        </label>
                        <div className={inputContainerClass}>
                          <Mail className="w-4 h-4 text-muted ml-3.5 shrink-0" />
                          <input
                            type="email"
                            name="email"
                            placeholder="rahul@example.com"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full bg-transparent px-3 py-3 text-sm text-[#1a1611] placeholder-muted/50 focus:outline-none"
                          />
                        </div>
                        {errors.email && <p className="text-rose-500 text-xs mt-1.5 font-medium">{errors.email}</p>}
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      {/* Phone */}
                      <div>
                        <label className="text-xs font-semibold uppercase tracking-wider text-muted mb-1.5 block">
                          Phone / WhatsApp <span className="text-muted/60 font-normal">(Optional)</span>
                        </label>
                        <div className={inputContainerClass}>
                          <Phone className="w-4 h-4 text-muted ml-3.5 shrink-0" />
                          <input
                            type="tel"
                            name="phone"
                            placeholder="+91 98765 43210"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full bg-transparent px-3 py-3 text-sm text-[#1a1611] placeholder-muted/50 focus:outline-none"
                          />
                        </div>
                      </div>

                      {/* Subject */}
                      <div>
                        <label className="text-xs font-semibold uppercase tracking-wider text-muted mb-1.5 block">
                          Subject <span className="text-gold">*</span>
                        </label>
                        <div className={inputContainerClass}>
                          <Sparkles className="w-4 h-4 text-muted ml-3.5 shrink-0" />
                          <input
                            type="text"
                            name="subject"
                            placeholder="Project Inquiry..."
                            value={formData.subject}
                            onChange={handleChange}
                            className="w-full bg-transparent px-3 py-3 text-sm text-[#1a1611] placeholder-muted/50 focus:outline-none"
                          />
                        </div>
                        {errors.subject && <p className="text-rose-500 text-xs mt-1.5 font-medium">{errors.subject}</p>}
                      </div>
                    </div>

                    {/* Message Area */}
                    <div>
                      <label className="text-xs font-semibold uppercase tracking-wider text-muted mb-1.5 block">
                        Project Message <span className="text-gold">*</span>
                      </label>
                      <div className="relative rounded-xl bg-base/60 border border-amber-900/15 focus-within:border-gold focus-within:ring-2 focus-within:ring-gold/20 transition-all duration-200">
                        <textarea
                          name="message"
                          rows={4}
                          placeholder="Describe your project goals, key features, target timeline, or any questions..."
                          value={formData.message}
                          onChange={handleChange}
                          className="w-full bg-transparent p-4 text-sm text-[#1a1611] placeholder-muted/50 focus:outline-none resize-none"
                        />
                      </div>
                      {errors.message && <p className="text-rose-500 text-xs mt-1.5 font-medium">{errors.message}</p>}
                    </div>

                    {/* Submit Button */}
                    <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                      <p className="text-xs text-muted flex items-center gap-1.5">
                        <ShieldCheck className="w-4 h-4 text-gold shrink-0" />
                        We respect your privacy. No spam ever.
                      </p>
                      <button
                        type="submit"
                        disabled={loading}
                        className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-gold text-ink font-bold hover:bg-goldlight transition-all duration-200 flex items-center justify-center gap-2.5 shadow-lg shadow-gold/20 disabled:opacity-60 btn-pop"
                      >
                        {loading ? (
                          <>
                            <Loader2 className="w-4 h-4 animate-spin" />
                            <span>Sending Message...</span>
                          </>
                        ) : (
                          <>
                            <span>Send Message</span>
                            <ArrowRight className="w-4 h-4" />
                          </>
                        )}
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}