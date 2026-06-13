"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type FormData = {
  name: string;
  email: string;
  company: string;
  website: string;
  message: string;
};

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    company: "",
    website: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Failed to send message");
      }

      setSubmitted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setSubmitting(false);
    }
  };

  const fields = [
    {
      key: "name" as const,
      label: "Your Name",
      type: "text",
    },
    {
      key: "email" as const,
      label: "Email Address",
      type: "email",
    },
    {
      key: "company" as const,
      label: "Company Name",
      type: "text",
    },
    {
      key: "website" as const,
      label: "Website URL",
      type: "url",
    },
  ];

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-16"
      >
        <div className="w-16 h-16 rounded-full bg-neon-green/10 flex items-center justify-center mx-auto mb-6">
          <svg className="w-8 h-8 text-neon-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold mb-3 gradient-text">
          Message Received!
        </h3>
        <p className="text-text-secondary text-sm max-w-md mx-auto">
          We&apos;ll review your details and get back to you within 24 hours
          to schedule your free discovery call.
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Name, Email, Company, Website */}
      <div className="grid sm:grid-cols-2 gap-5">
        {fields.map((field) => (
          <div key={field.key} className="relative">
            <input
              type={field.type}
              id={field.key}
              required
              value={formData[field.key]}
              onChange={(e) =>
                setFormData({ ...formData, [field.key]: e.target.value })
              }
              onFocus={() => setFocusedField(field.key)}
              onBlur={() => setFocusedField(null)}
              className="peer w-full bg-transparent px-4 pt-6 pb-2 text-text-primary text-sm rounded-lg border border-border focus:border-neon-purple/40 focus:outline-none transition-colors placeholder-transparent"
              placeholder={field.label}
            />
            <label
              htmlFor={field.key}
              className={cn(
                "absolute left-4 transition-all duration-200 pointer-events-none text-text-muted",
                focusedField === field.key || formData[field.key]
                  ? "top-2 text-[10px] text-neon-cyan font-mono"
                  : "top-1/2 -translate-y-1/2 text-sm"
              )}
            >
              {field.label}
            </label>
          </div>
        ))}
      </div>

      {/* Message */}
      <div className="relative">
        <textarea
          id="message"
          rows={4}
          value={formData.message}
          onChange={(e) =>
            setFormData({ ...formData, message: e.target.value })
          }
          onFocus={() => setFocusedField("message")}
          onBlur={() => setFocusedField(null)}
          className="peer w-full bg-transparent px-4 pt-6 pb-2 text-text-primary text-sm rounded-lg border border-border focus:border-neon-purple/40 focus:outline-none transition-colors resize-none placeholder-transparent"
          placeholder="Tell us about your marketing challenges..."
        />
        <label
          htmlFor="message"
          className={cn(
            "absolute left-4 transition-all duration-200 pointer-events-none text-text-muted",
            focusedField === "message" || formData.message
              ? "top-2 text-[10px] text-neon-cyan font-mono"
              : "top-4 text-sm"
          )}
        >
          Tell us about your marketing challenges...
        </label>
      </div>

      {error && (
        <div className="p-3 rounded-lg bg-neon-magenta/10 border border-neon-magenta/20 text-sm text-neon-magenta text-center">
          {error}
        </div>
      )}

      <button
        type="submit"
        disabled={submitting}
        className="cyber-btn cyber-btn-primary w-full justify-center disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {submitting ? (
          <>
            <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
            Sending...
          </>
        ) : (
          <>
            Send Message
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
            </svg>
          </>
        )}
      </button>

      <p className="text-center text-[10px] text-text-muted font-mono">
        We respect your privacy. No spam, ever.
      </p>
    </form>
  );
}
