import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { TierDisplay } from "@/components/membership/TierDisplay";
import { LabPharmacySavingsTable } from "@/components/LabPharmacySavingsTable";
import { Testimonials } from "@/components/Testimonials";
import { DPC_CONTENT } from "@/lib/content/dpc";

export default function MembershipPage() {
  const pricingTiers = DPC_CONTENT.pricingTiers;
  const valueProps = DPC_CONTENT.valueProps;
  const disclaimers = DPC_CONTENT.disclaimers.filter(d => d.required);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="bg-primary text-white section-padding-sm">
        <div className="content-container-narrow text-center">
          <h1 className="heading-1 mb-4">Simple, Transparent Membership</h1>
          <p className="body-large max-w-2xl mx-auto">
            One flat monthly fee. No hidden costs. No copays. No deductibles.
          </p>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="section-padding">
        <div className="content-container">
          <div className="max-w-6xl mx-auto">
            <h2 className="heading-2 text-center mb-12">Choose Your Plan</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {pricingTiers.map((tier) => (
                <div
                  key={tier.id}
                  className="bg-card rounded-2xl shadow-lg border border-border p-8 text-center hover:shadow-xl transition-shadow"
                >
                  <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
                  <div className="text-4xl font-black text-secondary mb-2">
                    ${tier.price}
                    <span className="text-lg font-normal text-muted-foreground">/mo</span>
                  </div>
                  <p className="text-muted-foreground mb-6">{tier.description}</p>

                  <ul className="text-left space-y-3 mb-8">
                    {tier.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href="/join"
                    className="bg-secondary text-secondary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-secondary/90 transition-colors inline-block w-full"
                  >
                    Join Now
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Value Props */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Why Choose Pike Medical?</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {valueProps.map((prop) => (
                <div key={prop.id} className="bg-card rounded-xl p-6 border border-border">
                  <h3 className="text-xl font-semibold mb-3">{prop.title}</h3>
                  <p className="text-muted-foreground">{prop.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tier Display */}
      <section className="mb-16">
        <TierDisplay />
      </section>

      {/* Utilization Philosophy */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-4">Our Utilization Philosophy</h2>
        <p>
          We believe in providing unlimited access to care without restrictive gatekeeping.
          Our model is built on trust and appropriate utilization. We monitor usage patterns
          to ensure sustainable care for all members.
        </p>
      </section>

      {/* Pharmacy & Labs */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Transparent Pricing</h2>
        <p>
          Access wholesale prices for medications and lab work. No markups, no hidden fees.
          We pass the savings directly to you.
        </p>
        <ul className="mt-4 list-disc pl-5 space-y-2">
          <li>Antibiotics: $3-8</li>
          <li>Chronic medications: $5-15/month</li>
          <li>Basic labs: $5-12</li>
          <li>Advanced labs: at cost + 10% processing fee</li>
        </ul>
      </section>

      {/* Savings Table */}
      <section className="section-padding bg-muted/30">
        <div className="content-container">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="heading-2 mb-4">Transparent Pricing Saves You Money</h2>
              <p className="body-large text-muted-foreground">
                No hidden fees, no surprise bills. See exactly what you save with our wholesale pricing.
              </p>
            </div>
            <LabPharmacySavingsTable />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding">
        <div className="content-container">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="heading-2 mb-4">What Members Are Saying</h2>
            <p className="body-large text-muted-foreground">
              Real experiences from Indianapolis families who&apos;ve joined DPC.
            </p>
          </div>
          <Testimonials limit={2} />
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Join?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Start your membership today and experience healthcare without the insurance hassle.
          </p>
          <Link
            href="/join"
            className="bg-secondary text-secondary-foreground px-8 py-4 rounded-lg font-semibold text-lg hover:bg-secondary/90 transition-colors inline-block"
          >
            Join the Table
          </Link>
        </div>
      </section>
    </div>
  );
}
