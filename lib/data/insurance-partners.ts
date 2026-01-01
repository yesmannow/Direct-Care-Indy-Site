export interface InsurancePartner {
  name: string;
  type: "Healthshare" | "Traditional HDHP" | "Employer Group";
  bestFor: string;
  monthlyEst: string;
  coverage: string[];
  hsa: string;
  description?: string;
}

export const insurancePartners: InsurancePartner[] = [
  {
    name: "Zion HealthShare",
    type: "Healthshare",
    bestFor: "Self-Employed Contractors & Tradesmen",
    monthlyEst: "$200 - $250",
    coverage: [
      "Hospitalization",
      "Emergency Trauma",
      "Major Surgery",
      "Cancer Treatment"
    ],
    hsa: "HSA Compatible (2026)",
    description: "Faith-based healthshare with lower monthly costs. Perfect for the 'HVAC Contractor' persona."
  },
  {
    name: "Sedera Health",
    type: "Healthshare",
    bestFor: "Young Families & Gig Workers",
    monthlyEst: "$195 - $275",
    coverage: [
      "ICU Stays",
      "Major Surgery",
      "Emergency Room Visits",
      "Specialist Procedures"
    ],
    hsa: "HSA Compatible (2026)",
    description: "Modern healthshare with transparent sharing model and no waiting periods for pre-existing conditions."
  },
  {
    name: "Traditional HDHP (Anthem, United, BCBS)",
    type: "Traditional HDHP",
    bestFor: "High-Deductible Families",
    monthlyEst: "Varies by Carrier",
    coverage: [
      "Specialist Procedures",
      "ICU Stays",
      "Cancer Treatment",
      "Major Diagnostics",
      "Surgical Procedures"
    ],
    hsa: "HSA Eligible",
    description: "Traditional insurance carriers with high deductibles ($6,000+). Pair with DPC to avoid paying full price for common care."
  },
  {
    name: "Small Business Wraparound",
    type: "Employer Group",
    bestFor: "Small Business Owners (5-20 Employees)",
    monthlyEst: "$150 - $300/employee",
    coverage: [
      "Hospitalization",
      "Major Surgery",
      "Cancer Treatment",
      "Catastrophic Events"
    ],
    hsa: "HSA Compatible (2026)",
    description: "Employer-sponsored catastrophic coverage. Stabilize premiums by removing primary care from insurance equation."
  }
];
