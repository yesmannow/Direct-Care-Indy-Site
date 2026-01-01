"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Phone, Mail, MapPin, Stethoscope, ChevronRight, ChevronLeft, Users, FileText, Calendar } from "lucide-react";

// Validation schemas for each step
const step1Schema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  dateOfBirth: z.string().refine((date) => {
    const dob = new Date(date);
    const today = new Date();
    const age = today.getFullYear() - dob.getFullYear();
    const monthDiff = today.getMonth() - dob.getMonth();
    const actualAge = monthDiff < 0 || (monthDiff === 0 && today.getDate() < dob.getDate()) ? age - 1 : age;
    return actualAge >= 13;
  }, "Patient must be 13 years or older"),
  email: z.string().email("Valid email is required"),
  phone: z.string().min(10, "Valid phone number is required"),
  address: z.string().min(5, "Indianapolis address is required"),
  city: z.string().refine((city) => city.toLowerCase().includes("indianapolis") || city.toLowerCase().includes("indy"),
    "Service is currently available in Indianapolis only"),
  zipCode: z.string().regex(/^46\d{3}$/, "Must be an Indianapolis ZIP code (46xxx)"),
});

const step2Schema = z.object({
  planType: z.enum(["individual", "family"]),
  familyMembers: z.array(z.object({
    name: z.string().min(1, "Name is required"),
    dateOfBirth: z.string().min(1, "Date of birth is required"),
    relationship: z.string().min(1, "Relationship is required"),
  })).optional(),
});

const step3Schema = z.object({
  agreementAccepted: z.boolean().refine((val) => val === true, "You must accept the membership agreement to continue"),
  billingDate: z.enum(["1", "15"]),
  hsaAcknowledged: z.boolean(),
});

type Step1Data = z.infer<typeof step1Schema>;
type Step2Data = z.infer<typeof step2Schema>;
type Step3Data = z.infer<typeof step3Schema>;

