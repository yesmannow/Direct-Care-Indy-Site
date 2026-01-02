import { getPricingTiersByTarget } from "@/lib/content/dpc";
import { CheckCircle2 } from "lucide-react";

export function TierDisplay() {
  const tiers = getPricingTiersByTarget('individual'); // Example target
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {tiers.map((tier) => (
        <div key={tier.id} className="bg-card rounded-2xl shadow-lg border border-border p-8 text-center hover:shadow-xl transition-transform duration-200 hover:-translate-y-1 will-change-transform h-full flex flex-col">
          <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
          <div className="text-4xl font-black text-secondary mb-2">
            ${tier.price}
            <span className="text-lg font-normal text-muted-foreground">/mo</span>
          </div>
          <p className="text-muted-foreground mb-6">{tier.description}</p>
          <ul className="text-left space-y-3 mt-auto">
            {tier.features.map((feature, index) => (
              <li key={index} className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                <span className="text-sm">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
