"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, Stethoscope, Briefcase, User, ArrowRight, ArrowLeft } from 'lucide-react';
import { getUserPersona, setUserPersona, type UserPersona } from '@/lib/persona';
import { useRouter } from 'next/navigation';

interface OnboardingFormData {
  type: 'individual' | 'senior' | 'employer';
  goal: string;
  name: string;
  email: string;
  phone: string;
}

export default function OnboardingWizard() {
  const [step, setStep] = useState(1);
  const [mounted, setMounted] = useState(false);
  const [formData, setFormData] = useState<OnboardingFormData>({
    type: 'individual',
    goal: '',
    name: '',
    email: '',
    phone: '',
  });
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setMounted(true);
    // Read persona cookie and pre-select
    const persona = getUserPersona();
    if (persona && (persona === 'senior' || persona === 'employer')) {
      setFormData(prev => ({ ...prev, type: persona }));
    }
  }, []);

  const nextStep = () => {
    if (step < 3) {
      setStep(s => s + 1);
    }
  };

  const prevStep = () => {
    if (step > 1) {
      setStep(s => s - 1);
    }
  };

  const handleTypeSelect = (type: 'individual' | 'senior' | 'employer') => {
    setFormData({ ...formData, type });
    // Set persona cookie for tracking
    setUserPersona(type);
    nextStep();
  };

  const handleGoalSelect = (goal: string) => {
    setFormData({ ...formData, goal });
    nextStep();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Submit to leads API
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          persona: formData.type,
          healthGoal: formData.goal,
          source: 'Onboarding Wizard',
          hipaaConsent: true,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to submit');
      }

      // Redirect to success page
      router.push('/join/success');
    } catch (error) {
      console.error('Submission error:', error);
      alert('There was an error submitting your information. Please try again or call (317) 956-6288');
      setLoading(false);
    }
  };

  if (!mounted) {
    return (
      <div className="max-w-xl mx-auto bg-white rounded-3xl p-8 shadow-2xl border border-gray-100">
        <div className="animate-pulse space-y-4">
          <div className="h-8 bg-gray-200 rounded"></div>
          <div className="h-32 bg-gray-200 rounded"></div>
        </div>
      </div>
    );
  }

  const healthGoals = [
    'Weight Loss',
    'Chronic Management',
    'Fast Access',
    'Specialist Consultation',
  ];

  return (
    <div className="max-w-xl mx-auto bg-white rounded-3xl p-8 shadow-2xl border border-gray-100">
      {/* Progress Bar */}
      <div className="flex justify-between mb-8">
        {[1, 2, 3].map(i => (
          <div
            key={i}
            className={`h-2 flex-1 rounded-full mx-1 transition-all ${
              step >= i ? 'bg-teal-500' : 'bg-gray-100'
            }`}
          />
        ))}
      </div>

      <AnimatePresence mode="wait">
        {/* Step 1: Persona Selection */}
        {step === 1 && (
          <motion.div
            key="step1"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-6"
          >
            <h2 className="text-2xl font-bold mb-6 text-gray-900">
              Which path is right for you?
            </h2>
            <div className="space-y-4">
              {[
                { value: 'individual' as const, label: 'Individual Membership', icon: Stethoscope },
                { value: 'senior' as const, label: 'Senior Membership', icon: User },
                { value: 'employer' as const, label: 'Employer-Sponsored', icon: Briefcase },
              ].map(({ value, label, icon: Icon }) => (
                <button
                  key={value}
                  onClick={() => handleTypeSelect(value)}
                  className={`w-full p-4 rounded-2xl border-2 text-left flex items-center gap-4 transition-all ${
                    formData.type === value
                      ? 'border-teal-500 bg-teal-50'
                      : 'border-gray-100 hover:border-teal-200 hover:bg-gray-50'
                  }`}
                >
                  <Icon className="w-6 h-6 text-teal-600" />
                  <span className="font-semibold text-gray-900">{label}</span>
                </button>
              ))}
            </div>
          </motion.div>
        )}

        {/* Step 2: Health Goal */}
        {step === 2 && (
          <motion.div
            key="step2"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-6"
          >
            <h2 className="text-2xl font-bold mb-6 text-gray-900">
              Your #1 health goal for 2026?
            </h2>
            <p className="text-gray-600 mb-4 text-sm">
              This helps Dr. Pike prepare for your first visit.
            </p>
            <div className="grid grid-cols-1 gap-3">
              {healthGoals.map(goal => (
                <button
                  key={goal}
                  onClick={() => handleGoalSelect(goal)}
                  className={`p-4 rounded-xl border text-left font-medium transition-all ${
                    formData.goal === goal
                      ? 'border-teal-500 bg-teal-50 text-teal-900'
                      : 'border-gray-200 hover:bg-gray-50 text-gray-900'
                  }`}
                >
                  {goal}
                </button>
              ))}
            </div>
            <button
              onClick={prevStep}
              className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mt-4"
            >
              <ArrowLeft className="w-4 h-4" />
              Back
            </button>
          </motion.div>
        )}

        {/* Step 3: Contact Information */}
        {step === 3 && (
          <motion.div
            key="step3"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-6"
          >
            <h2 className="text-2xl font-bold mb-4 text-gray-900">
              Let&apos;s get you started.
            </h2>
            <p className="text-gray-600 mb-6 text-sm">
              Dr. Pike will review your <span className="font-semibold">{formData.goal}</span> goals
              and reach out shortly.
            </p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                placeholder="Full Name"
                required
                value={formData.name}
                onChange={e => setFormData({ ...formData, name: e.target.value })}
                className="w-full p-4 bg-gray-50 rounded-xl border-none focus:ring-2 focus:ring-teal-500 focus:outline-none"
              />
              <input
                type="email"
                placeholder="Email Address"
                required
                value={formData.email}
                onChange={e => setFormData({ ...formData, email: e.target.value })}
                className="w-full p-4 bg-gray-50 rounded-xl border-none focus:ring-2 focus:ring-teal-500 focus:outline-none"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                required
                value={formData.phone}
                onChange={e => setFormData({ ...formData, phone: e.target.value })}
                className="w-full p-4 bg-gray-50 rounded-xl border-none focus:ring-2 focus:ring-teal-500 focus:outline-none"
              />
              <div className="flex gap-4 pt-4">
                <button
                  type="button"
                  onClick={prevStep}
                  className="flex items-center gap-2 text-gray-600 hover:text-gray-900"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Back
                </button>
                <button
                  type="submit"
                  disabled={loading || !formData.name || !formData.email || !formData.phone}
                  className="flex-1 bg-[#1B2B3A] text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-teal-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    'Submitting...'
                  ) : (
                    <>
                      Submit & Meet Dr. Pike <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

