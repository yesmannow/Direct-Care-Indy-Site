import { ClipboardCheck, MessageCircle, DollarSign, Clock } from "lucide-react";

const cards = [
  {
    icon: ClipboardCheck,
    title: "Join in Minutes",
    description: "Paperless enrollment via Hint Health.",
  },
  {
    icon: MessageCircle,
    title: "Text Your Doctor",
    description: "Direct secure messaging via Spruce.",
  },
  {
    icon: DollarSign,
    title: "Transparent Costs",
    description: "Wholesale prices on labs & meds.",
  },
  {
    icon: Clock,
    title: "Zero Wait",
    description: "Same or next-day appointments.",
  },
];

export function MembershipValue() {
  return (
    <div>
      <h2 className="text-3xl font-bold text-center mb-8">What Membership Includes</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {cards.map((card) => {
          const Icon = card.icon;
          return (
            <div
              key={card.title}
              className="bg-card border border-border rounded-2xl p-6 text-center shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-secondary/10">
                <Icon className="h-6 w-6 text-secondary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{card.title}</h3>
              <p className="text-sm text-muted-foreground">{card.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
