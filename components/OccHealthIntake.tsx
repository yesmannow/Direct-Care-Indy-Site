"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FileText, Send, CheckCircle2, AlertCircle } from "lucide-react";

export function OccHealthIntake() {
  const [formData, setFormData] = useState({
    name: '',
    businessName: '',
    businessType: '',
    email: '',
    phone: '',
    serviceInterest: '',
    employeeCount: '',
    hipaaConsent: false
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.hipaaConsent) {
      setError('HIPAA consent is required');
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to submit lead');
      }

      setSubmitted(true);
      setFormData({
        name: '',
        businessName: '',
        businessType: '',
        email: '',
        phone: '',
        serviceInterest: '',
        employeeCount: '',
        hipaaConsent: false
      });
    } catch (err) {
      setError('Unable to submit your information. Please try again or call (317) 956-6288');
      console.error('Lead submission error:', err);
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-gray-800 rounded-2xl p-8 border border-gray-700 shadow-xl text-center"
      >
        <CheckCircle2 className="w-16 h-16 text-green-500 mx-auto mb-4" />
        <h3 className="text-2xl font-bold text-primary mb-2">Thank You!</h3>
        <p className="text-gray-300 mb-4">
          We&apos;ve received your information and will send you pricing details and a scheduling link via email.
        </p>
        <p className="text-sm text-gray-400">
          You can also call us directly at <a href="tel:+13179566288" className="text-primary hover:text-secondary">(317) 956-6288</a>
        </p>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-gray-800 rounded-2xl p-8 border border-gray-700 shadow-xl"
    >
      <div className="flex items-center gap-3 mb-6">
        <FileText className="w-8 h-8 text-primary" />
        <h3 className="text-2xl font-bold text-primary">Occupational Health Intake</h3>
      </div>
      <p className="text-gray-300 mb-6">
        Get instant pricing for DOT Physicals, Drug Screens, and other occupational health services
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-semibold text-gray-300 mb-2">Name *</label>
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              className="w-full p-3 bg-gray-700 rounded-xl border border-gray-600 text-gray-100 focus:outline-none focus:ring-2 focus:ring-primary min-h-[44px]"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-300 mb-2">Business Name *</label>
            <input
              type="text"
              required
              value={formData.businessName}
              onChange={(e) => setFormData({...formData, businessName: e.target.value})}
              className="w-full p-3 bg-gray-700 rounded-xl border border-gray-600 text-gray-100 focus:outline-none focus:ring-2 focus:ring-primary min-h-[44px]"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-300 mb-2">Business Type *</label>
          <select
            required
            value={formData.businessType}
            onChange={(e) => setFormData({...formData, businessType: e.target.value})}
            className="w-full p-3 bg-gray-700 rounded-xl border border-gray-600 text-gray-100 focus:outline-none focus:ring-2 focus:ring-primary min-h-[44px]"
          >
            <option value="">Select business type</option>
            <option value="HVAC">HVAC</option>
            <option value="Landscaping">Landscaping</option>
            <option value="Auto Shop">Auto Shop</option>
            <option value="Construction">Construction</option>
            <option value="Other Trade">Other Trade</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-semibold text-gray-300 mb-2">Email *</label>
            <input
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              className="w-full p-3 bg-gray-700 rounded-xl border border-gray-600 text-gray-100 focus:outline-none focus:ring-2 focus:ring-primary min-h-[44px]"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-300 mb-2">Phone *</label>
            <input
              type="tel"
              required
              value={formData.phone}
              onChange={(e) => setFormData({...formData, phone: e.target.value})}
              className="w-full p-3 bg-gray-700 rounded-xl border border-gray-600 text-gray-100 focus:outline-none focus:ring-2 focus:ring-primary min-h-[44px]"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-300 mb-2">Service Interest *</label>
          <select
            required
            value={formData.serviceInterest}
            onChange={(e) => setFormData({...formData, serviceInterest: e.target.value})}
            className="w-full p-3 bg-gray-700 rounded-xl border border-gray-600 text-gray-100 focus:outline-none focus:ring-2 focus:ring-primary min-h-[44px]"
          >
            <option value="">Select service</option>
            <option value="DOT Physicals">DOT Physicals</option>
            <option value="Drug Screens">Drug Screens</option>
            <option value="Full DPC Membership">Full DPC Membership</option>
            <option value="Both DOT & Drug Screens">Both DOT & Drug Screens</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-300 mb-2">Number of Employees</label>
          <input
            type="number"
            min="1"
            value={formData.employeeCount}
            onChange={(e) => setFormData({...formData, employeeCount: e.target.value})}
            placeholder="Optional"
            className="w-full p-3 bg-gray-700 rounded-xl border border-gray-600 text-gray-100 focus:outline-none focus:ring-2 focus:ring-primary min-h-[44px]"
          />
        </div>

        <div className="flex items-start gap-3 p-4 bg-gray-700 rounded-lg border border-gray-600">
          <input
            type="checkbox"
            id="hipaaConsent"
            required
            checked={formData.hipaaConsent}
            onChange={(e) => setFormData({...formData, hipaaConsent: e.target.checked})}
            className="mt-1 w-5 h-5 accent-primary min-w-[44px] min-h-[44px] cursor-pointer"
          />
          <label htmlFor="hipaaConsent" className="text-sm text-gray-300 cursor-pointer">
            I consent to HIPAA-compliant communication from Direct Care Indy regarding occupational health services and pricing information. *
          </label>
        </div>

        {error && (
          <div className="p-3 bg-red-900/30 border border-red-500 rounded-lg text-red-200 text-sm flex items-center gap-2">
            <AlertCircle className="w-4 h-4" />
            {error}
          </div>
        )}

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-primary hover:bg-opacity-90 text-white font-semibold py-4 px-6 rounded-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed min-h-[44px] flex items-center justify-center gap-2"
        >
          {loading ? (
            <>
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
              Submitting...
            </>
          ) : (
            <>
              <Send className="w-5 h-5" />
              Get Pricing & Schedule
            </>
          )}
        </button>
      </form>
    </motion.div>
  );
}

