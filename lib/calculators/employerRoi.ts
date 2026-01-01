export interface EmployerROIResult {
  currentTotalSpend: number;
  newHybridSpend: number;
  premiumSavings: number;
  productivityValue: number;
  monthlySavings: number;
  annualSavings: number;
  erReduction: number;
  hospitalizationReduction: number;
  totalROI: number;
  roiPercentage: number;
}

export type PlanType = 'Traditional PPO' | 'HDHP/HSA' | 'No Coverage';

export const calculateEmployerSavings = (
  count: number,
  currentPlan: PlanType
): EmployerROIResult => {
  // 2026 Benchmarks
  const avgPpoCost = 18500; // Annual per employee
  const avgPpoMonthly = 1541; // Monthly per employee
  const dpcMembershipAnnual = 1200; // Average annual DPC membership ($80-110/mo)
  const hdhpPremiumSavings = 0.30; // 30% reduction by moving to HDHP+DPC
  const avgERVisitCost = 175; // Base Indiana ER visit
  const avgERVisitComprehensive = 2500; // Comprehensive ER visit
  const avgERVisit = (avgERVisitCost + avgERVisitComprehensive) / 2; // Average

  // Productivity metrics
  const sickDaysSaved = 2; // Days per employee per year
  const dailyRate = 250; // Average daily rate per employee
  const productivityValuePerEmployee = sickDaysSaved * dailyRate; // $500/year

  // Calculate current spend based on plan type
  let currentTotalSpend = 0;
  if (currentPlan === 'Traditional PPO') {
    currentTotalSpend = count * avgPpoCost;
  } else if (currentPlan === 'HDHP/HSA') {
    // HDHP typically costs 20% less than PPO
    currentTotalSpend = count * (avgPpoCost * 0.80);
  } else {
    // No Coverage - assume they pay out of pocket for ER visits
    // Estimate 1 ER visit per 10 employees per year
    const estimatedERVisits = Math.max(1, Math.floor(count / 10));
    currentTotalSpend = estimatedERVisits * avgERVisit;
  }

  // New Hybrid Model: HDHP + DPC
  const hdhpCost = avgPpoCost * (1 - hdhpPremiumSavings); // 30% savings
  const newHybridSpend = (count * hdhpCost) + (count * dpcMembershipAnnual);

  // Calculate savings
  const premiumSavings = currentTotalSpend - newHybridSpend;
  const productivityValue = count * productivityValuePerEmployee;
  const totalAnnualSavings = premiumSavings + productivityValue;

  // ER and hospitalization reductions (statistical)
  const erReduction = Math.floor(count * 0.65); // 65% reduction in ER visits
  const hospitalizationReduction = Math.floor(count * 0.35); // 35% reduction in hospitalizations

  // Total ROI
  const totalROI = totalAnnualSavings;
  const roiPercentage = currentTotalSpend > 0
    ? (totalAnnualSavings / currentTotalSpend) * 100
    : 0;

  return {
    currentTotalSpend: Math.floor(currentTotalSpend),
    newHybridSpend: Math.floor(newHybridSpend),
    premiumSavings: Math.floor(premiumSavings),
    productivityValue: Math.floor(productivityValue),
    monthlySavings: Math.floor(totalAnnualSavings / 12),
    annualSavings: Math.floor(totalAnnualSavings),
    erReduction,
    hospitalizationReduction,
    totalROI: Math.floor(totalROI),
    roiPercentage: Math.round(roiPercentage * 10) / 10
  };
};

