import Link from "next/link";
import { Shield, ArrowRight } from "lucide-react";

export function PhysicianOversightBadge() {
  return (
    <Link
      href="/providers/james-pike"
      className="group inline-flex items-start gap-4 bg-blue-500/10 hover:bg-blue-500/20 border-2 border-blue-500/30 hover:border-blue-500/50 rounded-xl px-6 py-4 transition-all min-h-[44px] w-full"
    >
      <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center shrink-0">
        <Shield className="w-6 h-6 text-blue-400" />
      </div>
      <div className="flex-1">
        <div className="font-bold text-blue-400 mb-2 text-lg">Board-Certified Oversight</div>
        <div className="text-sm text-gray-300 leading-relaxed">
          This clinician collaborates directly with <strong className="text-white">Dr. James D. Pike, D.O., FCCP, FACP</strong> through our clinical Round Table to provide hospital-grade diagnostic security for every member.
        </div>
      </div>
      <ArrowRight className="w-5 h-5 text-blue-400 group-hover:translate-x-1 transition-transform shrink-0 mt-1" />
    </Link>
  );
}

