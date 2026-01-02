import { CheckCircle2 } from "lucide-react";

interface LabPharmacySavingsTableProps {
  showComparison?: boolean;
}

const commonLabs = [
  { name: "Complete Blood Count (CBC)", dpcPrice: "$3", typicalPrice: "$25-$75", savings: "$22-$72" },
  { name: "Comprehensive Metabolic Panel", dpcPrice: "$5", typicalPrice: "$35-$100", savings: "$30-$95" },
  { name: "Lipid Panel (Cholesterol)", dpcPrice: "$5", typicalPrice: "$30-$80", savings: "$25-$75" },
  { name: "Hemoglobin A1C", dpcPrice: "$5", typicalPrice: "$25-$60", savings: "$20-$55" },
  { name: "Thyroid Panel (TSH, Free T4)", dpcPrice: "$8", typicalPrice: "$40-$120", savings: "$32-$112" },
  { name: "Vitamin D Level", dpcPrice: "$12", typicalPrice: "$50-$150", savings: "$38-$138" },
  { name: "Urinalysis", dpcPrice: "$3", typicalPrice: "$15-$40", savings: "$12-$37" },
  { name: "Strep Throat Culture", dpcPrice: "$3", typicalPrice: "$25-$50", savings: "$22-$47" },
];

const commonMedications = [
  { name: "Amoxicillin (500mg)", dpcPrice: "$3", typicalPrice: "$15-$35", savings: "$12-$32" },
  { name: "Lisinopril (10mg)", dpcPrice: "$5", typicalPrice: "$20-$60", savings: "$15-$55" },
  { name: "Metformin (500mg)", dpcPrice: "$5", typicalPrice: "$15-$45", savings: "$10-$40" },
  { name: "Omeprazole (20mg)", dpcPrice: "$5", typicalPrice: "$25-$75", savings: "$20-$70" },
  { name: "Amlodipine (5mg)", dpcPrice: "$5", typicalPrice: "$20-$60", savings: "$15-$55" },
  { name: "Levothyroxine (50mcg)", dpcPrice: "$5", typicalPrice: "$15-$45", savings: "$10-$40" },
  { name: "Albuterol Inhaler", dpcPrice: "$8", typicalPrice: "$30-$80", savings: "$22-$72" },
  { name: "Prednisone (10mg)", dpcPrice: "$3", typicalPrice: "$10-$30", savings: "$7-$27" },
  { name: "Ibuprofen (600mg)", dpcPrice: "$5", typicalPrice: "$15-$40", savings: "$10-$35" },
  { name: "Hydrochlorothiazide (25mg)", dpcPrice: "$5", typicalPrice: "$15-$45", savings: "$10-$40" },
];

export function LabPharmacySavingsTable({ showComparison = true }: LabPharmacySavingsTableProps) {
  return (
    <div className="space-y-8">
      {/* Labs Section */}
      <div>
        <h3 className="heading-3 mb-6">Common Lab Work Savings</h3>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-border rounded-lg">
            <thead>
              <tr className="bg-muted">
                <th className="px-4 py-3 text-left font-semibold text-foreground border-r border-border">Test</th>
                <th className="px-4 py-3 text-center font-semibold text-foreground border-r border-border">DPC Price</th>
                {showComparison && (
                  <>
                    <th className="px-4 py-3 text-center font-semibold text-foreground border-r border-border">Typical Cash Price</th>
                    <th className="px-4 py-3 text-center font-semibold text-secondary">Your Savings</th>
                  </>
                )}
              </tr>
            </thead>
            <tbody>
              {commonLabs.map((lab, index) => (
                <tr key={index} className="border-t border-border hover:bg-muted/50">
                  <td className="px-4 py-3 text-foreground border-r border-border">{lab.name}</td>
                  <td className="px-4 py-3 text-center font-semibold text-secondary border-r border-border">{lab.dpcPrice}</td>
                  {showComparison && (
                    <>
                      <td className="px-4 py-3 text-center text-muted-foreground border-r border-border">{lab.typicalPrice}</td>
                      <td className="px-4 py-3 text-center font-bold text-green-600">{lab.savings}</td>
                    </>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-4 p-4 bg-secondary/10 rounded-lg border border-secondary/20">
          <div className="flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-foreground mb-1">Lab Work Included</p>
              <p className="text-sm text-muted-foreground">
                All routine lab work is covered by your membership fee. No additional costs for preventive screening or diagnostic testing ordered by your provider.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Medications Section */}
      <div>
        <h3 className="heading-3 mb-6">Common Prescription Savings</h3>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-border rounded-lg">
            <thead>
              <tr className="bg-muted">
                <th className="px-4 py-3 text-left font-semibold text-foreground border-r border-border">Medication</th>
                <th className="px-4 py-3 text-center font-semibold text-foreground border-r border-border">DPC Price</th>
                {showComparison && (
                  <>
                    <th className="px-4 py-3 text-center font-semibold text-foreground border-r border-border">Typical Cash Price</th>
                    <th className="px-4 py-3 text-center font-semibold text-secondary">Your Savings</th>
                  </>
                )}
              </tr>
            </thead>
            <tbody>
              {commonMedications.map((med, index) => (
                <tr key={index} className="border-t border-border hover:bg-muted/50">
                  <td className="px-4 py-3 text-foreground border-r border-border">{med.name}</td>
                  <td className="px-4 py-3 text-center font-semibold text-secondary border-r border-border">{med.dpcPrice}</td>
                  {showComparison && (
                    <>
                      <td className="px-4 py-3 text-center text-muted-foreground border-r border-border">{med.typicalPrice}</td>
                      <td className="px-4 py-3 text-center font-bold text-green-600">{med.savings}</td>
                    </>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-4 p-4 bg-secondary/10 rounded-lg border border-secondary/20">
          <div className="flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-foreground mb-1">Prescription Assistance Included</p>
              <p className="text-sm text-muted-foreground">
                We work with wholesale pharmacies to provide medications at cost. Chronic medications are available for $5-$15/month. Antibiotics and acute medications start at $3.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Summary */}
      <div className="bg-card rounded-3xl p-8 border border-border">
        <h3 className="heading-3 mb-4 text-center">Average Annual Savings</h3>
        <div className="grid md:grid-cols-3 gap-6 text-center">
          <div>
            <div className="text-3xl font-bold text-secondary mb-2">$2,400</div>
            <div className="text-muted-foreground">Lab Work Savings</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-secondary mb-2">$1,200</div>
            <div className="text-muted-foreground">Prescription Savings</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-secondary mb-2">$3,600</div>
            <div className="text-muted-foreground">Total Average Savings</div>
          </div>
        </div>
        <p className="text-center text-muted-foreground mt-6 text-sm">
          *Based on average usage patterns for DPC members. Individual savings may vary.
        </p>
      </div>
    </div>
  );
}
