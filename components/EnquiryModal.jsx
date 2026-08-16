
"use client";
import { useState } from "react";
import { SERVICES, SITE_INFO } from "@/data/constants";

export default function EnquiryModal({ service, onClose }) {
  // Try to preselect the service dropdown to match whatever was passed in
  // (works whether it's an actual SERVICES entry or something else, like an
  // industry — in which case nothing will match and the user just picks one).
  const preselected = SERVICES.find(
    (s) => s.slug === service?.slug || s.title === service?.title
  );

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    interestedService: preselected ? preselected.slug : "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    setFormData((f) => ({ ...f, [e.target.name]: e.target.value }));
    setErrors((prev) => ({ ...prev, [e.target.name]: "" }));
  };

  const validate = () => {
    let err = {};
    if (!formData.name) err.name = "Name is required";
    if (!formData.email) err.email = "Email is required";
    if (!formData.phone) err.phone = "Phone number is required";
    setErrors(err);
    return Object.keys(err).length === 0;
  };

  const handleSubmit = async () => {
    if (!validate()) return;
    try {
      setLoading(true);
      const chosenService = SERVICES.find((s) => s.slug === formData.interestedService);
      const chosenServiceTitle = chosenService ? chosenService.title : service.title;
      const res = await fetch(
        "https://deltawebservice.com/deltaview-lms/controller/email.php",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            ...formData,
            service: chosenServiceTitle,
            subject: `Service Enquiry: ${chosenServiceTitle}`,
          }),
        }
      );
      if (!res.ok) throw new Error("Network error");
      const data = await res.json();
      if (data.success) {
        setSent(true);
      } else {
        alert("❌ " + (data.message || "Something went wrong"));
      }
    } catch (error) {
      console.error(error);
      alert("🚨 Server error, please try again or reach us directly at " + SITE_INFO.email);
    } finally {
      setLoading(false);
    }
  };

  const inputClass =
    "w-full bg-base border border-amber-900/15 rounded-xl px-4 py-3 text-sm text-[#1a1611] placeholder-muted/70 focus:outline-none focus:border-gold transition";

  const Icon = service.icon;

  return (
    <div
      className="fixed inset-0 bg-black/80 z-[60] flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="bg-panel rounded-3xl w-full max-w-md relative border border-amber-900/15 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-4 right-4 w-9 h-9 rounded-full bg-base text-[#1a1611] hover:bg-gold hover:text-ink flex items-center justify-center font-bold transition"
          onClick={onClose}
        >
          ✕
        </button>
        <div className="p-8">
          <div className="flex items-center gap-3 mb-1">
            {Icon && (
              <div className="w-10 h-10 rounded-xl bg-gold/15 text-gold flex items-center justify-center shrink-0">
                <Icon size={18} />
              </div>
            )}
            <div className="text-gold text-xs uppercase tracking-wide font-bold">
              Enquire about
            </div>
          </div>
          <h3 className="text-xl font-display font-bold text-[#1a1611] mb-5">
            {service.title}
          </h3>

          {sent ? (
            <div className="text-center py-6">
              <div className="text-4xl mb-3">✅</div>
              <p className="text-[#1a1611] font-bold mb-1">Enquiry sent!</p>
              <p className="text-muted text-sm">
                Thanks for reaching out. Our team will get back to you within 24 hours.
              </p>
              <button
                onClick={onClose}
                className="mt-6 px-6 py-2.5 rounded-full bg-gold text-ink font-semibold hover:bg-goldlight transition"
              >
                Close
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              {/* Row 1: Name + Email */}
              <div className="grid grid-cols-2 gap-4">
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

              {/* Row 2: Phone + Service */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm text-muted mb-1.5 block">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Enter Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                    className={inputClass}
                  />
                  {errors.phone && <p className="text-red-400 text-xs mt-1">{errors.phone}</p>}
                </div>
                <div>
                  <label className="text-sm text-muted mb-1.5 block">Service Interested In</label>
                  <div className="relative">
                    <select
                      name="interestedService"
                      value={formData.interestedService}
                      onChange={handleChange}
                      className={`${inputClass} appearance-none cursor-pointer pr-9`}
                    >
                      {SERVICES.map((s) => (
                        <option key={s.slug} value={s.slug} className="bg-panel2">
                          {s.title}
                        </option>
                      ))}
                    </select>
                    <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-muted text-xs">
                      ▾
                    </span>
                  </div>
                </div>
              </div>

              {/* Full width: message */}
              <div>
                <label className="text-sm text-muted mb-1.5 block">
                  Tell us about your requirement (optional)
                </label>
                <textarea
                  name="message"
                  rows={3}
                  placeholder={`I'm looking for help with ${service.title.toLowerCase()}...`}
                  value={formData.message}
                  onChange={handleChange}
                  className={inputClass}
                />
              </div>

              <button
                onClick={handleSubmit}
                disabled={loading}
                className="w-full px-6 py-3 rounded-full bg-gold text-ink font-semibold hover:bg-goldlight transition disabled:opacity-60"
              >
                {loading ? "Sending..." : "Submit Enquiry →"}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}