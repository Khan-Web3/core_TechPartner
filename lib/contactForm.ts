"use client";

import { FormEvent, useState } from "react";

export type ContactPayload = {
  name?: string;
  firstName?: string;
  lastName?: string;
  email: string;
  company?: string;
  service: string;
  message: string;
};

type Status = "idle" | "loading" | "success" | "error";

export function useContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  const submit = async (payload: ContactPayload) => {
    setStatus("loading");
    setError("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = (await res.json().catch(() => null)) as
        | { ok?: boolean; error?: string }
        | null;

      if (!res.ok || !data?.ok) {
        throw new Error(data?.error || "Unable to send message. Please try again.");
      }

      setStatus("success");
      return true;
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Something went wrong.");
      return false;
    }
  };

  const reset = () => {
    setStatus("idle");
    setError("");
  };

  return { status, error, submit, reset, isLoading: status === "loading" };
}

export function getFormValues(form: HTMLFormElement) {
  const data = new FormData(form);
  const get = (key: string) => String(data.get(key) || "").trim();
  return {
    name: get("name"),
    firstName: get("firstName"),
    lastName: get("lastName"),
    email: get("email"),
    company: get("company"),
    service: get("service"),
    message: get("message"),
  };
}

export function onContactSubmit(
  e: FormEvent<HTMLFormElement>,
  submit: (payload: ContactPayload) => Promise<boolean>,
) {
  e.preventDefault();
  const values = getFormValues(e.currentTarget);
  const name =
    values.name ||
    [values.firstName, values.lastName].filter(Boolean).join(" ");

  return submit({
    name,
    firstName: values.firstName,
    lastName: values.lastName,
    email: values.email,
    company: values.company,
    service: values.service,
    message: values.message,
  });
}
