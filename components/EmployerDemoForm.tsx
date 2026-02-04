"use client";

import { useState } from "react";
import { Send, CheckCircle2, AlertCircle, Building2, Phone } from "lucide-react";

interface FormState {
  name: string;
  business: string;
  email: string;
  phone: string;
  employees: string;
  notes: string;
}

export function EmployerDemoForm() {
  const [formData, setFormData] = useState<FormState>({
    name: "",
    business: "",
    email: "",
    phone: "",
    employees: "",
    notes: "",
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [error, setError] = useState<string | null>(null);

  const handleChange = (field: keyof FormState, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setError(null);

    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          businessName: formData.business,
          employeeCount: formData.employees,
          goal: formData.notes || "Employer demo request",
          source: "Employer Demo Request",
          hipaaConsent: true,
        }),
      });

      if (!res.ok) {
        throw new Error("Failed to submit");
      }

      setStatus("success");
      setFormData({
        name: "",
        business: "",
        email: "",
        phone: "",
        employees: "",
        notes: "",
      });
    } catch (err) {
      console.error("Employer demo submit error", err);
      setStatus("error");
      setError("Could not submit. Please try again or call (317) 956-6288.");
    }
  };

  if (status === "success") {
    return (
      <div className="section-card shadow-lg text-center">
        <CheckCircle2 className="h-12 w-12 text-secondary mx-auto mb-3" />
        <h3 className="text-xl font-bold text-foreground mb-2">Request received</h3>
        <p className="text-muted-foreground">
          We will send a demo link and pricing summary shortly. For urgent questions call (317) 956-6288.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="section-card shadow-lg space-y-4">
      <div className="flex items-center gap-3 mb-2">
        <Building2 className="h-5 w-5 text-secondary" />
        <h3 className="text-xl font-bold text-foreground">Request a demo</h3>
      </div>
      <p className="text-sm text-muted-foreground">
        See the Hint enrollment flow and employer dashboard options in a live walkthrough.
      </p>

      <div className="grid md:grid-cols-2 gap-3">
        <div className="space-y-2">
          <label htmlFor="demo-name" className="text-sm font-semibold text-foreground">
            Your name
          </label>
          <input
            id="demo-name"
            required
            value={formData.name}
            onChange={(e) => handleChange("name", e.target.value)}
            className="w-full rounded-lg border border-border bg-muted px-3 py-3 text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="demo-business" className="text-sm font-semibold text-foreground">
            Business
          </label>
          <input
            id="demo-business"
            required
            value={formData.business}
            onChange={(e) => handleChange("business", e.target.value)}
            className="w-full rounded-lg border border-border bg-muted px-3 py-3 text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-3">
        <div className="space-y-2">
          <label htmlFor="demo-email" className="text-sm font-semibold text-foreground">
            Email
          </label>
          <input
            id="demo-email"
            type="email"
            required
            value={formData.email}
            onChange={(e) => handleChange("email", e.target.value)}
            className="w-full rounded-lg border border-border bg-muted px-3 py-3 text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="demo-phone" className="text-sm font-semibold text-foreground">
            Phone
          </label>
          <input
            id="demo-phone"
            type="tel"
            required
            value={formData.phone}
            onChange={(e) => handleChange("phone", e.target.value)}
            className="w-full rounded-lg border border-border bg-muted px-3 py-3 text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary"
          />
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="demo-employees" className="text-sm font-semibold text-foreground">
          Number of employees
        </label>
        <input
          id="demo-employees"
          type="number"
          min={1}
          value={formData.employees}
          onChange={(e) => handleChange("employees", e.target.value)}
          className="w-full rounded-lg border border-border bg-muted px-3 py-3 text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary"
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="demo-notes" className="text-sm font-semibold text-foreground">
          What do you want to see?
        </label>
        <textarea
          id="demo-notes"
          value={formData.notes}
          onChange={(e) => handleChange("notes", e.target.value)}
          rows={3}
          className="w-full rounded-lg border border-border bg-muted px-3 py-3 text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary"
          placeholder="Example: demo of enrollment + employer billing"
        />
      </div>

      {error && (
        <div className="flex items-center gap-2 text-sm text-red-700 bg-red-50 border border-red-200 rounded-lg px-3 py-2">
          <AlertCircle className="h-4 w-4" />
          <span>{error}</span>
        </div>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full inline-flex items-center justify-center gap-2 bg-secondary text-secondary-foreground px-4 py-3 rounded-lg font-semibold hover:bg-secondary/90 transition-colors disabled:opacity-60"
      >
        {status === "submitting" ? (
          <>
            <div className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
            Sending
          </>
        ) : (
          <>
            <Send className="h-4 w-4" />
            Request demo
          </>
        )}
      </button>
      <p className="text-xs text-muted-foreground flex items-center gap-1">
        <Phone className="h-4 w-4 text-secondary" />
        Prefer a call? (317) 956-6288
      </p>
    </form>
  );
}
