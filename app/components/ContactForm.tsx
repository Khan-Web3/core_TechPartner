"use client";

// Core Tech Partner site file

import { FormEvent, useState } from "react";
import { ArrowIcon } from "@/views/sections/icons";

type Variant = "home" | "page";

type Props = {
  variant?: Variant;
};

type FormState = {
  name: string;
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  service: string;
  message: string;
};

const empty: FormState = {
  name: "",
  firstName: "",
  lastName: "",
  email: "",
  company: "",
  service: "",
  message: "",
};

export default function ContactForm({ variant = "home" }: Props) {
  const [form, setForm] = useState<FormState>(empty);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [error, setError] = useState("");

  const setField = (key: keyof FormState, value: string) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setError("");

    const name =
      variant === "page"
        ? `${form.firstName} ${form.lastName}`.trim()
        : form.name.trim();

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email: form.email.trim(),
          company: form.company.trim() || undefined,
          service: form.service,
          message: form.message.trim(),
        }),
      });

      const data = (await res.json()) as { ok?: boolean; error?: string };
      if (!res.ok || !data.ok) {
        throw new Error(data.error || "Could not send your message.");
      }

      setStatus("success");
      setForm(empty);
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Something went wrong.");
    }
  };

  if (status === "success") {
    return (
      <div className={`flex flex-col items-center justify-center text-center ${variant === "home" ? "min-h-[320px]" : "min-h-[280px]"}`}>
        <span className="w-14 h-14 rounded-full bg-brand/10 text-brand flex items-center justify-center mb-4">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6" aria-hidden>
            <path d="M5 13l4 4L19 7" />
          </svg>
        </span>
        <p className="font-display text-2xl font-bold mb-2 text-ink">Message received</p>
        <p className="text-muted mb-6">We’ll get back to you shortly.</p>
        <button
          type="button"
          className="btn-outline"
          onClick={() => setStatus("idle")}
        >
          Send another message
        </button>
      </div>
    );
  }

  if (variant === "page") {
    return (
      <form className="space-y-5" onSubmit={onSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <input
            required
            name="firstName"
            placeholder="First name *"
            className="field-input"
            value={form.firstName}
            onChange={(e) => setField("firstName", e.target.value)}
            disabled={status === "loading"}
          />
          <input
            required
            name="lastName"
            placeholder="Last name *"
            className="field-input"
            value={form.lastName}
            onChange={(e) => setField("lastName", e.target.value)}
            disabled={status === "loading"}
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <input
            required
            type="email"
            name="email"
            placeholder="Email *"
            className="field-input"
            value={form.email}
            onChange={(e) => setField("email", e.target.value)}
            disabled={status === "loading"}
          />
          <input
            name="company"
            placeholder="Company (optional)"
            className="field-input"
            value={form.company}
            onChange={(e) => setField("company", e.target.value)}
            disabled={status === "loading"}
          />
        </div>
        <select
          required
          name="service"
          value={form.service}
          onChange={(e) => setField("service", e.target.value)}
          className="field-input text-muted"
          disabled={status === "loading"}
        >
          <option value="" disabled>
            Select service *
          </option>
          <option>Web Development</option>
          <option>Mobile App</option>
          <option>FMCG System</option>
          <option>UI / UX Design</option>
          <option>Cloud & Custom Software</option>
        </select>
        <textarea
          required
          name="message"
          rows={5}
          placeholder="Message *"
          className="field-input resize-none"
          value={form.message}
          onChange={(e) => setField("message", e.target.value)}
          disabled={status === "loading"}
        />
        {error && <p className="text-sm text-red-600">{error}</p>}
        <button
          type="submit"
          className="btn-primary disabled:opacity-60 disabled:pointer-events-none"
          disabled={status === "loading"}
        >
          {status === "loading" ? "Sending…" : "Submit message"}
        </button>
      </form>
    );
  }

  return (
    <form className="space-y-6" onSubmit={onSubmit}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <label className="block">
          <span className="field-label">Your name</span>
          <input
            required
            name="name"
            placeholder="Jane Doe"
            className="field-input"
            value={form.name}
            onChange={(e) => setField("name", e.target.value)}
            disabled={status === "loading"}
          />
        </label>
        <label className="block">
          <span className="field-label">Email address</span>
          <input
            required
            type="email"
            name="email"
            placeholder="jane@company.com"
            className="field-input"
            value={form.email}
            onChange={(e) => setField("email", e.target.value)}
            disabled={status === "loading"}
          />
        </label>
      </div>
      <label className="block">
        <span className="field-label">Service</span>
        <select
          required
          name="service"
          value={form.service}
          onChange={(e) => setField("service", e.target.value)}
          className="field-input"
          disabled={status === "loading"}
        >
          <option value="" disabled>
            Select a service
          </option>
          <option>Web Development</option>
          <option>Mobile App</option>
          <option>FMCG System</option>
          <option>UI / UX Design</option>
          <option>Cloud & Custom Software</option>
        </select>
      </label>
      <label className="block">
        <span className="field-label">Project details</span>
        <textarea
          required
          name="message"
          rows={4}
          placeholder="Tell us about goals, timeline, and scope…"
          className="field-input resize-none"
          value={form.message}
          onChange={(e) => setField("message", e.target.value)}
          disabled={status === "loading"}
        />
      </label>
      {error && <p className="text-sm text-red-600">{error}</p>}
      <button
        type="submit"
        className="btn-primary !px-8 group disabled:opacity-60 disabled:pointer-events-none"
        disabled={status === "loading"}
      >
        {status === "loading" ? "Sending…" : "Send message"}
        {status !== "loading" && (
          <ArrowIcon className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        )}
      </button>
    </form>
  );
}