export default function Join() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<Partial<Step1Data & Step2Data & Step3Data>>({
    planType: "individual",
    billingDate: "1",
    hsaAcknowledged: false,
    agreementAccepted: false,
  });
  const router = useRouter();

  const step1Form = useForm<Step1Data>({
    resolver: zodResolver(step1Schema),
    defaultValues: formData as Step1Data,
  });

  const step2Form = useForm<Step2Data>({
    resolver: zodResolver(step2Schema),
    defaultValues: formData as Step2Data,
  });

  const step3Form = useForm<Step3Data>({
    resolver: zodResolver(step3Schema),
    defaultValues: formData as Step3Data,
  });

  const onStep1Submit = (data: Step1Data) => {
    setFormData({ ...formData, ...data });
    setCurrentStep(2);
  };

  const onStep2Submit = (data: Step2Data) => {
    setFormData({ ...formData, ...data });
    setCurrentStep(3);
  };

  const onStep3Submit = (data: Step3Data) => {
    setFormData({ ...formData, ...data });
    // In production, this would submit to an API
    console.log("Form submitted:", { ...formData, ...data });
    router.push("/welcome");
  };

  const calculateMonthlyCost = () => {
    if (formData.planType === "individual") {
      const dob = formData.dateOfBirth ? new Date(formData.dateOfBirth) : new Date();
      const age = new Date().getFullYear() - dob.getFullYear();

      if (age < 19) return 30;
      if (age < 45) return 69;
      if (age < 65) return 89;
      return 109;
    }

    // For family, cap at $250
    return 250;
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="bg-primary text-white shadow-md">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <Stethoscope className="w-8 h-8" />
              <h1 className="text-2xl font-bold">Direct Care Indy</h1>
            </Link>
            <div className="hidden md:flex gap-6">
              <Link href="/" className="hover:text-secondary transition-colors">
                Home
              </Link>
              <Link href="/pricing" className="hover:text-secondary transition-colors">
                Pricing
              </Link>
              <Link href="/services" className="hover:text-secondary transition-colors">
                Services
              </Link>
              <Link href="/partnerships" className="hover:text-secondary transition-colors">
                Partnerships
              </Link>
              <Link href="/faq" className="hover:text-secondary transition-colors">
                FAQ
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="bg-primary text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Join Direct Care Indy</h2>
          <p className="text-xl max-w-2xl mx-auto">
            Your journey to transparent, accessible healthcare starts here
          </p>
        </div>
      </section>

      {/* Progress Indicator */}
      <div className="bg-white py-6 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center justify-between">
              {[
                { num: 1, label: "Patient Profile", icon: Users },
                { num: 2, label: "Plan Selection", icon: Calendar },
                { num: 3, label: "Agreement", icon: FileText },
              ].map(({ num, label, icon: Icon }) => (
                <div key={num} className="flex items-center">
                  <div className="flex flex-col items-center">
                    <div
                      className={`w-12 h-12 rounded-full flex items-center justify-center ${
                        currentStep >= num
                          ? "bg-secondary text-white"
                          : "bg-gray-200 text-gray-600"
                      }`}
                    >
                      {currentStep > num ? (
                        <span className="text-xl">✓</span>
                      ) : (
                        <Icon className="w-6 h-6" />
                      )}
                    </div>
                    <span className="text-sm mt-2 font-semibold text-gray-700">
                      {label}
                    </span>
                  </div>
                  {num < 3 && (
                    <div
                      className={`h-1 w-24 mx-2 ${
                        currentStep > num ? "bg-secondary" : "bg-gray-200"
                      }`}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Form Steps */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-8">
            {/* Step 1: Patient Profile */}
            {currentStep === 1 && (
              <form onSubmit={step1Form.handleSubmit(onStep1Submit)} className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-primary mb-4">Patient Profile</h3>
                  <p className="text-gray-600 mb-6">
                    Please provide your basic information. Patients must be 13 years or older.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      {...step1Form.register("firstName")}
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-secondary focus:outline-none"
                    />
                    {step1Form.formState.errors.firstName && (
                      <p className="text-red-600 text-sm mt-1">
                        {step1Form.formState.errors.firstName.message}
                      </p>
                    )}
                  </div>
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      {...step1Form.register("lastName")}
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-secondary focus:outline-none"
                    />
                    {step1Form.formState.errors.lastName && (
                      <p className="text-red-600 text-sm mt-1">
                        {step1Form.formState.errors.lastName.message}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Date of Birth *
                  </label>
                  <input
                    type="date"
                    {...step1Form.register("dateOfBirth")}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-secondary focus:outline-none"
                  />
                  {step1Form.formState.errors.dateOfBirth && (
                    <p className="text-red-600 text-sm mt-1">
                      {step1Form.formState.errors.dateOfBirth.message}
                    </p>
                  )}
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      {...step1Form.register("email")}
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-secondary focus:outline-none"
                    />
                    {step1Form.formState.errors.email && (
                      <p className="text-red-600 text-sm mt-1">
                        {step1Form.formState.errors.email.message}
                      </p>
                    )}
                  </div>
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      Phone *
                    </label>
                    <input
                      type="tel"
                      {...step1Form.register("phone")}
                      placeholder="(317) 555-0123"
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-secondary focus:outline-none"
                    />
                    {step1Form.formState.errors.phone && (
                      <p className="text-red-600 text-sm mt-1">
                        {step1Form.formState.errors.phone.message}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Street Address *
                  </label>
                  <input
                    type="text"
                    {...step1Form.register("address")}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-secondary focus:outline-none"
                  />
                  {step1Form.formState.errors.address && (
                    <p className="text-red-600 text-sm mt-1">
                      {step1Form.formState.errors.address.message}
                    </p>
                  )}
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      City *
                    </label>
                    <input
                      type="text"
                      {...step1Form.register("city")}
                      placeholder="Indianapolis"
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-secondary focus:outline-none"
                    />
                    {step1Form.formState.errors.city && (
                      <p className="text-red-600 text-sm mt-1">
                        {step1Form.formState.errors.city.message}
                      </p>
                    )}
                  </div>
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      ZIP Code *
                    </label>
                    <input
                      type="text"
                      {...step1Form.register("zipCode")}
                      placeholder="46268"
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-secondary focus:outline-none"
                    />
                    {step1Form.formState.errors.zipCode && (
                      <p className="text-red-600 text-sm mt-1">
                        {step1Form.formState.errors.zipCode.message}
                      </p>
                    )}
                  </div>
                </div>

                <div className="flex justify-end pt-6">
                  <button
                    type="submit"
                    className="bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-all flex items-center gap-2"
                  >
                    Next Step <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </form>
            )}

            {/* Step 2: Household Selection */}
            {currentStep === 2 && (
              <form onSubmit={step2Form.handleSubmit(onStep2Submit)} className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-primary mb-4">Plan Selection</h3>
                  <p className="text-gray-600 mb-6">
                    Choose between an Individual or Family plan. Family plans are capped at $250/month.
                  </p>
                </div>

                <div className="space-y-4">
                  <label className="block">
                    <div className="border-2 border-gray-300 rounded-lg p-6 cursor-pointer hover:border-secondary transition-colors">
                      <div className="flex items-center">
                        <input
                          type="radio"
                          {...step2Form.register("planType")}
                          value="individual"
                          className="w-5 h-5 text-secondary"
                        />
                        <div className="ml-4">
                          <div className="font-semibold text-lg text-primary">Individual Plan</div>
                          <div className="text-gray-600">Coverage for one person</div>
                          <div className="text-secondary font-bold mt-2">
                            ${calculateMonthlyCost()}/month
                          </div>
                        </div>
                      </div>
                    </div>
                  </label>

                  <label className="block">
                    <div className="border-2 border-gray-300 rounded-lg p-6 cursor-pointer hover:border-secondary transition-colors">
                      <div className="flex items-center">
                        <input
                          type="radio"
                          {...step2Form.register("planType")}
                          value="family"
                          className="w-5 h-5 text-secondary"
                        />
                        <div className="ml-4">
                          <div className="font-semibold text-lg text-primary">Family Plan</div>
                          <div className="text-gray-600">Coverage for entire household</div>
                          <div className="text-secondary font-bold mt-2">
                            $250/month (household cap)
                          </div>
                        </div>
                      </div>
                    </div>
                  </label>
                </div>

                <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
                  <p className="text-blue-900 font-semibold mb-1">Household Cap Guarantee</p>
                  <p className="text-blue-800 text-sm">
                    No matter how large your family, you&apos;ll never pay more than $250 per month for complete coverage.
                  </p>
                </div>

                <div className="flex justify-between pt-6">
                  <button
                    type="button"
                    onClick={() => setCurrentStep(1)}
                    className="bg-gray-200 text-gray-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-300 transition-all flex items-center gap-2"
                  >
                    <ChevronLeft className="w-5 h-5" /> Back
                  </button>
                  <button
                    type="submit"
                    className="bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-all flex items-center gap-2"
                  >
                    Next Step <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </form>
            )}

            {/* Step 3: Legal Disclosures */}
            {currentStep === 3 && (
              <form onSubmit={step3Form.handleSubmit(onStep3Submit)} className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-primary mb-4">Membership Agreement</h3>
                  <p className="text-gray-600 mb-6">
                    Please review and accept the membership terms to complete your enrollment.
                  </p>
                </div>

                {/* Membership Agreement Summary */}
                <div className="bg-gray-50 border-2 border-gray-200 rounded-lg p-6 space-y-4">
                  <h4 className="font-bold text-lg text-primary">Membership Agreement Summary</h4>

                  <div>
                    <h5 className="font-semibold text-gray-900 mb-2">Billing</h5>
                    <p className="text-gray-700">
                      Your membership fee will be automatically billed on the 1st or 15th of each month via autopay.
                      You can select your preferred billing date below.
                    </p>
                  </div>

                  <div>
                    <h5 className="font-semibold text-gray-900 mb-2">Cancellation Policy</h5>
                    <p className="text-gray-700">
                      You may cancel your membership at any time with 30-day written notice.
                      There are no long-term contracts or lock-in periods.
                    </p>
                  </div>

                  <div>
                    <h5 className="font-semibold text-gray-900 mb-2">HSA Compliance</h5>
                    <p className="text-gray-700">
                      As of January 1, 2026, Direct Primary Care memberships are HSA-eligible.
                      You can use your Health Savings Account to pay for your membership fees.
                    </p>
                  </div>

                  <div>
                    <h5 className="font-semibold text-gray-900 mb-2">Coverage Details</h5>
                    <p className="text-gray-700">
                      Your membership covers approximately 90% of your healthcare needs.
                      For life-threatening emergencies, you should still call 911 or go to the nearest emergency room.
                    </p>
                  </div>
                </div>

                {/* Billing Date Selection */}
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Preferred Billing Date *
                  </label>
                  <select
                    {...step3Form.register("billingDate")}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-secondary focus:outline-none"
                  >
                    <option value="1">1st of the month</option>
                    <option value="15">15th of the month</option>
                  </select>
                </div>

                {/* Checkboxes */}
                <div className="space-y-4">
                  <label className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      {...step3Form.register("hsaAcknowledged")}
                      className="w-5 h-5 text-secondary mt-1"
                    />
                    <span className="text-gray-700">
                      I acknowledge that as of January 1, 2026, DPC memberships are HSA-eligible
                    </span>
                  </label>

                  <label className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      {...step3Form.register("agreementAccepted")}
                      className="w-5 h-5 text-secondary mt-1"
                    />
                    <span className="text-gray-700">
                      I have read and agree to the Membership Agreement terms outlined above *
                    </span>
                  </label>
                  {step3Form.formState.errors.agreementAccepted && (
                    <p className="text-red-600 text-sm">
                      {step3Form.formState.errors.agreementAccepted.message}
                    </p>
                  )}
                </div>

                {/* Cost Summary */}
                <div className="bg-secondary text-white rounded-lg p-6 text-center">
                  <p className="text-lg mb-2">Your Monthly Investment</p>
                  <p className="text-5xl font-bold">${calculateMonthlyCost()}</p>
                  <p className="text-sm mt-2 opacity-90">
                    Billed on the {step3Form.watch("billingDate") === "1" ? "1st" : "15th"} of each month
                  </p>
                </div>

                <div className="flex justify-between pt-6">
                  <button
                    type="button"
                    onClick={() => setCurrentStep(2)}
                    className="bg-gray-200 text-gray-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-300 transition-all flex items-center gap-2"
                  >
                    <ChevronLeft className="w-5 h-5" /> Back
                  </button>
                  <button
                    type="submit"
                    className="bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-all"
                  >
                    Complete Enrollment
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h4 className="text-xl font-semibold mb-4">Direct Care Indy</h4>
              <p className="text-gray-300">
                Direct Primary Care for Indianapolis families
              </p>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="text-gray-300 hover:text-white transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/pricing" className="text-gray-300 hover:text-white transition-colors">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="/faq" className="text-gray-300 hover:text-white transition-colors">
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-4">Contact Us</h4>
              <div className="space-y-3 text-gray-300">
                <div className="flex items-start gap-2">
                  <MapPin className="w-5 h-5 flex-shrink-0 mt-1" />
                  <span>7911 N. Michigan Rd.<br />Indianapolis, IN 46268</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-5 h-5 flex-shrink-0" />
                  <a href="tel:+13179566288" className="hover:text-white transition-colors">
                    (317) 956-6288
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-5 h-5 flex-shrink-0" />
                  <a href="mailto:info@directcareindy.com" className="hover:text-white transition-colors">
                    info@directcareindy.com
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-600 pt-6 text-center text-gray-300">
            <p className="font-semibold mb-2">Notice: Direct Care Indy is not insurance.</p>
            <p>James D. Pike, D.O., FCCP, FACP | Direct Primary Care Physician</p>
            <p className="text-sm opacity-90 mt-1">Board Certified in Pulmonary and Internal Medicine</p>
            <p className="mt-2">© {new Date().getFullYear()} Direct Care Indy. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
