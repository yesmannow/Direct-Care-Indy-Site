import Link from "next/link";
import Image from "next/image";
import EnrollmentForm from "@/components/EnrollmentForm";

const PATIENT_PORTAL_URL = "https://directcareindy.hint.com/login";

export default function HintHealthDemoPage() {
  return (
    <div className="min-h-screen bg-background">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/clinical/pulmonary-clinic.webp"
            alt="Direct Care Indy clinic"
            fill
            className="object-cover opacity-60"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/50" />
        </div>
        <div className="content-container relative section-padding">
          <div className="max-w-4xl space-y-4">
            <p className="text-sm font-semibold text-secondary uppercase">Hint Health Integration</p>
            <h1 className="heading-1">How Direct Care Indy connects to Hint.</h1>
            <p className="body-large text-muted-foreground">
              Live enrollment iframe, patient portal handoff, and a webhook endpoint you can point at Hint to track new members.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="#live-enrollment"
                className="bg-secondary text-secondary-foreground px-6 py-3 rounded-full font-semibold shadow hover:shadow-lg transition-all"
              >
                View live embed
              </Link>
              <a
                href={PATIENT_PORTAL_URL}
                target="_blank"
                rel="noreferrer"
                className="bg-card text-foreground border border-border px-6 py-3 rounded-full font-semibold hover:bg-card/90 transition-colors"
              >
                Patient portal login
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-muted/30">
        <div className="content-container grid md:grid-cols-3 gap-6">
          <div className="section-card">
            <h3 className="text-xl font-bold mb-2">Enrollment embed</h3>
            <p className="text-muted-foreground">
              We use a dedicated Hint iframe component with accessibility notes so teams can drop it into any page.
            </p>
          </div>
          <div className="section-card">
            <h3 className="text-xl font-bold mb-2">Portal routing</h3>
            <p className="text-muted-foreground">
              Patient login surfaces in the nav and Resources menu, always pointing to Hint for existing members.
            </p>
          </div>
          <div className="section-card">
            <h3 className="text-xl font-bold mb-2">Webhook bridge</h3>
            <p className="text-muted-foreground">
              A Vercel function listens for Hint webhook events so ops can log or trigger welcomes automatically.
            </p>
          </div>
        </div>
      </section>

      <section id="live-enrollment" className="section-padding">
        <div className="content-container">
          <div className="max-w-5xl mx-auto text-center mb-6">
            <h2 className="heading-2 mb-2">Live Hint enrollment embed</h2>
            <p className="body-large text-muted-foreground">
              Replace the URL inside the component with your production Hint domain to go live.
            </p>
          </div>
          <EnrollmentForm />
        </div>
      </section>

      <section className="section-padding bg-muted/30">
        <div className="content-container grid md:grid-cols-2 gap-8">
          <div className="section-card">
            <h3 className="text-xl font-bold mb-3">Workflow for the team</h3>
            <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
              <li>Patient clicks Join and lands on the enrollment embed (or goes straight to Hint).</li>
              <li>Upon submit, Hint creates the patient and can call our webhook.</li>
              <li>We log the event and can trigger email or SMS onboarding flows.</li>
              <li>Member accesses the portal via nav links that point to Hint.</li>
            </ol>
          </div>
          <div className="section-card">
            <h3 className="text-xl font-bold mb-3">Webhook endpoint (serverless)</h3>
            <div className="bg-muted border border-border rounded-lg p-4 text-sm font-mono text-foreground overflow-x-auto">
              <pre>{`POST /api/hint-webhook
Headers:
  x-hint-signature: ${'{your-shared-secret}'}
Body:
{
  "event_type": "patient.created",
  "patient": {
    "email": "member@example.com"
  }
}`}</pre>
            </div>
            <p className="text-sm text-muted-foreground mt-3">
              Set HINT_WEBHOOK_SECRET in your env and add the URL to Hint webhooks. Extend the handler to push to CRM, Slack, or email.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-secondary text-secondary-foreground">
        <div className="content-container text-center">
          <h3 className="text-3xl font-bold mb-4">Ready to see Hint in production?</h3>
          <p className="text-lg max-w-2xl mx-auto mb-6">
            Use the embed above, or jump straight into the patient portal to experience the live flow.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/join"
              className="bg-card text-card-foreground px-8 py-4 rounded-lg font-semibold hover:bg-card/90 transition-colors"
            >
              Start enrollment
            </Link>
            <a
              href={PATIENT_PORTAL_URL}
              target="_blank"
              rel="noreferrer"
              className="border border-card-foreground/30 px-8 py-4 rounded-lg font-semibold hover:bg-secondary/80 transition-colors"
            >
              Patient portal
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
