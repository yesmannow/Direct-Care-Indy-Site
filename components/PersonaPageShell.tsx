import React from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Star, Users, Shield, Heart } from "lucide-react";

interface PersonaPageProps {
  persona: {
    id: string;
    title: string;
    subtitle: string;
    hero: {
      headline: string;
      subheadline: string;
      painPoints: string[];
    };
    benefits: {
      title: string;
      description: string;
      icon: React.ComponentType<{ className?: string }>;
    }[];
    howItWorks: {
      title: string;
      steps: string[];
    };
    proof: {
      title: string;
      stats: { label: string; value: string }[];
    };
    cta: {
      primary: { text: string; href: string };
      secondary?: { text: string; href: string };
    };
    faq: {
      question: string;
      answer: string;
    }[];
  };
  userPersona?: string;
  setUserPersona?: (persona: string) => void;
}

export function PersonaPageShell({
  persona,
  userPersona,
  setUserPersona
}: PersonaPageProps) {
  // Set persona on page load if not already set
  React.useEffect(() => {
    if (setUserPersona && (!userPersona || userPersona !== persona.id)) {
      setUserPersona(persona.id);
    }
  }, [persona.id, userPersona, setUserPersona]);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="section-padding bg-linear-to-br from-secondary/10 to-secondary/5">
        <div className="content-container-narrow text-center">
          <div className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Users className="w-4 h-4" />
            {persona.title}
          </div>
          <h1 className="heading-1 mb-4">{persona.hero.headline}</h1>
          <p className="body-large text-muted-foreground max-w-3xl mx-auto mb-8">
            {persona.hero.subheadline}
          </p>
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {persona.hero.painPoints.map((point, idx) => (
              <div key={idx} className="flex items-center gap-2 bg-card text-card-foreground px-4 py-2 rounded-full text-sm border border-border">
                <span className="text-red-500">✗</span>
                {point}
              </div>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={persona.cta.primary.href}
              className="bg-secondary text-secondary-foreground px-8 py-4 rounded-full font-semibold text-lg hover:scale-105 transition-transform interactive-element"
            >
              {persona.cta.primary.text}
            </Link>
            {persona.cta.secondary && (
              <Link
                href={persona.cta.secondary.href}
                className="bg-card text-card-foreground border border-border px-8 py-4 rounded-full font-semibold text-lg hover:bg-card/90 transition-colors interactive-element"
              >
                {persona.cta.secondary.text}
              </Link>
            )}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding">
        <div className="content-container">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="heading-2 mb-4">Why Choose DPC for {persona.title}</h2>
              <p className="body-large text-muted-foreground">
                Direct Primary Care is designed specifically for families like yours.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {persona.benefits.map((benefit, idx) => {
                const IconComponent = benefit.icon;
                return (
                  <div key={idx} className="section-card text-center">
                    <div className="bg-secondary text-secondary-foreground p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                      <IconComponent className="w-8 h-8" />
                    </div>
                    <h3 className="font-semibold mb-3">{benefit.title}</h3>
                    <p className="text-muted-foreground text-sm">{benefit.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section-padding bg-muted/30">
        <div className="content-container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="heading-2 mb-4">{persona.howItWorks.title}</h2>
            </div>

            <div className="space-y-6">
              {persona.howItWorks.steps.map((step, idx) => (
                <div key={idx} className="flex items-start gap-4 section-card">
                  <div className="bg-secondary text-secondary-foreground rounded-full w-8 h-8 flex items-center justify-center shrink-0 mt-1">
                    <span className="font-bold text-sm">{idx + 1}</span>
                  </div>
                  <p className="text-foreground">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Proof/Social Proof */}
      <section className="section-padding">
        <div className="content-container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="heading-2 mb-4">{persona.proof.title}</h2>
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              {persona.proof.stats.map((stat, idx) => (
                <div key={idx} className="section-card text-center">
                  <div className="text-3xl font-bold text-secondary mb-2">{stat.value}</div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
            <div className="flex items-center justify-center gap-1 text-secondary">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-current" />
              ))}
              <span className="ml-2 text-muted-foreground font-medium">4.9/5 from {persona.title.toLowerCase()} members</span>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-muted/30">
        <div className="content-container">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-2 text-center mb-12">Common Questions for {persona.title}</h2>
            <div className="space-y-6">
              {persona.faq.map((item, idx) => (
                <div key={idx} className="section-card">
                  <h3 className="font-semibold mb-3">{item.question}</h3>
                  <p className="text-muted-foreground text-sm">{item.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding">
        <div className="content-container-narrow text-center">
          <h2 className="heading-3 mb-4">Ready to Join {persona.title} Who&apos;ve Made the Switch?</h2>
          <p className="body-base text-muted-foreground mb-8">
            Experience healthcare designed for families like yours.
          </p>
          <Link
            href={persona.cta.primary.href}
            className="bg-secondary text-secondary-foreground px-8 py-4 rounded-full font-semibold text-lg hover:scale-105 transition-transform interactive-element"
          >
            {persona.cta.primary.text}
          </Link>
        </div>
      </section>
    </div>
  );
}
