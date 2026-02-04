"use client";

import Link from "next/link";
import Image from "next/image";
import OnboardingWizard from "@/components/OnboardingWizard";
import EnrollmentForm from "@/components/EnrollmentForm";

const PATIENT_PORTAL_URL = "https://directcareindy.hint.com/login";

export default function Join() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/clinical/round-table.webp"
            alt="Direct Care Indy team around the exam table"
            fill
            className="object-cover opacity-70"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/50" />
        </div>
        <div className="content-container relative section-padding text-center lg:text-left">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div className="space-y-4">
              <p className="text-sm font-semibold text-secondary uppercase">Powered by Hint Health</p>
              <h1 className="heading-1">Join Direct Care Indy in minutes.</h1>
              <p className="body-large text-muted-foreground max-w-2xl">
                Enroll securely, meet the care team, and access your patient portal without paperwork or phone tag.
              </p>
              <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                <Link
                  href="#hint-enrollment"
                  className="bg-secondary text-secondary-foreground px-6 py-3 rounded-full font-semibold shadow hover:shadow-lg hover:-translate-y-0.5 transition-all"
                >
                  Go to enrollment
                </Link>
                <a
                  href={PATIENT_PORTAL_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-card text-foreground border border-border px-6 py-3 rounded-full font-semibold hover:bg-card/90 transition-colors"
                >
                  Patient login
                </a>
              </div>
              <p className="text-sm text-muted-foreground">
                Hint Health is HIPAA-compliant. You can complete enrollment or return later via the patient portal link above.
              </p>
            </div>
            <div className="relative bg-card/80 backdrop-blur-md border border-border rounded-3xl shadow-2xl p-4">
              <div className="relative aspect-video overflow-hidden rounded-2xl">
                <Image
                  src="/images/clinical/medical-laboratory.webp"
                  alt="Inside the Direct Care Indy clinic"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <p className="text-sm text-muted-foreground mt-3">
                Real spaces, real people. This is the clinic you will visit for wellness, urgent care, and lab draws.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Onboarding Wizard */}
      <section className="section-padding bg-muted/30">
        <div className="content-container">
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            <div className="section-card shadow-lg">
              <h2 className="heading-3 mb-4">Prefer a concierge start?</h2>
              <p className="text-muted-foreground mb-6">
                Share your goals and contact info. We will text or call with a tailored plan before you enroll.
              </p>
              <OnboardingWizard />
            </div>
            <div className="space-y-4">
              <div className="section-card">
                <h3 className="text-xl font-bold mb-2">What happens next</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li>1) Choose your household size and submit payment through Hint Health.</li>
                  <li>2) Receive portal access and a welcome text within one business day.</li>
                  <li>3) Schedule your first visit-same-week slots reserved for new members.</li>
                </ul>
              </div>
              <div className="section-card">
                <h3 className="text-xl font-bold mb-2">Need to talk first?</h3>
                <p className="text-muted-foreground mb-3">
                  Call us at <a href="tel:+13179566288" className="font-semibold text-secondary">(317) 956-6288</a> or email{" "}
                  <a href="mailto:info@directcareindy.com" className="font-semibold text-secondary">info@directcareindy.com</a>.
                </p>
                <p className="text-sm text-muted-foreground">
                  Existing members can always use the patient portal link above for secure messaging.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hint Enrollment */}
      <section id="hint-enrollment" className="section-padding">
        <div className="content-container">
          <EnrollmentForm />
        </div>
      </section>
    </div>
  );
}
