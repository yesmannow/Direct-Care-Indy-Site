/**
 * Centralized Lab Data for Direct Care Indy
 * 
 * This file contains the complete directory of wholesale lab tests
 * with hospital pricing comparison data.
 * 
 * All lab-related components should import from this single source of truth.
 */

export interface LabTest {
  name: string;
  hospital: number;  // Hospital/retail price in dollars
  dpc: number;       // Direct Primary Care wholesale price in dollars
  category: string;
  hsaEligible: boolean;
}

/**
 * Complete directory of available lab tests
 * Hospital rates based on Indianapolis market median 2026
 * DPC prices reflect Direct Care Indy wholesale rates for members
 */
export const LAB_DATA: LabTest[] = [
  { name: "A1C (Diabetes Monitoring)", hospital: 173, dpc: 8, category: "Diabetes & Metabolic", hsaEligible: true },
  { name: "Lipid Panel (Cholesterol)", hospital: 176, dpc: 6, category: "Heart Health", hsaEligible: true },
  { name: "CBC (Complete Blood Count)", hospital: 115, dpc: 5, category: "Blood & Immune", hsaEligible: true },
  { name: "TSH (Thyroid Stimulating Hormone)", hospital: 195, dpc: 12, category: "Thyroid", hsaEligible: true },
  { name: "Vitamin D Deficiency", hospital: 240, dpc: 18, category: "Hormones & Vitamins", hsaEligible: true },
  { name: "CMP (Comprehensive Metabolic)", hospital: 145, dpc: 7, category: "Kidney & Electrolytes", hsaEligible: true },
  { name: "PSA (Prostate Screening)", hospital: 185, dpc: 15, category: "Screening & Preventive", hsaEligible: true },
  { name: "Strep Throat (Rapid)", hospital: 95, dpc: 0, category: "Screening & Preventive", hsaEligible: true },
  { name: "Hemoglobin A1C", hospital: 173, dpc: 8, category: "Diabetes & Metabolic", hsaEligible: true },
  { name: "Basic Metabolic Panel (BMP)", hospital: 130, dpc: 6, category: "Kidney & Electrolytes", hsaEligible: true },
  { name: "Urinalysis", hospital: 80, dpc: 4, category: "Screening & Preventive", hsaEligible: true },
  { name: "Liver Function Panel", hospital: 165, dpc: 9, category: "Liver Function", hsaEligible: true },
  { name: "Thyroid Panel (Complete)", hospital: 220, dpc: 15, category: "Thyroid", hsaEligible: true },
  { name: "Testosterone (Total)", hospital: 195, dpc: 12, category: "Hormones & Vitamins", hsaEligible: true },
  { name: "B12 (Vitamin B12)", hospital: 150, dpc: 10, category: "Hormones & Vitamins", hsaEligible: true },
  { name: "Folate", hospital: 140, dpc: 8, category: "Hormones & Vitamins", hsaEligible: true },
  { name: "Iron Panel", hospital: 175, dpc: 11, category: "Blood & Immune", hsaEligible: true },
  { name: "Ferritin", hospital: 160, dpc: 9, category: "Blood & Immune", hsaEligible: true },
  { name: "C-Reactive Protein (CRP)", hospital: 145, dpc: 8, category: "Blood & Immune", hsaEligible: true },
  { name: "Homocysteine", hospital: 180, dpc: 12, category: "Heart Health", hsaEligible: true },
  { name: "Lipid Panel (Extended)", hospital: 200, dpc: 10, category: "Heart Health", hsaEligible: true },
  { name: "HbA1c (Glycated Hemoglobin)", hospital: 173, dpc: 8, category: "Diabetes & Metabolic", hsaEligible: true },
  { name: "Glucose (Fasting)", hospital: 85, dpc: 5, category: "Diabetes & Metabolic", hsaEligible: true },
  { name: "Creatinine", hospital: 75, dpc: 4, category: "Kidney & Electrolytes", hsaEligible: true },
  { name: "BUN (Blood Urea Nitrogen)", hospital: 70, dpc: 4, category: "Kidney & Electrolytes", hsaEligible: true },
  { name: "Electrolyte Panel", hospital: 120, dpc: 6, category: "Kidney & Electrolytes", hsaEligible: true },
  { name: "Magnesium", hospital: 95, dpc: 6, category: "Kidney & Electrolytes", hsaEligible: true },
  { name: "Phosphorus", hospital: 90, dpc: 5, category: "Kidney & Electrolytes", hsaEligible: true },
  { name: "Calcium", hospital: 85, dpc: 5, category: "Kidney & Electrolytes", hsaEligible: true },
  { name: "Albumin", hospital: 80, dpc: 4, category: "Liver Function", hsaEligible: true },
  { name: "Total Protein", hospital: 75, dpc: 4, category: "Liver Function", hsaEligible: true },
  { name: "Bilirubin (Total)", hospital: 100, dpc: 6, category: "Liver Function", hsaEligible: true },
  { name: "ALT (Alanine Aminotransferase)", hospital: 110, dpc: 7, category: "Liver Function", hsaEligible: true },
  { name: "AST (Aspartate Aminotransferase)", hospital: 110, dpc: 7, category: "Liver Function", hsaEligible: true },
  { name: "Alkaline Phosphatase", hospital: 105, dpc: 6, category: "Liver Function", hsaEligible: true },
  { name: "GGT (Gamma-Glutamyl Transferase)", hospital: 125, dpc: 8, category: "Liver Function", hsaEligible: true },
  { name: "LDH (Lactate Dehydrogenase)", hospital: 135, dpc: 8, category: "Blood & Immune", hsaEligible: true },
  { name: "Troponin", hospital: 250, dpc: 20, category: "Heart Health", hsaEligible: true },
  { name: "BNP (Brain Natriuretic Peptide)", hospital: 280, dpc: 22, category: "Heart Health", hsaEligible: true },
  { name: "ProBNP", hospital: 300, dpc: 25, category: "Heart Health", hsaEligible: true },
  { name: "D-Dimer", hospital: 195, dpc: 15, category: "Heart Health", hsaEligible: true },
  { name: "PT/INR (Prothrombin Time)", hospital: 125, dpc: 8, category: "Heart Health", hsaEligible: true },
  { name: "PTT (Partial Thromboplastin Time)", hospital: 130, dpc: 8, category: "Heart Health", hsaEligible: true },
  { name: "Fibrinogen", hospital: 140, dpc: 9, category: "Heart Health", hsaEligible: true },
  { name: "Cortisol (AM)", hospital: 165, dpc: 11, category: "Hormones & Vitamins", hsaEligible: true },
  { name: "Cortisol (PM)", hospital: 165, dpc: 11, category: "Hormones & Vitamins", hsaEligible: true },
  { name: "ACTH", hospital: 220, dpc: 18, category: "Hormones & Vitamins", hsaEligible: true },
  { name: "Insulin (Fasting)", hospital: 185, dpc: 14, category: "Diabetes & Metabolic", hsaEligible: true },
  { name: "C-Peptide", hospital: 200, dpc: 16, category: "Diabetes & Metabolic", hsaEligible: true },
  { name: "HbA1c with eAG", hospital: 180, dpc: 9, category: "Diabetes & Metabolic", hsaEligible: true },
  { name: "Microalbumin", hospital: 95, dpc: 6, category: "Diabetes & Metabolic", hsaEligible: true },
  { name: "Creatinine Clearance", hospital: 150, dpc: 10, category: "Kidney & Electrolytes", hsaEligible: true },
];

/**
 * Calculate percentage savings compared to hospital pricing
 */
export function calculateSavings(hospital: number, dpc: number): number {
  if (dpc === 0) return 100; // Free = 100% savings
  return Math.round(((hospital - dpc) / hospital) * 100);
}
