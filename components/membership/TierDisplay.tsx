import { getPricingTiersByTarget } from "@/lib/content/dpc";

export function TierDisplay() {
  const tiers = getPricingTiersByTarget('individual'); // Example target
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
      {tiers.map((tier) => (
        <div key={tier.id} className="border rounded-lg p-4">
          <h3 className="font-bold">{tier.name}</h3>
          <p className="text-2xl font-bold">${tier.price}/month</p>
          <p>{tier.description}</p>
          <ul className="mt-4 space-y-2">
            {tier.features.map((feature, index) => (
              <li key={index} className="text-sm">{feature}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
